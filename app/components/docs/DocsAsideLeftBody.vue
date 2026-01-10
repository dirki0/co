<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContentNavigation
    highlightColor = "neutral"
    color="neutral"
    highlight
    :navigation="navigation"
  />
</template>
