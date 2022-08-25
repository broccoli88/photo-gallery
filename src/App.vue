<template>
    <header>
        <NavBar />
    </header>

    <main>
        <RouterView />
    </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "../src/components/NavBar.vue";
</script>

<style scoped>
main {
    margin: 25rem 0;
}
</style>
