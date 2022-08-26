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
            <Transition name="nav-expand">
                <nav v-if="mobileNavIsOpen">
                    <ul class="mobile__links flex-column">
                        <li>
                            <router-link to="/about">O mnie</router-link>
                        </li>
                        <li>
                            <router-link to="/gallery">Galeria</router-link>
                        </li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </nav>
            </Transition>
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

nav {
    background-color: var(--color-main-light-darker);

    transform-origin: top;

    padding: var(--padding-mobile-top) var(--padding-mobile-sides);

    position: fixed;
    width: 100%;
    height: calc((4 * 1.2rem) + (3 * 1.3rem) + (8rem + 4rem));
    top: calc(48px + 4rem);
    left: 0;
    z-index: 8;
}
.mobile__links {
    gap: 1.3rem;

    list-style: none;
    box-shadow: var(--color-shadow-bottom);
    /* background-color: var(--color-main-light-darker);

    transform-origin: top;

    padding: var(--padding-mobile-top) var(--padding-mobile-sides);

    position: fixed;
    width: 100%;
    height: calc((4 * 1.2rem) + (3 * 1.3rem) + (8rem + 4rem));
    top: calc(48px + 4rem);
    left: 0;
    z-index: 8; */
}

.mobile__links li {
    text-transform: uppercase;
    font-size: 1.2rem;
    /* font-weight: 600; */
}

a,
a:active {
    text-decoration: none;
    color: var(--color-font-dar-darker);
}

a:hover {
    background-image: var(--color-linear-gradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* TRANSITIONS */

.nav-expand-enter-from,
.nav-expand-leave-to {
    /* opacity: 0; */
    /* transform: scaleY(0); */
    height: 0;
}

.nav-expand-enter-to,
.nav-expand-leave-from {
    /* opacity: 1; */
    /* transform: scaleY(1); */
    height: calc((4 * 1.2rem) + (3 * 1.3rem) + (8rem + 4rem));
}

.nav-expand-enter-active,
.nav-expand-leave-active {
    transition: all 1s ease;
}
</style>
