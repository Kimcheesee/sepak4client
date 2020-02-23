<template>
  <v-btn icon max-width="36" max-height="36" rounded text @click="handleClick">
    <v-icon color="black" dense size="25px" class="nav__icons">{{ navIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  event: String,
  props: {
    navIcon: String,
    onclick: Function
  },
  methods: {
    handleClick() {
      this.onclick();
    }
  }
};
</script>

<style>
</style>