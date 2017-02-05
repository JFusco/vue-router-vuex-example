'use strict';

import * as type from './types'
import actions from './actions'

const state = {
	isFetching: false,
	error: null,
	data: []
}

const mutations = {
	[type.REQUEST_USERS](state) {
		state.isFetching = true
		state.error = null
	},

	[type.REQUEST_USERS_SUCCESS](state, action) {
		state.isFetching = false
		state.data = action.payload
		state.error = null
	},

	[type.REQUEST_USERS_ERROR](state, action) {
		state.isFetching = false
		state.error = action.error
	}
}

export default {
	state,
	mutations,
	actions
}
