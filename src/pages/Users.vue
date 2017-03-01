<template>
	<div id="users-page">
		<h2>Users</h2>

		<loader></loader>

		<ul v-if="!users.isFetching">
			<li v-for="user in users.data">
				<user :data="user"></user>
			</li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script type="text/babel">
	import { mapActions, mapState } from 'vuex'
	import store from '../store/index'
	import loader from '../components/Loader.vue'
	import user from '../components/User.vue'

	export default {
		components: {
			loader,
			user
		},

		methods: {
			...mapActions([
				'getUsers'
			])
		},

		beforeRouteEnter(to, from, next) {
			store.dispatch('getUsers', 10)
				.then(() => {
					next()
				})
		},

		computed: mapState([
			'users',
			'loader'
		])
	}
</script>

<style scoped>
	#users-page {
		position: relative;
	}
	#users-page ul {
		list-style: none;
		padding: 0;
		margin: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 14px;
		width: 300px;
	}
	#users-page ul li {
		border-bottom: 1px dashed lightgray;
		padding: 10px 5px;
		display: flex;
		justify-content: space-between;
	}
	#users-page .fetching {
		position: absolute;
		font-weight: bold;
	}
</style>
