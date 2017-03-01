<template>
	<div>
		<h2>User Detail</h2>

		<div v-if="user">
			<div>{{fullName}}</div>
			<div>{{user.email}}</div>
			<img :src="user.picture.large" />
		</div>
	</div>
</template>

<script type="text/babel">
	import { mapState, mapGetters } from 'vuex'

	export default {
		props: {
			id: {
				type: String,
				required: true
			}
		},

		computed: {
			...mapState([
				'users'
			]),

			user(){
				const length = this.users.data.length;

				for(let i = 0; i < length; i++) {
					const user = this.users.data[i]

					if (user.id.value === this.id) return user
				}
			},

			fullName(){
				return `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`
			}
		}
	}
</script>
