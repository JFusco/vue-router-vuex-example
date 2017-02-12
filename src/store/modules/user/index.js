'use strict';

import * as type from './types'
import actions from './actions'

const state = {
	firstName: 'Joe',
	lastName: 'Fusco',
	age: 32,
	gender: 'male'
}

const mutations = {
	[type.GET_USER](state, action) {
		if(action.user !== null){
			const storedUser = JSON.parse(action.user);

			Object.assign(state, storedUser)
		}
	},

	[type.UPDATE_USER](state, action) {
		Object.assign(state, action.user)
	}
}

const getters = {
	fullName: state => {
		return `${state.firstName} ${state.lastName}`
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
