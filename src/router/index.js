'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import EditUser from '../pages/EditUser.vue'
import UserDetail from '../pages/UserDetail.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/users',
			component: Users,
			name: 'users',
			children: [
				{
					path: ':id',
					component: UserDetail,
					props: true,
					name: 'userdetail'
				}
			]
		},
		{
			path: '/user/edit',
			component: EditUser,
			name: 'edituser'
		}
	]
})

export default router
