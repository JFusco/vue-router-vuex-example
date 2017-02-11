'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import users from './modules/users/index'
import loader from './modules/loader/index'
import user from './modules/user'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		users,
		user,
		loader
	},
	strict: false,
	middlewares: debug ? [createLogger()] : []
})
