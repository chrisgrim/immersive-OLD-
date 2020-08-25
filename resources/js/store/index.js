    import Vue from 'vue'
    import Vuex from 'vuex'
    // import actions from './actions'
    // import mutations from './mutations'
    // import getters from './getters'
    // import state from "./state";

    // export default new Vuex.Store({
    //     state,
    //     mutations,
    //     getters,
    //     actions
    // })

    Vue.use(Vuex);

export default new Vuex.Store({
state: {
    user: {},
    map: false,
    mobile: true,
    searchtype: 'Immersive Online',
    save: 'ttis',
    presearch: [],
  },


  
mutations: {
    adduser (state, user) {
        state.user = user;
    },
    showmap (state, map) {
        state.map = map
    },
    ismobile (state, mobile) {
        state.mobile = mobile
    },
    searchtype (state, searchtype) {
        state.searchtype = searchtype
    },
    presearch (state, presearch) {
        state.presearch = presearch
    },
    saveevent (state, save) {
        state.save = save
    },
},
actions: {
    async getContent ({ commit }) {
        try {
            let {data} = await axios.get('/api/search/navbar/content')
            commit('presearch', data.data)
        } catch(err) {
          console.log(err)
        }
    }
},
  
});