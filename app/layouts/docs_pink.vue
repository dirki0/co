
<script setup lang="ts">
  const appConfig = useAppConfig()
appConfig.ui.colors = {
      primary: 'rose',
      neutral: 'emerald',
    }
  
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
