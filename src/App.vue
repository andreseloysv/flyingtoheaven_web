<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <header>
    <div class="title">
      <h1><a href="/">Red de Culto</a></h1>
    </div>
    <div class="wrapper"></div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@import "@/assets/base.css";
@import "@/assets/flexboxgrid.css";
@font-face {
  font-family: "Aldo the Apache";
  src: url("fonts/AldotheApache.woff2") format("woff2"),
    url("fonts/AldotheApache.woff") format("woff"),
    url("fonts/AldotheApache.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
#app {
  margin: 0 auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.title {
  text-align: center;
  background-color: #fef100;
}
.title h1 a {
  color: #ed008b;
  font-weight: bold;
  padding: 0.5rem;
  font-family: "Aldo the Apache", Helvetica, Arial;
}
</style>
