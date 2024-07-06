<style>
    #topnav {
        background-color: white;
        border-bottom: 1px solid black;
        padding: 2px 70px 2px 70px;
        overflow: hidden;
    }

    #left {
        flex: 1;
        display: flex;
    }

    #right {
        flex: 1;
        text-align: right;
        display: flex;
    }
    
    #search {
        display: inline;
        flex: 4;
    }

    #icon {
        flex: 1;
    }

    #about {
        flex: 5;
    }

    #source {
        flex: 1;
    }
    
    ul {
        display: flex;
        padding: 0;
    }

    li {
        list-style-type: none;
        display: inline;
    }

    a {
        color: black;
        transition: all 0.5s;
        text-decoration: underline;
    }

    a:link,
    a:hover,
    a:visited,
    a:active {
        text-decoration: none;
    }
</style>

<nav id="topnav">
    <ul>
        <div id="left">
            <li id="icon">
                <a href="/">dictionary</a>
            </li>
            <li id="search">
                <div>
                    <button on:click={() => appendSpecialLetter("ċ")}>ċ</button>
                    <button on:click={() => appendSpecialLetter("ġ")}>ġ</button>
                    <button on:click={() => appendSpecialLetter("ħ")}>ħ</button>
                    <button on:click={() => appendSpecialLetter("ż")}>ż</button>
                    <input id="search-bar" bind:value={inputVal} />
                    <button>search</button>
                </div>
            </li>
        </div>
        <div id="right">
            <li id="about">
                <a href="/about">about</a>
            </li>
            <li id="source">
                <a href="https://github.com/BL-CZY/malti">source</a>
            </li>
        </div>
    </ul>
</nav>

<script>
    let inputVal = "";

    let appendSpecialLetter = (letter) => {
        inputVal += letter;
    }
</script>

