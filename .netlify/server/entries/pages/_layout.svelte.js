import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="contact" class="py-20 sm:py-32 border-t border-solid border-cyan-500 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-fttk1l"><div name="contact" class="flex flex-col w-full mx-auto max-w-[600px] justify-center"><div class="pb-4 justify-center place-items-center"><p class="font-semibold text-3xl sm:text-4xl md:text-5xl poppins text-cyan-400 text-center">Contact <span class="font-semibold text-3xl sm:text-4xl md:text-5xl poppins text-white text-center">me.</span></p> <p class="text-large sm:text-xl md:text-2xl text-center">Submit the form below to get in touch with me.</p></div> <div class="justify-center max-w-screen-lg flex flex-col items-center w-full px-2"><form action="https://getform.io/f/270fa34c-48dd-42cd-bead-72f6135280e8" method="POST" class="flex flex-col w-full wvh"><input type="text" name="name" placeholder="Enter your email..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"> <input type="text" name="email" placeholder="Enter your name..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"> <textarea name="message" rows="10" placeholder="Enter your message..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"></textarea> <button class="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button></form></div></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let { tabs = [
    { name: "Home ", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skill" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" }
  ] } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? " py-4 bg-slate-950 border-cyan-800" : " py-6 bg-transparent border-transparent"),
    0
  )}><div class="flex justify-between items-center h-16 w-full"> <h1 class="text-4xl font-medium" data-svelte-h="svelte-1agrsoc"><b class="font-bold poppins">Hamza</b> <span class="">Rashid</span></h1>  <div class="hidden sm:block ml-auto"><div class="sm:flex justify-items:end justify-between gap-6 mt-left">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-cyan-400 text-xl"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}</div></div></div>  <div class="sm:hidden flex items-center" data-svelte-h="svelte-1bhau08"><button id="mobile-menu-btn" onclick="mobile-menu" type="button" class="text-white duration-200 hover:text-cyan-400 focus:outline-none focus:text-light-gray" aria-label="Toggle menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div> <div id="mobile-menu" class="hidden sm:hidden flex duration-500"><div class="px-2 pt-2 pb-3 space-y-1 h-full">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-500 hover:text-cyan-400 text-xl"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}</div></div></header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center" data-svelte-h="svelte-1ruri30"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
