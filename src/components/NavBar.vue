<template>
    <div class="wrapper">
        <div class="navbar-mobile flex">
            <figure class="flex">
                <Icon
                    icon="codicon:device-camera"
                    color="#fad209"
                    width="48"
                    height="48"
                    :inline="true"
                />
                <Icon
                    class="mobile__burger"
                    icon="dashicons:menu-alt3"
                    color="black"
                    width="30"
                    height="30"
                />
            </figure>
            <nav>
                <ul class="mobile__links flex-column">
                    <li>O mnie</li>
                    <li>Galeria</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style scoped>
.wrapper {
    background-color: var(--color-main-light-darker);
    padding: var(--padding-mobile-navbar);

    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}

/* MOBILE NAVBAR */

.navbar-mobile > figure {
    flex: 1;

    align-items: center;
    justify-content: space-between;
}

.mobile__burger {
    cursor: pointer;
}
.mobile__links {
    padding: var(--padding-mobile-navbar);
    background-color: var(--color-main-light-darker);
    gap: 0.8rem;

    list-style: none;

    position: fixed;
    width: 100%;
    top: 48px;
    left: 0;
}

.mobile__links li {
    text-transform: uppercase;
    font-weight: 600;
}
</style>
