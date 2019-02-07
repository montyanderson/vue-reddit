<template>
	<div>
		<h2>{{name}}</h2>

		<Listing v-bind:sub="name" v-bind:sort="sort"></Listing>
	</div>
</template>

<script>
const Listing = require('./Listing.vue');

module.exports = {
	props: [
		'name'
	],
	computed: {
		name() {
			return this.$route.params.name || 'all';
		},
		sort() {
			return this.$route.params.sort || 'hot';
		}
	},
	components: {
		Listing
	}
};
</script>
