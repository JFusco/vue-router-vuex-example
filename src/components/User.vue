<template>
	<span>
		{{data.name.title}} {{data.name.first}} {{data.name.last}} - {{data.gender}}
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
		}
	})
</script>
