<script setup lang="ts">
import { siteConfig } from '@/site.config'
</script>

<template>
  <footer pt-5em>
    <div flex="~ items-center flex-col gap-1em">
      <span op-50 text-sm>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" class="link">
          CC BY-NC-SA 4.0
        </a>
        2023-PRESENT © {{ siteConfig.author }}
      </span>
    </div>
  </footer>
</template>
