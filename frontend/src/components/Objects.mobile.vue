<template>
  <div>
    <mdb-container>
      <div class="container-1">
        <div class="box-1">
          <img
            :src="image"
            class="img-fluid z-depth-1"
            alt="Image unavailable"
          />
        </div>

        <!-- Object info container-->
        <div class="box-2">
          <div class="box">
            Name:{{productName}}
            <br>Category: {{category}}
            <br>Seller: {{seller}}
            <br>Status: {{status}}
            <br>Start price:{{price}} {{currency}}
            <br>Product id: {{id}}
          </div>
        </div>
 
        <!-- Button container -->
        <div class="box-3">
          <!-- <div class="text-center d-flex flex-column"> -->
             <mdb-btn gradient="purple" @click="selectedObject()"><i class="fas fa-file-invoice"></i> Details</mdb-btn>
             <mdb-btn gradient="aqua" rounded><i class="fas fa-hammer"></i> Edit</mdb-btn>
             <mdb-btn gradient="peach" rounded><i class="fas fa-trash"></i> Delete</mdb-btn>
            <!-- <mdb-btn outline="secondary">Edit</mdb-btn> -->
            <!-- <mdb-btn outline="secondary">Delete</mdb-btn> -->
           
          <!-- </div> -->
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
  props: ["productName","price", "image", "currency", "category", "seller", "status", "id"],


methods: {
  selectedObject(){
    //Where to navigate when button is pushed
    this.$router.push(`/object/${this.id}`  )
  }
}

};





</script>

<style scoped>
.container-1 {
  display: flex;
  border-top: 2px gray solid;
  padding: 10px;
  flex-direction: column;
}

/* .container-1 div {
  border: 1px red solid;
  padding: 10px;
} */

.box-1 {
  flex:1;
  order: 1;
  height: auto;
}
.box-2 {
  flex:3;
  order: 2;
  margin: 10px 0 10px 0;
}

.box-3 {
  flex:1;
  order: 2;
}
img {
  height: 300px;
  width: stretch;
}
</style>