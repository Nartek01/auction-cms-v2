<template>
  <section>
    <h1>Edit an object</h1>

    <form @submit.prevent="editProduct" v-for="(p, index) in product" :key="index" >
      <section v-if="index == 0" >
     
      <p class="h4 text-center mb-4"></p>
      <div class="grey-text">
        <mdb-input
          v-model="p.product_name"
          label="Object name"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />
        <mdb-textarea v-model="p.description" :row="2" label="Object description" />

        <mdb-input
          v-model="p.personal_number"
          label="Seller (personal number to be entered)"
          group
          type="number"
          validate
          error="wrong"
          success="right"
        />
        <mdb-input
          v-model="p.start_price"
          label="Start price"
          group
          type="number"
          validate
          error="wrong"
          success="right"
        />
        <mdb-input
          v-model="p.reserve_price"
          label="Reserve price"
          group
          type="number"
          validate
          error="wrong"
          success="right"
        />
        <mdb-input
          v-model="p.category"
          label="Category"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />
        <mdb-input
          v-model="p.currency"
          label="Currency"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />

        <input
          type="file"
          ref="files"
          name="files"
          enctype="multipart/form-data"
          id="file-with-multi-file"
          class="input-default-js"
          @change="fileChanged($event)"
          accept="image/*"
          validate
          error="wrong"
          success="right"
          data-multiple-target="{count} files selected"
          multiple
        />
      </div>

      <div class="text-center">
        <mdb-btn type="submit" @submit.prevent="editProduct()"  outline="secondary">Save</mdb-btn>
      </div>
       
      </section>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
import { mdbInput, mdbBtn, mdbTextarea } from "mdbvue";

export default {
  name: "AddObject",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,

  },
  data() {
    return {
     product: null,
   
    };
  },

  props: {
    id: Number
  },


  created(){
    this.getProduct()
  },

  methods: {

     async getProduct(){
         try {
        const res = await axios.get("http://localhost:3000/product", {
          params: { id: this.$route.params.id },
        });
        this.product = res.data.data;
      } catch (error) {
        alert(error);
      }


     },

     
		async	editProduct() {
        const formData = new FormData(),
        product = JSON.stringify(this.product)
        Object.entries(this.product).forEach(data => {
          formData.append(data[0], data[1])
         
        })
        formData.append( 'product', product ) 
       fetch(`http://localhost:3000/productsedit`, {
					body: formData,
          method: 'PATCH'
         
				})
					.then(response => response.json())
					.then(() => {
						this.dismissCountDown = 5
            this.getProduct()				

      
          })
          
          this.$router.push({ path: "/objects" });

			},


  },


};
</script>

<style scoped>

</style>

