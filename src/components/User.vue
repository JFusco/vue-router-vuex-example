<template>
	<span>
		{{fullName}} - {{data.gender}}

		<router-link :to="{name: 'userdetail', params: {id: data.id.value}}">user detail</router-link>
	</span>
</template>

<script type="text/babel">
	import Vue from 'vue'

	export default Vue.component('user', {
		props: {
			data: {
				type: Object,
				required: true
			}
		},

		computed: {
			fullName(){
				return `${this.data.name.title} ${this.data.name.first} ${this.data.name.last}`;
			}
		}
	})
</script>
