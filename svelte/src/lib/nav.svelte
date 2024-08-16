<style>
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
        width: 70%;
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

    @media only screen and (max-width: 550px) {
        .special-char-btn {
            display: none !important;
        }
    }

    @media only screen and (max-width: 460px) {
        #search-btn {
            display: none !important;
        }
    }
</style>

<nav id="topnav">
    <ul>
        <div id="left">
            <li id="icon">
                <a href="/">dictionary</a>
            </li>
            <li id="search">
                <div id="search-wrapper">
                    <button id="special-char-btn1" class="special-char-btn" on:click={() => appendSpecialLetter("ċ")}>ċ</button>
                    <button id="special-char-btn2" class="special-char-btn" on:click={() => appendSpecialLetter("ġ")}>ġ</button>
                    <button id="special-char-btn3" class="special-char-btn" on:click={() => appendSpecialLetter("ħ")}>ħ</button>
                    <button id="special-char-btn4" class="special-char-btn" on:click={() => appendSpecialLetter("ż")}>ż</button>
                    <form method="get" action="/search" on:submit={handleSubmit}>
                        <button id="search-btn">search</button>
                        <input id="search-bar" placeholder="  search..." bind:value={inputVal}>
                    </form>
                </div>
            </li>
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

<br />
<br />
<br />
<br />

<script>
    import { goto } from '$app/navigation';

    let inputVal = "";

    let appendSpecialLetter = (letter) => {
        inputVal += letter;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await goto(`/search?query=${inputVal}&skip=0&limit=10`);
        window.location.reload();
    }
</script>

