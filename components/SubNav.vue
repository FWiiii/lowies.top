<script setup lang="ts">
import { subNavLinks } from '@/site.config'

const { path } = useRoute()

const router = useRouter()
</script>

<template>
  <ul
    flex="~ gap-1em" mb-2em
  >
    <li
      v-for="(item) in subNavLinks" :key="item.path"
      cursor-pointer
      :class="path === item.path ? 'text-deep font-bold' : 'deep-hover'"
      @click="router.push(item.path)"
    >
      <span text-title> {{ item.title }}</span>
    </li>
  </ul>
</template>
