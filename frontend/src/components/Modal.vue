<template>
  <div class="modal-card" style="width:auto">
    <header class="modal-card-head">
      <p class="modal-card-title">WARNING!</p>
    </header>
    <section class="modal-card-body">
    <div> Are you sure you want to delete this object?</div> <br>
     {{itemName}} {{itemId}}
      <br />
      <span></span>
    </section>
    <footer class="modal-card-foot"><button class="button" @click="deleteItem(itemId)" >Yes</button> <button class="button" @click="$parent.close()">No</button></footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Modal",
  props: {
   itemName: String,
   itemId: Number
  },
  
mounted(){
this.getItem()
},

methods: {

    async getItem(){
      const val = await fetch("http://localhost:3000/products");
      const res = await val.json();
      this.products = res.data;
    },
  
    async deleteItem(itemId){
        await axios.delete("http://localhost:3000/products" + itemId)
 .then((response) => {
      this.getItem();
      alert(response)
      if (status == "200") {
          this.$router.push({ path: "/objects" });
        } else {
          alert("Something went wrong!");
        }
    })
    .catch((error) => {
      alert(error);
    });
}
    
}


};

</script>

<style scoped>
.button {
    margin-left: 4em;
}
</style>