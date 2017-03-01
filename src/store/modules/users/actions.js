'use strict';

import Vue from 'vue'
import VueResource from 'vue-resource'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'
import * as type from './types'

const actions = {
	getUsers({ commit }, howMany) {
		commit(type.REQUEST_USERS)
		commit(SHOW_LOADER, {
			message: 'Fetching users...'
		})

		Vue.http.get(`https://randomuser.me/api/?results=${howMany}&nat=us&seed=2e0c669bcecbc7dd`)
			.then(resp => {
				commit(type.REQUEST_USERS_SUCCESS, {
					payload: resp.body.results
				})

				commit(HIDE_LOADER)
			})
			.catch(error => {
				commit(type.REQUEST_USERS_ERROR, {
					error
				})

				commit(SHOW_LOADER, {
					message: 'There was an error fetching the users'
				})
			})
	}
}

export default actions;
