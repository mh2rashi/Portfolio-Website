<script>

    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Smoljames Store",
            icon: "fa-solid fa-cart-shopping",
            description:
                "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.",
        },
        {
            name: "Utlimate Todos",
            icon: "fa-solid fa-list-check",
            description:
                "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
        },
        {
            name: "Pokédex",
            icon: "fa-solid fa-diagram-project",
            description:
                "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
        },
    ];


</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">

        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="text-center font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-cyan-400">Hamza Rashid</span> 
                <br />Aspiring
                <span class="poppins text-cyan-400">Software Developer</span>
            </h2>
            <p class="text-center text-base sm:text-lg md:text-xl">
                My <span class="text-cyan-400">favorite tech</span> includes JavaScript
                (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL
                or Firebase/Firestore!
            </p>
            <button class=" bg-white mx-auto hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </button>
        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile-pic.png"}
                alt="Profile Picture"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
   </section>
   
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                Thanks for taking the time to get to know me.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Here's my <span class="poppins text-cyan-400">journey</span> so far.
            </h3>
        </div>
        
    
    </section>

</main>