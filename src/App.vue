<script setup lang="ts"></script>

<template>
  <header>
    <h1>Plaster calc</h1>
    <nav>
      <router-link to="/">Products to use</router-link>
      <router-link to="/areas-to-sheet">Areas to sheet</router-link>
      <router-link to="/material-list">Material list</router-link>
    </nav>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.fullPath"></component>
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped></style>
