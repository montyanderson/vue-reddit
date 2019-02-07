<template>
	<div class="card">
		<div class="row no-gutters">
			<div class="col-1 text-margin">
				<p style="text-align: center">{{post.data.score}}</p>
			</div>

			<div class="col-2">
				<img v-bind:src="post.data.thumbnail" class="img-fluid" alt="">
			</div>

			<div class="col text-margin">
				<div class="card-block px-2">
					<h4 class="card-title">{{post.data.title}}</h4>
					<p class="card-text">test</p>
				</div>
			</div>
		</div>

		<!--<div class="card-footer w-100 text-muted">

		</div>-->
	</div>
</template>

<style>
.card {
	margin-bottom: 1rem;
}

.text-margin {
	margin-top: 1rem;
}
</style>

<script>
module.exports = {
	props: [
		'post'
	]
};
</script>
