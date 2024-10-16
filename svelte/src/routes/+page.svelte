<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playwrite+CU:wght@100..400&display=swap');

    #search-btn {
        border: 1px solid rgb(194, 194, 194);
    }

    #search-btn:hover {
        border: 1px solid black;
    }

    .special-char-btn {
        border: 1px solid rgb(194, 194, 194);
        width: 20px;
        margin: -2px;
    }

    .special-char-btn:hover {
        border: 1px solid black;
    }

    #search-bar {
        width: 50%;
        transition: all, 0.5s;
        height: 22px;
        border-radius: 5px;
        border: 1px solid rgb(194, 194, 194);
        padding: 5px;
    }

    #search-bar:focus {
        outline: none;
        border-color: black;
    }

    button {
        height: 30px;
        border-radius: 5px;
        transition: all 0.5s;
        border: 1px solid rgb(105, 105, 105);
        background-color: rgb(240, 240, 240);
        color: rgb(105, 105, 105);
    }

    button:hover {
        background-color: white;
        color: black;
    }

    form {
        display: inline;
    }

    .radio-inputs {
        position: relative;
        display: inline-flex;
        flex-wrap: wrap;
        border-radius: 0.5rem;
        background-color: #EEE;
        box-sizing: border-box;
        box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
        padding: 1px;
    }

    .radio {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 15px;
        color: grey;
    }
 
    .radio-inputs .radio {
        font-family: "Josefin Sans", "sans-serif";
        flex: 1 1 auto;
        text-align: center;
    }

    .radio-inputs {
        margin-top: 10px;
    }
    
    .radio-inputs .radio input {
        display: none;
    }
    
    .radio-inputs .radio .name {
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: none;
        padding: 1px;
        color: rgba(51, 65, 85, 1);
        transition: all .15s ease-in-out;
    }
    
    .radio-inputs .radio input:checked + .name {
        background-color: #fff;
        font-weight: 600;
    }
    
    #search {
        margin: auto;
        text-align: center;
    }

    #title {
        font-family: "Josefin Sans", "sans-serif";
        font-size: 100px;
        font-weight: 500;
        text-align: center;
        margin-bottom: -20px;
        margin-top: 100px;
    }

    #subtitle {
        font-family: "Josefin Sans", "sans-serif";
        text-align: center;
        margin-bottom: 10px;
    }

    * {
        user-select: none;
    }

    #main {
        width: 100%;
        margin: auto;
        border-radius: 10px;
    }
</style>

<div id="main">

<h1 id="title">MaltiLex</h1>
<p id="subtitle">A Maltese dictionary</p>

<div id="search">
    <div id="search-wrapper">
        <button id="special-char-btn1" class="special-char-btn" on:click={() => appendSpecialLetter("ċ")}>ċ</button>
        <button id="special-char-btn2" class="special-char-btn" on:click={() => appendSpecialLetter("ġ")}>ġ</button>
        <button id="special-char-btn3" class="special-char-btn" on:click={() => appendSpecialLetter("ħ")}>ħ</button>
        <button id="special-char-btn4" class="special-char-btn" on:click={() => appendSpecialLetter("ż")}>ż</button>
        <form method="get" action="/search" on:submit={handleSubmit}> 
            <input id="search-bar" placeholder="  search..." bind:value={inputVal}>
            <button id="search-btn">search</button><br />
            <div class="radio-inputs">
                <label class="radio">
                    <input id="m" type="radio" name="radio" checked="" on:change={() => mode = "m"}>
                    <span class="name">Maltese</span>
                </label>
                <label class="radio">
                    <input id="e" type="radio" name="radio" on:change={() => mode = "e"}>
                    <span class="name">English</span>
                </label> 
                <label class="radio">
                    <input id="b" type="radio" name="radio" on:change={() => mode = "b"}>
                    <span class="name">Both</span>
                </label>
            </div>
        </form>
    </div>
</div>

</div>

<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let inputVal = "";
    let mode = "b";
    export let noSearch;

    let appendSpecialLetter = (letter) => {
        inputVal += letter;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await goto(`/search?query=${inputVal}&skip=0&limit=10&mode=${mode}`);
        window.location.reload();
    }

    onMount(() => {
        if (!noSearch) {
            document.getElementById("e").checked = false;
            document.getElementById("m").checked = false;
            document.getElementById("b").checked = false;
        }
    });
</script>

