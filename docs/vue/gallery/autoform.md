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
import { QueryBookings } from "../../src/gallery/dtos.ts"

import { useMetadata } from '@servicestack/vue'
const { setMetadata } = useMetadata()
setMetadata(metadata)

const booking = bookings[0]
const show = ref(false)

const results = ref()
const onSuccess = response => results.value = response.results

const request = ref(new QueryBookings({ skip:1, take:2, orderBy:'Name' }))
</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Auto Form Examples</Breadcrumb>
</Breadcrumbs>


<ApiReference Component="AutoForm">AutoForm</ApiReference>

The `AutoForm` component is a generic form component that can be used to create and wire a traditional Form for any Request DTO definition
where successful responses can be handled the `@success` event, e.g:

```html
<AutoForm type="QueryBookings" @success="onSuccess" />
<div v-if="results">
    <h3 class="py-4 text-2xl">Results</h3>
    <HtmlFormat :value="results" />
</div>

<script setup>
const results = ref([])
const onSuccess = response => results.value = response.results
</script>
```

<div class="py-8 not-prose">
    <AutoForm class="mx-auto max-w-3xl" type="QueryBookings" @success="onSuccess" />
    <div v-if="results">
        <h3 class="py-4 text-2xl">Results</h3>
        <HtmlFormat :value="results" />
    </div>
</div>

These Auto Form components are customizable with the [declarative C# UI Attributes](/locode/declarative#ui-metadata-attributes) where you can 
override the form's **heading** with `[Description]` and include a **subHeading** with `[Notes]` which supports rich HTML markup.

**AutoForm Properties**

Alternatively they can be specified in the components properties:

```ts
defineProps<{
    type: string|InstanceType<any>|Function
    modelValue?: ApiRequest|any
    heading?: string
    subHeading?: string
    showLoading?: boolean
    jsconfig?: string         //= eccn,edv
    configureField?: (field:InputProp) => void

    /* Default Styles */
    formClass?: string        //= shadow sm:rounded-md
    innerFormClass?: string
    bodyClass?: string
    headerClass?: string      //= p-6
    buttonsClass?: string     //= mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between
    headingClass?: string     //= text-lg font-medium leading-6 text-gray-900 dark:text-gray-100
    subHeadingClass?: string
    submitLabel?: string      //= Submit
}>()
```

Both `@success` and `@error` events are fired after each API call, although built-in validation binding means it's typically unnecessary to manually 
handle error responses.

```ts
defineEmits<{
    (e:'success', response:any): void
    (e:'error', error:ResponseStatus): void
    (e:'update:modelValue', model:any): void
}>()
```

**Model Binding**

Forms can be bound to a Request DTO model where it can be used to pre-populate the Forms default values and Request DTO whereby specifying a **type** 
is no longer necessary:

```ts
<AutoForm v-model="request" />

<script setup>
const request = ref(new QueryBookings({ skip:1, take:2, orderBy:'Name' }))
</script>
```

<AutoForm class="mx-auto max-w-3xl not-prose" v-model="request" type="QueryBookings" />

<ApiReference Component="AutoCreateForm">Create Form</ApiReference>

`AutoCreateForm` can be used to create an automated form based on a [AutoQuery CRUD](/autoquery-crud) Create Request DTO definition which can be rendered in a traditional inline Form with **card** formStyle option, e.g:

```html
<AutoCreateForm type="CreateBooking" formStyle="card" />
```

<div class="py-8">
    <AutoCreateForm class="mx-auto max-w-3xl" type="CreateBooking" formStyle="card" />
</div>


By default Auto Forms are rendered in a `SlideOver` dialog:

```html
<AutoCreateForm type="CreateBooking" />
```

<iframe src="/gallery/autoform/new.html" class="w-full border-none h-[45em] w-[1330px] -ml-40 mb-4"></iframe>

These Auto Forms are powered by the rich [App Metadata](/vue/use-metadata) surrounding your APIs,
which contain all the necessary metadata to invoke the API and bind any contextual validation errors adjacent to the invalid field inputs.

<ApiReference component="AutoEditForm">Edit Form</ApiReference>

`AutoEditForm` can be used to render an automated form based on Update and Delete
[AutoQuery CRUD](/autoquery-crud) APIs which also makes use of **heading** and **sub-heading** customization options:

```html
<AutoEditForm v-model="booking" type="UpdateBooking" deleteType="DeleteBooking" 
    heading="Change an existing Room Booking" sub-heading="Manage reservations for MyApp hotels." />
```

<iframe src="/gallery/autoform/edit.html" class="w-full border-none h-[46em] w-[1330px] -ml-40 mb-4"></iframe>

The same form rendered in a traditional inline form with a **card** formStyle with some more advanced
customization examples using rich markup in custom `<template #heading>` and `<template #sub-heading>` slots:

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

<AutoEditForm class="mx-auto max-w-3xl mb-4" v-model="booking" formStyle="card" type="UpdateBooking" deleteType="DeleteBooking"><template #heading><h3 class="text-xl font-semibold text-green-600">Change an existing Room Booking</h3></template><template #sub-heading><p>Here are some <TextLink href="https://youtu.be/rSFiikDjGos">good tips on making room reservations <Icon class='inline-block' icon="lucide:external-link" /></TextLink></p></template></AutoEditForm>

The forms behavior and appearance is further customizable with the
[API annotation](/locode/declarative#annotate-apis), declarative [validation](/locode/declarative#type-validation-attributes)
and the custom [Field and Input](/locode/declarative#custom-fields-and-inputs) attributes, e.g:

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

<ApiReference component="AutoFormFields">Form Fields</ApiReference>

For more advanced customization of a Forms appearance and behavior, `AutoFormFields` can be used to just render the Form's fields (with validation binding) inside a custom Form which can submit the data-bound populated Request DTO to invoke the API, e.g:

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
import { useClient, useMetadata } from '@servicestack/vue'
import { QueryBookings, UpdateBooking } from '../dtos'

const { toFormValues } = useMetadata()
const client = useClient()

let api = ref<ApiResponse>()
let request = ref<UpdateBooking>()

async function submit(e:Event) {
    api.value = await client.api(request.value!)
}

onMounted(async () => {
    let api = await client.api(new QueryBookings({ id: 1 }))
    if (api.succeeded) {
        request.value = new UpdateBooking(toFormValues(api.response!.results[0]))
    }
})
</script>
```

<div>
    <Fields class="my-4 mx-auto max-w-screen-md" />
</div>

`toFormValues` is used when updating the data bound `request` DTO to convert API response values into the required format that HTML Inputs expect.