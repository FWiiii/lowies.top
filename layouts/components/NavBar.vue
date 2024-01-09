<script setup lang="ts">
import { navLinks } from '@/site.config'
</script>

<template>
  <nav
    flex="~ items-center gap-1.5em"
    text-lg max-w-70ch m-auto font-bold font-mono
  >
    <NuxtLink v-for="link in navLinks" :key="link.path" hover :title="link.title" :to="link.path">
      <span hidden md:inline>{{ link.title }}</span>
      <div :class="link.icon" md:hidden />
    </NuxtLink>
    <a href="/feed.xml" target="_blank" ml-auto>
      <div title="Get Rss Link" i-carbon:rss hover />
    </a>
    <DarkMode />
  </nav>
</template>
