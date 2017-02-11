<template>
	<div>
		<h2>Edit user</h2>

		<input v-model="user.firstName" placeholder="First name" />
		<input v-model="user.lastName" placeholder="Last name" />
		<input v-model="user.age" type="number" placeholder="Age" />

		<select v-model="user.gender">
			<option value="male">male</option>
			<option value="female">female</option>
		</select>

		<button v-on:click="save">save</button>
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex'

	export default {
		methods: {
			...mapActions([
				'getUser',
				'updateUser'
			]),

			save(){
				this.updateUser(this.user)
			}
		},

		mounted(){
			this.getUser()
		},

		computed: mapState([
			'user'
		])
	}
</script>
