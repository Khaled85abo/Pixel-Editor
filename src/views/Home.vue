<template>
  <div class="home">
    <h2>Choose Columns and Rows</h2>
    <form @submit.prevent="submit">
      <div>
        <input
          type="range"
          min="10"
          max="50"
          id="columns"
          placeholder="Columns"
          v-model="count.columns"
        />
        <label for="columns">columns {{ count.columns }}</label>
      </div>
      <div>
        <input
          type="range"
          min="10"
          max="50"
          id="rows"
          placeholder="Rows"
          v-model="count.rows"
        />
        <label for="rows">Rows: {{ count.rows }}</label>
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      count: {
        rows: 30,
        columns: 30,
      },
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("setCount", this.count);
      this.$router.push("/table");
    },
  },
};
</script>
