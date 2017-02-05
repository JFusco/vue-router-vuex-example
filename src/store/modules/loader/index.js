'use strict';

import * as type from './types'
import actions from './actions'

const state = {
	show: false,
	message: ''
}

const mutations = {
	[type.SHOW_LOADER](state, action) {
		state.show = true;
		state.message = action.message
	},

	[type.HIDE_LOADER](state) {
		state.show = false;
		state.message = '';
	}
}

export default {
	state,
	mutations,
	actions
}
