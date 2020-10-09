<template>
  <div>
    <div>
    <!-- <h1>Objects list</h1>  -->
    <br>
    <!-- Button container -->
    <div class="container">
      <div>
      <input class="searchBar" placeholder="Search" />
      </div>
        <!-- <mdb-btn color="elegant" rounded><i class="fas fa-trash"></i> Filter</mdb-btn> -->
      <router-link class="_button" to="/objects/addObject">
        <mdb-btn color="primary">Add</mdb-btn>
      </router-link>
    </div>
    <!-- Button container -->
      </div>
    <objects
      v-for="(product,index) in products"
      :key="index"
      :productName="product.product_name"
      :description="product.description"
      :category="product.category"
      :price="product.start_price"
      :reserve_price="product.reserve_price"
      :currency="product.currency"
      :image="product.image_name"
      :seller="product.personal_number"
      :status="product.product_status"
      :id="product.id"
      :imageRef="product.image_ref"
    ></objects>
  </div>
</template>

<script>
import Objects from "@/components/Objects";
import { mdbBtn } from "mdbvue"
export default {
  name: "ObjectsList",
  components: {
    objects: Objects,
  
    mdbBtn,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const val = await fetch("http://localhost:3000/products");
      const res = await val.json();
      this.products = res.data;
    },

  },
};
</script>



<style scoped>
.container {
  display: flex;
}

.container, div {
  width: 100%;
  padding-bottom: 10px;
}

.container, router-link {
  justify-content: flex-end;
}

.searchBar {
  width: 50vw;
}
</style>