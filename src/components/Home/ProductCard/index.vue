<template>
  <v-card
    flat
    max-width="220px"
    style="cursor:pointer"
    color="#fff"
    class="d-flex flex-column align-center justify-center"
  >
    <!-- Product Card Image -->
    <v-img @click="$router.push('/product')" src="example.jpg" class="text-center mx-auto product-image"></v-img>
    <!-- Product Card Title, Description, Price & Button -->
    <v-responsive width="100%">
      <!-- Title -->
      <v-card-title @click="$router.push('/product')" v-text="productTitle" class="font-weight-black pl-0" style="font-size: 14px"></v-card-title>
      <!-- Description -->
      <!-- <v-card-subtitle
        v-text="productDescription"
        class="
          pl-0 
          py-0">
      </v-card-subtitle>-->
      <!-- Price -->
      <v-card-subtitle @click="$router.push('/product')" class="pl-0 font-weight-bold subtitle-2 black--text">$ {{ productPrice }}</v-card-subtitle>
      <!-- Button -->
      <v-btn tile dark width="100%" color="primary" class="mb-1">Add To Cart</v-btn>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  components: {},
  props: {
    productTitle: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    productPrice: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  template: ""
};
</script>

<style>
.product-image {
  width: 272px;
  max-height: 385px;
}

/* @media screen and (max-width: 600px) {
  .product-image {
    height: 250px;
  }
} */
</style>