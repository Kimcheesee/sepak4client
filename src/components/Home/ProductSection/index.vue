<template>
  <div>
    <v-container>
      <v-row class="mt-11 pr-12 pl-9 mr-1" align="center">
        <v-col cols="6">
          <div class="pl-lg-3" style="font-size: 20px">Cambodian Handmade</div>
        </v-col>

        <v-col cols="6" class="d-flex justify-end">
          <v-list rounded width="fit-content" color="#fff" class="overflow-x-auto">
            <v-list-item-group active-class="listActive" mandatory class="d-flex">
              <v-list-item class="mb-0 mx-2">
                <v-list-item-title
                  @click="$router.push('products')"
                  style="min-width:80px; text-align:center; font-size:10px"
                >VIEW ALL</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <v-row class="mt-8 pl-12 pr-11">
        <v-col
          cols="6"
          sm="4"
          md="4"
          lg="3"
          xl="2"
          v-for="index in 12"
          :key="index.id"
          class="mb-10"
        >
          <ProductCard
            :productTitle="product.productTitle"
            :productDescription="product.productDescription"
            :productPrice="product.productPrice"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "../ProductCard";

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      categories: ["Bag", "Wallet", "Clothes", "Accessories"],
      product: {
        productTitle: "Fuzzy Snowman",
        productDescription: "Fluffy Socks",
        productPrice: "2.7"
      }
    };
  }
};
</script>

<style lang="scss">
.listActive {
  color: white !important;
  background-color: #0c97ad;
}
</style>