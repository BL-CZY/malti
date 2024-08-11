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
        <GeneralWord word={word.word} pos={word.pos} root={word.root} en={word.en} phon={word.wordPhon}/>
    </div>

    <div id="mid"></div>
    
    <div id="right" class="sub">
        {#if word.pos == "n"}
            <Noun sg={word.sg} sgPhon={word.sgPhon} sgGen={word.sgGen} pl={word.pl} plPhon={word.plPhon} plGen={word.plGen} examples={word.examples}/>
        {/if}
    </div>
</div>

<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import GeneralWord from "$lib/generalWord.svelte";
    import Noun from "$lib/noun.svelte";
    let key = $page.url.searchParams.get('key');

    $: word = {
        word: "",
        wordPhon: "",
        pos: "",
        root: "",
        en: [""],
        examples: [""],

        sg: "",
        sgPhon: "",
        sgGen: "",
        pl: "",
        plPhon: "",
        plGen: "",
    };

    let setVal = (json) => {
        word.word = json.surf;
        word.pos = json.pos;
        word.root = json.root;
        word.en = json.en;
        word.wordPhon = json.surfPhon;
        word.examples = json.examples;
        
        switch(json.pos) {
            case "n":
                word.sg = json.sg;
                word.sgPhon = json.sgPhon;
                word.sgGen = json.gen;
                word.pl = json.pl;
                word.plPhon = json.plPhon;
                word.plGen = "mf";
                break;
        }
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
