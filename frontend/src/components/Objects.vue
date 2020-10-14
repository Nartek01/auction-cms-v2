<template>
  <div>
    <mdb-container>
      <div class="container-1">
        <div class="box-1">
          <!-- :src="image" -->
          <img :src="image" class="box" alt="Image unavailable" />
        </div>

        <!-- Object info container-->
        <div class="box-2">
          <div class="box">
            Name:{{ productName }} <br />
            Category: {{ category }} <br />
            Seller: {{ seller }} <br />
            Status: {{ status }} <br />
            Start price:{{ price }}{{ currency }} <br />
            Product id: {{ id }}
          </div>
        </div>

        <!-- Button container -->
        <div class="box-3 ml-3">
          <mdb-btn color="elegant" @click="selectedObject()"><i class="fas fa-file-invoice"></i> Details</mdb-btn>
           <router-link :to="{ name: 'EditObject',params: { id: id}}">
          <mdb-btn color="elegant" rounded><i class="fas fa-hammer"></i> Edit</mdb-btn>
           </router-link>
          <mdb-btn color="elegant" @click="showModal">Delete</mdb-btn>
        </div>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import { mdbBtn, mdbContainer } from "mdbvue";
export default {
  name: "Objects",
  components: {
    mdbBtn,
    mdbContainer,
  },

  data() {
    return {};
  },

  props: [
    "productName",
    "price",
    "image",
    "currency",
    "category",
    "seller",
    "status",
    "id",
    "imageRef",
  ],

  methods: {
    selectedObject() {
      this.$router.push(`/${this.id}`);
    },


    showModal() {
      this.$buefy.modal.open({
        parent: this,
        component: Modal,
        props: {
          itemName: this.productName,
          itemId: this.id,
          imageRef: this.imageRef,
        },

        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>

<style scoped>
* {
  box-shadow: none !important;
}
.container-1 {
  display: flex;
  border-top: 2px gray solid;
  padding: 10px;
}

.box-1 {
  flex-grow: 1 1 0px;
  order: 1;
}

.box-1 img {
  height: 184px;
  width: 200px;
  padding: 0px;
}

.box-2 {
  flex: 3;
  order: 2;
  height: inherit;
  margin-left: 10px;
}

.box-3 {
  display: grid;
  width: 15vw;
  height: stretch;
  order: 3;
}
</style>