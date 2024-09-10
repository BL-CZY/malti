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
        if (qStr == "") {
            finished = true;
            return;
        }

        const url = `/api/search?keyword=${qStr}&skip=${skip}&limit=${limit}&mode=${mode}&maxDis=5`;
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
            skip += 10;
        } catch(e) {
            console.log(e.message);
        }
    }

    let loadingRef;
   
    onMount(async function() {
        await getData();

        if (!loadingRef) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (searchResults.length % 10 != 0 || skip >= 40) {
                    return;
                }
                
                getData();
            }
        })

        observer.observe(loadingRef)
    }, {
            threshold: 0,
        });
</script>

<style>
    hr {
        width: 87%;
    }

    #loader {
        text-align: center;
    }

    #uh {
        height: 1px;
        width: 100%;
    }

    #load-more {
        text-align: center;
    }

    #load-more-btn {
        padding: 10px;
        margin-bottom: 10px;
        border: 2px solid rgb(205, 205, 205);
        border-radius: 10px;
        transition: all 0.5s;
    }

    #load-more-btn:hover {
        border-color: black;
    }
</style>

<hr />

{#each searchResults as word, index}
    <SearchEntry index={index + 1} word={word.word} pos={word.pos} en={word.en} matched={word.matched} url={`/word?key=${word.key}`}/>    
{/each}

<div id="uh" bind:this={loadingRef}></div>

{#if !finished}
    <div id="loader">
        <Loader />
    </div>
{:else if err}
    <Err />
{/if}

{#if skip >= 40}
    <div id="load-more">
        <button id="load-more-btn" on:click={() => getData()}>Load More</button>
    </div>
{/if}
