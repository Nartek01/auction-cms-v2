<template>
  <section id="Additem">
    <h1>Add a new object</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">

        <mdb-input v-model="name" label="Object name" group type="text" validate error="wrong" success="right" />
        <mdb-textarea v-model="description" :row="2" label="Object description" /></div>
         <mdb-input v-model="category" label="Object category" group type="text" validate error="wrong" success="right" />
        <mdb-input v-model ="status" label="Object status" group type="text" validate error="wrong" success="right" />
        <mdb-input v-model="startPrice"  label="Start price" group type="number" validate error="wrong" success="right"/>
        <mdb-input v-model="personalNumber" label="Seller (personal number to be entered)" group type="number" validate error="wrong" success="right" />
        <mdb-input v-model="reservePrice" label="Reserve price" group type="number" validate error="wrong" success="right" />
        <mdb-input v-model="currency" label="Currency" group type="text" validate error="wrong" success="right" />
        <mdb-input v-model="date" label="Date" group type="date" validate error="wrong" success="right" />
      <!--  <mdb-input v-model="photo" label="" enctype="multipart/form-data" group type="file" name="someExpressFile" @change.native="onFileSelected" accept="image/*" validate error="wrong" success="right"/> -->

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
  name: "Objects",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,
  },
  data() {
    return {
   
        name: "",
        description: "",
        category: "",
        status: "",
        personalNumber: 0,
        startPrice: 0,
        reservePrice: 0,
        currency: "",
       date:"" ,
      //  photo: null, 
     
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
                            JSON.stringify({product_name: this.name, description: this.description,category: this.category, product_status: this.status,personal_number: this.personalNumber,
                            start_price: this.startPrice,reserve_price: this.reservePrice, currency: this.currency, date_added: this.date })
                    })
                    const data = await response.json()
                    if (data.status == '200') {
                        alert('New object has been added')
                    } else {
                        alert('Something went wrong!')
                    }

                } else {
                    alert('Please enter the name of your object')
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

