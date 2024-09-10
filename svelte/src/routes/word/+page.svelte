<style>
    div#main {
        display: flex;
        width: 90%;
        margin: auto;
        border-radius: 10px;
    }
    
    div#left {
        flex: 28;
    }

    div#right {
        flex: 80;
    }

    div#mid {
        flex: 1;
    }

    div#loader {
        margin: auto;
        position: fixed;
        top: 30%;
        left: 49%;
    }
</style>

{#if finished}
    <div id="main">
        <div id="left" class="sub">
            <GeneralWord word={word.surf} pos={word.pos} root={word.root} en={word.en} phon={word.surfPhon}/>
        </div>
    
        <div id="mid"></div>
        
        <div id="right" class="sub">
            {#if word.pos == "v"}
                <Verb word={word} />
            {:else if word.pos == "n" || word.pos == "adj" || word.pos == "adv"}
                <WordInfo word={word} extra={false} />
            {:else}
                <WordInfo word={word} extra={true} />
            {/if}
        </div>
    </div>
{:else}
    <div id="loader">
        <Loader />
    </div>
{/if}

<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import GeneralWord from "$lib/generalWord.svelte";
    import Verb from "$lib/verb.svelte";
    import Loader from "$lib/load.svelte";
    import WordInfo from "$lib/wordInfo.svelte";
    let finished = false;
    let key = $page.url.searchParams.get('key');

    $: word = {
        pos: "",
        surfPhon: "",
        root: "",
        surf: "",
        en: [],
        examples: [],
        contributors: [],
        forms: [],
    };

    let setVal = (json) => {
        word = json;
    }

    async function getWord() {
        finished = false;
        const url = `/api/fetch?key=${key}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const json = await response.json().catch((e) => {console.log("oh no", e)});
            console.log(json.contributers);
            setVal(json);
            finished = true;
        } catch(e) {
            console.log(e.message);
        } 
    }

    onMount(() => getWord());
</script>
