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
                    @click="toggleMobileNav"
                    class="mobile__burger"
                    icon="dashicons:menu-alt3"
                    color="black"
                    width="30"
                    height="30"
                />
            </figure>
            <nav>
                <ul v-if="mobileNavIsOpen" class="mobile__links flex-column">
                    <li>
                        <router-link to="/about" class="text-color"
                            >O mnie</router-link
                        >
                    </li>
                    <li><router-link to="/gallery">Galeria</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

// MOBILE NAV

const mobileNavIsOpen = ref(false);
const toggleMobileNav = () => {
    mobileNavIsOpen.value = !mobileNavIsOpen.value;
};
</script>
<style scoped>
.navbar-mobile {
    /* background-color: var(--color-main-light-darker); */
    padding: var(--padding-mobile-sides);

    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    z-index: 9;
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
    padding: var(--padding-mobile-top) var(--padding-mobile-sides);
    /* background-color: var(--color-main-light-darker); */
    gap: 0.8rem;

    list-style: none;
    box-shadow: var(--color-shadow-bottom);

    position: fixed;
    width: 100%;
    top: calc(48px + 4rem);
    left: 0;
    z-index: 8;
}

.mobile__links li {
    text-transform: uppercase;
    font-size: 1.2rem;
    /* font-weight: 600; */
}

a {
    text-decoration: none;
    color: var(--color-font-dar-darker);
}
</style>
