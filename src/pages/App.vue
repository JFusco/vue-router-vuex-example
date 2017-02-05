<template>
	<div>
		<!-- Header -->
		<app-header></app-header>

		<!-- Navigation -->
		<app-nav></app-nav>

		<!-- Main content -->
		<div role="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/babel">
	import appHeader from '../components/Header.vue'
	import appNav from '../components/Nav.vue'

	export default {
		components: {
			appHeader,
			appNav
		}
	}
</script>
