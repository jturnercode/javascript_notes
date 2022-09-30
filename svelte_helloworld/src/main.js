// import App from './App.svelte';
import App from './MapApp.svelte';


// Basic app examples
// const app = new App({
// 	target: document.body
// });

// export default app;

// Google Map example
const app = new App({
	target: document.body,
	props: {
		ready: false,
	}
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;
