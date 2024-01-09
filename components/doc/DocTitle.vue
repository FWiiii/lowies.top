<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <div>
    <h1>{{ props.article.title }}</h1>
    <div op-50 mb-2em>
      <div flex="~ items-center">
        <i i-carbon:calendar mr-0.5em /> {{ formattedDate(props.article.date) }}
      </div>
      <div flex="~ gap-2" mt-0.5em>
        <NuxtLink
          v-for="tag in props.article.tags" :key="tag" :to="`/tags/${tag}`"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
