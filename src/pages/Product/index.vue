<template>
  <main>
    <MainNavBar />
    <section id="product-detail-section">
      <v-container class="py-0 pr-12 pl-8">
        <v-breadcrumbs :items="items" class="pl-4 d-none d-sm-flex">
          <template v-slot:item="{item}">
            <v-breadcrumbs-item
              :to="item.to"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>

        <v-row class="pt-lg-3">
          <v-col class="py-0" cols="12" lg="6" md="6" sm="6">
            <v-row>
              <v-col
                lg="3"
                class="d-none d-md-none d-lg-flex flex-column justify-space-between pl-7 pa-0"
              >
                <v-img
                  v-for="(index, i) in 4"
                  :key="i"
                  src="example.jpg"
                  width="100px"
                  max-height="100px"
                ></v-img>
              </v-col>
              <v-col cols="12" lg="8" class="pa-0 ml-md-7 ml-sm-7 ml-lg-0">
                <v-img src="example.jpg" class="main-product-img mr-sm-5"></v-img>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            md="6"
            sm="6"
            class="d-flex flex-column justify-space-between px-6 pt-4"
          >
            <div>
              <div class="product-name">Product Name</div>
              <div class="product-price mb-4">$ 100</div>
            </div>

            <div>
              <div class="product-details-title mb-2">Product Details and Description:</div>
              <div
                class="product-details mb-2"
              >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content.</div>
            </div>

            <div>
              <div class="mb-2 font-weight-bold">Color:</div>
              <div style="max-width: 220px" class="d-flex justify-space-between flex-wrap">
                <div class="mb-2 mr-2" v-for="(index, i) in 4" :key="i" :style="colorPicker"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 font-weight-bold">Quantity:</div>
              <v-row>
                <NavIcon class="mx-2" navIcon="mdi-minus"></NavIcon>
                <NavIcon class="mx-2" navIcon="mdi-numeric-1"></NavIcon>
                <NavIcon class="mx-2" navIcon="mdi-plus"></NavIcon>

                <v-spacer />

                <v-btn
                  width="150px"
                  rounded
                  color="#1497AD"
                  style="
                    color: white;
                    font-size: 13px"
                >Add To Cart</v-btn>
                <v-btn class="mx-2" icon outlined>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn class="mx-2" icon outlined>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="mt-12">
      <v-container>
        <v-row class="mt-8" justify="center">
          <div style="font-size: 25px" class="font-weight-thin text-center">You may also like</div>
        </v-row>
        <v-row class="mt-8 ml-8 mr-8">
          <v-col cols="6" sm="4" md="4" lg="3" xl="2" v-for="(index,i) in 4" :key="i">
            <ProductCard
              :productTitle="product.productTitle"
              :productDescription="product.productDescription"
              :productPrice="product.productPrice"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <MainFooter class="d-none d-md-block" />
  </main>
</template>

<script>
import MainNavBar from '../../layouts/MainNavBar'
import MainFooter from '../../layouts/MainFooter'
import ProductCard from '../../components/Home/ProductCard'

import NavIcon from '../../components/Navigation Bar/NavIcon'

export default {
  data() {
    return {
      colorPicker: {
        width: '40px',
        height: '40px',
        backgroundColor: '#7CCDD3'
      },
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Product",
          disabled: false,
          to: "/product"
        },
        {
          text: "Tracking",
          disabled: false,
          to: "/tracking"
        }
      ],
      product: {
        productTitle: "Fuzzy Snowman",
        productDescription: "Fluffy Socks",
        productPrice: "2.7"
      }
    }
  },
  components: {
    MainNavBar,
    MainFooter,
    ProductCard,
    NavIcon
  }
}
</script>

<style lang="scss" scoped>

#product-detail-section {
  padding-top: 64px;
}

@media screen and (min-width: 1904px) {

  .main-product-img {
    max-height: 500px;
    max-width: 440px;
  }
}

@media screen and (max-width: 1904px) {

  .main-product-img {
    max-height: 500px;
    max-width: 440px;
  }

  .product-name {
    font-size: 29px;
  }

  .product-price {
    font-size: 29px;
  }

  .product-details-title {
    font-size: 13px;
  }

  .product-details {
    font-size: 12px;
  }
}

@media screen and (max-width: 1264px) {

  .main-product-img {
    max-height: 370px;
    max-width: 400px;
  }
}

@media screen and (max-width: 960px) {

  .main-product-img {
    max-height: 370px;
    max-width: 100%;
  }

}

@media screen and (max-width: 600px) {
  #product-detail-section {
    padding-top: 56px;
  }

  .main-product-img {
    max-height: 375px;
    max-width: 100%;
  }

  .product-name {
    font-size: 21px;
  }

  .product-price {
    font-size: 21px;
  }

  .product-details-title {
    font-size: 17px;
  }

  .product-details {
    font-size: 14px;
  }
}


</style>