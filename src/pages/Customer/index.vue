<template>
  <main>
    <MainNavBar />
    <section id="merchant-info-section">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" sm="5" md="4" lg="4">
            <v-card outlined max-height="500px">
              <div class="d-flex justify-center"></div>
              <v-card-title>
                <div style="
                    width: 100%" class="merchant-name">
                  <div class="subtitle-1">#1234567890</div>
                  <div class="d-flex justify-space-between subtitle-1">
                    {{data.username}}
                    <v-btn rounded depressed>edit</v-btn>
                  </div>
                </div>
              </v-card-title>
              <v-divider class="mx-7 mt-7"></v-divider>
              <div class="d-flex">
                <v-col cols="7" class="pr-0">
                  <div class="d-flex align-center pl-3 mb-3">
                    <div
                      style="
                        width: 14px;
                        height: 14px;
                        background-color: indigo;
                        border-radius: 100%"
                    ></div>
                    <div class="ml-3 merchant-origin-font">From</div>
                  </div>
                  <div class="d-flex align-center pl-3 mb-3">
                    <div
                      style="
                      width: 14px;
                      height: 14px;
                      background-color: indigo;
                      border-radius: 100%"
                    ></div>
                    <div class="ml-3 merchant-origin-font">Phone Number</div>
                  </div>
                </v-col>
                <v-col cols="4" class="pl-0">
                  <div class="text-end mb-3 pr-3 merchant-origin-font">{{data.city}}</div>
                  <div class="text-end mb-3 pr-3 merchant-origin-font">{{data.phone}}</div>
                </v-col>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="7" md="8" lg="8">
            <v-card outlined>
              <v-tabs>
                <v-tab>Bought Items</v-tab>
                <v-tab>Wish List</v-tab>
                <v-tab>History</v-tab>
              </v-tabs>
            </v-card>
            <v-row class="mt-5">
              <v-col cols="12" v-for="index in 4" :key="index.id" class="mb-xs-5">
                <ProductCard />
              </v-col>
            </v-row>
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
import ProductCard from '../../components/CustomerProfile/ProductCard'

import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      product : {
        productTitle: 'Water Bag',
        productDescription: 'Fuzzy',
        productPrice: '2.3'
      }
    }

  },

  components: {
    MainNavBar,
    MainFooter,
    ProductCard
  },

  computed:mapGetters({
    "data": "User/getData"
  })
}
</script>

<style lang="scss" scoped>

#merchant-info-section {
  padding-top: 64px;
}

.merchant-avatar {
    width: 167px !important;
    height: 167px !important;
}

.sale-avatar, .money-earned-avatar {
  width: 88px !important;
  height: 88px !important;
}

.merchant-name {
  font-size: 18px;
}

.merchant-bio {
  font-size: 14px;
}

.merchant-origin-font {
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  #merchant-info-section {
    padding-top: 56px;
  }

  .merchant-avatar {
    width: 120px !important;
    height: 120px !important;
  }

  .sale-avatar, .money-earned-avatar {
    width: 60px !important;
    height: 60px !important;
  }

  .merchant-name {
    font-size: 17px;
  }

  .merchant-bio {
    font-size: 12px;
  }

  .merchant-origin-font {
    font-size: 11px;
  }
}
</style>