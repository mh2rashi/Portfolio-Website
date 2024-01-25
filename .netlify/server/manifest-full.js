export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/cibc.png","images/city-mississauga.png","images/icons/github.png","images/icons/linkedin.png","images/icons/video.png","images/manulife.png","images/morneau.jpg","images/munich-re.jpg","images/profile-pic.png","images/sun-life.jpg","images/technologies/c++.png","images/technologies/css.png","images/technologies/express.png","images/technologies/github.png","images/technologies/html.png","images/technologies/js.jpg","images/technologies/js.png","images/technologies/js.svg","images/technologies/mongo.jpg","images/technologies/mongo.png","images/technologies/node.png","images/technologies/python.png","images/technologies/react.png","images/technologies/sql.png","images/technologies/svelte.png","images/technologies/tailwind.png","images/UW.jpg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.241dd750.js","app":"_app/immutable/entry/app.8f3ac3af.js","imports":["_app/immutable/entry/start.241dd750.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/singletons.7f0e3549.js","_app/immutable/entry/app.8f3ac3af.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
