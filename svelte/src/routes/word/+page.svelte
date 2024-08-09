<style>
    div#main {
        display: flex;
        width: 90%;
        margin: auto;
        border: 1px solid rgb(205, 205, 205);
        border-radius: 10px;
    }
    
    div#left {
        flex: 7;
    }

    div#right {
        flex: 13;
    }
</style>

<div id="main">
    <div id="left" class="sub">
        <GeneralWord word={word.word} pos={word.pos} root={word.root} en={word.en}/>
    </div>
    
    <div id="right" class="sub">
        {#if word.pos == "n"}
            <Noun sg={word.sg} pl={word.pl}/>
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
        pos: "",
        root: "",
        en: [""],

        sg: "",
        pl: "",
    };

    let setVal = (json) => {
        word.word = json.surf;
        word.pos = json.pos;
        word.root = json.root;
        word.en = json.en;
        
        switch(json.pos) {
            case "n":
                word.sg = json.sg;
                word.pl = json.pl;
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
