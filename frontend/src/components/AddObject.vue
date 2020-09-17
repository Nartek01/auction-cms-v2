<template>
  <section id="AddObject">
    <h1>Add an item</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">
        
        <mdb-input v-model="name" label="Object name" group type="text" validate error="wrong" success="right" />
        <mdb-textarea v-model="description" :row="2" label="Object description" />
      <!-- Drop down menu -->
      <mdb-dropdown>
    <mdb-dropdown-toggle slot="toggle">Catergory</mdb-dropdown-toggle>
    <mdb-dropdown-menu>
      <mdb-dropdown-item v-model="category" label="Category" group type="text" validate error="wrong" success="right">Option1</mdb-dropdown-item>
      <mdb-dropdown-item v-model="category" label="Category" group type="text" validate error="wrong" success="right">Option2</mdb-dropdown-item>
      <mdb-dropdown-item v-model="category" label="Category" group type="text" validate error="wrong" success="right">Option3</mdb-dropdown-item>
    </mdb-dropdown-menu>
  </mdb-dropdown>
  <!-- Drop down menu end -->
     
      <mdb-input v-model="personalNumber" label="Seller (personal number to be entered)" group type="number" validate error="wrong" success="right"/>
        <mdb-input v-model="startPrice" label="Start price" group type="number"  validate error="wrong" success="right"/>
        <mdb-input v-model="reservePrice" label="Reserve price" group type="number" validate error="wrong" success="right" />
        <mdb-input v-model="currency" label="Currency" group type="text" validate error="wrong" success="right" />
         <mdb-input label="" ref="files"  enctype="multipart/form-data" group type="file" name="files"  @change.native="fileChanged($event)" accept="image/*" validate error="wrong" success="right" /> 
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
//Dropdown menu import
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
// .Dropdown menu import

import axios from 'axios'
import { mdbInput, mdbBtn,mdbTextarea } from "mdbvue";

export default {
  name: "AddObject",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
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
        file: "",
        
    };
  },

  methods: {

       
  
   async addProduct() {
                 if (this.name && this.description && this.category && this.personalNumber && this.startPrice && this.reservePrice && this.currency && this.photo) {

                    if (this.photo) {
                        await this.uploadImage()
                    }
                    
                   
                          const response = await fetch("http://localhost:3000/products", {
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json"
                        },
                        "body":
                            JSON.stringify({product_name: this.name, description: this.description, category: this.category,
                            personal_number: this.personalNumber, start_price: this.startPrice, reserve_price: this.reservePrice, currency: this.currency, image: this.photo.name, })
                    })

                    const data = await response.json()
                    if (data.status == '200') {
                        await this.$router.push({path: '/objects'})
                    } else {
                        alert('Something went wrong!')
                    }

                } else {
                    alert('Please fill in the form')
                }
            },


fileChanged(event){
            const photo = event.target.files[0]
            this.photo = photo
  }, 

           async uploadImage() {
                const formData = new FormData()
                formData.append('photo', this.photo)
                try{
                  await axios.post('http://localhost:3000/upload',formData)
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
