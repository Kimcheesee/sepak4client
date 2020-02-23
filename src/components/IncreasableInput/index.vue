<template>
  <v-text-field single-line outlined dense class="text-field">
    <div slot="append" class="append-icon">
      <i class="fas fa-sort-up icon" />
      <i class="fas fa-sort-down icon icon-bottom" />
    </div>
  </v-text-field>
</template>

<script>
export default {};
</script>

<style scoped>
.text-field {
  width: 100%;
  border-radius: 8px;
  color: #777575;
}
.append-icon {
  display: flex;
  flex-direction: column;
}
.icon {
  cursor: pointer;
  font-size: 20px;
  color: #777575;
}
.icon-bottom {
  position: absolute;
  bottom: 10px;
}
</style>
