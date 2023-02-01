<template>
<h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50 flex justify-between">
    <div>
        <slot>{{ component }}</slot>
    </div>
    <span v-if="false" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-lg flex items-center">
        <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1V6Zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1V6Z" /></svg>
        API Reference
    </span>
</h2>
</template>

<script setup lang="ts">
defineProps<{
    component?: string
}>()
</script>