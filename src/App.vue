<script setup lang="ts"></script>

<template>
  <header>
    <h1>Plaster calc</h1>
    <nav>
      <router-link to="/">Products</router-link>
      <router-link to="/areas-to-sheet">Areas</router-link>
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

<style lang="scss" scoped>
h1 {
  text-align: center;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
  a {
    width: 100%;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: #333;
    &:hover {
      background-color: #ccc;
    }
  }
}

@media (min-width: 768px) {
  h1 {
    text-align: left;
    padding: 0 40px;
  }
  nav {
    justify-content: flex-start;
    a {
      width: auto;
      padding: 10px 40px;
    }
  }
}
</style>
