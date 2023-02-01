---
title: Format Examples
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import ApiReference from "../../src/components/ApiReference.vue"
import { useFormatters } from "@servicestack/vue"
import { tracks, players } from "../../src/gallery/data.ts"
import Formatters from '../../.vitepress/includes/vue/formatters.md'

const { Formats } = useFormatters()

const message = "Requires <b>Employee</b> Role"

function classes(type, tag,depth,cls,index) {
    if (type == 'array') {
        if (tag === 'th') return cls.replace('text-sm text-gray-500 font-medium',' ') + (depth == 0 
            ? 'text-xs uppercase font-semibold text-indigo-700'
            : 'text-xs font-medium text-gray-500')
        if (tag === 'tr') return depth > 0 || index % 2 == 0 ? 'bg-white' : 'bg-yellow-50'
        if (tag === 'td' && depth > 0) return 'px-4 py-3 whitespace-nowrap text-xs'
    }
    return cls
}
</script>

<style>
tr:nth-child(2n).bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity));
}
.table-object tr:nth-child(2n) {
    background-color: transparent
}
</style>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Alert Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference component="PreviewFormat" />

<p class="mb-4 text-lg">
    Useful for rendering Table Cell data into different customizable formats, e.g:
</p>

<h3 class="my-4 text-lg font-semibold">Currency</h3>

```html
<PreviewFormat :value="50" :format="Formats.currency" />
```
<PreviewFormat :value="50" :format="Formats.currency" />

<h3 class="my-4 text-lg font-semibold">Bytes</h3>

```html
<PreviewFormat :value="10000000" :format="Formats.bytes" />
```
<PreviewFormat :value="10000000" :format="Formats.bytes" />

<h3 class="my-4 text-lg font-semibold">Icon</h3>

```html
<PreviewFormat value="/profiles/1.jpg" :format="Formats.icon" />
```
<PreviewFormat value="/profiles/1.jpg" :format="Formats.icon" />

<h3 class="my-4 text-lg font-semibold">Icon Rounded</h3>

```html
<PreviewFormat value="/profiles/1.jpg" :format="Formats.iconRounded" />
```
<PreviewFormat value="/profiles/1.jpg" :format="Formats.iconRounded" />

<h3 class="my-4 text-lg font-semibold">Icon with custom class</h3>

```html
<PreviewFormat value="/profiles/1.jpg" :format="Formats.icon" class="w-40 h-40 rounded-full" />
```
<PreviewFormat value="/profiles/1.jpg" :format="Formats.icon" class="w-40 h-40 rounded-full" />

<h3 class="my-4 text-lg font-semibold">Attachment (Image)</h3>

```html
<PreviewFormat value="/profiles/1.jpg" :format="Formats.attachment" />
```
<PreviewFormat value="/profiles/1.jpg" :format="Formats.attachment" />

<h3 class="my-4 text-lg font-semibold">Attachment (Document)</h3>

```html
<PreviewFormat value="/content/hosting.md" :format="Formats.attachment" />
```
<PreviewFormat value="/content/hosting.md" :format="Formats.attachment" />

<h3 class="my-4 text-lg font-semibold">Attachment (Document) with classes</h3>

```html
<PreviewFormat value="/content/hosting.md" :format="Formats.attachment" 
    class="text-xl text-indigo-700 font-semibold" icon-class="w-8 h-8" />
```
<PreviewFormat value="/content/hosting.md" :format="Formats.attachment" class="text-xl text-indigo-700 font-semibold" icon-class="w-8 h-8" />

<h3 class="my-4 text-lg font-semibold">Link</h3>

```html
<PreviewFormat value="https://servicestack.net/blazor" :format="Formats.link" />
```
<PreviewFormat value="https://servicestack.net/blazor" :format="Formats.link" />

<h3 class="my-4 text-lg font-semibold">Link with class</h3>

```html
<PreviewFormat value="https://servicestack.net/blazor" :format="Formats.link" 
    class="text-xl text-green-700 font-semibold" />
```
<PreviewFormat value="https://servicestack.net/blazor" :format="Formats.link" class="text-xl text-green-700 font-semibold" />

<h3 class="my-4 text-lg font-semibold">Link Email</h3>

```html
<PreviewFormat value="user@email.com" :format="Formats.linkMailTo" />
```
<PreviewFormat value="user@email.com" :format="Formats.linkMailTo" />

<h3 class="my-4 text-lg font-semibold">Link Phone</h3>

```html
<PreviewFormat value="555 123 4567" :format="Formats.linkTel" />
```
<PreviewFormat value="555 123 4567" :format="Formats.linkTel" />


<Formatters />


<ApiReference component="HtmlFormat" />

<p class="mb-4 text-lg">
    <code>HtmlFormat</code> can be used to render any Serializable object into a human-friendly HTML Format:
</p>

<h3 class="my-4 text-lg font-semibold">Single Model</h3>

```html
<HtmlFormat :value="tracks[0]" />
```
<div class="max-w-screen-sm">
    <HtmlFormat :value="tracks[0]" />
</div>

<h3 class="my-4 text-lg font-semibold">Item Collections</h3>

```html
<HtmlFormat :value="tracks" />
```
<div class="max-w-screen-sm">
    <HtmlFormat :value="tracks" />
</div>

<h3 class="my-4 text-lg font-semibold">Nested Complex Types</h3>

```html
<HtmlFormat :value="players" />
```
<HtmlFormat :value="players" />


<h3 class="my-4 text-lg font-semibold">Nested Complex Types with custom classes</h3>

<p class="mb-4 text-lg">
    When needed most default classes can be overridden with a custom <b>classes</b> function that can inspect the
    type, tag, depth, and row index to return a custom class. The TypeScript function shows an example of checking
    these different parameters to render a custom HTML resultset:
</p>

```html
<HtmlFormat :value="players" :classes="classes" />

<script lang="ts">
function classes(type:'array'|'object', tag:'div'|'table'|'thead'|'th'|'tr'|'td',depth:number,cls:string,index?:number)
{
    if (type == 'array') {
        if (tag === 'th') return cls.replace('text-sm text-gray-500 font-medium',' ') + (depth == 0 
            ? 'text-xs uppercase font-semibold text-indigo-700'
            : 'text-xs font-medium text-gray-500')
        if (tag === 'tr') return depth > 0 || index! % 2 == 0 ? 'bg-white' : 'bg-yellow-50'
        if (tag === 'td' && depth > 0) return 'px-4 py-3 whitespace-nowrap text-xs'
    }
    return cls
}
</script>
```
<HtmlFormat :value="players" :classes="classes" />

