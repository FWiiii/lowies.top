<script setup lang="ts">
const { posts } = defineProps(['posts'])
</script>

<template>
  <ul>
    <template v-for="(article, index) in posts" :key="article._path">
      <div
        v-if="article.isMarked"
        relative pointer-events-none select-none h-20
        slide-enter :style="{ '--stagger': index + 1 }"
      >
        <span
          text="8em stroke-2 stroke-hex-aaa" font-bold
          op-15 color-transparent
          absolute top--0.2em left--0.3em
        >{{ article.year }}</span>
      </div>
      <Cell v-else :article="article" slide-enter :style="{ '--stagger': index + 1 }" />
    </template>
  </ul>
</template>
