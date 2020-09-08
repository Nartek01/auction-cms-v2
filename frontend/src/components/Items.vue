<template>
  <section id="Additem">
    <h1>Add an item</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">
        <mdb-input v-model="name" label="Product name" group type="text" validate error="wrong" success="right" />

        <mdb-textarea v-model="description" :row="2" label="Product description" />
      </div>

     
        <mdb-input
        label="Product start price"
        v-model="startPrice"
        group type="number"
        validate
        error="wrong"
        success="right"
      />

      <!-- <mdb-input label="Product Status" group type="text" validate error="wrong" success="right" />

       <mdb-input label="Product category" group type="text" validate error="wrong" success="right" />

      <mdb-input
        label="Seller (personal number to be entered)"
        group type="number"
        validate
        error="wrong"
        success="right"
      />

    

      <mdb-input
        label="Product reserve price"
        group
        type="number"
        validate
        error="wrong"
        success="right"
      />

      <mdb-input label="Curreny" group type="text" validate error="wrong" success="right" />

      <mdb-input
        label="Date of adding the product"
        group
        type="email"
        validate
        error="wrong"
        success="right"
      />

      <mdb-input
        label="Add a photo"
        enctype="multipart/form-data"
        group
        type="file"
        name="someExpressFile"
        @change.native="onFileSelected"
        accept="image/*"
        validate
        error="wrong"
        success="right"
      /> -->

      <div class="text-center">
        <mdb-btn @click="addProduct()" outline="secondary">
          Add
        </mdb-btn>
      </div>
    </form>
  </section>
</template>

<script>
//import axios from 'axios'
import { mdbInput, mdbBtn, mdbTextarea } from "mdbvue";

export default {
  name: "AddItem",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,
  },
  data() {
    return {
   
        name: "",
        description: "",
        //category: "",
        // status: "",
        // personalNumber: 0,
        startPrice: 0,
        // reservePrice: 0,
        // currency: "",
        // photo: null, 
     
    };
  },
//file uploading
  methods: {
    onFileSelected(event) {
      this.photo = event.target.files[0];
    },

   async addProduct() {
                if (this.name) {
                   
                    const response = await fetch("http://localhost:3000/products", {
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                             "Access-Control-Allow-Origin": "*",
                        },
                        "body":
                            JSON.stringify({product_name: this.name, description: this.description,price: this.startPrice})
                    })
                    const data = await response.json()
                    if (data.status == '200') {
                        alert('All is good')
                    } else {
                        alert('Something went wrong!')
                    }

                } else {
                    alert('Please enter the name of your product')
                }
            }
}
}

</script>

<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3,
.card.card-cascade h4 {
  margin-bottom: 0;
}
</style>
