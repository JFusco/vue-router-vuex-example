<template>
	<div>
		Hello: {{fullName}}
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapGetters } from 'vuex'

	export default Vue.component('app-header', {
		computed: {
			...mapGetters([
				'fullName'
			])
		}
	})
</script>
