<template>
	<div id="users-page">
		<h2>Users</h2>

		<loader :show="loader.show" :message="loader.message"></loader>

		<ul>
			<li v-for="user in users.data">
				<user :data="user"></user>
			</li>
		</ul>
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex'
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
		mounted(){
			this.getUsers(10);
		},
		computed: mapState([
			'users',
			'loader'
		])
	}
</script>
