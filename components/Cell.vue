<script setup lang="ts">
import { formattedDate } from '@/utils'

const props = defineProps(['article'])
</script>

<template>
  <NuxtLink :to="`/p${props.article._path}`">
    <li
      :title="props.article.title"
      flex="~ items-center gap-2"
      m="b-6 t-2"
      hover list-none
    >
      <span class="text-xs op-60 border px-0.5">
        {{ props.article.lang === 'zh' ? '中文' : 'en' }}
      </span>
      <span class="text-lg">
        {{ props.article.title }}
      </span>
      <span class="text-xs op-60">
        {{ formattedDate(props.article.date) }}
      </span>
    </li>
  </NuxtLink>
</template>
