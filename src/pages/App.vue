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
	import popover from '../components/Popover.vue'
	import { mapActions } from 'vuex'

	export default {
		components: {
			appHeader,
			appNav,
			popover
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
