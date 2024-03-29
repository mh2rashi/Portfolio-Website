import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let techs = [
    {
      id: 1,
      src: "images/technologies/python.png",
      title: "Python",
      style: "shadow-blue-500"
    },
    {
      id: 2,
      src: "images/technologies/c++.png",
      title: "C++",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: "images/technologies/sql.png",
      title: "SQL",
      style: "shadow-gray-500"
    },
    {
      id: 4,
      src: "images/technologies/html.png",
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 5,
      src: "images/technologies/css.png",
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 6,
      src: "images/technologies/react.png",
      title: "React",
      style: "shadow-cyan-500"
    },
    {
      id: 7,
      src: "images/technologies/github.png",
      title: "GitHub",
      style: "shadow-gray-500"
    },
    {
      id: 8,
      src: "images/technologies/svelte.png",
      title: "SvelteKit",
      style: "shadow-red-500"
    },
    {
      id: 9,
      src: "images/technologies/node.png",
      title: "Node.js",
      style: "shadow-green-500"
    },
    {
      id: 10,
      src: "images/technologies/express.png",
      title: "Express.js",
      style: "shadow-gray-500"
    },
    {
      id: 11,
      src: "images/technologies/mongo.png",
      title: "MongoDB",
      style: "shadow-green-500"
    },
    {
      id: 12,
      src: "images/technologies/js.png",
      title: "JavaScript",
      style: "shadow-yellow-500 w-105"
    }
  ];
  return `<main id="home" class="flex flex-col flex-1 p-4 gap-24"><section class="grid grid-cols-1 lg:grid-cols-2 gap-10" data-svelte-h="svelte-1d2w10w"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="text-center font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-cyan-400">Hamza Rashid</span> <br>Aspiring
                <span class="poppins text-cyan-400">Software Developer</span></h2> <p class="text-center font-semibold text-4xl sm:text-xl md:text-4xl overflow-hidden">My <span class="text-cyan-400">favorite tech</span> includes
                <span id="typed-output" class="text-cyan-400"></span></p> <div class="justify-center gap-4 grid grid-cols-1 lg:grid-cols-2 "><button class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3"><i class="fa-solid fa-file cursor-pointer text-3xl"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Download Resume</h4></button> <button class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2"><i class="fa-solid fa-envelope cursor-pointer text-3xl mt-[-0.25rem]"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Email Info</h4></button> <button class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3"><i class="fa-brands fa-github cursor-pointer text-3xl"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">GitHub</h4></button> <button class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2"><i class="fa-brands fa-linkedin cursor-pointer text-3xl mt-[-0.25rem]"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">LinkedIn</h4></button></div></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile-pic.png", 0)} alt="Profile Picture" class="object-cover z-[2] max-h-[70vh]"></div></section> <section id="about" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative " data-svelte-h="svelte-zp0x6h"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl">Thanks for taking the time to get to know me.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-cyan-400">about me.</span></h3></div> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center"><div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">01</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">a self taught developer</h3> <p class="sm:text-lg md:text-xl">I taught myself to code using free online
                        resources and absolutely fell in love with the creativity and
                        problem solving that is involved in developing and engineering
                        innovative new online experiences. Starting of with JavaScript,
                        HTML &amp; CSS and evolving my knowledge base to include JavaScript
                        frameworks, backend programming, design, cloud services and much much more.</p></div></div></div> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center"><div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">02</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">a product design &amp; UX finatic</h3> <p class="sm:text-lg md:text-xl">Carefully crafting and designing amazing
                            user experiences allows me to express and experiment with
                            every morsel of creativity I have. I love the challenge of learning
                            new design concepts and enabling users with amazing online experiences.</p></div></div></div></section> <section id="skill" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4" data-svelte-h="svelte-6qdbej"><h6 class="text-large sm:text-xl md:text-2xl">Here&#39;s some of the technologies i&#39;ve worked with.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">My <span class="poppins text-cyan-400">skills.</span></h3></div> <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">${each(techs, ({ id, src, title, style }) => {
    return `<div${add_attribute("key", id, 0)}${add_attribute("class", `shadow-md hover:scale-105 duration-500 py-2 rounded-lg mx-auto justify-center ${style} flex flex-col items-center`, 0)}><img${add_attribute("src", src, 0)} alt="images" class="w-1/2 mb-2"> <p class="mt-2">${escape(title)}</p> </div>`;
  })}</div></section> <section id="portfolio" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative" data-svelte-h="svelte-tmxmul"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl">Curious to see my work?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Have a look at my <span class="poppins text-cyan-400">portfolio.</span></h3></div> <div class="grid grid-cols-1 sm:grid-cols-2 flex justify-center flex-col gap-10 "><div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm"><div class="flex flex-col gap-10 justify-around"><img${add_attribute("src", "images/cibc.png", 0)} alt="project 1" class="rounded-xl w-90 h-90 "> <h3 class="text-xl sm:text-xl md:text-2xl">Multi-Threaded Limit OrderBook &amp; Trading Engine</h3> <p>A fast, and efficient trade matching engine built in C++ utilizing Chrono, BOOST, and STL libraries.</p> <div class="flex justify-center gap-4 grid grid-cols-2"><button class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3"><i class="fa-brands fa-github cursor-pointer text-3xl"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">GitHub</h4></button> <button class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2"><i class="fa-solid fa-play cursor-pointer h-8 w-8 mt-2.5"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9 align-middle">Demo Video</h4></button></div></div></div> <div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm"><div class="flex flex-col gap-10 justify-around"><img${add_attribute("src", "images/cibc.png", 0)} alt="project 1" class="rounded-xl w-90 h-90"> <h3 class="text-xl sm:text-xl md:text-2xl">PacMan with User Generated Maps</h3> <p>PacMan game with map editor functionality that allows users to modify and create their own custom maps.</p> <div class="flex justify-center gap-4 grid grid-cols-2"><button class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3"><i class="fa-brands fa-github cursor-pointer text-3xl"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">GitHub</h4></button> <button class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2"><i class="fa-solid fa-play cursor-pointer h-8 w-8 mt-2.5"></i> <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9 align-middle">Demo Video</h4></button></div></div></div></div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
