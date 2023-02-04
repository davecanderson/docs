---
title: DataGrid Component
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import Default from "../../src/gallery/datagrid/Default.vue"
import Custom from "../../src/gallery/datagrid/Custom.vue"
import Responsive from "../../src/gallery/datagrid/Responsive.vue"
import { tracks } from "../../src/gallery/data.ts"
import metadata from "../../src/gallery/metadata.json"
import bookings from "../../src/gallery/bookings.json"
import Formatters from '../../.vitepress/includes/vue/formatters.md'

import { useMetadata } from '@servicestack/vue'
const { setMetadata } = useMetadata()
setMetadata(metadata)
</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>DataGrid Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference Component="DataGrid<Model>">Default</ApiReference>

In its most simple usage the DataGrid component can be used to render typed collections:

```html
<DataGrid :items="tracks" />

<script>
const tracks = [
    track("Everythings Ruined", "Faith No More", "Angel Dust", 1992),
    track("Lightning Crashes", "Live", "Throwing Copper", 1994),
    track("Heart-Shaped Box", "Nirvana", "In Utero", 1993),
    track("Alive", "Pearl Jam", "Ten", 1991),
]
</script>
```

Which by default will display all object properties:

<DataGrid :items="tracks" class="mb-4" />

Use **selected-columns** to control which columns to display and **header-titles** to use different column names:

```html
<DataGrid :items="tracks" :selected-columns="['year','album','name','artist']" :header-titles="{ name:'Track' }" />
```
<DataGrid :items="tracks" :selected-columns="['year','album','name','artist']" :header-titles="{ name:'Track' }" />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Simple Customizations
</h2>

Which columns are shown and how they're rendered is customizable with custom `<template #column>` definitions:

```html
<DataGrid :items="forecasts" class="max-w-screen-md" ::tableStyle="['stripedRows','uppercaseHeadings']"
          :header-titles="{ temperatureC:'TEMP. (C)', temperatureF:'TEMP. (F)' }">
    <template #date-header>
        <span class="text-indigo-600">Date</span>
    </template>
    <template #date="{ date }">
        {{ new Intl.DateTimeFormat().format(new Date(date)) }}
    </template>
    <template #temperatureC="{ temperatureC }">
        {{ temperatureC }}&deg;
    </template>
    <template #temperatureF="{ temperatureF }">
        {{ temperatureF }}&deg;
    </template>
    <template #summary="{ summary }">{{ summary }}</template>
</DataGrid>
```

<Custom class="mb-4" />

Column names can be changed with a **header-titles** alias mapping, or dynamically with a **header-title** mapping function.

Alternatively for more advanced customizations, custom `<template #column-header>` definitions can be used 
to control how column headers are rendered.

If any custom column or header definitions are provided, only those columns will be displayed. 
Alternatively specify an explicit array of column names in **selected-columns**
to control the number and order or columns displayed.

<h2 class="pt-4 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Responsive
</h2>

A more advanced example showing how to implement a responsive datagrid defining what columns and Headers
are visible at different screen sizes using **visible-from** to specify which columns to show 
from different Tailwind responsive breakpoints and `<template #column-header>` definitions to 
collapse column names at small screen sizes:

```html
<template>
<DataGrid :items="bookings" 
      :visible-from="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl' }"
      @header-selected="headerSelected"
      @row-selected="rowSelected" :is-selected="row => selected == row.id">
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
</DataGrid>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFormatters } from '@servicestack/vue'
import { bookings } from '../data'
import { Booking } from '../dtos'

const { currency } = useFormatters()
const selected = ref()

function headerSelected(column:string) {
    console.log('headerSelected',column)
}
function rowSelected(row:Booking) {
    selected.value = selected.value === row.id ? null : row.id
    console.log('rowSelected', row)
}
</script>
```

<Responsive class="mb-4" />

Behavior of the DataGrid can be customized with the `@header-selected` event to handle when column headers are selected to 
apply custom filtering to the **items** data source whilst the `@row-selected` event can be used to apply custom behavior 
when a row is selected.

<Formatters />

The [PreviewFormat](/vue/gallery/formats) component also offers a variety of flexible formatting options.

<h2 id="table-styles" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Table Styles
</h2>

The appearance of DataGrids can use **tableStyles** to change to different
[Tailwind Table Styles](https://tailwindui.com/components/application-ui/lists/tables), e.g:

<h3 class="my-4 text-lg font-semibold">Default (Striped Rows)</h3>

```html
<DataGrid :items="tracks" />
```

<DataGrid :items="tracks" />

<h3 class="my-4 text-lg font-semibold">Simple</h3>

```html
<DataGrid :items="tracks" tableStyle="simple" />
```

<DataGrid :items="tracks" tableStyle="simple" />

<h3 class="my-4 text-lg font-semibold">Uppercase Headings</h3>

```html
<DataGrid :items="tracks" tableStyle="uppercaseHeadings" />
```

<DataGrid :items="tracks" tableStyle="uppercaseHeadings" />

<h3 class="my-4 text-lg font-semibold">Vertical Lines</h3>

```html
<DataGrid :items="tracks" tableStyle="verticalLines" />
```

<DataGrid :items="tracks" tableStyle="verticalLines" />

<h3 class="my-4 text-lg font-semibold">White Background</h3>

```html
<DataGrid :items="tracks" tableStyle="whiteBackground" />
```

<DataGrid :items="tracks" tableStyle="whiteBackground" />

<h3 class="my-4 text-lg font-semibold">Full Width</h3>

```html
<DataGrid :items="tracks" tableStyle="fullWidth" />
```

<DataGrid :items="tracks" tableStyle="fullWidth" />

<h3 class="my-4 text-lg font-semibold">Full Width, Uppercase with Vertical Lines</h3>

```html
<DataGrid :items="tracks" :tableStyle="['uppercaseHeadings', 'fullWidth', 'verticalLines']" />
```

<DataGrid :items="tracks" :tableStyle="['uppercaseHeadings', 'fullWidth', 'verticalLines']" />



<h2 id="app-metadata" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Using App Metadata
</h2>

By default DataGrid will render values using its default configured formatters, so results with strings, numbers and defaults
will display a stock standard resultset:

```html
<DataGrid :items="bookings" />
```
<DataGrid :items="bookings" class="mb-4" />

Another option for formatting this dataset is to use the rich [format functions](/locode/formatters) in ServiceStack
to annotate the DTOs with how each field should be formatted, e.g:

```csharp
public class Booking
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Name { get; set; }
    public RoomType RoomType { get; set; }
    public int RoomNumber { get; set; }

    [IntlDateTime(DateStyle.Long)]
    public DateTime BookingStartDate { get; set; }

    [IntlRelativeTime]
    public DateTime? BookingEndDate { get; set; }

    [IntlNumber(Currency = NumberCurrency.USD)]
    public decimal Cost { get; set; }
}
```

Which can be enabled when using [useMetadata](/vue/use-metadata.md) by specifying the `MetadataType` for the DataGrid's results in **type**:

```html
<DataGrid :items="bookings" type="Booking" />
```

<DataGrid :items="bookings" type="Booking" class="mb-4" />

Declaratively annotating your DTOs with preferred formatting hints makes this rich metadata information available to clients where
it's used to enhance ServiceStack's built-in UI's and Components like:

 - [API Explorer](/api-explorer)
 - [Locode](/locode/)
 - [Blazor Tailwind Components](/templates-blazor-components)

