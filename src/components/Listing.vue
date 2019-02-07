<template>
	<div>
		<Post v-for="post in posts" v-bind:post="post"></Post>
	</div>
</template>

<script>
const axios = require('axios');

const Post = require('./Post.vue');

module.exports = {
	props: [
		'sub',
		'sort'
	],
	data: () => ({
		posts: []
	}),
	components: {
		Post
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
