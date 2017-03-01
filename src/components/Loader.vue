<template>
	<div>
		<div v-if="loader.show">{{loader.message}}</div>
		<div v-else>Done loading</div>
	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex'

	export default Vue.component('loader', {
		computed: mapState([
			'loader'
		])
	})
</script>
