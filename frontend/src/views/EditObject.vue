<template>
  <div>
    <h1>Edit details</h1>
    <br />
    

    <section v-for="detail in object" :key="detail.id">
      <form v-for="(d, index) in detail" :key="index">
        <section v-if="index == 0">
        <p class="h4 text-center mb-4"></p>
        <div class="grey-text">
          <mdb-input
            v-model="d.product_name"
            label="Object name"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-textarea
            v-model="d.description"
            :row="2"
            label="Object description"
          />

          <mdb-input
            v-model="d.personal_number"
            label="Seller (personal number to be entered)"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="d.start_price"
            label="Start price"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="d.reserve_price"
            label="Reserve price"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="d.category"
            label="Category"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="d.currency"
            label="Currency"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />

          <input
            type="file"
            ref="files"
            name="files"
            enctype="multipart/form-data"
            id="file-with-multi-file"
            class="input-default-js"
            @change="fileChanged($event)"
            accept="image/*"
            validate
            error="wrong"
            success="right"
            data-multiple-target="{count} files selected"
            multiple
          />
        </div>

        <div class="text-center">
          <mdb-btn @click="updateProduct()" outline="secondary">Save</mdb-btn>
        </div>
         </section>
      </form>
   
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mdbInput, mdbBtn, mdbTextarea } from "mdbvue";
export default {
  name: "EditObject",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea,
  },

  data() {
    return {
      object: [],

      photo: [],
    };
  },

  props: {
    id: Number,
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
        this.object = res.data;
      } catch (error) {
        alert(error);
      }
    },

    //editing data
    async updateProduct() {
      const response = await fetch("http://localhost:3000/products", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
           product_name: this.name,
            description: this.description,
            personal_number: this.personalNumber,
            start_price: this.startPrice,
            reserve_price: this.reservePrice,
            category: this.category,
            currency: this.currency,
        }),
      });
      const data = await response.json();
      if (data.status == "200") {
        await this.$router.push({ path: "/objects" });
      }
    },
  },
};
</script>


