<template>
  <Payment @next="$emit('next')" @back="$emit('back')" @closeDrawer="$emit('closeDrawer')">
    <div>
      <div class="mb-4 ml-4 subtitle-1 font-weight-bold">Payment Info</div>
      <div class="input__container">
        <div class="mb-4 subtitle-2 mt-2">Cardholder Name</div>
        <v-text-field single-line outlined rounded hide-details></v-text-field>
        <div class="mb-4 subtitle-2 mt-3">Card Number</div>
        <v-text-field single-line outlined rounded hide-details>
          <div slot="append">
            <img class="icon mr-1" height="80%" src="visa.svg" />
            <img class="icon" height="80%" src="mastercard.svg" />
          </div>
        </v-text-field>
        <div class="expiration-container mt-4">
          <div class="expiration-input">
            <div class="mb-2 subtitle-2">Expiration</div>
            <IncreasableInput />
          </div>/
          <div class="expiration-input" style="margin-top: 32px">
            <IncreasableInput />
          </div>
          <div class="expiration-input">
            <div class="mb-2">
              CVV
              <i class="fas fa-info-circle info-circle" />
            </div>

            <v-text-field single-line outlined dense class="cvv-input" />
          </div>
        </div>
        <div>
          <v-btn width="100%" height="40px" depressed color="#007BFF">
            <div style="color:white">Confirm</div>
          </v-btn>
        </div>
        <div class="my-4" style="
						color:#777575;
						font-size:13px">
          Some secureity information Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed
        </div>
      </div>
    </div>
  </Payment>
</template>

<script>
import IncreasableInput from "../../IncreasableInput";
import Payment from "../../../layouts/Payment";
export default {
  components: {
    Payment,
    IncreasableInput
  }
};
</script>

<style scoped>
.input__container {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.icon {
  width: 35px;
  height: 30px;
  cursor: pointer;
  padding: 2px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
}
.expiration-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.expiration-input {
  width: 25%;
}
.cvv-input {
  width: 100%;
  border-radius: 8px;
  color: #777575;
}
.info-circle {
  color: #777575;
  margin-left: 15px;
}
</style>
