<template>
  <Payment
    @closeDrawer="$emit('closeDrawer')"
    @onDoneCloseDrawer="$emit('onDoneCloseDrawer')"
    @next="$emit('next')"
    @back="$emit('back')"
    final
  >
    <div class="container">
      <i class="fas fa-check-circle icon mb-4" />
      <div class="headline mb-8">Thank You</div>
      <div class="caption-detail">
        Congratulation! Thank for your order. We will check contact you as soon
        as possible. Have a nice day.
      </div>
    </div>
  </Payment>
</template>

<script>
import Payment from "../../../layouts/Payment";
export default {
  components: {
    Payment
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  font-size: 3rem;
  color: #38c731;
}
.caption-detail {
  width: 80%;
  color: #9a9a9a;
  font-size: 14px;
}
</style>
