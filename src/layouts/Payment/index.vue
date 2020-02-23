<template>
  <v-container class="d-flex alight-center payment justify-center">
    <v-row justify="center">
      <div class="payment__header">
        <i class="mdi mdi-cart-outline mr-2" style="font-size:25px" />
        <div class="headline">
          Check Out
          <i
            class="fas fa-chevron-left payment__icon payment__icon--left"
            @click="$emit('back')"
          />
          <i
            class="fas fa-times payment__icon payment__icon--right d-flex d-sm-none"
            @click="$emit('closeDrawer')"
          />
        </div>
      </div>
      <div class="payment__content">
        <slot></slot>
        <div class="payment__button">
          <v-btn
            v-if="final"
            width="100%"
            height="50px"
            color="primary"
            @click="$emit('onDoneCloseDrawer')"
          >Done</v-btn>
          <v-btn v-else width="100%" height="50px" color="primary" @click="$emit('next')">
            Continue
            <i class="fas fa-arrow-right" style="width:40px; font-size:20px" />
          </v-btn>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    final: {
      type: Boolean
    }
  }
};
</script>

<style scoped lang="scss">
.payment {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &__header {
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1px solid #cfcccc;
  }
  &__button {
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  &__content {
    height: 82%;
    width: 100%;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
  }
  &__icon{
    position: absolute;
    top: 15px;
    color: #cfcccc;
    font-size: 30px;
    opacity: .5;
    cursor: pointer;
    &--left{
      left: 20px;
    }
    &--right{
      right: 20px;
    }
  }
}
@media screen and (max-width:600px) {
  .payment__icon{
    font-size: 25px;
  }
}
</style>
