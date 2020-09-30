<template>
  <div>
{{prodData}}

<div v-for="(image, index) in imageArray" :key="index">
 
 <img :src=image   />
</div>




    <section v-for="(value, index) in prodData" :key="index">
      <!-- <img 
            :src="value.image_name"
            class="img-fluid z-depth-1"
            alt="Image unavailable"
            style="width: 200px"
          /> -->
 <br>
      <h1 class="h5">
        <strong>{{ value.product_name }}</strong>
      </h1>
      <div>
       <strong> Description</strong> <br />
        {{ value.description }}<br /><br />
       <strong> Category: </strong>{{ value.category }} <br />
       <strong> Seller:</strong> {{ value.personal_number }}<br />
        <strong>Start price:</strong> {{ value.start_price }} {{ value.currency }}<br />
       <strong> Reserve price:</strong> {{ value.reserve_price }} {{ value.currency }}<br />
       <strong> Status:</strong> {{ value.product_status }}<br />
       <strong> Date added:</strong>  {{ value.date_added }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ObjectDetails",

  props: {
    prodData: Array,
    
  },

 data(){
   return {
     imageArray: Array
     }
 },

 methods: {
   filterImage(){
     for(var {image_name: name} of this.prodData )
     { this.imageArray.push(name) }
   }
 
 }
  
};
</script>

<style scoped>


</style>
