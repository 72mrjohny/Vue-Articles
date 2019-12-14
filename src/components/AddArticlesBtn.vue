<template>
  <div>
    <button type="submit" v-on="click">
      <i class="fas fa-arrow-circle-down"></i>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    click: { type: Function }
  },
  mounted() {
    this.click();
  }
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  font-size: 40px;
}
</style>
