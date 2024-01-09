<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header p-2em>
    <NavBar />
  </header>
  <main flex px-7 py-10 w-full>
    <div w-70ch m-auto>
      <slot />
      <Footer />
    </div>
  </main>
</template>
