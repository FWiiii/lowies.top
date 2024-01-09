<script lang="ts" setup>
function backTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div
    pr-2em
    xl="absolute top-0 right-full h-full"
  >
    <div sticky top-14 w-8em>
      <div
        cursor-pointer
        flex="~ items-center"
        @click="$router.back()"
      >
        <div i-carbon:arrow-up-left />
        <span>Back</span>
      </div>
      <div
        hidden
        xl="block cursor-pointer flex items-center"
        @click="backTop"
      >
        <div i-carbon:up-to-top />
        <span>To Top</span>
      </div>
    </div>
  </div>
</template>
