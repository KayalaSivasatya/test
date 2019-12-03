import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null
  },
  mutations: {
    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    }
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');

      axios.post('https://4411465c.ngrok.io/api/token/', {
        ...loginData
      })
      .then(response => {this.loginData=response.data.json
      console.log(response)
      if (response.status == '200') {
       this.$router.push('/About')
      }
      })
      .catch(error => {
        commit('loginStop', error.response.data.error);
        commit('updateAccessToken', null);
      })
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    }
  }
})