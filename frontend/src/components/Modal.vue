<template>
  <div class="modal-card" style="width:auto">
    <header class="modal-card-head">
      <p class="modal-card-title">WARNING!</p>
    </header>
    <section class="modal-card-body">
    <div> Are you sure you want to delete this object?</div> <br>
     {{itemName}}
      <br />
      <span></span>
    </section>
    <footer class="modal-card-foot"><button class="button" @click="deleteProduct()" >Yes</button> <button class="button" @click="$parent.close()">No</button></footer>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
   itemName: String,
   itemId: Number
  },
  

methods: {

    async deleteProduct() {
                const response = await fetch("http://localhost:3000/products", {
                    "method": "DELETE",
                    "headers": {
                        "content-type": "application/json"
                    },
                    "body": JSON.stringify(this.itemId)
                })
                const status = await response.json()

                if (status === 200) {
                    await this.$router.push({path: "/products"})
                } else {
                    alert("Something went wrong")
                }
            },
    
}


};

</script>

<style scoped>
.button {
    margin-left: 4em;
}
</style>