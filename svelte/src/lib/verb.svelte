<style>
    #main {
        border-radius: 10px;
        min-height: 750px;
        border: 1px solid rgb(205, 205, 205);
        background-color: white;
        transition: all 0.5s;
        display: flex;
    }

    #left {
        flex: 10;
        overflow-y: auto;
        max-height: 750px;
    }

    #mid {
        flex: 0.5;
    }

    #right {
        flex: 2;
        overflow-y: auto;
        max-height: 750px;
        text-align: left;
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

    #word {
        width: 5%;
    }

    #tense {
        width: 5%;
    }

    #subject {
        width: 5%;
    }

    #polarity {
        width: 1%;
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

    button {
        border: 1px solid rgb(205, 205, 205);
        border-radius: 10px;
        padding: 10px;
        margin: 5px;
        width: 60%;
        text-align: center;
        transition: all, 0.5s;
    }

    button:hover {
        width: 70%;
    }

    button:active {
        transform: scale(0.8);
    }

    #obj-head {
        font-size: 20px;
        font-weight: bold;
    }

    #obj-display {
        margin-top: -20px;
        font-weight: bold;
    }
</style>

<div id="main">
    <div id="left">
    <table id="wrapper">
        <tr>
            <th id="word">word</th>
            <th id="tense">tense</th>
            <th id="subject">subject</th>
            <th id="polarity">polarity</th>
            <th id="phon">phonetic</th>
        </tr>
        {#if cur_obj_type == 0}
            {#each tense as t}
                {#each sub as s}
                    {#each pol as p}
                        {#if word[t + "_" + s + "_n_n_" + p] != ""}
                            <tr>
                                <td><p>{word[t + "_" + s + "_n_n_" + p]}</p></td>
                                <td><p>{t}</p></td>
                                <td><p>{s}</p></td>
                                <td><p>{p}</p></td>
                                <td><p>{word[t + "_" + s + "_n_n_" + p + "_phon"]}</p></td>
                            </tr>
                        {/if}
                    {/each}
                {/each}
            {/each}

            <tr>
                <td><p>{word["imp_sg_n_n_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_sg_n_n_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_sg_n_n_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_sg_n_n_neg_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_n_n_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_pl_n_n_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_n_n_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_pl_n_n_neg_phon"]}</p></td>
            </tr>
        {/if}

        {#if cur_obj_type == 1}
            {#each tense as t}
                {#each sub as s}
                    {#each pol as p}
                        {#if word[t + "_" + s + "_" + obj_mode + "_n_" + p] != ""}
                            <tr>
                                <td><p>{word[t + "_" + s + "_" + obj_mode + "_n_" + p]}</p></td>
                                <td><p>{t}</p></td>
                                <td><p>{s}</p></td>
                                <td><p>{p}</p></td>
                                <td><p>{word[t + "_" + s + "_" + obj_mode + "_n_" + p + "_phon"]}</p></td>
                            </tr>
                        {/if}
                    {/each}
                {/each}
            {/each}
            <tr>
                <td><p>{word["imp_sg_"+ obj_mode + "_n_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_sg_"+ obj_mode + "_n_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_sg_"+ obj_mode + "_n_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_sg_"+ obj_mode + "_n_neg_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_"+ obj_mode + "_n_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_pl_"+ obj_mode + "_n_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_"+ obj_mode + "_n_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_pl_"+ obj_mode + "_n_neg_phon"]}</p></td>
            </tr>
        {/if}

        {#if cur_obj_type == 2}
            {#each tense as t}
                {#each sub as s}
                    {#each pol as p}
                        {#if word[t + "_" + s + "_n_" + obj_mode + "_" + p] != ""}
                            <tr>
                                <td><p>{word[t + "_" + s + "_n_" + obj_mode + "_" + p]}</p></td>
                                <td><p>{t}</p></td>
                                <td><p>{s}</p></td>
                                <td><p>{p}</p></td>
                                <td><p>{word[t + "_" + s + "_n_" + obj_mode + "_" + p + "_phon"]}</p></td>
                            </tr>
                        {/if}
                    {/each}
                {/each}
            {/each}
            <tr>
                <td><p>{word["imp_sg_n_"+ obj_mode + "_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_sg_n_"+ obj_mode + "_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_sg_n_"+ obj_mode + "_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2sg</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_sg_n_"+ obj_mode + "_neg_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_n_"+ obj_mode + "_pos"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>pos</p></td>
                <td><p>{word["imp_pl_n_"+ obj_mode + "_pos_phon"]}</p></td>
            </tr> 

            <tr>
                <td><p>{word["imp_pl_n_"+ obj_mode + "_neg"]}</p></td>
                <td><p>imp</p></td>
                <td><p>p2pl</p></td>
                <td><p>neg</p></td>
                <td><p>{word["imp_pl_n_"+ obj_mode + "_neg_phon"]}</p></td>
            </tr>
        {/if}
    </table>
    <br />

    <p id="exp-header">Examples:</p>

    {#each word.examples as exp}
        <p class="exp">"{exp}"</p>
    {/each}

    <p id="exp-header">Contributors:</p>
    
    {#each word.contributors as cont}
        <p class="exp">{cont}</p>
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

    <div id="mid"></div>

    <div id="right">
        <br />
        <p id="obj-head">Object:</p><p id="obj-display">{obj_display}</p>
        <p>none: </p>
        <button on:click={() => setMode(0, "")}>none</button>

        <p>direct: </p>
        <button on:click={() => setMode(1, "p1sg")}>p1sg</button><br />
        <button on:click={() => setMode(1, "p2sg")}>p2sg</button><br />
        <button on:click={() => setMode(1, "p3sgm")}>p3sgm</button><br />
        <button on:click={() => setMode(1, "p3sgf")}>p3sgf</button><br />
        <button on:click={() => setMode(1, "p1pl")}>p1pl</button><br />
        <button on:click={() => setMode(1, "p2pl")}>p2pl</button><br />
        <button on:click={() => setMode(1, "p3pl")}>p3pl</button><br />

        <p>indirect: </p>
        <button on:click={() => setMode(2, "p1sg")}>p1sg</button><br />
        <button on:click={() => setMode(2, "p2sg")}>p2sg</button><br />
        <button on:click={() => setMode(2, "p3sgm")}>p3sgm</button><br />
        <button on:click={() => setMode(2, "p3sgf")}>p3sgf</button><br />
        <button on:click={() => setMode(2, "p1pl")}>p1pl</button><br />
        <button on:click={() => setMode(2, "p2pl")}>p2pl</button><br />
        <button on:click={() => setMode(2, "p3pl")}>p3pl</button><br />

    </div>
</div>

<script>
    export let word;
    $: obj_mode = "";
    // 0: n, 1: direct, 2: indirect
    $: cur_obj_type = 0;
    $: obj_display = "none";
    
    let setMode = (type, mode) => {
        obj_mode = mode;
        cur_obj_type = type;
        if (type == 0) {
            obj_display = "none";
        } else if (type == 1) {
            obj_display = "direct " + mode;
        } else if (type == 2) {
            obj_display = "indirect " + mode;
        }
    }

    let tense = ["perf", "imperf"];
    let sub = ["p1sg", "p2sg", "p3sgm", "p3sgf", "p1pl", "p2pl", "p3pl"];
    let pol = ["pos", "neg"];
</script>
