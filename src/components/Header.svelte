<script>
    export let y;

    export let tabs = [
        {name: "Home ", link: "#home"},
        {name: "About Me", link: "#about"},
        {name: "Skills", link: "#skill"},
        {name: 'Portfolio', link: '#portfolio'},
        {name: 'Contact', link: '#contact'},
    ];



</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0 ? " py-4 bg-slate-950 border-cyan-800" : " py-6 bg-transparent border-transparent")}>

  
            <div class="flex justify-between items-center h-16 w-full">

                    <!-- Logo -->
                    <h1 class="text-4xl font-medium">
                        <b class="font-bold poppins">Hamza</b> <span class="">Rashid</span>
                    </h1>

                    <!-- Navlink -->
                    <div class="hidden sm:block ml-auto">
                        <div class="sm:flex justify-items:end justify-between gap-6 mt-left">
                            {#each tabs as tab, index}
                                <a
                                    href={tab.link}
                                    class="duration-200 hover:text-cyan-400 text-xl"
                                    target={index === 2 ? "_blank" : ""}
                                >
                                    <p>{tab.name}</p>
                                </a>
                            {/each}
                        </div>
                    </div>

             </div>

           

            <!-- Mobile Menu Buttons -->
            <div class="sm:hidden flex items-center">
                <button id="mobile-menu-btn" onclick="mobile-menu" type="button" class="text-white duration-200 hover:text-cyan-400 focus:outline-none focus:text-light-gray" aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            

            <div id="mobile-menu" class="hidden sm:hidden flex duration-500">
                <div class="px-2 pt-2 pb-3 space-y-1 h-full">
                    {#each tabs as tab, index}
                        <a
                            href={tab.link}
                            class="duration-500 hover:text-cyan-400 text-xl"
                            target={index === 2 ? "_blank" : ""}
                        >
                            <p>{tab.name}</p>
                        </a>
                    {/each}
                </div>
            </div>


</header>
