<style>
    li {
        list-style-type: none;
    }

    ul {
        padding: 0px;
    }

    div#main {
        border-radius: 10px;
        text-align: center;
        border: 1px solid rgb(205, 205, 205);
        min-height: 650px;
        transition: all 0.5s;
    }

    #main:hover {
        transform: scale(1.03);
        border: 2px solid black;
    }

    p#main-word {
        font-size: 50px;
        margin-bottom: 0px;
    }

    li#main-word-wrap {
        width: 100%;
        text-align: center;
        padding-bottom: 0px;
    }

    #phon-wrap {
        margin-top: -20px;
    }

    #phon {
        font-style: italic;
    }

    hr {
        margin-top: 20px;
        width: 80%;
    }
</style>

<div id="main">
    <ul>
        <li id="main-word-wrap">
            <p id="main-word">{word}</p>
        </li>
        <li id="phon-wrap">
            <p id="phon">{phon}</p>
        </li>
        <li>
            <p>{pos}. {root}</p>
        </li>
        <hr />
        <li id="en-wrap">
            {#each en as en_word}
                <p class="en">{en_word}</p>
            {/each}
        </li>
    </ul>
</div>

<script>
    export let word;
    export let pos;
    export let en;
    export let root;
    export let phon;
</script>
