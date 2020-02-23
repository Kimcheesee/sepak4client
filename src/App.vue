<template>
  <v-app style="background-color: #fff">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    //
  },

  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", "Avenir", Helvetica, Arial, sans-serif;
}
</style>
