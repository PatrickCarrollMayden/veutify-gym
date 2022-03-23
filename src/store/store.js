import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedState'
import SecureLs from 'secure-ls';
const ls = new SecureLs({isCompression: false})

import * as exercises from './modules/exercises'

export default new Vuex.Store(
    {
        modules: {

        },
        state: {

        },
        plugins: {

        }
    }
)