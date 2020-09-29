<template>
  <div>
    <section v-for="(value, index) in prodData" :key="index">
      <img 
            :src="value.image_name"
            class="img-fluid z-depth-1"
            alt="Image unavailable"
            style="width: 200px"
          />

      <h1 class="h5">
        <strong>{{ value.product_name }}</strong>
      </h1>
      <div>
        Description <br />
        {{ value.description }}<br /><br />
        Category: {{ value.category }} <br />
        Seller: {{ value.personal_number }}<br />
        Start price: {{ value.start_price }} {{ value.currency }}<br />
        Reserve price: {{ value.reserve_price }} {{ value.currency }}<br />
        Status: {{ value.product_status }}<br />
        Date added: {{ value.date_added }}
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

  
};
</script>

<style scoped>

</style>
