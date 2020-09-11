<template>
  <section id="Additem">
    <h1>Add an item</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">
        
        <mdb-input v-model="name" label="Object name" group type="text" validate error="wrong" success="right" />
        <mdb-textarea v-model="description" :row="2" label="Object description" />
      
      <mdb-input v-model="category" label="Category" group type="text" validate error="wrong" success="right" />
      <mdb-input v-model="status" label="Status" group type="text" validate error="wrong" success="right" />
      <mdb-input v-model="personalNumber" label="Seller (personal number to be entered)" group type="number" validate error="wrong" success="right"/>
        <mdb-input v-model="startPrice" label="Start price" group type="number"  validate error="wrong" success="right"/>
        <mdb-input v-model="reservePrice" label="Reserve price" group type="number" validate error="wrong" success="right" />
        <mdb-input v-model="currency" label="Currency" group type="text" validate error="wrong" success="right" />
         <mdb-input label="" ref="file" enctype="multipart/form-data" group type="file" name="photo"  @change.native="fileChanged($event)" accept="image/*" validate error="wrong" success="right" /> 
        <mdb-input v-model="date" label="Date" group type="text" validate error="wrong" success="right" />
       </div>

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
import { mdbInput, mdbBtn,mdbTextarea } from "mdbvue";
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
        date: "",
        photo: "",
        
    };
  },
  methods: {
       
  
   async addProduct() {
                if (this.name && this.description && this.category && this.status && this.personalNumber && this.startPrice &&this.reservePrice && this.currency ) {
                   
                    const response = await fetch("http://localhost:3000/products", {
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json"
                        },
                        "body":
                            JSON.stringify({product_name: this.name, description: this.description, category: this.category, product_status: this.status,
                            personal_number: this.personalNumber, start_price: this.startPrice, reserve_price: this.reservePrice, currency: this.currency,date_added: this.date})
                    })
                    const data = await response.json()
                    if (data.status == '200') {
                        alert('All is good')
                    } else {
                        alert('Something went wrong!')
                    }
                    await this.uploadImage()
                } else {
                    alert('Please fill in the form')
                }
            },
//Image uploading:
              fileChanged(event){
                const photo = event.target.files
                this.photo = photo
              },
          async uploadImage(){
            const formData = new FormData();
            formData.append('photo', this.photo[0]);
            try{
              await axios.post('/upload',formData)
              alert('Success')
            }
            catch(err){
              alert(err)
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