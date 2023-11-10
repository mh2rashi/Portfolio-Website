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

    let benefits = [
        {
            metric: "10x",
            name: "a self taught developer",
            description:
                "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];


    let techs = [
    
        {
            id: 1,
            src : "images/technologies/python.png",
            title: 'Python',
            style: 'shadow-blue-500',
        },

        {
            id: 2,
            src : "images/technologies/c++.png",
            title: 'C++',
            style: 'shadow-blue-500',
        },

        {
            id: 3,
            src : "images/technologies/sql.png",
            title: 'SQL',
            style: 'shadow-yellow-500',
        },

        {
            id: 4,
            src : "images/technologies/html.png",
            title: 'HTML',
            style: 'shadow-orange-500',
        },

        {
            id: 5,
            src : "images/technologies/css.png",
            title: 'CSS',
            style: 'shadow-blue-500',
        },

        {
            id: 6,
            src : "images/technologies/react.png",
            title: 'React',
            style: 'shadow-cyan-500',
        },

        {
            id: 7,
            src : "images/technologies/svelte.png",
            title: 'Svelte',
            style: 'shadow-red-500',
        }
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


   <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">
            <h6 class="text-large sm:text-xl md:text-2xl">
                Thanks for taking the time to get to know me.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-cyan-400">about me.</span>
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-12">

            <div class="relative shadow-2xl grid grid-rows-[80vh, auto] place-items-center gap-0">
                
                <img src={"images/UW.jpg"} alt="University of Waterloo" class="object-cover z-[2] max-h-[70vh] rounded-md w-full"/>
                
                <div class="grid grid-cols-5 gap-0">

                    <img src={"images/cibc.png"} alt="cibc" class="object-cover z-[2] h-full rounded-md" />
                    <img src={"images/city-mississauga.png"} alt="mississauga" class="object-contain z-[2] h-full rounded-md" />
                    <img src={"images/morneau.jpg"} alt="morneau" class="object-contain z-[2] h-full rounded-md" />
                    <img src={"images/sun-life.jpg"} alt="sunlife" class="object-cover z-[2] h-full rounded-md" />
                    <img src={"images/manulife.png"} alt="manulife" class="object-cover z-[2] h-full rounded-md" />

                </div>

            </div>


            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">
                    
                    <div class="flex gap-6 sm:gap-8">
                        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"> 01 </p>

                        <div class="flex flex-col gap-6 sm:gap-8">

                            <h3 class="text-2xl sm:text-3xl md:text-5xl"> a self taught developer </h3>

                            <p class="sm:text-lg md:text-xl">I taught myself to code using free online
                            resources and absolutely fell in love with the creativity and
                            problem solving that is involved in developing and engineering
                            innovative new online experiences. Starting of with JavaScript,
                            HTML & CSS and evolving my knowledge base to include JavaScript
                            frameworks, backend programming, design, cloud services and much much more.
                            </p>

                        </div>
                   </div>
            </div>



            <div class="relative shadow-2xl grid grid-rows-[80vh, auto] place-items-center gap-0">
                <img
                    src={"images/munich-re.jpg"}
                    alt="Munich Re"
                    class="object-cover z-[2] max-h-[60vh] rounded-md w-full"
                />
                <div class="grid grid-cols-5 gap-0">
                    <img src={"images/cibc.png"} alt="cibc" class="object-cover z-[2] h-full rounded-md" />
                    <img src={"images/city-mississauga.png"} alt="mississauga" class="object-contain z-[2] h-full rounded-md" />
                </div>
            </div>


            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">
                    
                    <div class="flex gap-6 sm:gap-8">
                        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"> 02 </p>

                        <div class="flex flex-col gap-6 sm:gap-8">

                            <h3 class="text-2xl sm:text-3xl md:text-5xl"> a product design & UX finatic </h3>

                            <p class="sm:text-lg md:text-xl">Carefully crafting and designing amazing
                            user experiences allows me to express and experiment with
                            every morsel of creativity I have. I love the challenge of learning
                            new design concepts and enabling users with amazing online experiences.
                            </p>

                        </div>
                   </div>
            </div>

        </div>

        

    </section>


<section id="Experience" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">


    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">
          
            <h6 class="text-large sm:text-xl md:text-2xl">
                Here's some of the technologies i've worked with.
            </h6>

            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-cyan-400">Skills</span>
            </h3>

        </div>

    <div class="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
        {#each techs as { id, src, title, style }}
            <div key={id} class={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg mx-auto justify-center ${style} flex flex-col items-center`}>
                <img src={src} alt="images" class="w-1/2 mb-2" />
                <p class="mt-2">{title}</p>
            </div>
        {/each}
    </div>


</section>



</main>