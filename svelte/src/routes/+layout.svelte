<script>
    import Nav from "$lib/nav.svelte"
    import { page } from "$app/stores"
</script>

<Nav noSearch={$page.url.pathname == "/"}/>

<slot></slot>
