<template>
  <div class="table-wrapper">
    <div class="active-color-wrapper">
      <h5>active color</h5>
      <div
        class="active-color"
        :style="{ background: $store.state.activeColor }"
      ></div>
    </div>
    <div class="colors">
      <div
        v-for="(color, index) in colors"
        :key="index"
        :style="{ background: color }"
        @click="$store.dispatch('setColor', color)"
      ></div>
    </div>
    <div
      class="table"
      :style="{
        gridTemplateColumns:
          'repeat( ' + $store.state.count.columns + ' , 1fr)',
        gridTemplateRows: 'repeat( ' + $store.state.count.rows + ' , 1fr)',
      }"
    >
      <Pixel
        class="pixel"
        v-for="(pixel, index) in $store.getters.totalCount"
        :key="index"
      ></Pixel>
    </div>
  </div>
</template>
<script>
import Pixel from "../components/Pixel.vue";
export default {
  components: { Pixel },
  data() {
    return {
      colors: [
        "red",
        "aqua",
        "yellow",
        "violet",
        "white",
        "gray",
        "lightGray",
        "peachPuff",
      ],
    };
  },
  Computed: {
    rows() {
      return this.$store.state.count.rows;
    },
    columns() {
      return this.$store.state.count.columns;
    },
    activeColor() {
      return this.$store.state.activeColor;
    },
  },

  mounted() {
    console.log(this.$store.state.count.columns);
  },
};
</script>
<style scoped lang="scss">
.table-wrapper {
  display: grid;
  place-items: center;
}
.active-color-wrapper {
  display: flex;
  align-items: center;

  .active-color {
    margin-left: 1rem;
    height: 20px;
    width: 20px;
    border: 1px solid black;
  }
}
.colors {
  display: flex;
  div {
    height: 20px;
    width: 20px;
    margin: 0.5rem;
    border: 1px solid black;
  }
}

.activate {
  border: 2px solid black;
}

.table {
  height: 500px;
  width: 500px;
  display: grid;
}
</style>
