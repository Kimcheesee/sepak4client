<template>
  <Payment @next="$emit('next')" @closeDrawer="$emit('closeDrawer')">
    <ItemCart />
    <ItemCart />
    <div class="total__chip">
      <v-chip pill class="ma-2 chip" color="#F1F1F1">
        <span class="subtitle-2 chip__total">Total Cost</span>
        <div class="chip__price subtitle-1 font-weight-bold">$40.00</div>
      </v-chip>
    </div>
  </Payment>
</template>

<script>
import Payment from "../../../layouts/Payment"
import ItemCart from "../../ItemCart"
export default {
  components:{
    Payment,
    ItemCart
  },
}
</script>

<style scoped lang="scss">
.total__chip{
  width: 100%;
  display: flex;
  justify-content: center
}
.chip{
  width: 60%;
  height: 50px;
  position: relative;
  &__price{
    right: 30px;
    position: absolute;
  }
  &__total{
    left: 30px;
    position: absolute;
  }
}
</style>