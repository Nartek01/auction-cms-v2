<template>
  <div>

  <ul class="scroll-container" data-layoutmethod="flexbox">
    <li class="scroll-item"><img src="../assets/Budda1.jpg" /></li>
    <li class="scroll-item"><img src="../assets/Budda2.jpg" /></li>
    <li class="scroll-item"><img src="../assets/budda3.jpg" /></li>
    <li class="scroll-item"><img src="../assets/Budda4.jpg" /></li>
  </ul>
  
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
  filteringImages(prodData){

return prodData

  }
}
  
};
</script>

<style scoped>

/* limit width so that content will need to scroll */
main {
  max-width: 30em;
}

/* SCROLL SNAPPING */
.scroll-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.scroll-item {
  scroll-snap-align: center;
}


/* FLEXBOX LAYOUT */
.scroll-container[data-layoutmethod="flexbox"] {
  display: flex;
  flex-wrap: nowrap;
  align-items: center; /* vertically align children */
}
.scroll-container[data-layoutmethod="flexbox"] .scroll-item {
  margin-right: 1em; /* fake gap */
  flex: 0 0 auto;
}

/* center main element */
main {
  margin: 0 auto;
  padding: 0 1em;
  border: 1px solid rgba(0,0,0,0.1);
}

/* remove list styles */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.scroll-item {
  /* make it square */
  width: 16em;
  height: 18em;
  border: 2px solid rgba(0,0,0, 0.1);

  /* some basic styling */
  border-radius: 0.3em;
  background-color: white;

  /* center contents */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
