<style>
    #main {
        border-radius: 10px;
        min-height: 650px;
        border: 1px solid rgb(205, 205, 205);
        background-color: white;
        transition: all 0.5s;
    }

    #main:hover {
        transform: scale(1.03);
        border: 2px solid black;
    }

    #wrapper {
        width: 80%;
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
        <tr>
            <td><p>single</p></td>
            <td><p>{sg}</p></td>
            <td><p>{sgGen}</p></td>
            <td><p>{sgPhon}</p></td>
        </tr>
        <tr>
            <td><p>plural</p></td>
            <td><p>{pl}</p></td>
            <td><p>{plGen}</p></td>
            <td><p>{plPhon}</p></td>
        </tr>
    </table>

    <br />

    <p id="exp-header">Examples:</p>

    {#each examples as exp}
        <p class="exp">"{exp}"</p>
    {/each}
</div>

<script>
    export let sg;
    export let sgPhon;
    export let sgGen;
    export let pl;
    export let plPhon;
    export let plGen;
    export let examples;
</script>
