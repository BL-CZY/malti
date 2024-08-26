<style>
    #main {
        border-radius: 10px;
        min-height: 750px;
        max-height: 750px;
        overflow-y: auto;
        border: 1px solid rgb(205, 205, 205);
        background-color: white;
        transition: all 0.5s;
    }

    #main:hover {
        transform: scale(1.03);
        border: 2px solid black;
    }

    #wrapper {
        width: 90%;
    }

    th {
        font-size: 20px;
    }

    #form {
        width: 5%;
    }

    #word {
        width: 5%;
    }

    #extra {
        width: 5%;
    }

    #phon {
        width: 5%;
    }

    tr {
        text-align: center;
    }

    table {
        margin-left: 30px;
        margin-top: 40px;
    }

    th {
        padding-bottom: 30px;
    }

    table, th, td{
        border-bottom: 1px solid black;
        border-collapse: collapse;
    }

    .exp {
        padding-left: 50px;
        font-style: italic;
    }

    #exp-header {
        font-size: 20px;
        padding-left: 30px;
        font-weight: bold;
    }
</style>

<div id="main">
    <table id="wrapper">
        <tr>
            <th id="form">form</th>
            <th id="word">word</th>
            <th id="phon">phonetic</th>
            {#if extra == true}
                <th id="extra">extra info</th>
            {:else}
                <th id="extra">gender</th>
            {/if}
        </tr>
        {#each word.forms as form}
            <tr>
                <td><p>{form.form}</p></td>
                <td><p>{form.word}</p></td>
                <td><p>{form.phon}</p></td>
                {#if extra == true}
                    <td><p>{form.extra}</p></td>
                {:else}
                    <td><p>{form.gen}</p></td>
                {/if}
            </tr>
        {/each}
    </table>

    <br />

    <p id="exp-header">Examples:</p>

    {#each word.examples as exp}
        <p class="exp">"{exp}"</p>
    {/each}
 
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
</div>

<script>
    export let word;
    export let extra;
</script>
