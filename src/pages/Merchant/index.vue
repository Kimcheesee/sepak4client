<template>
  <main>
    <MainNavBar />
    <section id="merchant-info-section">
      <v-container>
        <v-row>
          <v-col cols="12" sm="5" md="4" lg="4">
            <v-card outlined max-height="500px">
              <div style="text-align:right">
                <v-btn
                  :color="edit? 'secondary' : 'default'"
                  class="ma-2"
                  @click="edit = !edit"
                  rounded
                  depressed>
                  {{edit? "Save": "edit"}}
                </v-btn>
              </div>
              <div class="d-flex justify-center">
                <v-avatar class="mt-7 merchant-avatar">
                <v-img :src="'http://10.10.12.180:4000'+ data.avatar"></v-img>
                </v-avatar>
              </div>
              <v-card-title>
                <div
                  style="
                    width: 100%"
                  class="text-center merchant-name"
                >
                  <div :contenteditable="edit" class="d-flex justify-center">
                    {{data.username}}
                </div>
                </div>
              </v-card-title>
              <v-card-subtitle>
                <div
                  style="
                    width: 100%"
                  class="text-center merchant-bio"
                >Say something about yourself!</div>
              </v-card-subtitle>
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
                <v-col cols="5" class="pl-0">
                  <div class="text-end mb-3 pr-3 merchant-origin-font" :contenteditable="edit">{{data.city}}</div>
                  <div class="text-end mb-3 pr-3 merchant-origin-font" :contenteditable="edit">{{data.phone}}</div>
                </v-col>
              </div>
            </v-card>
            <v-card outlined class="mt-3">
              <div class="d-flex">
                <v-col cols="6" class="py-0">
                  <v-card-text class="pb-0">Sales Number</v-card-text>
                  <v-card-title>115</v-card-title>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-avatar size="60" color="money-earned-avatar">
                    <img src="pie-chartt.svg" alt="piechart" />
                  </v-avatar>
                </v-col>
              </div>
            </v-card>
            <v-card outlined class="mt-3">
              <div class="d-flex">
                <v-col cols="6" class="py-0">
                  <v-card-text class="pb-0">Money Earned</v-card-text>
                  <v-card-title>$115.00</v-card-title>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-avatar size="60" color="money-earned-avatar">
                    <img src="pie-chartt.svg" alt="piechart" />
                  </v-avatar>
                </v-col>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="7" md="8" lg="8">
            <v-card outlined>
              <v-tabs>
                <v-tab>Active Posts</v-tab>
                <v-tab>Pending Posts</v-tab>
              </v-tabs>
            </v-card>
            <v-row class="mt-5">
              <v-col cols="6" sm="4" md="4" lg="3" xl="2" class="mb-xs-5 mb-lg-10">
                <v-card
                  outlined
                  @click="onCreatePostClick"
                  height="80%"
                  class="d-flex flex-column align-center justify-center"
                >
                  <v-btn class="mx-2" fab dark depressed color="primary">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                  <div class="mt-4" style="font-size:13px; color:#BBBBBB">Create Post</div>
                </v-card>
              </v-col>
              <v-col
                cols="6"
                sm="4"
                md="4"
                lg="3"
                xl="2"
                v-for="index in 4"
                :key="index.id"
                class="mb-xs-5 mb-lg-6"
              >
                <ProductCardNoButton
                  :productTitle="product.productTitle"
                  :productDescription="product.productDescription"
                  :productPrice="product.productPrice"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" max-width="900px">
        <div class="dialog-content">
          <MerchantUpload :onCancelUpload="onCancelUpload" :onSubmitUpload="onSubmitUpload" />
        </div>
      </v-dialog>
    </section>
    <MainFooter class="d-none d-md-block" />
  </main>
</template>

<script>
import MainNavBar from '../../layouts/MainNavBar'
import MainFooter from '../../layouts/MainFooter'
import ProductCardNoButton from '../../components/Home/ProductCardNoButton'
import MerchantUpload from '../../components/MerchantUpload'

import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      product : {
        productTitle: 'Water Bag',
        productDescription: 'Fuzzy',
        productPrice: '2.3'
      },
      dialog: false,
      edit:false,
    }
  },

  components: {
    MainNavBar,
    MainFooter,
    ProductCardNoButton,
    MerchantUpload
  },

  methods:{
    onCreatePostClick(){
      // On mobile device will go to new page, else will open dialog
      const mobileScreenWidth = window.screen.width
      if(mobileScreenWidth <= 600){
        this.$router.push('/upload')
      }else{
        this.dialog = true
      }
    },
    onCancelUpload(){
      this.dialog = false
    },
    onSubmitUpload(){
      this.dialog = false
    }
  },

  computed:mapGetters({
    data: "User/getData"
  })

}
</script>

<style lang="scss" scoped>

#merchant-info-section {
  padding-top: 64px;
}

.merchant-avatar {
    width: 160px !important;
    height: 160px !important;
}

.sale-avatar, .money-earned-avatar {
  width: 80px !important;
  height: 80px !important;
}

.merchant-name {
  font-size: 15px;
}

.merchant-bio {
  font-size: 12px;
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
    font-size: 12px;
  }

  .merchant-bio {
    font-size: 8px;
  }

  .merchant-origin-font {
    font-size: 11px;
  }
}
.dialog-content{
  background-color: white;
  min-height: 700px
}
</style>