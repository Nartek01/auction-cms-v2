<template>
  <section id="Additem">
    <h1>Add an item</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">
        <mdb-input label="Product name" group type="text" validate error="wrong" success="right" />

        <mdb-textarea :row="2" label="Product description" />
      </div>

     
        <mdb-input
        label="Product start price"
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
import axios from 'axios'
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



async addProduct(){
    let formData = new FormData()
  formData.append('name',this.name)
  formData.append('description', this.description)
  formData.append('price',this.startPrice)

   await axios.post("http://3000/items",formData)
   .then(function (result) {
      alert(result);
    }, function (error) {
      alert(error);
    });

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
