import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import counterModule from './counter/index';

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations,
    actions,
    getters 
});

export default store;