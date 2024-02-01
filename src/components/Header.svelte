<script>
    export let y;

    export let tabs = [
        {name: "Home ", link: "#home"},
        {name: "About Me", link: "#about"},
        {name: "Skills", link: "#skills"},
        {name: 'Portfolio', link: '#portfolio'},
        {name: 'Contact', link: '#contact'},
    ];

    let isMenuOpen = false;

    const handleMenuToggle = () => {
        isMenuOpen = !isMenuOpen;
    };

    const handleMenuItemClick = () => {
        isMenuOpen = false;
    };
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0 ? " py-4 bg-slate-950 border-cyan-800" : " py-6 bg-transparent border-transparent")}>

    <div class="flex justify-between items-center h-8 w-full">

        <!-- Logo -->
        {#if isMenuOpen}
            <h1 class="text-4xl font-medium mb-4 sm:mb-0 sm:mr-auto justify-center">
                <b class="font-bold poppins">Hamza</b> <span class="">Rashid</span>
            </h1>
        {:else}
            <div class="sm:flex items-center">
                <h1 class="text-4xl font-medium">
                    <b class="font-bold poppins">Hamza</b> <span class="">Rashid</span>
                </h1>
            </div>
        {/if}

        <!-- Navlink -->
        <div class="hidden sm:block ml-auto">
            <div class="sm:flex justify-items:end justify-between gap-6 mt-left">
                {#each tabs as tab, index}
                    <a
                        href={tab.link}
                        class="duration-200 hover:text-cyan-400 text-xl"
                        on:click={handleMenuItemClick}
                    >
                        <p>{tab.name}</p>
                    </a>
                {/each}
            </div>
        </div>

    </div>

    <!-- Mobile Menu Buttons -->
    <div class="sm:hidden flex items-center">
        {#if !isMenuOpen}
            <button id="mobile-menu-btn" on:click={handleMenuToggle} type="button" class="text-white duration-200 hover:text-cyan-400 focus:outline-none focus:text-light-gray" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        {/if}
    </div>

    <div id="mobile-menu" class="{isMenuOpen ? 'block' : 'hidden'} sm:hidden flex duration-500">
        <div class="pt-2 pb-3 space-y-1 h-full sm:w-1/2">
            <div class="flex justify-end">
                <button id="mobile-menu-close-btn" on:click={handleMenuToggle} type="button" class="text-white duration-200 hover:text-cyan-400 focus:outline-none focus:text-light-gray" aria-label="Close menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {#each tabs as tab, index}
                <a
                    href={tab.link}
                    class="duration-500 hover:text-cyan-400 text-xl w-full"
                    target=""
                    on:click={handleMenuItemClick}
                >
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
    </div>

</header>



