<template>
<div class="flex flex-col w-96">
    <h4 class="py-6 text-center text-xl">Create New Project</h4>

    <input type="text" v-model="project" autocomplete="off" spellcheck="false" @keydown="validateSafeName"
            class="mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"/>

    <ShellCommand class="mb-2">dotnet tool install -g x</ShellCommand>
    <ShellCommand class="mb-2">x new {{template}} {{project}}</ShellCommand>

    <h4 class="py-6 text-center text-xl">In <span class="font-semibold text-indigo-700">/MyApp</span>, Run Tailwind</h4>
    <ShellCommand class="mb-2">npm run ui:dev</ShellCommand>

    <h4 class="py-6 text-center text-xl">Run .NET Project (New Terminal)</h4>
    <ShellCommand class="mb-2">dotnet watch</ShellCommand>
</div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import ShellCommand from "./ShellCommand.vue"

const props = defineProps<{
    template: string
}>()

const project = ref('ProjectName')

function validateSafeName(e:KeyboardEvent) {
    if (e.key.match(/[\W]+/g)) {
        e.preventDefault()
        return false
    }
}
</script>
