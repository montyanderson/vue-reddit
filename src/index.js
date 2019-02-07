const Vue = require('vue');
const Router = require('vue-router');

const App = require('./components/App.vue');
const Sub = require('./components/Sub.vue');
const Comments = require('./components/Comments.vue');

const router = new Router({
	routes: [
		{ path: '/r/:name', component: Sub },
		{ path: '/r/:name/:sort', component: Sub },
		{ path: '/r/:sub/comments/:id', component: Comments }
	]
});

Vue.use(Router);

new Vue({
	el: '#app',
	components: {
		App
	},
	render: createElement => createElement('app'),
	router
});
