<template>
    <div>
 <input type="text" placeholder="Search..." v-model="search">
 <div v-for="product in filteredProducts" :key="product.id" >
 </div>
    </div>
</template>

<script>
export default {
    name:'SearchBar',
    data(){
        return {
            products:[],
            search: ''
        }
    },

computed: {
    filteredProducts(){
        if(this.search !== ''){
            return this.products.filter((product)=>{
                return product.product_name.match(this.search)
            })
           
        }
         return this.products
    }
},

     mounted() {
    this.fetchData();
  },

    methods: {
          async fetchData() {
      const val = await fetch("http://localhost:3000/products");
      const res = await val.json();
      this.products = res.data;
      
    }
    
}
}
</script>

<style scoped>

</style>