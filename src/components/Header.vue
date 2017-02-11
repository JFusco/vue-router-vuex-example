<template>
	<div>
		Hello: {{user.firstName}} {{user.lastName}}
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapState } from 'vuex'

	export default Vue.component('app-header', {
		computed: mapState([
			'user'
		])
	})
</script>
