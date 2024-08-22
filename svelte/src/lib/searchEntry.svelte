<style>
    li {
        list-style-type: none;
        cursor: auto;
    }

    ul {
        padding: 0;
        font-size: 17px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    #main {
        display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin: 0;
    }

    #sub-entry1 {
        flex: 1;
        padding-left: 20px;
    }

    #sub-entry2 {
        flex: 1;
    }

    #sub-entry3 {
        flex: 1;
    }

    #sub-entry4 {
        flex: 1.5;
    }

    #sub-entry5 {
        max-height: 60px;
        min-height: 60px;
        overflow-y: auto;
        flex: 4;
    }

    .sub-entry {
        text-align: left;
    }

    hr {
        width: 87%;
        size: 1px;
        color: rgb(240, 240, 240);
    }

    button {
        width: 80%;
        min-height: 100px;
        padding: 0;
        user-select: text;
        transition: all 0.5s;
        border: 1px solid rgb(205, 205, 205);
        background-color: rgb(240, 240, 240);
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        scale: 1;
    }

    button:hover {
        min-height: 140px;
        border-color: black;
        background-color: rgb(205, 205, 205);
        width: 85%;
        scale: 1;
    }

    button:active {
        scale: 0.9;
    }

    #wrapper {
        margin: auto;
        text-align: center;
    }
</style>

<div id="wrapper">
    <button on:click={goFetch}>
        <ul id="main">
            <li id = "sub-entry1" class="sub-entry">{index}.</li>
            <li id = "sub-entry2" class="sub-entry"><a href={url}>{word}</a></li>
            <li id="sub-entry3" class="sub-entry">{pos}</li>
            <li id = "sub-entry4" class="sub-entry">matched: {matched}</li>
            <li id = "sub-entry5" class="sub-entry">
                <ul>
                    {#each en as en_word}
                        <li>{en_word}</li>
                    {/each}
                </ul>
            </li>
        </ul>
    </button>
</div>
<hr />


<script>
    import { goto } from "$app/navigation";

    export let index;
    export let word;
    export let pos;
    export let en;
    export let matched;
    export let url;

    async function goFetch() {
        goto(url);
    }
</script>
