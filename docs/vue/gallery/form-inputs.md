---
title: Form Inputs Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import BookingsForm from "../../src/gallery/inputs/BookingsForm.vue"
import AutocompleteExamples from "../../src/gallery/inputs/AutocompleteExamples.vue"
import TagInputExamples from "../../src/gallery/inputs/TagInputExamples.vue"
import { tracks } from "../../src/gallery/data.ts"
import metadata from "../../src/gallery/metadata.json"
import bookings from "../../src/gallery/bookings.json"
import { allContacts } from "../../src/gallery/data.ts"
import { useAppMetadata } from '@servicestack/vue'

const contact = allContacts[0]

const { setMetadata } = useAppMetadata()
setMetadata(metadata)
</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Form Input Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference component="TextInput">Bookings Form</ApiReference>

The `TextInput`, `SelectInput`, `CheckboxInput` and `TextAreaInput` contains the most popular
Input controls used by C# POCOs which can be bound directly to Request DTOs and includes support for
[declarative](/declarative-validation) and [Fluent Validation](/validation) binding.

```html
<form @submit.prevent="submit">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
        <div class="space-y-6 py-6 px-4 sm:p-6 bg-white dark:bg-black">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Update an existing Booking
                </h3>
            </div>
            <fieldset>
                <ErrorSummary :except="visibleFields" class="mb-4" />
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <TextInput id="name" v-model="request.name" required placeholder="Name for this booking" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <SelectInput id="roomType" v-model="request.roomType" :options="enumOptions('RoomType')" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <TextInput type="number" id="roomNumber" v-model="request.roomNumber" min="0" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <TextInput type="number" id="cost" v-model="request.cost" min="0" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <TextInput type="date" id="bookingStartDate" v-model="request.bookingStartDate" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <TextInput type="date" id="bookingEndDate" v-model="request.bookingEndDate" />
                    </div>
                    <div class="col-span-6">
                        <TextareaInput id="notes" v-model="request.notes" placeholder="Notes about this booking" class="h-24" />
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="mt-4 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-right sm:px-12">
            <div class="flex justify-between space-x-3">
                <div>
                    <ConfirmDelete v-if="canDelete" @delete="onDelete">Delete</ConfirmDelete>
                </div>
                <div>
                    <PrimaryButton @click="submit">Update Booking</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
</form>
```

<BookingsForm :id="1" class="mb-4" />

Which can be wired up to handle querying, updating and deleting including limiting functionality to authorized users with:

```html
<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useAppMetadata, useAuth, useClient } from '@servicestack/vue'
import { DeleteBooking, QueryBookings, UpdateBooking } from '../dtos'

const props = defineProps<{
    id: number
}>()
const emit = defineEmits<{
    (e: 'done'): void
}>()

const { enumOptions, toFormValues } = useAppMetadata()

const visibleFields = "name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes"

const { hasRole, user, isAuthenticated } = useAuth()
const canDelete = computed(() => hasRole('Manager'))
const client = useClient()
const request = ref(new UpdateBooking())

watchEffect(async () => {
    const api = await client.api(new QueryBookings({ id: props.id }))
    if (api.succeeded) {
        request.value = new UpdateBooking(toFormValues(api.response?.results[0]))
    }
})

async function submit(e:Event) {
    const api = await client.api(request.value)
    if (api.succeeded) close()
}
async function onDelete() {
    const api = await client.apiVoid(new DeleteBooking({ id: props.id }))
    if (api.succeeded) close()
}

const close = () => emit('done')
</script>
```

This also shows how we can utilize `enumOptions` from our [App Metadata](/vue/use-appmetadata) to populate select drop downs from C# enums.

<ApiReference component="Autocomplete">Autocomplete</ApiReference>

The `Autocomplete` component provides a user friendly Input for being able to search and quickly select items
with support for partial items view and infinite scrolling.

```html
<template>
<div class="p-4 shadow sm:rounded-md">
    <div class="max-w-xl grid grid-cols-6 gap-6">
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
                    label="Single Contact with Icon"
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
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { allContacts } from '../data'

const simple = ref<any>(null)
const contact = ref<any>(null)
const contacts = ref<any[]>([])
</script>
```

<AutocompleteExamples class="max-w-prose" />

<ApiReference component="TagInput">TagInput</ApiReference>

The `TagInput` component provides a user friendly control for managing a free-form `List<string>` tags or symbols
which is also supported in declarative Auto Forms using the `[Input(Type="tag")]` attribute:

```html
<AutoEditForm formStyle="card" type="UpdateContact" v-model="contact" />
```

<AutoEditForm formStyle="card" type="UpdateContact" v-model="contact" class="mb-4" />

Which uses the UpdateContact DTO below to render the `AutoEditForm` and perform the API Update:

```csharp
// Customize Edit Forms with [Input] and [FieldCss] attributes 
public class UpdateContact : IPatchDb<Contact>, IReturn<Contact>
{
    public int Id { get; set; }

    [ValidateNotEmpty]
    public string? FirstName { get; set; }

    [ValidateNotEmpty]
    public string? LastName { get; set; }

    [Input(Type = "file"), UploadTo("profiles")]
    public string? ProfileUrl { get; set; }
    
    public int? SalaryExpectation { get; set; }

    [ValidateNotEmpty]
    public string? JobType { get; set; }

    public int? AvailabilityWeeks { get; set; }
    public EmploymentType? PreferredWorkType { get; set; }
    public string? PreferredLocation { get; set; }

    [ValidateNotEmpty]
    public string? Email { get; set; }
    public string? Phone { get; set; }
    
    [Input(Type = "tag"), FieldCss(Field = "col-span-12")]
    public List<string>? Skills { get; set; }}
 
    [Input(Type="textarea")]
    [FieldCss(Field="col-span-12 text-center", Input="h-48", Label="text-xl text-indigo-700")]
    public string? About { get; set; }
}
```

Or you can use the `<TagInput>` Input component directly in Custom Forms, e.g:

<ApiReference component="TagInput">Custom Form</ApiReference>

<TagInputExamples class="max-w-screen-md" />

```html
<form @submit.prevent="submit">
    <div class="shadow sm:rounded-md bg-white dark:bg-black">
        <div class="relative px-4 py-5 sm:p-6">
            <fieldset>
                <legend class="text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4">
                    TagInput Examples
                </legend>
                <ErrorSummary :except="visibleFields" />
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-6">
                        <TextInput v-model="request.firstName" />
                    </div>
                    <div class="col-span-6">
                        <TextInput v-model="request.lastName" />
                    </div>
                    <div class="col-span-12">
                        <TagInput v-model="request.skills" label="Technology Skills" />
                    </div>
                </div>
            </fieldset>
        </div>
        <div class="mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between">
            <div></div>
            <div class="flex justify-end">
                <SecondaryButton class="mr-4">Cancel</SecondaryButton>
                <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
        </div>
    </div>
</form>
```