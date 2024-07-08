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
    }

    #sub-entry2 {
        flex: 5;
    }

    #sub-entry3 {
        flex: 5;
    }

    #sub-entry4 {
        flex: 5;
    }

    #sub-entry5 {
        flex: 5;
    }

    hr {
        width: 87%;
    }

    button {
        width: 85%;
        padding: 0;
        user-select: text;
        transition: all 0.5s;
        border: 1px solid white;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    button:hover {
        border-color: black;
    }

    #wrapper {
        margin: auto;
        text-align: center;
    }
</style>

<div id="wrapper">
    <button on:click={() => console.log("wow")}>
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
    export let index;
    export let word;
    export let pos;
    export let en;
    export let matched;
    export let url;
</script>