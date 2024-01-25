

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5d248ac6.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js","_app/immutable/chunks/singletons.7f0e3549.js"];
export const stylesheets = [];
export const fonts = [];
