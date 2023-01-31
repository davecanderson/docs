---
title: Auto Form Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import Fields from "../../src/gallery/autoform/Fields.vue"
import metadata from "../../src/gallery/metadata.json"
import { bookings } from "../../src/gallery/data.ts"

import { useAppMetadata, useUtils } from '@servicestack/vue'
const { load } = useAppMetadata()
const { sanitizeForUi } = useUtils()
load(metadata)

const booking = bookings[0]
const show = ref(false)
</script>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Auto Form Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference class="pt-8" Component="AutoCreateForm">Create Form</ApiReference>

<p class="mb-4 text-lg">
    <code>AutoCreateForm</code> can be used to create an automated form based on a Request DTO definition:
</p>

```html
<AutoCreateForm type="CreateBooking" />
```

<iframe src="/gallery/autoform/new.html" class="w-full border-none h-[44em] w-[1330px] -ml-40"></iframe>

<p class="my-4 text-lg">
    These Auto Forms are powered by the rich <TextLink href="/vue/use-metadata">App Metadata</TextLink> surrounding your APIs,
    which contain all the necessary metadata to invoke the API and bind any contextual validation errors adjacent to the invalid field inputs.
</p>

<p class="my-4 text-lg">
    By default Auto Forms are rendered in a <code>SlideOver</code> dialog, alternatively they can be rendered in a traditional inline Form with 
    <code>card</code> formStyle option, e.g:
</p>

```html
<AutoCreateForm type="CreateBooking" formStyle="card" />
```

<div class="py-8">
    <AutoCreateForm class="mx-auto max-w-3xl" type="CreateBooking" formStyle="card" />
</div>

<ApiReference Component="AutoEditForm">Edit Form</ApiReference>

<p class="mb-4 text-lg">
    <code>AutoEditForm</code> can be used to render an automated form based on update and delete
    <TextLink href="/autoquery-crud">AutoQuery CRUD</TextLink> APIs
    which also makes use of <b>heading</b> and <b>sub-heading</b> customization options:
</p>

```html
<AutoEditForm v-model="booking" type="UpdateBooking" deleteType="DeleteBooking" 
    heading="Change an existing Room Booking" sub-heading="Manage reservations for MyApp hotels." />
```

<iframe src="/gallery/autoform/edit.html" class="w-full border-none h-[44em] w-[1330px] -ml-40"></iframe>

<p class="my-4 text-lg">
    The same form rendered in a traditional inline form with a <b>card</b> formStyle with some more advanced
    customization examples using rich markup in custom <code>&lt;template #heading&gt;</code> and <code>&lt;template #sub-heading&gt;</code> slots:
</p>

```html
<AutoEditForm v-model="booking" formStyle="card" type="UpdateBooking" deleteType="DeleteBooking">
  <template #heading>
    <h3 class="text-xl font-semibold text-green-600">Change an existing Room Booking</h3>
  </template>
  <template #sub-heading>
    <p>
      Here are some 
      <TextLink href="https://youtu.be/rSFiikDjGos">good tips on making room reservations 
        <Icon class='inline-block' icon="lucide:external-link" />
      </TextLink>
    </p>
  </template>
</AutoEditForm>
```

<AutoEditForm class="mx-auto max-w-3xl" v-model="booking" formStyle="card" type="UpdateBooking" deleteType="DeleteBooking"><template #heading><h3 class="text-xl font-semibold text-green-600">Change an existing Room Booking</h3></template><template #sub-heading><p>Here are some <TextLink href="https://youtu.be/rSFiikDjGos">good tips on making room reservations <Icon class='inline-block' icon="lucide:external-link" /></TextLink></p></template></AutoEditForm>

<p class="my-8 text-lg">
    The forms behavior and appearance is further customizable with the
    <TextLink href="/locode/declarative#annotate-apis">API annotation</TextLink>,
    declarative <TextLink href="/locode/declarative#type-validation-attributes">validation</TextLink>
    and the custom
    <TextLink href="/locode/declarative#custom-fields-and-inputs">Field and Input</TextLink>
    attributes, e.g:
</p>

```csharp
[Description("Update an existing Booking")]
[Notes("Find out how to quickly create a <a class='svg-external' target='_blank' href='https://youtu.be/rSFiikDjGos'>C# Bookings App from Scratch</a>")]
[Route("/booking/{Id}", "PATCH")]
[ValidateHasRole("Employee")]
[AutoApply(Behavior.AuditModify)]
public class UpdateBooking : IPatchDb<Booking>, IReturn<IdResponse>
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public RoomType? RoomType { get; set; }
    [ValidateGreaterThan(0)]
    public int? RoomNumber { get; set; }
    [ValidateGreaterThan(0)]
    public decimal? Cost { get; set; }
    public DateTime? BookingStartDate { get; set; }
    public DateTime? BookingEndDate { get; set; }
    [Input(Type = "textarea")]
    public string? Notes { get; set; }
    public bool? Cancelled { get; set; }
}
```

Where they can be used to customize Auto Form's appearance from annotations on C# Server DTOs:

```html
<AutoEditForm v-model="booking" formStyle="card" type="UpdateBooking" deleteType="DeleteBooking" />
```

<AutoEditForm class="mx-auto max-w-3xl" v-model="booking" formStyle="card" type="UpdateBooking" deleteType="DeleteBooking" />

<ApiReference Component="AutoFormFields">Form Fields</ApiReference>

<p class="mb-4 text-lg">
    For more advanced customization of a Forms appearance and behavior, <code>AutoFormFields</code> can be used to just render the Form's fields (with validation binding) inside a custom Form which can submit the data-bound populated Request DTO to invoke the API, e.g:
</p>

```html
<template>
<form v-if="request" @submit.prevent="submit">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
        <div class="space-y-6 py-6 px-4 sm:p-6 bg-white dark:bg-black">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Change an existing Room Booking
                </h3>
                <p class="notes mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Find out how to quickly create a 
                    <a class='svg-external' target='_blank' href='https://youtu.be/rSFiikDjGos'>
                        C# Bookings App from Scratch
                    </a>
                </p>
            </div>

            <AutoFormFields v-model="request" :api="api" />

        </div>
        <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-right sm:px-12">
            <PrimaryButton>Save</PrimaryButton>
        </div>
    </div>
</form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ApiResponse } from '@servicestack/client'
import { useClient } from '@servicestack/vue'
import { QueryBookings, UpdateBooking } from '../dtos'

const client = useClient()

let api = ref<ApiResponse>()
let request = ref<UpdateBooking>()

async function submit(e:Event) {
    api.value = await client.api(request.value!)
}

onMounted(async () => {
    let api = await client.api(new QueryBookings({ id: 1 }))
    if (api.succeeded) {
        request.value = new UpdateBooking(api.response!.results[0])
    }
})
</script>
```

<div>
    <Fields class="mx-auto max-w-screen-md" />
</div>
