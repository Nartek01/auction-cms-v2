<template>
    <div>
     
 {{products}}
   
<div v-for="product in products" :key="product.id">
   {{product.id}}
</div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ObjectDetails",
    data(){
        return {
            products: [],
           
        }
    },

     mounted() {
    this.getItems()
  },

    methods: {
        async getItems(){
            try {
             const res = await axios.get("http://localhost:3000/product", {
          params: { id: this.$route.params.id },
         
        });
            this.products = res.data
            } catch (error){
               alert(error)
            }
        }
    }
 
}
</script>

