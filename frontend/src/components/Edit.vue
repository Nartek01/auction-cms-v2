<template>
  <div>
    <h1>Edit details</h1>
    <br />
   

    <section v-for="(element,index) in item" :key="index">
      <form @submit.prevent="updateProduct" v-if="index == 0">
        <section>
        <p class="h4 text-center mb-4"></p>
        <div class="grey-text">
          <mdb-input
            v-model="element.product_name"
            label="Object name"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <textarea
            v-model="element.description"
            :row="2"
            label="Object description"
          />


          <mdb-input
            v-model="element.personal_number"
            label="Seller (personal number to be entered)"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="element.start_price"
            label="Start price"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="element.reserve_price"
            label="Reserve price"
            group
            type="number"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="element.category"
            label="Category"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            v-model="element.currency"
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
          <mdb-btn type="submit" outline="secondary">Save</mdb-btn>
        </div>
         </section>
      </form>

   
    </section>
  </div>
</template>

<script>
import { mdbInput, mdbBtn, } from "mdbvue";
export default {
  name: "EditObject",
  components: {
    mdbInput,
    mdbBtn,
    
  },

  data() {
    return {
        element: {
      product_name: "",
      description: "",
      category: "",
      status: "",
      personal_number: "",
      start_price: "",
      reserve_price: "",
      currency: "",
      date: "",
        }
    };
  },

  props: {
   
    item: Array
    
  },

methods: {
    //editing data

    async updateProduct() {
      const response = await fetch("http://localhost:3000/products", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
           product_name: this.element.product_name,
            description: this.element.description,
            personal_number: this.element.personal_number,
            start_price: this.element.start_price,
            reserve_price: this.element.reserve_price,
            category: this.element.category,
            currency: this.element.currency,
        }),
      });
      const data = await response.json();
      if (data.status == "200") {
        await this.$router.push({ path: "/objects" });
      } else {
          alert("Something went wrong!");
        }
    },
}
};
</script>


