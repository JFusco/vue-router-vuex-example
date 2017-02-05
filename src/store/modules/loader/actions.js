'use strict';

import Vue from 'vue'
import VueResource from 'vue-resource'
import * as type from './types'

const actions = {
	showLoader({ commit }, message){
		commit(type.SHOW_LOADER, {
			message
		})
	},

	hideLoader({ commit }){
		commit(type.HIDE_LOADER)
	}
}

export default actions;
