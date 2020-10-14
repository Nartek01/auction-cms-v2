
<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">WARNING!</p>
    </header>
    <section class="modal-card-body">
      <div>Are you sure you want to delete this object?</div>
      <br />
      {{ itemName }} <br> Item id: {{ itemId }}
      <br />
      <span></span>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="deleteProduct() && $parent.close() && refreshPage()">Yes</button>
      <button class="button" @click="$parent.close()">No</button>
    </footer>
  </div>
</template>

<script>
import {bus} from '@/main.js'
export default {
  name: "Modal",
  props: {
    itemName: String,
    itemId: Number,
    imageRef: String,
  },

   data() {
    return {
      products: [],
    };
  },

  methods: {

     async fetchData() {
      await fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((result) => {
          this.products = result;
        })
        .catch((e) => {
          alert(e);
        });
       
    },


     async deleteProduct() {
        try {
      await fetch("http://localhost:3000/products", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ image_ref: this.imageRef }),
      });
      this.fetchData();
        } catch(e){
            alert(e)
        }
    },

  //refreshing the page after an item has been deleted
  refreshPage(){
    bus.$emit('refersh', this.fetchData())
  }
 
  },
};
</script>

<style scoped>
.button {
  margin-left: 4em;
}
</style>
