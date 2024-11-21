<script>
    import Nav from "$lib/nav.svelte";
    import Footer from "$lib/footer.svelte";
    import { page } from "$app/stores";
</script>

<Nav noSearch={$page.url.pathname == "/"} />

<slot></slot>
