<template>
  <div>
    <mdb-container>
      <div class="d-flex flex-row ">
        <div class="p-2">
          <img 
            :src="image"
            class="img-fluid z-depth-1"
            alt="Image unavailable"
            style="width: 200px"
          />
        </div>

        <!-- Object info container-->

        <div class="p-2 ">
          Name:{{productName}}
          <br>Category: {{category}}
          <br>Seller: {{seller}}
          <br>Status: {{status}}
          <br>Start price:{{price}} {{currency}}
          <br>Product id: {{id}}
        </div>
 
        <!-- Button container -->
        <div class="p-2">
          <div class="text-center d-flex flex-column">
             <mdb-btn outline="secondary" @click="selectedObject()">Details</mdb-btn>
            <mdb-btn outline="secondary">Edit</mdb-btn>
            <mdb-btn outline="secondary">Delete</mdb-btn>
           
          </div>
        </div>
      </div>
    </mdb-container>

  </div>
</template>

<script>
import { mdbBtn, mdbContainer } from "mdbvue";
export default {
  name: "Objects",
  components: {
    mdbBtn,
    mdbContainer
  },
  
  props: ["productName", "price", "image", "currency", "category", "seller", "status", "id" ],


methods: {
  selectedObject(){
 
    this.$router.push(`/${this.id}`  )

  },

}

};





</script>

<style scoped>
</style>

  