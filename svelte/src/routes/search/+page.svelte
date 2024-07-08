<script>
    import Nav from "$lib/nav.svelte"
    import SearchEntry from "$lib/searchEntry.svelte"
    let en = ["wo", "po", "vo", "ho", "to"];
</script>

<style>
    hr {
        width: 87%;
    }
</style>

<Nav />
<hr />
<SearchEntry index=1 word="hello" pos="verb" en={en} matched="um" url="/"/>
<SearchEntry index=1 word="hello" pos="verb" en={en} matched="um" url="/"/>