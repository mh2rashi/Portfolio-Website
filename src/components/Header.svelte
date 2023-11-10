<script>

	export let y;

	export let tabs = [
        { name: "About me", link: "#about" },
        { name: "Projects ", link: "#Skills" }
    ];

</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="text-3xl">
        <b class="font-bold poppins">Hamza</b> <span class="">Rashid</span>
    </h1>
	<div class=" text-1.5xl sm:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.link}
                class="duration-200 hover:text-cyan-400">
				<p>{tab.name}</p>
			</a>
		{/each}

        <button class="bg-white hover:text-cyan-400 whiteShadow relative overflow-hidden px-5 py-2 group rounded-full">
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Get in touch</h4>
        </button>
	</div>
</header>