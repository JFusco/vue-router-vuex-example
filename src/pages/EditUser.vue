<template>
	<div>
		<h2>Edit user</h2>

		<input v-model="form.firstName" placeholder="First name" />
		<input v-model="form.lastName" placeholder="Last name" />
		<input v-model="form.age" type="number" placeholder="Age" />

		<select v-model="form.gender">
			<option value="male">male</option>
			<option value="female">female</option>
		</select>

		<button v-on:click="save">save</button>
		<button v-on:click="reset">reset</button>
	</div>
</template>

<script type="text/babel">
	import { mapActions, mapState } from 'vuex'

	export default {
		data: () => {
			return {
				form: {
					firstName: '',
					lastName: '',
					age: '',
					gender: ''
				}
			}
		},

		methods: {
			...mapActions([
				'updateUser'
			]),

			save(){
				this.updateUser(this.form)
			},

			reset(){
				this.update()
			},

			update(){
				this.form.firstName = this.user.firstName
				this.form.lastName = this.user.lastName
				this.form.age = this.user.age
				this.form.gender = this.user.gender
			}
		},

		mounted(){
			this.update()
		},

		computed: mapState([
			'user'
		])
	}
</script>
