<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'


</script>

<template>
      <motion.div 
        class="box size-8 bg-primary mx-auto"
        :animate="{ rotate: 360 }"
        :transition="{ duration: 1 }"
    />
 
</template>
