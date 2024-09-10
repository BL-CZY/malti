<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playwrite+CU:wght@100..400&display=swap');

    #main {
        width: 80%;
        margin: auto;
        border: 2px solid rgb(205, 205, 205);
        border-radius: 10px;
        padding: 20px;
    }

    .citation {
        width: 90%;
        margin: auto;
        font-style: italic;
        border: none;
        background-color: rgb(235, 235, 235);
        padding: 10px;
        border-radius: 10px;
    }

    p, a {
        font-size: 20px;
        font-weight: 400;
        font-family: "Josefin Sans", "sans-serif";
    }

    #def-list {
        width: 90%;
        display: flex;
    }

    ul {
        padding: 0;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    li {
        list-style: none;
        border: 1px solid black;
        padding-left: 10px;
    }

    #left {
        flex: 1;
        border-left: 1px solid black;
    }

    #right {
        flex: 5;
        border-right: 1px solid black;
    }
</style>

<div id="main">
    <h1 id="general">General</h1>
    <hr />
    <p>
        This dictionary is made aiming to provide the most accurate search results for inputs.
        For long, Maltese learners struggle to find a reliable source for acquiring dictions.
        As a result, this dictionary is created to improve the current situation. The database is originally from <a href="https://mlrs.research.um.edu.mt/resources/gabra/">Ġabra</a>, and is then being modified into this website's own schema.
    </p>
    <hr />
    <h1 id="usage">Usage</h1>
    <hr />
    <h3 id="nav">The top bar</h3>
    <p>
        The top bar provides access to the search functionalities.
        At the main page, the search input is placed in the middle of the page.
        At other pages, the input is placed at the center of the top bar.
        The for buttons with ċġħż can help people without access to a Maltese keyboard input Maltese, and the three options to the right would dictate which database to use while searching.
        <br />
        <br />
        Maltese: Search Maltese only<br />
        English: Search English only<br />
        Both: Search both Maltese and English<br />
    </p>
    <h3 id="terms">Terminology</h3>
    <p>
        For verbs, there is a filter on top that can be used to filter words that satisfy certain conditions.
        The word pages might contain names that are confusing. As a result, this is a list that explains them<br />
    </p>
    <div id="def-list">
        <ul id="left">
            <li><p>name</p></li>
            <li><p>perf</p></li> 
            <li><p>impf</p></li>
            <li><p>imp</p></li>
            <li><p>p1</p></li>
            <li><p>p2</p></li>
            <li><p>p3</p></li>
            <li><p>sg</p></li>
            <li><p>pl</p></li>
            <li><p>m</p></li>
            <li><p>f</p></li>
            <li><p>mf</p></li>
            <li><p>pos</p></li>
            <li><p>neg</p></li>
            <li><p>phon</p></li>
            <li><p>sub</p></li>
            <li><p>sub_num</p></li>
            <li><p>sub_gen</p></li>
            <li><p>dir_obj/dirobj</p></li>
            <li><p>dir_num</p></li>
            <li><p>dir_gen</p></li>
            <li><p>ind_obj/indobj</p></li>
            <li><p>ind_num</p></li>
            <li><p>ind_gen</p></li>
            <li><p>pol</p></li>
        </ul>
        <ul id="right">
            <li><p>meaning</p></li>
            <li><p>the perfect verb tense in Maltese</p></li>
            <li><p>the imperfect verb tense in Maltese</p></li>
            <li><p>the imperative verb tense in Maltese</p></li>  
            <li><p>first person such as I and we</p></li>
            <li><p>second person such as you</p></li>
            <li><p>third person such as he, she, it, they, ...</p></li>
            <li><p>singular</p></li>
            <li><p>plural</p></li>
            <li><p>male</p></li>
            <li><p>female</p></li>
            <li><p>male&female</p></li>
            <li><p>positive</p></li>
            <li><p>negative</p></li>
            <li><p>phonetic</p></li>
            <li><p>the person of the subject (I, you, they, ...)</p></li>
            <li><p>the number of the subject, i.e. singular/plural</p></li>
            <li><p>the gender of the subject, i.e. m, f, mf</p></li>
            <li><p>the direct object of a verb form (I, you, they, ...)</p></li>
            <li><p>the number of the object, i.e. singular/plural</p></li>
            <li><p>the gender of the object, i.e. m, f, mf</p></li>
            <li><p>the indirect object of a verb form (I, you, they, ...)</p></li>
            <li><p>the number of the object, i.e. singular/plural</p></li>
            <li><p>the gender of the object, i.e. m, f, mf</p></li>
            <li><p>the polarity of the form, i.e. positive and negative</p></li>
        </ul>
    </div>
    <hr />
    <h1 id="reference">Reference</h1>
    <hr />
    <h3 id="gabra">Ġabra:</h3>
    <p>
        <a href="https://mlrs.research.um.edu.mt/resources/gabra/">Ġabra</a> has the database that this dictionary is based off.
        It provide extensive information about words in Maltese. 
        <br />
        Citation:
    </p>
    <div class="citation">
        John J. Camilleri. "A Computational Grammar and Lexicon for Maltese", M.Sc. Thesis. Chalmers University of Technology. Gothenburg, Sweden, September 2013. 
    </div>
    <p>The Ġabra dictionary's database is also based on some other databases. As a result, they are listed here as well:</p>
    {#each sources as source}
        <div class="citation">
            {source}
        </div>
        <br />
    {/each}
    <hr />
</div>

<script>
    $: sources = [
        "Spagnol2011, A Tale of Two Morphologies. Verb structure and argument alternations in Maltese, Michael Spagnol, 2011, Germany: University of Konstanz dissertation",
        "Ellul2013, Deverbal nouns in Maltese, Leanne Ellul, 2013, Malta: University of Malta dissertation",
        "Mayer2013, Fixing the broken plural in Maltese, Thomas Mayer, Michael Spagnol & Florian Schönhuber, 2013, (in print)",
        "Falzon2013, Basic English-Maltese Dictionary, Grazio Falzon, 2013, http://metashare.metanet4u.eu/repository/browse/basic-english-maltese-dictionary/13fc5802abc511e1a404080027e73ea2a210be7dd5c44a3b9dd47afb4b2a34ef/",
        "Camilleri2013, A computational grammar and lexicon for Maltese, John J. Camilleri, 2013, Sweden: Chalmers University of Technology, M.Sc. thesis",
        "UserFeedback, Anonymous feedback suggestions from users, Various, 2014",
        "KelmaKelma, Kelma Kelma Facebook Page, Various, 2014, https://www.facebook.com/kelmakelma.mt",
        "KelmetilMalti, Kelmet il-Malti Facebook Group, Various, 2014, https://www.facebook.com/groups/246657308743181/",
        "Apertium2014, Apertium: A free/open-source machine translation platform, Apertium, 2014, http://www.apertium.org/",
        "DM2015, Dizzjunarju Malti, Various, 2015, Contributions by research assistants funded by the DM project",
        "IATE2016, IATE: The EU's Multilingual termbase, Inter-Active Terminology for Europe (IATE) Database, 2016, Download IATE, European Union, 2016"
    ];
</script>
