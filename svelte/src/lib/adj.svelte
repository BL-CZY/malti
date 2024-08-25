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

    #gender {
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

    table, th, td {
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
            <th id="gender">gender</th>
            <th id="phon">phonetic</th>
        </tr>

        {#if word.sg_mf != ""}
            <tr>
                <td><p>single</p></td>
                <td><p>{word.sg_mf}</p></td>
                <td><p>mf</p></td>
                <td><p>{word.sg_mf_phon}</p></td>
            </tr>           
        {:else}
            <tr>
                <td><p>single</p></td>
                <td><p>{word.sg_f}</p></td>
                <td><p>f</p></td>
                <td><p>{word.sg_f_phon}</p></td>
            </tr>

            <tr>
                <td><p>single</p></td>
                <td><p>{word.sg_m}</p></td>
                <td><p>m</p></td>
                <td><p>{word.sg_m_phon}</p></td>
            </tr>
        {/if}

        <tr>
            <td><p>comparative</p></td>
            <td><p>{word.cmp}</p></td>
            <td><p>mf</p></td>
            <td><p>{word.cmp_phon}</p></td>
        </tr> 

        <tr>
            <td><p>superlative</p></td>
            <td><p>{word.super}</p></td>
            <td><p>mf</p></td>
            <td><p>{word.super_phon}</p></td>
        </tr>
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
</script>
