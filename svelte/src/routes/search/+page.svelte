<script>
    import SearchEntry from "$lib/searchEntry.svelte"
    import { page } from "$app/stores"
    import { onMount } from "svelte";
    
    let qStr = $page.url.searchParams.get('query');
    let skip = parseInt($page.url.searchParams.get('skip'));
    let limit = parseInt($page.url.searchParams.get('limit'));

    if (isNaN(skip)) {
        skip = 0;
    }

    if (isNaN(limit)) {
        limit = 10;
    }

    $: searchResults = [];

    async function getData() {
        const url = `http://localhost:3000/api/search?keyword=${qStr}&skip=${skip}&limit=${limit}&text=true&exact=true`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }
            
            const json = await response.json();
            console.log(json);
            for (let i = 0; i < json.result.length; ++i) {
                searchResults = [...searchResults, json.result[i]];
            }
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
</style>

<hr />
{#each searchResults as word, index}
    <SearchEntry index={index + 1} word={word.word} pos={word.pos} en={word.en} matched={word.matched} url={`/word?key=${word.key}`}/>    
{/each}
