<template>
    <header>
        <NavBar />
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "../src/components/NavBar.vue";
</script>

<style scoped></style>
