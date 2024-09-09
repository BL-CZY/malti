<style>
    #main {
        border-radius: 10px;
        min-height: 750px;
        border: 1px solid rgb(205, 205, 205);
        background-color: white;
        transition: all 0.5s;
        max-height: 750px;
        overflow-y: auto;
    }

    #main:hover {
        border: 2px solid black;
        transform: scale(1.03);
    }

    #wrapper {
        width: 90%;
    }

    th {
        font-size: 20px; 
        padding-bottom: 30px;
    }

    tr {
        text-align: center;
    }

    table {
        margin-left: 30px;
        margin-top: 40px;
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

    .dropdown {
        position: relative;
        display: inline-block;
        border: none;
    }

    .drop-btn {
        border: none;
        border-radius: 10px;
        background: none;
    }

    .drop-btn:hover {
        border-radius: 10px;
    }

    .drop {
        background-color: white;
        transition: all, 0.5s;
        border-radius: 10px;
        text-align: center;
    }

    .drop:hover {
        background-color: rgb(205, 205, 205);
    }
    
    .drop-btn,
    .drop-content-btn {
        font-weight: bold;
    }

    .drop-btn {
        font-size: 13px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: -10px;
    }

    .drop-content {
        background-color: white;
        display: none;
        position: absolute;
        left: 50%;
        top: 35px;
        transform: translateX(-50%);
        border-radius: 10px;
        border: 2px solid rgb(205, 205, 205);
        transition: all 0.5s;
        padding-bottom: 5px;
        padding-top: 5px;
        min-width: 100px;
        text-align: center;
        z-index: 1;
    }
    
    .dropdown:hover .drop-content {
        display: block;
    }

    .drop-content-btn {
        min-width: 50px;
        background-color: white;
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 10px;
        border: none;
        display: inline;
        transition: all, 0.5s;
        transform: scale(1);
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .drop-content-btn:hover {
        min-width: 80px;
        background-color: rgb(205, 205, 205);
    }

    .drop-content-btn:active {
        transform: scale(0.9);
    }

    i {
        width: 20px;
        text-align: left;
        transform: scale(0.5);
    }

    .normal {
        font-size: 17px;
    }

    .top-text {
        font-size: 12px;
        margin: 0;
    }

    #top {
        text-align: center;
        margin: auto;
    }
</style>

<div id="main">
    <div id="top">
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">tense</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each tenses as ten}
                    <button class="drop-content-btn" on:click={() => { tense = ten; filterShow(); }}>{ten}</button><br />
                {/each}
            </div>
            <p class="top-text">{tense}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">sub</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each persons as person}
                    <button class="drop-content-btn" on:click={() => { sub_per = person; filterShow(); }}>{person}</button><br />
                {/each}
            </div>
            <p class="top-text">{sub_per}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">sub_num</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each number as num}
                    <button class="drop-content-btn" on:click={() => { sub_num = num; filterShow(); }}>{num}</button><br />
                {/each}
            </div>
            <p class="top-text">{sub_num}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">sub_gen</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each gender as gen}
                    <button class="drop-content-btn" on:click={() => { sub_gen = gen; filterShow(); }}>{gen}</button><br />
                {/each}
            </div>
            <p class="top-text">{sub_gen}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">dir_obj</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each persons as person}
                    <button class="drop-content-btn" on:click={() => { dir_obj_per = person; filterShow(); }}>{person}</button><br />
                {/each}
            </div> 
            <p class="top-text">{dir_obj_per}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">dir_num</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each number as num}
                    <button class="drop-content-btn" on:click={() => { dir_obj_num = num; filterShow(); }}>{num}</button><br />
                {/each}
            </div>
            <p class="top-text">{dir_obj_num}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">dir_gen</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each gender as gen}
                    <button class="drop-content-btn" on:click={() => { dir_obj_gen = gen; filterShow(); }}>{gen}</button><br />
                {/each}
            </div>
            <p class="top-text">{dir_obj_gen}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">ind_obj</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each persons as person}
                    <button class="drop-content-btn" on:click={() => { ind_obj_per = person; filterShow(); }}>{person}</button><br />
                {/each}
            </div>
            <p class="top-text">{ind_obj_per}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">ind_num</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each number as num}
                    <button class="drop-content-btn" on:click={() => { ind_obj_num = num; filterShow(); }}>{num}</button><br />
                {/each}
            </div>
            <p class="top-text">{ind_obj_num}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">ind_gen</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each gender as gen}
                    <button class="drop-content-btn" on:click={() => { ind_obj_gen = gen; filterShow(); }}>{gen}</button><br />
                {/each}
            </div>
            <p class="top-text">{ind_obj_gen}</p>
        </div>
        <div class="dropdown">
            <div class="drop">
                <button class="drop-btn">polarity</button>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="drop-content">
                {#each polarity as pola}
                    <button class="drop-content-btn" on:click={() => { pol = pola; filterShow(); }}>{pola}</button><br />
                {/each}
            </div>
            <p class="top-text">{pol}</p>
        </div>
    </div>

    <table id="wrapper">
        <tr>
            <th class="normal">word</th>
            <th class="normal">phonetic</th>
            <th class="normal">tense</th>
            <th class="normal">subject</th>
            <th class="normal">dirobj</th>
            <th class="normal">indobj</th>
            <th class="normal">polarity</th>
        </tr>

        {#each shown as word}
            <tr>
                <td><p>{word.word}</p></td>
                <td><p>/{word.phon}/</p></td>
                <td><p>{word.tense}</p></td>
                <td><p>{word.sub}</p></td>
                <td><p>{word.dir_obj}</p></td>
                <td><p>{word.ind_obj}</p></td>
                <td><p>{word.pol}</p></td>
            </tr>
        {/each}
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

<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import { onMount } from "svelte";

    export let word;

    onMount(() => {
        filterShow();
    })

    let tenses = [["perf", "impf", "imp"], ["perf", "impf"]];
    let persons = [["p1", "p2", "p3"], ["p1"], ["p2"], ["p3"], "none"];
    let number = [["sg", "pl"], ["sg"], ["pl"]];
    let gender = [["m", "f", "mf"], ["m"], ["f"], ["mf"]];
    let polarity = [["pos", "neg"], ["pos"], ["neg"]];

    $: tense = tenses[0];
    $: sub_per = persons[0];
    $: sub_num = number[0];
    $: sub_gen = gender[0];
    $: dir_obj_per = "none";
    $: dir_obj_num = number[0];
    $: dir_obj_gen = gender[0];
    $: ind_obj_per = "none";
    $: ind_obj_num = number[0];
    $: ind_obj_gen = gender[0];
    $: pol = polarity[0];
    
    let filterPerson = (per, per_num, per_gen, obj) => {
        if (per != "none") {
            if (obj == null) {
                return false
            }

            if (!per.includes(obj.person)) {
                return false
            }

            if (!per_num.includes(obj.number)) {
                return false
            }

            if (!per_gen.includes(obj.gender)) {
                return false
            }
        } else {
            if (obj != null) {
                return false
            }
        }
        
        return true;
    }

    let filterShow = () => {
        shown = []
        word.forms.forEach((ele) => {
            let result = {}

            if (!tense.includes(ele.tense)) {
                return;
            }

            result.tense = ele.tense

            if (!filterPerson(sub_per, sub_num, sub_gen, ele.sub)) {
                return;
            }

            if (ele.sub == null) {
                result.sub = "none"
            } else {
                result.sub = ele.sub.person + "_" + ele.sub.number + "_" + ele.sub.gender
            }

            if (!filterPerson(dir_obj_per, dir_obj_num, dir_obj_gen, ele.dir_obj)) {
                return;
            }

            if (ele.dir_obj == null) {
                result.dir_obj = "none"
            } else {
                result.dir_obj= ele.dir_obj.person + "_" + ele.dir_obj.number + "_" + ele.dir_obj.gender
            }

            if (!filterPerson(ind_obj_per, ind_obj_num, ind_obj_gen, ele.ind_obj)) {
                return;
            }

            if (ele.ind_obj == null) {
                result.ind_obj = "none"
            } else {
                result.ind_obj = ele.ind_obj.person + "_" + ele.ind_obj.number + "_" + ele.ind_obj.gender
            }

            if (!pol.includes(ele.pol)) {
                return;
            }

            result.pol = ele.pol
            result.phon = ele.phon
            result.word = ele.word

            shown.push(result)
        })
    }

    $: shown = [];
</script>
