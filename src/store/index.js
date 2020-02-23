import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import modules from './modules' // auto import all modules
import createLogger from "vuex/dist/logger";

Vue.use(Vuex)

const debug = process.env.VUE_APP_DEBUG;

export default new Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});