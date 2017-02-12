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
	import { mapActions, mapState } from 'vuex'

	export default {
		components: {
			appHeader,
			appNav
		},

		methods: {
			...mapActions([
				'getUser'
			])
		},

		created(){
			this.getUser()
		}
	}
</script>
