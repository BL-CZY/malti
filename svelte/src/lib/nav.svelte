<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playwrite+CU:wght@100..400&display=swap');

    * {
        user-select: none;
    }

    #topnav {
        background-color: rgb(240, 240, 240);
        border-bottom: 1px solid rgb(105, 105, 105);
        border-top: 3px solid rgb(255,82,82);
        padding: 2px 70px 2px 70px;
        z-index: 2;
        min-width: 100%;
        position: fixed;
        box-sizing: border-box;
    }

    #left {
        flex: 6;
        display: flex;
    }

    #right {
        flex: 1;
        text-align: right;
        display: flex;
        justify-content: space-between;
    }
    
    #search {
        display: inline;
        flex: 5;
    }

    #icon {
        flex: 1;
        padding-top: 6px;
    }

    #about,
    #source {
        flex: 1;
        padding-top: 6px;
        position: relative;
        font-family: "Josefin Sans", "sans-serif";
        font-size: 17px;
    }

    #search-btn {
        border: 1px solid rgb(194, 194, 194);;
    }

    #search-btn:hover {
        border: 1px solid black;
    }

    .special-char-btn {
        border: 1px solid rgb(194, 194, 194);
    }

    .special-char-btn:hover {
        border: 1px solid black;
    }

    #search-bar {
        width: 50%;
        transition: all, 0.5s;
        border-radius: 5px;
        border: 1px solid rgb(194, 194, 194);
        padding: 5px;
    }

    #search-bar:focus {
        outline: none;
        border-color: black;
    }

    button {
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
    
    ul {
        display: flex;
        padding: 0;
        justify-content: space-between;
    }

    li {
        list-style-type: none;
        display: inline;
    }

    a {
        font-family: "Josefin Sans", "sans-serif";
        color: rgb(105, 105, 105);
        transition: all 0.5s;
    }

    a:link,
    a:hover,
    a:visited,
    a:active {
        text-decoration: none;
    }

    a:hover {
        color: black;
        padding: 10px;
        border-radius: 20px;
        background-color: rgba(203, 203, 203, 0.466);
    }

    form {
        display: inline;
    }

    @media only screen and (max-width: 600px) {
        .special-char-btn {
            display: none !important;
        }
    }

    @media only screen and (max-width: 460px) {
        #search-btn {
            display: none !important;
        }
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
        font-family: "Josefin Sans", "sans-serif";
    }

    .radio {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 13px;
        color: grey;
    }
    
    .radio-inputs .radio {
        flex: 1 1 auto;
        text-align: center;
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

    .br {
        height: 85px;
    }

    @media only screen and (max-width: 1100px) {
        .radio-inputs {
            display: none;
        }
    }

</style>
    
<nav id="topnav">
    <ul>
        <div id="left">
            <li id="icon">
                <a href="/">MaltiLex</a>
            </li>
            {#if !noSearch}
            <li id="search">
                <div id="search-wrapper">
                    <button id="special-char-btn1" class="special-char-btn" on:click={() => appendSpecialLetter("ċ")}>ċ</button>
                    <button id="special-char-btn2" class="special-char-btn" on:click={() => appendSpecialLetter("ġ")}>ġ</button>
                    <button id="special-char-btn3" class="special-char-btn" on:click={() => appendSpecialLetter("ħ")}>ħ</button>
                    <button id="special-char-btn4" class="special-char-btn" on:click={() => appendSpecialLetter("ż")}>ż</button>
                    <form method="get" action="/search" on:submit={handleSubmit}> 
                        <input id="search-bar" placeholder="  search..." bind:value={inputVal}>
                        <button id="search-btn">search</button>
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
            </li>
            {/if}
        </div>
        <div id="right">
            <li id="about">
                <a href="/about" id="about-link">about</a>
            </li>
            <li id="source">
                <a href="https://github.com/BL-CZY/malti" id="source-link">source</a>
            </li>
        </div>
    </ul>
</nav>

<div class="br"></div>

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

