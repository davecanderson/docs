---
title: Autocomplete Component
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import AutocompleteExamples from "../../src/gallery/inputs/AutocompleteExamples.vue"
import metadata from "../../src/gallery/metadata.json"
import { allContacts, files } from "../../src/gallery/data.ts"
import { useMetadata } from '@servicestack/vue'

const contact = allContacts[0]

const { setMetadata } = useMetadata()
setMetadata(metadata)
</script>

<Breadcrumbs class="not-prose my-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Autocomplete</Breadcrumb>
</Breadcrumbs>

The `Autocomplete` component provides a user friendly Input for being able to search and quickly select items
with support for partial items view and infinite scrolling.

```html
<form class="col-span-12">
    <div class="mb-3">
        <Autocomplete id="simple" :options="allContacts" v-model="simple" label="Single Contact"
            :match="(x: any, value: string) => x!.displayName.toLowerCase().includes(value.toLowerCase())"
            placeholder="Select Contact">
            <template #item="{ displayName }">
                <span class="block truncate">{{ displayName }}</span>
            </template>
        </Autocomplete>
        <div class="mt-2 flex justify-end">
            <p>
                <b class="text-gray-500">Single:</b>
            <div v-if="simple" class="flex">
                <img :src="simple.profileUrl" class="w-8 h-8 rounded-full mr-2">
                <b class="text-lg">{{ simple.displayName }}</b>
            </div>
            </p>
        </div>
    </div>

    <div class="mb-3">
        <Autocomplete id="contact" :options="allContacts" v-model="contact" label="Single Contact with Icon"
            :match="(x: any, value: string) => x!.displayName.toLowerCase().includes(value.toLowerCase())"
            placeholder="Select Contact">
            <template #item="{ displayName, profileUrl }">
                <div class="flex items-center">
                    <Icon class="h-6 w-6 flex-shrink-0 rounded-full" :src="profileUrl" loading="lazy" />
                    <span class="ml-3 truncate">{{ displayName }}</span>
                </div>
            </template>
        </Autocomplete>
        <div class="mt-2 flex justify-end">
            <p>
                <b class="text-gray-500">Single with Icon:</b>
            <div v-if="contact" class="flex">
                <img :src="contact.profileUrl" class="w-8 h-8 rounded-full mr-2">
                <b class="text-lg">{{ contact.displayName }}</b>
            </div>
            </p>
        </div>
    </div>

    <div class="mb-3">
        <Autocomplete id="contacts" :options="allContacts" v-model="contacts" multiple
            label="Multiple Contacts with Icon"
            :match="(x: any, value: string) => x!.displayName.toLowerCase().includes(value.toLowerCase())"
            placeholder="Select Contact">
            <template #item="{ displayName, profileUrl }">
                <div class="flex items-center">
                    <Icon class="h-6 w-6 flex-shrink-0 rounded-full" :src="profileUrl" loading="lazy" />
                    <span class="ml-3 truncate">{{ displayName }}</span>
                </div>
            </template>
        </Autocomplete>
        <div class="mt-2">
            <div class="text-right"><b class="text-gray-500">Multiple with Icon:</b></div>
            <p>
            <div v-if="contacts.length" class="flex flex-wrap">
                <div v-for="contact in contacts" class="flex ml-4 mb-2">
                    <img :src="contact.profileUrl" class="w-6 h-6 rounded-full mr-2">
                    <span>{{ contact.displayName }}</span>
                </div>
            </div>
            </p>
        </div>
    </div>
</form>
```

<AutocompleteExamples class="max-w-prose not-prose" />
