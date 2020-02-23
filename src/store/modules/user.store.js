import { post, get } from 'axios';
import router from '../../router';

const BASE_URL = process.env.VUE_APP_BASE_URL;

// use to create new state when want to reset state
const initState = () => ({
  data: null
});

const state = initState();

const getters = {
  getData: state => state.data
};

const actions = {
  async login({ commit }, { userName, password, keepSignIn }) {
    try {
      const response = await post(BASE_URL + "/sessions", {
        data: {
          auth: userName,
          password: password
        }
      });
      commit("SET_DATA", response.data.user);
      if (keepSignIn) {
        localStorage.setItem("access_token", response.data.access_token);
      }
      return 200;
    } catch (error) {
      if (error.response) {
        return error.response.status;
      }
      return error.message;
    }
  },

  async checkSession({ commit }, access_token) {
    try {
      const config = {
        headers: {
          Authorization: "bearer " + access_token,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      const response = await get(BASE_URL + "/sessions", config);
      commit("SET_DATA", response.data.data);
      return 200;
    } catch (error) {
      if (error.response) {
        return error.response.status;
      }
      return 500;
    }
  },

  logout({ commit }) {
    console.log("logout");
    localStorage.removeItem("access_token");
    commit("RESET");
    router.push("/login");
  },

  async create({ commit }, {firstName, lastName, password, email, phone}) {

    const data = new FormData()
    data.set('data[email]', email)
    data.set('data[password]', password)
    data.set('data[username]', firstName + lastName)
    data.set('data[phone]', phone)

    const config = {
      headers: {
        _csrf_token: "MwwVGFw1TUYpXjJsPxo9ZkxVdDI7AAAAaKlAnP5uzfqUuByMyb8PUA==",
        "x-csrf-token":
          "MwwVGFw1TUYpXjJsPxo9ZkxVdDI7AAAAaKlAnP5uzfqUuByMyb8PUA==",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    try {
      const response = await post(BASE_URL + "/users", data, config);
      commit("SET_DATA", response.data.data);
      router.push("/home");
      return 201
    } catch (error) {
      if (error.response) {
        const err = error.response.data.errors
        throw {
          type: Object.keys(err)[0],
          message: Object.keys(err)[0] + " " + Object.values(err)[0]
        };
      }
      throw(error.message)
    }
  }
};

const mutations = {
  SET_DATA: (state, payload) => {
    return (state.data = payload);
  },

  RESET: () => {
    const newState = initState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
