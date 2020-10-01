<template>
  <div>
    <objectDetails v-for="(prod,index) in product" :key="index"
    :prod-data="prod"> </objectDetails>
  </div>
</template>

<script>
import axios from 'axios'
import ObjectDetails from "@/components/ObjectDetails";
export default {
  name: "DetailedV",
  components: {
    objectDetails: ObjectDetails,
  },
  data() {
    return {
      product: Array,
    };
  },

  mounted() {
    this.getItems();
  },

  methods: {
    async getItems() {
      try {
        const res = await axios.get("http://localhost:3000/product", {
          params: { id: this.$route.params.id },
        });
        this.product = res.data;
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>