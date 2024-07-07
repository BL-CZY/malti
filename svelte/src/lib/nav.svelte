<style>
    #topnav {
        background-color: rgb(240, 240, 240);;
        border-bottom: 1px solid rgb(105, 105, 105);
        padding: 2px 70px 2px 70px;
        overflow: hidden;
    }

    #left {
        flex: 6;
        display: flex;
    }

    #right {
        flex: 1;
        text-align: right;
        display: flex;
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

    #input-wrapper {
        display: inline;
        position: relative;
    }

    #search-btn {
        position: absolute;
        top: -8%;
        right: calc(0% + 8px);
    }

    #special-char-btn1 {
        position: absolute;
        top: -8%;
        right: calc(0% + 62px);
    }

    #special-char-btn2 {
        position: absolute;
        top: -8%;
        right: calc(0% + 81px);
    }

    #special-char-btn3 {
        position: absolute;
        top: -8%;
        right: calc(0% + 102px);
    }

    #special-char-btn4 {
        position: absolute;
        top: -8%;
        right: calc(0% + 123px);
    }

    #search-bar {
        width: 70%;
        transition: all, 0.5s;
        border-radius: 5px;
        border: 1px solid rgb(105, 105, 105);
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
    }

    a:hover::after {
        position: absolute;
        content: '';
        display: block;
        height: 1.5px;
        background-color: red;
        bottom: 1px;
    }

    a::after {
        position: absolute;
        content: '';
        display: block;
        height: 1.5px;
        background-color: red;
        bottom: 1px;
        transition: all, 0.5s;
    }

    #about-link::after {
        right: 26px;
        width: 0;
    }

    #about-link:hover::after {
        right: -2px;
        width: 50px;
    }

    #source-link::after {
        right: 26px;
        width: 0;
    }

    #source-link:hover::after {
        right: -2px;
        width: 58px;
    }

    @media only screen and (max-width: 550px) {
        .special-char-btn {
            display: none !important;
        }

        #search-bar {
            width: 40%;
        }

        #search-bar:active {
            width: 40%;
        }
    }

    @media only screen and (max-width: 460px) {
        #search-btn {
            display: none !important;
        }

        #search-bar {
            width: 100%;
        }

        #search-bar:active {
            width: 100%;
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
                    <div id="input-wrapper">
                        <button id="special-char-btn1" class="special-char-btn" on:click={() => appendSpecialLetter("ċ")}>ċ</button>
                        <button id="special-char-btn2" class="special-char-btn" on:click={() => appendSpecialLetter("ġ")}>ġ</button>
                        <button id="special-char-btn3" class="special-char-btn" on:click={() => appendSpecialLetter("ħ")}>ħ</button>
                        <button id="special-char-btn4" class="special-char-btn" on:click={() => appendSpecialLetter("ż")}>ż</button>
                        <input id="search-bar" placeholder="  search..." bind:value={inputVal}>
                        <button id="search-btn">search</button>
                    </div>
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

<script>
    let inputVal = "";

    let appendSpecialLetter = (letter) => {
        inputVal += letter;
    }
</script>

