<script setup lang="ts">
import { useDocusI18n } from '../../composables/useDocusI18n'

const appConfig = useAppConfig()
const site = useSiteConfig()

const { localePath, isEnabled, locales } = useDocusI18n()

</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="localePath('/')"
    :title="appConfig.header?.title || site.name"
  >

    <template #title>
      <AppHeaderLogo class="lg:pl-4 h-5 font-medium tracking-widest text-xs w-auto shrink-0" />
    </template>

    <template #right>
      <AppHeaderCTA />

      <template v-if="isEnabled && locales.length > 1">
        <ClientOnly>
          <LanguageSelect />

          <template #fallback>
            <div class="h-8 w-8 rounded-full animate-pulse bg-neutral-200 dark:bg-neutral-800" />
          </template>
        </ClientOnly>

        <USeparator
          orientation="vertical"
          class="h-6 hidden border-current/10"
        />
      </template>


      <ClientOnly>
        <UColorModeButton class="rounded-full" />

        <template #fallback>
          <div class="h-8 w-8 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        </template>
      </ClientOnly>

    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle
        :open="open"
        class="lg:hidden"
        @click="toggle"
      />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
