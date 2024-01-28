<script>

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
            style: 'shadow-cyan-500',
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
            title: 'React.js',
            style: 'shadow-cyan-500',
        },

        {
        
            id: 7,
            src: "images/technologies/github.png",
            title: 'GitHub',
            style: 'shadow-gray-500',

        
        },

        {
        
            id: 8,
            src: "images/technologies/redux.png",
            title: 'Redux',
            style: 'shadow-purple-500',

        
        },

        {
        
            id: 9,
            src: "images/technologies/node.png",
            title: 'Node.js',
            style: 'shadow-green-500',

        
        },


        {
        
            id: 10,
            src: "images/technologies/express.png",
            title: 'Express.js',
            style: 'shadow-gray-500',

        
        },


        {
        
            id: 11,
            src: "images/technologies/mongodb.png",
            title: 'MongoDB',
            style: 'shadow-green-500',

        
        },

        {
        
            id: 12,
            src: "images/technologies/javascript.png",
            title: 'JavaScript',
            style: 'shadow-yellow-500 w-105',
        },
        {
        
        id: 13,
        src: "images/technologies/aws.png",
        title: 'Amazon Web Services',
        style: 'shadow-yellow-500 w-105',

        },
        {
        
        id: 14,
        src: "images/technologies/tailwind.png",
        title: 'Tailwind CSS',
        style: 'shadow-cyan-500 w-105',

        },
        {
        
        id: 15,
        src: "images/technologies/typescript.png",
        title: 'TypeScript',
        style: 'shadow-blue-500 w-105',

        },
        {
        
        id: 16,
        src: "images/technologies/nextjs.png",
        title: 'Next.js',
        style: 'shadow-gray-500 w-105',

        },

        
    ];


</script>



<main class="flex flex-col flex-1 p-4 gap-24">

    <section id="home" class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div  class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">

            <h2 class="text-center font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-cyan-400">Hamza Rashid</span> 
                <br />Aspiring
                <span class="poppins text-cyan-400">Software Developer</span>
            </h2>

            <p class="text-center font-semibold text-4xl sm:text-xl md:text-4xl overflow-hidden">
                My <span class="text-cyan-400">favorite tech</span> includes
                <span id="typed-output" class="text-cyan-400"></span>
            </p>

            <div class=" justify-center gap-4 grid grid-cols-1 lg:grid-cols-2 ">

                <a href="https://example.com/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                    <i class="fa-solid fa-file cursor-pointer text-3xl"></i>
                    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <h4 class="relative z-9">Resume</h4>
                  </a>
                  
                <a href="mailto:hamza022697@gmail.com" class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                    <i class="fa-solid fa-envelope cursor-pointer text-3xl mt-[-0.25rem]"></i>
                    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <h4 class="relative z-9">Email</h4>
                  </a>                  

                <a href="https://github.com/mh2rashi" target="_blank" rel="noopener noreferrer" class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                    <i class="fa-brands fa-github cursor-pointer text-3xl"></i>
                    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <h4 class="relative z-9">GitHub</h4>
                  </a>                  

                  <a href="https://www.linkedin.com/in/mhamza-rashid/" target="_blank" rel="noopener noreferrer" class="shadow-md shadow-cyan-500 flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                    <i class="fa-brands fa-linkedin cursor-pointer text-3xl mt-[-0.25rem]"></i>
                    <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                    <h4 class="relative z-9">LinkedIn</h4>
                  </a>
                  

            </div>

        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile-pic.png"}
                alt="Profile Picture"
                class="object-cover z-[2] max-h-[70vh] rounded-lg"
            />
        </div>
        

    </section>


   <section id="about" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative ">
        
        <div  class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">
            <h6 class="text-large sm:text-xl md:text-2xl">
                Thanks for taking the time to get to know me.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-cyan-400">about me.</span>
            </h3>
        </div>

        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">
                
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"> 01 </p>

                    <div class="flex flex-col gap-6 sm:gap-8">

                        <h3 class="text-2xl sm:text-3xl md:text-5xl"> Education and Early Career </h3>

                        <p class="sm:text-lg md:text-xl backdrop-blur-sm">
                            I graduated from the
                            <a class="text-cyan-400" href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">
                                University of Waterloo
                            </a>,
                            where I pursued an Honors Statistics program. My academic journey at Waterloo was
                            complemented by engaging co-op experiences, predominantly within the insurance industry,
                            focusing on various actuarial roles. This period allowed me to apply statistical concepts
                            in real-world scenarios, honing my analytical skills and industry knowledge.
                        </p>
                        

                    </div>
                </div>
        </div>

        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">
                    
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"> 02 </p>

                <div class="flex flex-col gap-6 sm:gap-8">

                    <h3 class="text-2xl sm:text-3xl md:text-5xl"> Professional Experience</h3>

                    <p class="sm:text-lg md:text-xl backdrop-blur-sm">
                        Upon completing my degree, I transitioned into a full-time role as a Data Analyst at
                        <a class="text-cyan-400" href="https://www.munichre.com/ca-life/en/company.html" target="_blank" rel="noopener noreferrer">
                            Munich Reinsurance Canada
                        </a>. Here, I delved into coding, primarily focusing on building automated workflows (ETL)
                        using SQL for processing insurance data. This experience ignited my interest in programming
                        and served as my initial exposure to the realm of Software Engineering.
                    </p>
                    

                </div>
            </div>
        </div>

        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">
                    
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"> 03 </p>

                <div class="flex flex-col gap-6 sm:gap-8">

                    <h3 class="text-2xl sm:text-3xl md:text-5xl"> Transition to Software Engineering</h3>

                    <p class="sm:text-lg md:text-xl backdrop-blur-sm">Post-March 2023, I left Munich for personal
                    reasons and redirected my career toward Software Engineering. Driven by self-motivation,
                    I embraced online learning, deepening my appreciation for creative problem-solving
                    in software development.
                    </p>

                    <p class="sm:text-lg md:text-xl backdrop-blur-sm">I started by delving into languages such as Python and C++, and later
                    expanding my expertise to encompass full-stack development. My knowledge now spans 
                    JavaScript, HTML & CSS, various frameworks, backend programming, design principles,
                    cloud services, and much more.
                    </p>

                </div>
            </div>
        </div>
   
    </section>


    <section id="skills" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative">


        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">
            
                <h6 class="text-large sm:text-xl md:text-2xl">
                    Here's some of the technologies i've worked with.
                </h6>

                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    My <span class="poppins text-cyan-400">skills.</span>
                </h3>

            </div>

        <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
            {#each techs as { id, src, title, style }}
                <div key={id} class={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg mx-auto justify-center ${style} flex flex-col items-center`}>
                    <img src={src} alt="images" class="w-1/2 mb-2" />
                    <p class="mt-3">{title}</p>
                </div>
            {/each}
        </div>


    </section>


    <section id="portfolio" class="flex flex-col gap-16 sm:gap-20 md:gap-24 relative">


        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">

                <h6 class="text-large sm:text-xl md:text-2xl">
                    Curious to see my work?
                </h6>

                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    Have a look at my <span class="poppins text-cyan-400">portfolio.</span>
                </h3>

            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 flex justify-center flex-col gap-10 ">

                <div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm">

                    <div class="flex flex-col gap-10 justify-around">

                        <img src={"videos/stockpeer.gif"} alt="project 1" class="rounded-xl w-90 h-90">
                        <h3 class="text-xl sm:text-xl md:text-2xl"> StockPeer: Crafting Alpha through Data and Strategies </h3>
                        <p>A stock web application with display metrics, machine-learning based predictions and options strategy visualizer.</p>

                        <div class="flex justify-center gap-4 grid grid-cols-2">

                            <button onclick="window.open('https://github.com/mh2rashi/StockPeer', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                                <i class="fa-brands fa-github cursor-pointer text-3xl"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9">GitHub</h4>
                            </button>
                                
                            
                            <button onclick="window.open('https://stockpeer-3495602137c6.herokuapp.com/', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                                <i class="fa-solid fa-arrow-pointer h-8 w-8 mt-2.5"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9 align-middle">Live Demo</h4>
                            </button>

                        </div>

                    </div>

                </div>

                <div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm">

                    <div class="flex flex-col gap-10 justify-around">

                        <img src={"videos/.gif"} alt="project 1" class="rounded-xl w-90 h-90">
                        <h3 class="text-xl sm:text-xl md:text-2xl"> LinguaTune: Harmonizing Speech Barriers </h3>
                        <p>An AI web application designed to transcribe videos with near-human accuracy, offering the option to add captions or voice-overs in numerous languages.</p>

                        <div class="flex justify-center gap-4 grid grid-cols-2">

                            <button onclick="window.open('https://github.com/mh2rashi/LinguaTune', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                                <i class="fa-brands fa-github cursor-pointer text-3xl"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9">GitHub</h4>
                            </button>
                                
                            
                            <button onclick="window.open('', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                                <i class="fa-solid fa-arrow-pointer h-8 w-8 mt-2.5"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9 align-middle">Live Demo</h4>
                            </button>

                        </div>

                    </div>

                </div>

                <div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm">

                    <div class="flex flex-col gap-10 justify-around">

                        <img src={"videos/trading-engine.gif"} alt="project 1" class="rounded-xl w-90 h-90 ">

                            <h3 class="text-xl sm:text-xl md:text-2xl"> Multi-Threaded Limit OrderBook & Trading Engine </h3>
                            <p>A fast, and efficient limit orderbook & trade matching engine built in C++ utilizing Chrono, BOOST, and STL libraries.</p>
                            <div class="flex justify-center gap-4 grid grid-cols-2">
                        
                            <button onclick="window.open('https://github.com/mh2rashi/Trading-Engine', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                                <i class="fa-brands fa-github cursor-pointer text-3xl"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9">GitHub</h4>
                            </button>
                                
                            
                            <button onclick="window.open('https://www.youtube.com/watch?v=-k_1Zz8bcX8&ab_channel=HamzaRashid', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                                <i class="fa-solid fa-play cursor-pointer h-8 w-8 mt-2.5"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9 align-middle">Demo Video</h4>
                            </button>
                            
                        </div>

                    </div>

                </div>

                <div class="shadow-md shadow-cyan-500 p-6 flex-1 rounded-xl text-center hover:scale-105 duration-500 backdrop-blur-sm">

                    <div class="flex flex-col gap-10 justify-around">

                        <img src={"videos/pacman.gif"} alt="project 1" class="rounded-xl w-90 h-90">
                        <h3 class="text-xl sm:text-xl md:text-2xl"> PacMan with User Generated Maps </h3>
                        <p>A classic PacMan game with map editor functionality that allows users to modify and create their own custom maps.</p>

                        <div class="flex justify-center gap-4 grid grid-cols-2">

                            <button onclick="window.open('https://github.com/mh2rashi/PacMan', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-3">
                                <i class="fa-brands fa-github cursor-pointer text-3xl"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9">GitHub</h4>
                            </button>
                                
                            
                            <button onclick="window.open('https://www.youtube.com/watch?v=mAXyYmvM1EI&ab_channel=HamzaRashid', '_blank')" class="flex items-center justify-center bg-white hover:text-cyan-400 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full text-slate-950 space-x-2">
                                <i class="fa-solid fa-play cursor-pointer h-8 w-8 mt-2.5"></i>
                                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                                <h4 class="relative z-9 align-middle">Demo Video</h4>
                            </button>

                        </div>

                    </div>

                </div>

            </div>


    </section>

    <section id="contact" class="flex flex-col gap-4 sm:gap-4 md:gap-4 relative">


        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-cyan-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-cyan-700 py-4">

                <h6 class="text-large sm:text-xl md:text-2xl">
                    Submit the form below  get in touch.
                </h6>

                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    Contact <span class="poppins text-cyan-400">me.</span>
                </h3>

            </div>


            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] justify-center">

                <div class="justify-center max-w-screen-lg flex flex-col items-center w-full px-2">
    
                    <form action="https://getform.io/f/270fa34c-48dd-42cd-bead-72f6135280e8" method="POST" class="flex flex-col w-full wvh">
                    
                        <input type="text" name="name" placeholder="Enter your email..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"/>
                    
                        <input type="text" name="email" placeholder="Enter your name..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"/>
            
                        <textarea name="message" rows="10" placeholder="Enter your message..." class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 backdrop-blur-sm"></textarea>
            
                        <button class="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
            
                    </form>
            
                </div>

            </div>


    </section>

</main>