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
        flex: 52;
    }

    div#mid {
        flex: 1;
    }
</style>

<div id="main">
    <div id="left" class="sub">
        <GeneralWord word={word.surf} pos={word.pos} root={word.root} en={word.en} phon={word.surfPhon}/>
    </div>

    <div id="mid"></div>
    
    <div id="right" class="sub">
        {#if word.pos == "n"}
            <Noun sg={word.sg} sgPhon={word.sgPhon} sgGen={word.sgGen} pl={word.pl} plPhon={word.plPhon} plGen={word.plGen} examples={word.examples}/>

        {:else if word.pos == "v"}
            <Verb word={word} />

        {:else if word.pos == "adj"}
            <Adj word={word} />

        {:else}
            <Etc word={word} />
        {/if}
    </div>
</div>

<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import GeneralWord from "$lib/generalWord.svelte";
    import Noun from "$lib/noun.svelte";
    import Verb from "$lib/verb.svelte";
    import Adj from "$lib/adj.svelte";
    import Etc from "$lib/extra.svelte"
    let key = $page.url.searchParams.get('key');

    $: word = {
        pos: "",
        surfPhon: "",
        root: "",
        surf: "",
        en: [],
        examples: [],
        forms: [],
    };

    let setVal = (json) => {
        word = json;
    }

    async function getWord() {
        const url = `http://localhost:3000/api/fetch?key=${key}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const json = await response.json().catch((e) => {console.log("oh no", e)});
            setVal(json);
            console.log(json);
        } catch(e) {
            console.log(e.message);
        } 
    }

    onMount(() => getWord());
</script>
