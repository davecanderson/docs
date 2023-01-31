---
title: DataGrid Component
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import VueComponentGallery from "../../src/components/VueComponentGallery.vue"
import ApiReference from "../../src/components/ApiReference.vue"
import Default from "../../src/gallery/datagrid/Default.vue"
import Custom from "../../src/gallery/datagrid/Custom.vue"
import Responsive from "../../src/gallery/datagrid/Responsive.vue"
import { tracks } from "../../src/gallery/data.ts"
import metadata from "../../src/gallery/metadata.json"
import bookings from "../../src/gallery/bookings.json"

import { useAppMetadata } from '@servicestack/vue'
const { load } = useAppMetadata()
load(metadata)
</script>

<style>
b { font-weight:600 !important }
</style>

<div>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>DataGrid Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference class="pt-16" Component="DataGrid<Model>">Default</ApiReference>

<p class="mb-4 text-lg">
    In its most simple usage the DataGrid component can be used to render typed collections:
</p>

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

<p class="mb-4 text-lg">
    Which by default will display all object properties:
</p>

<DataGrid :items="tracks" />

<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
  Simple Customizations
</h2>

<p class="mb-4 text-lg">
  Which columns are shown and how they're rendered is customizable with custom <code>&lt;template #column&gt;</code> definitions:
</p>

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

<Custom />

<p class="my-4 text-lg">
    Column names can be changed with a <b>header-titles</b> object, or dynamically with a custom <b>header-title</b> mapping function.
</p>

<p class="my-4 text-lg">
    Alternatively for more advanced customizations, custom <code>&lt;template #column-header&gt;</code> definitions can be used 
    to control how column headers are rendered.
</p>

<p class="my-4 text-lg">
    If any custom column or header definitions are provided, only those columns will be displayed. Alternatively the 
    <code>selected-columns</code> array of column names can be used to control the number and order columns are displayed.
</p>


<h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Responsive
</h2>

<p class="mb-4 text-lg">
    A more advanced example showing how to implement a responsive datagrid defining what columns and Headers
    are visible at different screen sizes using <b>visible-from</b> to specify which columns to show 
    from different Tailwind responsive breakpoints and <code>&lt;template #column-header&gt;</code> definitions to 
    collapse column names at small screen sizes:
</p>

```html
<DataGrid :items="bookings" 
      :visible-from="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl' }"
      :allow-selection="true" @row-selected="rowSelected"
      :allow-header-selection="true" @header-selected="headerSelected">
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

<script setup>
import { useFormatters } from '@servicestack/vue'
const { currency } = useFormatters()

function headerSelected(column:string) {
    console.log('headerSelected',column)
}
function rowSelected(row:string) {
    console.log('rowSelected',row)
}
</script>
```

<Responsive />

<p class="my-4 text-lg">
    Behavior of the DataGrid can be customized with the <code>@header-selected</code> event to handle when column headers are selected to 
    apply custom filtering to the <b>items</b> data source whilst the <code>@row-selected</code> event can be used to apply custom behavior 
    when a row is selected.
</p>

<h2 id="table-styles" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Table Styles
</h2>

<p class="mb-4 text-lg">
    The appearance of DataGrids can use <b>tableStyles</b> to change to different
    <TextLink href="https://tailwindui.com/components/application-ui/lists/tables">Tailwind Table Styles</TextLink>, e.g:
</p>


<h3 class="my-4 text-lg font-semibold">Default (Striped Rows)</h3>

<DataGrid :items="tracks" />

<h3 class="my-4 text-lg font-semibold">Simple</h3>

<DataGrid :items="tracks" tableStyle="simple" />

<h3 class="my-4 text-lg font-semibold">Uppercase Headings</h3>

<DataGrid :items="tracks" tableStyle="uppercaseHeadings" />

<h3 class="my-4 text-lg font-semibold">Vertical Lines</h3>

<DataGrid :items="tracks" tableStyle="verticalLines" />

<h3 class="my-4 text-lg font-semibold">White Background</h3>

<DataGrid :items="tracks" tableStyle="whiteBackground" />

<h3 class="my-4 text-lg font-semibold">Full Width</h3>

<DataGrid :items="tracks" tableStyle="fullWidth" />

<h3 class="my-4 text-lg font-semibold">Full Width, Uppercase with Vertical Lines</h3>

<DataGrid :items="tracks" :tableStyle="['uppercaseHeadings', 'fullWidth', 'verticalLines']" />

<h2 id="app-metadata" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Using App Metadata
</h2>

<p class="my-4 text-lg">
    By default DataGrid will render values using its default configured formatters, so results with strings, numbers and defaults
    will display a stock standard resultset:
</p>

<DataGrid :items="bookings" />

<p class="my-4 text-lg">
    Another option for formatting this dataset is to use the rich <a href="/locode/formatters">format functions</a> in ServiceStack
    to annotate the DTOs with how each field should be formatted, e.g:
</p>

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

<p class="my-4 text-lg">
    Which can be enabled by specifying the <code>MetadataType</code> for the DataGrid's results:
</p>

```html
<DataGrid :items="bookings" type="Booking" />
```

<DataGrid :items="bookings" type="Booking" />

<p class="my-4 text-lg">
    Declaratively annotating your DTOs with preferred formatting hints makes this rich metadata information available to clients where
    it's used to enhance ServiceStack's Auto components available in ServiceStack's
    <a class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200" href="/api-explorer">API Explorer</a>, 
    <a class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200" href="/locode/">Locode</a> and 
    <a class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200" href="/templates-blazor-components">Blazor Tailwind Components</a>.
</p>

</div>
