<template>
  <div
    class="pixel"
    :style="{ background: color }"
    @mousedown="color = activeColor"
  ></div>
</template>

<script>
export default {
  computed: {
    activeColor() {
      return this.$store.state.activeColor;
    },
  },
  data() {
    return {
      color: "black",
    };
  },
};
</script>

<style>
.pixel {
  /* height: 100%;
  width: 100%;
  aspect-ratio: 1/1; */
  border: 0.01px solid white;
  /* background: black; */
}
</style>
