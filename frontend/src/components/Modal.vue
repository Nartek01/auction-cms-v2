
<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">WARNING!</p>
    </header>
    <section class="modal-card-body">
      <div>Are you sure you want to delete this object?</div>
      <br />
      {{ itemName }} {{ imageRef }} {{ itemId }}

      <br />
      <span></span>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="deleteProduct() && $parent.close()">Yes</button>
      <button class="button" @click="$parent.close()">No</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    itemName: String,
    itemId: Number,
    imageRef: String,
  },

  methods: {


    async deleteProduct() {
        try {
      await fetch("http://localhost:3000/products", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ image_ref: this.imageRef }),
        
      });
        } catch(e){
            alert(e)
        }
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: 4em;
}
</style>
