<template>
  <div>
      <h1>Objects list</h1><br>
    
  <div>
   <router-link to="/objects/addObject">   
       <mdb-btn outline="secondary">
          Add
        </mdb-btn>
   </router-link>    
  </div>

    <objects v-for="product in products" :key="product.id" :name="product.product_name" :description="product.description" :category="product.category" :price="product.start_price" 
    :reserve_price="product.reserve_price" :currency="product.currency" :image="product.image_name" :seller="product.personal_number" :status="product.product_status" :productNumber="product.id"></objects>
  </div>
</template>

<script>
import Objects from "@/components/Objects";
import { mdbBtn} from "mdbvue";
export default {
  name: "ObjectsList",
  components: {
    objects: Objects,
     mdbBtn,
  },
 data(){
    return {
      products: [],
    }
  },
  mounted(){
    this.fetchData()
  },

  methods: {
   async fetchData(){
      const val = await fetch("http://localhost:3000/products")
      const res = await val.json()
      this.products = res.data    
  
      }


    }
    
  
  }

</script>



<style scoped>
</style>