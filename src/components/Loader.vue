<template>
	<div>
		<div v-if="show">{{message}}</div>
		<div v-if="!show">Done loading</div>
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'

	export default Vue.component('loader', {
		props: {
			message: {
				type: String,
				required: true
			},
			show: {
				type: Boolean,
				required: true
			}
		}
	})
</script>
