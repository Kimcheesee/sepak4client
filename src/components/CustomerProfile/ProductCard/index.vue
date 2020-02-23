<template>
  <v-card outlined class="customer-product-card">
    <v-row>
      <v-col cols="3">
        <v-card flat tile max-height="500px" class="mb-4">
          <v-img src="example.jpg" width="100%" aspect-ratio="1" class="grey lighten-2 ml-4">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col lg="5" cols="9">
        <div class="d-flex flex-column" style="width:100%">
          <div>Winter suit good one</div>
          <div class="mb-xs-8 mb-md-12 small-font">$180.00</div>
          <div class="mt-4 d-flex justify-space-between">
            <div class="small-font">Qty</div>
            <div class="small-font" style="width:50%">12</div>
          </div>
          <div class="d-flex justify-space-between">
            <div class="small-font">color</div>
            <div class="small-font" style="width:50%">black and white</div>
          </div>
          <div class="d-flex justify-space-between">
            <div class="small-font">Diliver Address</div>
            <div class="small-font" style="width:50%">Russia, USA and Eroupe</div>
          </div>
        </div>
      </v-col>
      <!--<v-divider vertical></v-divider>-->
      <v-col cols="12" lg="3" class="btn-section d-flex flex-column align-center">
        <div>Free Shipping</div>
        <div>1-2 weeks</div>
        <div
          class="d-flex flex-column-reverse btn-container mb-4"
          style="
              width:100%;
              height:100%"
        >
          <v-btn class="product-card-btn" depressed width="100%">
            <i class="fab fa-facebook-messenger pr-2" />
            Talk to US
          </v-btn>
          <v-btn
            @click="$router.push('/tracking')"
            class="mb-2 product-card-btn"
            color="primary"
            depressed
            width="100%"
          >Logistic</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 0;
}
.btn-section {
  border-left: 1px solid #d1d1d1;
  margin: 0;
}
.small-font{
  font-size: 13px;
}

@media screen and (max-width: 600px) {
  .customer-product-card {
    font-size: 10px;
  }
  .product-card-btn {
    height: 40px;
    font-size: 8px;
    height: 20px;
  }
  .small-font {
    font-size: 8px;
  }
  .btn-container {
    padding-left: 10px;
  }
  .btn-section {
    border: none;
  }
}

@media screen and (min-width: 600px) {
  .btn-section {
    border: none;
  }
}
</style>
