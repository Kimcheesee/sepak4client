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
  async login({ commit }, { userName, password }) {
    try {
      const response = await post(BASE_URL + '/sessions', {
        data: {
          auth: userName,
          password: password
        }
      });
      commit('SET_DATA', response.data.user);
      localStorage.setItem('access_token', response.data.access_token);
      return 200;
    } catch (error) {
      return error.response.status;
    }
  },

  async checkSession({ commit }, access_token) {
    try {
      const config = {
        headers: {
          Authorization: 'bearer ' + access_token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      const response = await get(BASE_URL + '/sessions', config);
      commit('SET_DATA', response.data.data);
      return 200;
    } catch (error) {
      return error.response.status;
    }
  },

  logout({ commit }) {
    localStorage.removeItem('access_token');
    commit('RESET');
    router.push('/login');
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
