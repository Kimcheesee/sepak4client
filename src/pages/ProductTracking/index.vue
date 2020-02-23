<template>
  <main>
    <MainNavBar/>
    <section id="product-tracking-section">
      <v-container
        class="py-0">
        <v-breadcrumbs
          :items="items"
          class="
            pl-4
            d-none
            d-sm-flex">
          <template v-slot:item="{item}">
            <v-breadcrumbs-item
              :to="item.to"
              :disabled="item.disabled">
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-row
          class="tracking-info">
          <div
            class="
            tracking-info__title
            pl-4
            title">
            Tracking Information
          </div>
          <v-stepper value="1" class="tracking-info__stepper" alt-labels>
            <v-stepper-header>
              <v-stepper-step step="1">Place</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2">Product Pickup</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Delivery</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="4" complete>Received</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-container class="tracking-info__table pa-md-12 py-0">
                  <v-row v-for="(info, i) in trackingData" :key="i" >
                    <div class="tracking-info__icon"></div>
                    <v-col cols="3">
                      {{info.date}}
                    </v-col>
                    <v-col cols="2">
                      {{info.state}}
                    </v-col>
                    <v-col cols="2">
                      <div class="mb-4 d-none d-sm-flex" v-for="(detail, j) in info['time']" :key="j">
                          {{detail[0]}}
                      </div>
                    </v-col>
                    <v-col>
                      <div class="mb-md-4" v-for="(detail, j) in info['time']" :key="j">
                          {{detail[1]}}
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-row>
      </v-container>
    </section>
    <MainFooter/>
  </main>

</template>

<script>
import MainNavBar from "../../layouts/MainNavBar";
import MainFooter from "../../layouts/MainFooter";
export default {
  components:{
      MainNavBar,
      MainFooter,
  },
  data:()=>({
    items: [
        {
          text: "All Product",
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
        },
      ],
    trackingData:[
      {date: '2019-11-20', state:'Order', time: [['21:00:58', 'Product order has been placed'], ['21:00:58', 'Product order has been placed']]},
      {date: '2019-11-20', state:'Pickup', time: [
        ['21:00:58', '[Beijing] Beijing Yongtai village of Li Zhize [18,801,485,790] has Lanshou'],
        ['21:00:58', '[Beijing] The express mail has been sent from Beijing Yongtaizhuang and is being sent to Beijing']]},
      {date: '2019-11-20', state:'Pickup', time: [
        ['21:00:58', '[Beijing] Beijing Yongtai village of Li Zhize [18,801,485,790] has Lanshou'],
        ['21:00:58', '[Beijing] The express mail has been sent from Beijing Yongtaizhuang and is being sent to Beijing']]},
      {date: '2019-11-20', state:'Order', time: [['21:00:58', 'Product order has been placed'], ['21:00:58', 'Product order has been placed']]},
      {date: '2019-11-20', state:'Pickup', time: [['21:00:58', 'Product order has been placed'], ['21:00:58', 'Product order has been placed']]},
      {date: '2019-11-20', state:'Order', time: [['21:00:58', 'Product order has been placed'], ['21:00:58', 'Product order has been placed']]},
    ]
  })
}
</script>

<style lang="scss" scoped>
#product-tracking-section {
  padding-top: 64px;
}
@media screen and (max-width: 600px) {
  #product-tracking-section {
    padding-top: 56px;
  }
  .tracking-info__table{
    font-size: 12px
  }
}

.tracking-info{
  border: 1px solid #f1f1f1;
  &__title{
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #f1f1ff;
    background-color: #F7F7F7;
    display: flex;
    align-items: center
  }
  &__stepper{
    width: 100%
  }
  &__table{
    width: 95%;
    background-color: #F7F7F7;
    box-sizing: border-box;
  }
  &__icon{
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: #d6ddd6;
    color: white;
    text-align: center;
    line-height: 50px;
    font-weight: 600;
    font-size: 16px;
    margin: 15px 0;
    position: relative;
  }
  &__icon:after{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    height: 50px;
    width: 2.5px;
    background: #d6d6d6;
    transform: translate(-50%, 100%);

  }
}
</style>