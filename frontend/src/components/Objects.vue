<template>
  <div>
    <mdb-container>
      <div class="container-1">
        <div class="box-1">
          <img
            :src="image"
            class="box img-fluid z-depth-1"
            alt="Image unavailable"
          />
        </div>

        <!-- Object info container-->
        <div class="box-2">
          <div class="box z-depth-1">
            Name:{{productName}}
            <br>Category: {{category}}
            <br>Seller: {{seller}}
            <br>Status: {{status}}
            <br>Start price:{{price}} {{currency}}
            <br>Product id: {{id}}
          </div>
        </div>
 
        <!-- Button container -->
        <div class="box-3 ml-3">
          <!-- <div class="text-center d-flex flex-column"> -->
             <mdb-btn color="elegant" @click="selectedObject()"><i class="fas fa-file-invoice"></i> Details</mdb-btn>
             <mdb-btn color="elegant" rounded><i class="fas fa-hammer"></i> Edit</mdb-btn>
             <mdb-btn color="54FF84" rounded><i class="fas fa-trash"></i> Delete</mdb-btn>
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
  props: { productName: String, price: String, image: ImageData, currency: String, category: String, seller: Number, status: String, id: Number },


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
}

/* .container-1 div {
  border: 1px red solid;
  padding: 10px;
} */

.box-1 {
  flex: 1;
  order: 1;
}
.box-2 {
  flex: 3;
  order: 2;
  margin-left: 10px;
}

.box-3 {
  display: grid;
  order: 3;
}

img {
  height: 16vh;
  width: 25vw;
}
</style>