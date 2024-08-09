<style>
    li {
        list-style-type: none;
    }

    ul {
        padding: 0;
    }

    div#main {

    }
</style>

<div id="main">
    <ul>
        <li>
            <p>{word}</p>
        </li>
        <li>
            <p>{pos}</p>
        </li>
        <li>
            <p>{root}</p>
        </li>
        <li>
            {#each en as en_word}
                <p>{en_word}</p>
            {/each}
        </li>
    </ul>
</div>

<script>
    export let word;
    export let pos;
    export let en;
    export let root;
</script>
