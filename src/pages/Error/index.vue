<template>
  <v-container class="text-center" fill-height style="height: calc(100vh - 58px);">
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">Whoops, {{ status }}</h1>

        <p class="ma-10 red--text">{{ message }}</p>

        <v-btn
          @click="getOut"
          color="primary"
          outlined
        >Get me out of here!</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Error",
  props: {
    status: {
      type: Number,
      default: 404
    },
    message: {
      type: String,
      default: "Page not found"
    }
  },
  methods: {
    getOut() {
      this.$store.dispatch('User/logout')
    }
  }
};
</script>