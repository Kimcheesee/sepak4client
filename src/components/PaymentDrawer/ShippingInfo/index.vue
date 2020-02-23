<template>
  <Payment @closeDrawer="$emit('closeDrawer')" @next="$emit('next')" @back="$emit('back')">
    <div>
      <div class="mb-4 ml-12 subtitle-1 font-weight-bold">Shipping Information</div>
      <v-form>
        <div class="shipping__container">
          <v-text-field
            class="mb-4"
            v-for="textField of textFields"
            v-bind:key="textField.label"
            :label="textField.label"
            :name="textField.label"
            :type="textField.type"
            outlined
            hide-details
            rounded
          />
        </div>
      </v-form>
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
    textFields: [
      { label: "Name", type: "text" },
      { label: "Phone Number", type: "text" },
      { label: "Location", type: "text" }
    ]
  })
};
</script>

<style scoped lang="scss">
.shipping__container {
  width: 75%;
  margin: 0 auto;
}
</style>
