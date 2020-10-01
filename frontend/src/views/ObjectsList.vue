<template>
  <div>
    <div>
    <!-- <h1>Objects list</h1>  -->
    <br>
    <!-- Button container -->
    <div class="container">
      <div class="box-1">
      <input class="searchBar" placeholder="Sök objekter" />
      </div>
        <!-- <mdb-btn color="elegant" rounded><i class="fas fa-trash"></i> Filter</mdb-btn> -->
        <div class="box-2">
      <router-link to="/objects/addObject">
        <mdb-btn class="_button" color="elegant">Lägg till</mdb-btn>
      </router-link>
      </div>
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
  padding: 10px;
  align-items: center;
}

.container, div {
  width: 100%;
}

/*Search bar style */
.box-1 {
  flex: 3;
  order: 2;
}

.box-1, .searchBar {
  width: stretch;
}

/*Add button style */
.box-2 {
  flex: 1;
  order: 2;
}

._button {
 width: stretch;
}
</style>