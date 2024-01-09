<script setup lang="ts">
const contentQuery = await queryContent().find()

const tagsContent = contentQuery
  .filter(i => i.tags) // 过滤无tags的选项
  .reduce((counts, post) => {
    for (const tag of post.tags) {
      if (counts[tag])
        counts[tag]++
      else
        counts[tag] = 1
    }
    return counts
  }, {} as { [key: string]: number })
</script>

<template>
  <h1 class="text-title mb-2em font-bold">
    Tags
  </h1>
  <ul class="flex gap-1em flex-wrap">
    <li v-for="(value, key, index) in tagsContent" :key="key" slide-enter :style="{ '--stagger': index + 1 }" class="px-2 bg-gray-400:20 rd-1">
      <NuxtLink :to="`/tags/${key}`" class="flex gap-2">
        <span class="hover">#{{ key }}</span>
        <span>{{ value }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
