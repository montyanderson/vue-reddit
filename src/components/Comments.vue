<template>
	<div>
		<h2>{{sub}}</h2>

		<Listing v-bind:sub="name" v-bind:sort="sort"></Listing>
	</div>
</template>

<script>
const axios = require('axios');

module.exports = {
	data: () => ({
		post: null
	}),
	computed: {
		sub() {
			return this.$route.params.sub;
		},
		id() {
			return this.$route.params.id;
		}
	},
	async created() {
		const {
			data: {
				data: {
					children
				}
			}
		} = await axios.get(`https://api.reddit.com/r/${this.sub}/${this.sort}`);

		this.posts = children;
	}
};
</script>
