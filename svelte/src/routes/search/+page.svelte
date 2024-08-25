<script>
    import SearchEntry from "$lib/searchEntry.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Loader from "$lib/load.svelte";
    import Err from "$lib/err.svelte";
    
    let qStr = $page.url.searchParams.get('query');
    let skip = parseInt($page.url.searchParams.get('skip'));
    let limit = parseInt($page.url.searchParams.get('limit'));
    let mode = $page.url.searchParams.get('mode');

    if (isNaN(skip)) {
        skip = 0;
    }

    if (isNaN(limit)) {
        limit = 10;
    }

    $: searchResults = [];

    let finished = false;
    let err = false;

    async function getData() {
        const url = `http://localhost:3000/api/search?keyword=${qStr}&skip=${skip}&limit=${limit}&mode=${mode}`;
        finished = false;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                err = true;
                throw new Error(`Response Status: ${response.status}`);
            }
            
            const json = await response.json();
            for (let i = 0; i < json.result.length; ++i) {
                searchResults = [...searchResults, json.result[i]];
            }
            finished = true;
        } catch(e) {
            console.log(e.message);
        }
    }
    
    onMount(() => {
        getData();
    });
</script>

<style>
    hr {
        width: 87%;
    }

    div {
        margin: auto;
        position: fixed;
        top: 30%;
        left: 49%;
    }
</style>

{#if finished}
    <hr />
    {#each searchResults as word, index}
        <SearchEntry index={index + 1} word={word.word} pos={word.pos} en={word.en} matched={word.matched} url={`/word?key=${word.key}`}/>    
    {/each}
{:else if err}
    <Err />
{:else}
    <div>
        <Loader />
    </div>
{/if}
