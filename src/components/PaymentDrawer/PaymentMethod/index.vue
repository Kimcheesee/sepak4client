<template>
  <Payment @closeDrawer="$emit('closeDrawer')" @next="$emit('next')" @back="$emit('back')">
    <div>
      <div class="container subtitle-1 font-weight-bold ml-7">Payment Method</div>
      <div class="method-container">
        <div class="payment-method__container">
          <img :src="method" class="icon" v-for="(method, index) in methods" :key="index" />
        </div>
        <div class="payment-method__container mt-8">
          <i class="mdi mdi-truck-outline mdi-24px" />
          <div>Cash on Delivery</div>
        </div>
      </div>
    </div>
  </Payment>
</template>

<script>
import Payment from "../../../layouts/Payment";
export default {
  components: {
    Payment
  },
  data: () => ({
    methods: ["visa.svg", "mastercard.svg", "unionpay.svg"]
  })
};
</script>

<style scoped>

.payment-method__container {
  margin-top: 10px;
  border: 2px solid #f1f1f1;
  height: 50px;
  width: 80%;
  border-radius: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.method-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  align-self: flex-start;
}
.icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
