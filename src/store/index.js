import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: { rows: 30, columns: 30 },
    activeColor: "white",
  },
  actions: {
    setCount(context, count) {
      context.commit("setCount", count);
    },
    setColor(context, color) {
      context.commit("setColor", color);
    },
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    setColor(state, color) {
      state.activeColor = color;
    },
  },
  getters: {
    totalCount(state) {
      return state.count.rows * state.count.columns;
    },
  },

  modules: {},
});
