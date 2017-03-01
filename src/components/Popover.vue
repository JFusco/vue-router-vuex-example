<template>
	<div class="popover" v-bind:class="{ open: isOpen }">
		<div class="popover__face" :aria-owns="id" v-on:click="onPopoverToggle">
			<slot name="face">
				<div>popover face</div>
			</slot>
		</div>

		<div class="popover__container" :id="id" v-if="isOpen">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script type="text/babel">
	'use strict'

	import Vue from 'vue'

	const popovers = []

	export default Vue.component('popover', {
		props: {
			name: {
				type: String,
				required: true
			}
		},

		data(){
			return {
				isOpen: false
			}
		},

		methods: {
			onPopoverToggle(e) {
				e.stopPropagation()

				if (this.isOpen){
					this.isOpen = false

					return
				}

				const length = popovers.length

				if (popovers.length > 1) {
					for(let i = 0; i < length; i++) {
						const popover = popovers[i]

						if (popover.isOpen) popover.isOpen = false
					}
				}

				this.isOpen = true
			},

			onDocumentClick(){
				this.isOpen = false
			}
		},

		computed: {
			id(){
				return `popover-${this.name}`
			}
		},

		mounted(){
			document.documentElement.addEventListener('click', this.onDocumentClick, false)

			popovers.push(this)
		},

		beforeDestroy(){
			document.documentElement.removeEventListener('click', this.onDocumentClick, false)

			popovers.length = 0
		}
	})
</script>

<style lang="sass" scoped>
	@import '~styles/variables';

	.popover {
		float: left;
		position: relative;

		&__face {
			cursor: pointer;
		}

		&__container {
			position: absolute;
			z-index: 100;
        }
	}
</style>
