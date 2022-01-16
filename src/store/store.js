import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: { favorites: [] },
    mutations: {
        addToFavorites(state, payload) {
            state.favorites.push(payload)
        }
    },
    actions: {},
    getters: {},
});

export default store;