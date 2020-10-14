<template>
  <div>
   <edit v-for="(detail,index) in product" :key="index"
   :item="detail"></edit>
  </div>
</template>

<script>
import Edit from '@/components/Edit'
import axios from "axios";
export default {
  name: "EditObject",
  components: {
   edit: Edit
  },

  data() {
    return {
      product: Array,

    };
  },

  props: {
    id: Number
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


