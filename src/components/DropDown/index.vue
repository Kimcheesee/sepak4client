<template>
  <v-select
    class="phonenumber-region ma-0 pa-0"
    rounded
    :items="phoneRegions"
    filled
    menu-props="auto"
    hide-details
    dense
    disable-lookup
    value="+855"
    item-text="name"
    item-value="name"
    @change="(value) => $emit('onChangePhoneRegion', value)"
  >
    <div slot="append" style="display:none" />
    <template slot="selection" slot-scope="data">
      <img :src="data.item.img_url" class="flag-icon" />
      {{data.item.name}}
    </template>
    <template slot="item" slot-scope="data">
      <img :src="data.item.img_url" class="flag-icon" />
      {{data.item.name}}
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    phoneRegions: Array
  }
};
</script>

<style>
.flag-icon {
  width: 30px;
  height: 20px;
}
.phonenumber-region {
  bottom: 8px;
  width: 120px;
}
@media screen and (max-width: 500px) {
  .phonenumber-region {
    width: 100px;
    margin: 0;
    padding: 0;
    right: 10px;
    font-size: 12px;
  }
}
</style>