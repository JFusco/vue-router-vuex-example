<template>
	<nav>
		<ul role="menu">
			<li role="presentation">
				<router-link to="/" exact>home</router-link>
			</li>
			<li role="presentation">
				<router-link to="/users">users</router-link>
			</li>
			<li role="presentation">
				<router-link to="/user/edit">edit user</router-link>
			</li>
		</ul>
	</nav>
</template>

<script type="text/babel">
	import Vue from 'vue'

	Vue.component('app-nav')
</script>
