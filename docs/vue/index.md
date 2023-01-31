---
title: "@servicestack/vue"
---

<script setup>
import { Icon } from "@iconify/vue"
import VueTailwindTemplates from "../src/components/VueTailwindTemplates.vue"
import VueComponentGallery from "../src/components/VueComponentGallery.vue"
</script>


**@servicestack/vue** is a component library for Vue.js and Tailwind CSS offering a wide range of beautifully designed, highly productive components that can be easily customized to fit into Tailwind's expert design system whose deep integration 
with your ServiceStack APIs unlocks unprecedented productivity. With a focus on performance, accessibility and modern design, this library is the perfect choice for developers looking to rapidly develop fast, beautiful modern Vue.js Web Apps.

<div class="mt-16 mx-auto flex justify-center">
  <div class="flex items-center">
    <Icon icon="la:servicestack" class="w-44 h-44" />
    <Icon icon="vscode-icons:file-type-vue" class="w-44 h-44" />
    <Icon icon="vscode-icons:file-type-tailwind" class="w-44 h-44" />
  </div>
</div>

<VueComponentGallery />


## Getting Started

Starting with one of ServiceStack's Vue + Tailwind Project templates below is the easiest way to get started which are pre-configured with 
**@servicestack/client** and **@servicestack/vue** libraries:

<VueTailwindTemplates />

### Manual Installation

Alternatively it can be added to existing Vue SPA Apps by installing via npm:

```bash
$ npm install @servicestack/vue
```

This libraries only dependencies **vue** and **@servicestack/client** also needs to be installed.

### Installation-less option

Alternatively you can take advantage of modern browsers [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) support to 
use these libraries without installation by registering an [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) to define where it should load the ESM builds of these libraries from, e.g:

```html
<script type="importmap">
{
    "imports": {
        "vue":                  "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js",
        "@servicestack/client": "https://unpkg.com/@servicestack/client@2/dist/servicestack-client.min.mjs",
        "@servicestack/vue":    "https://unpkg.com/@servicestack/vue@3/dist/servicestack-vue.min.mjs"
    }
}
</script>
```

To support intranet Web Apps without internet access, save and reference local copies of these libraries, e.g:

```html
<script type="importmap">
{
    "imports": {
        "vue":                  "/lib/mjs/vue.mjs",
        "@servicestack/client": "/lib/mjs/servicestack-client.mjs",
        "@servicestack/vue":    "/lib/mjs/servicestack-vue.mjs"
    }
}
</script>
```

### Registration

Then register the `@servicestack/vue` component library with your Vue app with:

```js
import { JsonApiClient } from "@servicestack/client"
import ServiceStackVue from "@servicestack/vue"

const client = JsonApiClient.create()

const app = createApp(component, props)
app.provide('client', client)
app.use(ServiceStackVue)

//...
app.mount('#app')
```

The **client** instance is used by API-enabled components to call your APIs using the [/api predefined route](/routing#json-api-pre-defined-route). ServiceStack Apps not running on .NET 6+ or have the **/api** route disabled should use
`JsonServiceClient` instead:

```js
const client = new JsonServiceClient()
```

### Not using Vue Router

Non SPA Vue Apps that don't use [Vue Router](https://router.vuejs.org) should register a replacement `<router-link>` component 
that uses the browser's native navigation for navigation in components:

```js
import ServiceStackVue, { RouterLink } from "@servicestack/vue"

app.component('RouterLink', RouterLink)
```


