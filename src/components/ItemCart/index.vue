<template>
  <v-row class="item__container ml-8 mb-4">
    <div class="item__description">
      <v-avatar size="55px">
        <img src="example.jpg" alt="John" />
      </v-avatar>
      <div class="item__description--left">
        <div class="item__name subtitle-2 font-weight-bold">Men's ware set</div>
        <div class="item__quantity">Qyt: 1</div>
      </div>
      <div class="ml-12 pl-3 subtite-2 font-weight-black">$25.00</div>
    </div>
    <div class="item__comment mt-4">
      <v-text-field
        class="caption"
        label="Comments"
        name="comment"
        type="text"
        outlined
        hide-details
        rounded
      />
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.item__container {
  width: 100%;
}
.item__comment {
  width: 80%;
}
.item__description {
  width: 80%;
  display: flex;
  align-items: center;
  &--left {
    margin-left: 20px;
  }
}
.item__name {
  width: 100%;
}
.item__quantity {
  color: #746a6a;
  font-size: 12px;
  margin-top: 5px;
}
</style>
