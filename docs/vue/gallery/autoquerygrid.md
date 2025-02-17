---
title: AutoQueryGrid Component
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { onMounted } from "vue"
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import { Authenticate } from "../../src/gallery/dtos.ts"
import { tracks } from "../../src/gallery/data.ts"
import metadata from "../../src/gallery/metadata.json"
import bookings from "../../src/gallery/bookings.json"
import Responsive from "../../src/gallery/autoquerygrid/Responsive.vue"
import CustomBooking from "../../src/gallery/autoquerygrid/CustomBooking.vue"

import { useMetadata, useAuth, useClient } from '@servicestack/vue'
const { setMetadata } = useMetadata()
setMetadata(metadata)

onMounted(async () => {
  const client = useClient()
  const api = await client.api(new Authenticate({ provider: 'credentials', userName:'admin@email.com', password:'p@55wOrd' }))
  if (api.succeeded) {
    const { signIn } = useAuth()
    signIn(api.response)
  }
})

</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>AutoQueryGrid Examples</Breadcrumb>
</Breadcrumbs>


<div class="my-8 flex justify-center">
    <iframe class="video-hd" src="https://www.youtube.com/embed/znCoC-Ct0Ps" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<ApiReference Component="AutoQueryGrid<Model>">Default CRUD
</ApiReference>

By default you can create an AutoQueryGrid that allows authorized users the ability to Create, Read, Update & Delete records 
with just the DataModel, e.g:

```html
<AutoQueryGrid type="Booking" />
```
<AutoQueryGrid type="Booking" />

This will utilize your App's existing [AutoQuery APIs](/autoquery-rdbms) for the specified DataModel to enable its CRUD functionality.

<ApiReference Component="AutoQueryGrid<Model>">Read Only</ApiReference>

You can use `apis` to limit which AutoQuery APIs AutoQueryGrid should use, so if only the AutoQuery DTO is provided, the AutoQueryGrid will only be browsable in **read-only** mode:

```html
<AutoQueryGrid type="Booking" apis="QueryBookings"  />
```
<AutoQueryGrid type="Booking" apis="QueryBookings"  />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Table Styles
</h2>

The same [DataGrid Table Styles](/vue/gallery/datagrid#table-styles) can also be used to style AutoQueryGrid, e.g:

```html
<AutoQueryGrid type="Booking" tableStyle="verticalLines,uppercaseHeadings" />
```
<AutoQueryGrid type="Booking" tableStyle="verticalLines,uppercaseHeadings" />

**Custom Styles**

The AutoQueryGrid's appearance is further customizable with the property classes & functions below:

```ts
defineProps<{
  toolbarButtonClass: string
  tableStyle: "simple" | "fullWidth" | "stripedRows" | "whiteBackground" | "uppercaseHeadings" | "verticalLines"
  gridClass: string
  grid2Class: string
  grid3Class: string
  grid4Class: string
  tableClass: string
  theadClass: string
  tbodyClass: string
  theadRowClass: string
  theadCellClass: string

  rowClass:(model:any,i:number) => string
  rowStyle:(model:any,i:number) => StyleValue
}>()
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Custom AutoQueryGrid
</h2>

Different AutoQueryGrid features can be hidden with `hide` and functionality disabled with `deny`, e.g:

```html
<AutoQueryGrid type="Booking" hide="pagingNav,copyApiUrl,downloadCsv" deny="filtering" />
```

<AutoQueryGrid type="Booking" hide="pagingNav,copyApiUrl,downloadCsv" deny="filtering" />

Features that can be hidden and disabled include:

```ts
defineProps<{
    deny: "filtering" | "queryString" | "queryFilters"
    hide: "toolbar"   | "preferences" | "pagingNav" | "pagingInfo" | "downloadCsv" | "refresh" 
       | "copyApiUrl" | "filtersView" | "newItem"   | "resetPreferences" 
}>()
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Global AutoQueryGrid Configuration
</h2>

These features can also be disabled at a global level, applying to all `<AutoQueryGrid>` components with [setConfig](/vue/use-config), e.g:

```js
const { setAutoQueryGridDefaults } = useConfig()

setAutoQueryGridDefaults({
  hide: ['pagingNav','copyApiUrl','downloadCsv']
})
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Limit Columns
</h2>

By default AutoQueryGrid displays all public properties returned in its AutoQuery API which can be further limited with `selected-columns`:

```html
<AutoQueryGrid type="Booking" selectedColumns="id,name,roomType,roomNumber,cost" />
```
<AutoQueryGrid type="Booking" selectedColumns="id,name,roomType,roomNumber,cost" />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Simple Responsive Columns
</h2>

Using `visible-from` is a simple way to enable a responsive DataGrid by specifying at which [Tailwind breakpoints](https://tailwindcss.com/docs/responsive-design)
columns should be visible from and `header-titles` to use friendlier aliases for different columns, e.g:

```html
<AutoQueryGrid type="Booking" 
  selectedColumns="id,name,roomType,roomNumber,cost,bookingStartDate,bookingEndDate" 
  :headerTitles="{ roomNumber:'Room', bookingStartDate:'Start', bookingEndDate:'End' }"
  :visibleFrom="{ bookingStartDate:'lg', bookingEndDate:'xl' }" />
```
<AutoQueryGrid type="Booking" 
  selectedColumns="id,name,roomType,roomNumber,cost,bookingStartDate,bookingEndDate" 
  :headerTitles="{ roomNumber:'Room', bookingStartDate:'Start', bookingEndDate:'End' }"
  :visibleFrom="{ bookingStartDate:'lg', bookingEndDate:'xl' }" />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Custom Responsive Columns
</h2>

Which columns are displayed and how they're formatted are further customizable with `<template #column>` slots:

```html
<AutoQueryGrid type="Booking" :visibleFrom="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl', createdBy:'2xl' }">
    <template #id="{ id }">
        <span class="text-gray-900">{{ id }}</span>
    </template>
    
    <template #name="{ name }">
        {{ name }}
    </template>
    
    <template #roomNumber-header>
        <span class="hidden lg:inline">Room </span>No
    </template>

    <template #cost="{ cost }">{{ currency(cost) }}</template>
    
    <template #bookingStartDate-header>
        Start<span class="hidden lg:inline"> Date</span>
    </template>
    
    <template #bookingEndDate-header>
        End<span class="hidden lg:inline"> Date</span>
    </template>

    <template #createdBy-header>
        Employee
    </template>
    <template #createdBy="{ createdBy }">{{ createdBy }}</template>
</AutoQueryGrid>
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Custom Functionality
</h2>

The column template slots can be leveraged to implement custom functionality, e.g. instead of navigating to separate pages to manage related data
we can use a custom column to manage Booking Coupons from within the same grid, e.g:

```html
<AutoQueryGrid type="Booking" selectedColumns="id,name,cost,bookingStartDate,bookingEndDate,discount">
    <template #discount="{ discount }">
        <TextLink v-if="discount" class="flex items-end" @click.stop="showCoupon(discount.id)" :title="discount.id">
            <Icon class="w-5 h-5 mr-1" type="Coupon" />
            <PreviewFormat :value="discount.description" />
        </TextLink>
    </template>
</AutoQueryGrid>
<AutoEditForm v-if="coupon" type="UpdateCoupon" v-model="coupon" @done="close" @save="close" />

<script setup lang="ts">
import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { QueryCoupons } from "dtos"

const client = useClient()
const coupon = ref()

async function showCoupon(id:string) {
    const api = await client.api(new QueryCoupons({ id }))
    if (api.succeeded) {
        coupon.value = api.response!.results[0]
    }
}

const close = () => coupon.value = null
</script>
```

<CustomBooking />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Data Reference Labels
</h2>

[AutoQuery](/autoquery-rdbms) is able to infer relationships from the [POCO References](/ormlite/reference-support) of your Data Models where if your DataModel includes `[Reference]` attributes so that its related Data is returned in your AutoQuery APIs, AutoQueryGrid will be able to make use of it to render the Contacts & Job Names and Icons instead of just the plain Foreign Key Ids.

An example of this in the [JobApplications](https://blazor-gallery.servicestack.net/locode/QueryJobApplications) DataModel DTO:

```csharp
[Icon(Svg = Icons.Application)]
public class JobApplication : AuditBase
{
    [AutoIncrement]
    public int Id { get; set; }

    [References(typeof(Job))]
    public int JobId { get; set; }

    [References(typeof(Contact))]
    public int ContactId { get; set; }

    [Reference]
    [Format(FormatMethods.Hidden)]
    public Job Position { get; set; }

    [Reference]
    [Format(FormatMethods.Hidden)]
    public Contact Applicant { get; set; }

    [Reference]
    public List<JobApplicationComment> Comments { get; set; }

    public DateTime AppliedDate { get; set; }

    public JobApplicationStatus ApplicationStatus { get; set; }
    //...
}
```

Which AutoQueryGrid uses to automatically display the Job and Contact name instead of their ids:

```html
<AutoQueryGrid type="JobApplication" :prefs="{take:5}" />
```
<AutoQueryGrid type="JobApplication" :prefs="{take:5}" />

With the original ids are discoverable by hovering over the Job & Contact labels. 

By default AutoQuery will infer using the first string column of the related table for its label, this information can also be explicitly defined
with the `[Ref]` attribute, e.g:

```csharp
public class JobApplication : AuditBase
{
    [AutoIncrement]
    public int Id { get; set; }

    [References(typeof(Job))]
    [Ref(Model=nameof(Job), RefId=nameof(Job.Id), RefLabel=nameof(Job.Title))]
    public int JobId { get; set; }

    [References(typeof(Contact))]
    [Ref(Model=nameof(Contact), RefId=nameof(Contact.Id), RefLabel=nameof(Contact.DisplayName))]
    public int ContactId { get; set; }
    //...
}
```

Alternatively you can use `[Ref(None=true)]` to disable any implicit inferences and render the FK property Ids as-is.

When displaying referential data you can tell AutoQueryGrid to hide rendering the complex data references as well columns using `[Format(FormatMethods.Hidden)]`. 

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  AutoQueryGrid Template Slots
</h2>

AutoQueryGrid supports a number of [Vue slots](https://vuejs.org/guide/components/slots.html) to customize its built-in UIs, including `formheader` and `formfooter` slots to insert custom content before and after the Auto Create & Edit components forms:

```html
<template #formheader="{ form, type, apis, model, id }">
<template #formfooter="{ form, type, apis, model, id }">
```

This feature is used to implement [Locode's Audit History UI](/locode/auditing) for displaying the Audit History of each record in the bottom of the 
Edit Form for Authorized Users, implemented with:

```html
<AutoQueryGrid :key="store.opDataModel" ref="grid" :type="store.opDataModel">
    <template #formfooter="{ form, type, apis, model, id }">
        <AuditEvents v-if="form === 'edit' && canAccessCrudEvents" class="mt-4" :key="id" :type="type" :id="id" />
    </template>
</AutoQueryGrid>
```

Which loads the [AuditEvents.mjs](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack/src/ServiceStack/modules/locode/components/AuditEvents.mjs)
component at the bottom of **Edit** forms, allowing Admin Users to inspect the Audit History of each record:

[![](/images/locode/audit-history-job.png)](/locode/auditing)

Alternatively you can replace the entire Create and Edit Forms used with the `createform` and `editforms` slots:

```html
<template #createform="{ form, apis, type }">
<template #editform="{ form, apis, type }">
```

Additional toolbar buttons can be added with the `toolbarbuttons` slot, e.g:

```html
<template #toolbarbuttons="{ toolbarButtonClass }">
  <div class="pl-2 mt-1">
      <button type="button" @click="customAction" :class="toolbarButtonClass">
        <span class="whitespace-nowrap">My Action</span>
      </button>
  </div>
</template>
```

Alternatively you can replace the entire toolbar with your own with:

```html
<template #toolbar>
```

All other template slots are passed down to the embedded [DataGrid](/vue/gallery/datagrid) component where they can be used to customize column headers and cells.


<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  AutoQueryGrid Properties
</h2>

Additional customizations available using AutoQueryGrid properties include:

```ts
defineProps<{
    filterDefinitions?: AutoQueryConvention[]
    id?: string
    apis?: string|string[]
    type?: string|InstanceType<any>|Function
    prefs?: ApiPrefs

    deny?: string|GridAllowOptions|GridAllowOptions[]
    hide?: string|GridShowOptions|GridShowOptions[]
    
    selectedColumns?:string[]|string
    toolbarButtonClass?: string
    tableStyle?: TableStyleOptions
    gridClass?: string
    grid2Class?: string
    grid3Class?: string
    grid4Class?: string
    tableClass?: string
    theadClass?: string
    tbodyClass?: string
    theadRowClass?: string
    theadCellClass?: string

    headerTitle?:(name:string) => string
    headerTitles?: {[name:string]:string}
    visibleFrom?: {[name:string]:Breakpoint}
    rowClass?:(model:any,i:number) => string
    rowStyle?:(model:any,i:number) => StyleValue | undefined

    apiPrefs?: ApiPrefs
    canFilter?:(column:string) => boolean
    disableKeyBindings?:(column:string) => boolean
    configureField?: (field:InputProp) => void
    skip?: number
    create?: boolean
    edit?: string|number
}>()
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  AutoQueryGrid Events
</h2>

Whilst the `headerSelected` and `rowSelected` events can be used to invoke custom functionality when column headers and rows are selected:

```ts
defineEmits<{
    (e: "headerSelected", name:string, ev:Event): void
    (e: "rowSelected", item:any, ev:Event): void
}>()
```

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Powers Locode
</h2>

AutoQueryGrid is already used extensively and is the key component that enables [Locode's](/locode/) Instant Auto UI to manage your App's 
AutoQuery CRUD APIs.

[![](/images/locode/blazor-gallery-contact.png)](/locode/)