'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import EditUser from '../pages/EditUser.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/users',
			component: Users
		},
		{
			path: '/user/edit',
			component: EditUser
		}
	]
})

export default router
