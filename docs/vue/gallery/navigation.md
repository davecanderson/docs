---
title: Navigation Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import NavListExamples from "../../src/gallery/navigation/NavListExamples.vue"

const say = msg => alert(msg)
</script>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Navigation Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference component="Breadcrumbs">Breadcrumbs</ApiReference>

<p class="mb-4 text-lg">
    Breadcrumb example:
</p>

```html
<Breadcrumbs home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Navigation Examples</Breadcrumb>
</Breadcrumbs>
```

<Breadcrumbs class="my-8" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Navigation Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference component="NavList">NavList</ApiReference>

<p class="mb-4 text-lg">
    Use <code>NavList</code> for rendering a vertical navigation list with Icons:
</p>

```html
<NavList title="Explore Vue Tailwind Components">
    <NavListItem title="DataGrid" href="/vue/gallery/datagrid" :iconSvg="Icons.DataGrid">
        DataGrid Component Examples for rendering tabular data
    </NavListItem>
    <NavListItem title="AutoQuery Grid" href="/vue/gallery/autoquerygrid" :iconSvg="Icons.AutoQueryGrid">
        Instant customizable UIs for calling AutoQuery CRUD APIs
    </NavListItem>
</NavList>
```

<div class="my-8 not-prose">
    <NavListExamples class="max-w-3xl mx-auto" />
</div>

<ApiReference component="PrimaryButton">Link Buttons</ApiReference>

<p class="mb-4 text-lg">
    Using <code>href</code> with Button components will style hyper links to behave like buttons:
</p>

```html
<PrimaryButton href="https://vue-mjs.web-templates.io/" class="mr-2">
    Vue.mjs Template
</PrimaryButton>

<SecondaryButton href="/vue/">
    Vue Component Docs
</SecondaryButton>
```

<div class="my-8 not-prose">
    <PrimaryButton href="https://vue-mjs.web-templates.io/" class="mr-2">Vue.mjs Template</PrimaryButton>
    <SecondaryButton href="/vue/">Vue Component Docs</SecondaryButton>
</div>

<p class="my-4 text-lg">
    That can use <b>color</b> to render it in different colors:
</p>

```html
<PrimaryButton>Default</PrimaryButton>
<PrimaryButton color="blue">Blue</PrimaryButton>
<PrimaryButton color="purple">Purple</PrimaryButton>
<PrimaryButton color="red">Red</PrimaryButton>
<PrimaryButton color="green">Green</PrimaryButton>
<PrimaryButton color="sky">Sky</PrimaryButton>
<PrimaryButton color="cyan">Cyan</PrimaryButton>
<PrimaryButton color="indigo">Indigo</PrimaryButton>
```

<div class="my-8 space-x-2">
    <PrimaryButton>Default</PrimaryButton>
    <PrimaryButton color="blue">Blue</PrimaryButton>
    <PrimaryButton color="purple">Purple</PrimaryButton>
    <PrimaryButton color="red">Red</PrimaryButton>
    <PrimaryButton color="green">Green</PrimaryButton>
    <PrimaryButton color="sky">Sky</PrimaryButton>
    <PrimaryButton color="cyan">Cyan</PrimaryButton>
    <PrimaryButton color="indigo">Indigo</PrimaryButton>
</div>

<ApiReference component="TextLink">TextLink</ApiReference>

<p class="mb-4 text-lg">
    Tailwind <code>&lt;a&gt;</code> hyper links, e.g:
</p>

```html
<TextLink href="https://docs.servicestack.net/vue/" class="text-xl">
    docs.servicestack.net/vue
</TextLink>
```

<TextLink href="https://docs.servicestack.net/vue/" class="text-xl">docs.servicestack.net/vue</TextLink>

<p class="my-4 text-lg">
    That can also use <b>color</b> to render it in different colors:
</p>

```html
<TextLink @click="say('Hi!')" title="Greetings">Default <b>Link</b></TextLink>
<TextLink color="purple" href="https://google.com" target="_blank" title="Google Link">Purple <b>Link</b></TextLink>
<TextLink color="red"    href="https://google.com" target="_blank" title="Google Link">Red <b>Link</b></TextLink>
<TextLink color="green"  href="https://google.com" target="_blank" title="Google Link">Green <b>Link</b></TextLink>
<TextLink color="sky"    href="https://google.com" target="_blank" title="Google Link">Sky <b>Link</b></TextLink>
<TextLink color="cyan"   href="https://google.com" target="_blank" title="Google Link">Cyan <b>Link</b></TextLink>
<TextLink color="indigo" href="https://google.com" target="_blank" title="Google Link">Indigo <b>Link</b></TextLink>
```

<div class="flex space-x-4">
  <TextLink @click="say('Hi!')" title="Greetings">Default <b>Link</b></TextLink>
  <TextLink color="purple" href="https://google.com" target="_blank" title="Google Link">Purple <b>Link</b></TextLink>
  <TextLink color="red"    href="https://google.com" target="_blank" title="Google Link">Red <b>Link</b></TextLink>
  <TextLink color="green"  href="https://google.com" target="_blank" title="Google Link">Green <b>Link</b></TextLink>
  <TextLink color="sky"    href="https://google.com" target="_blank" title="Google Link">Sky <b>Link</b></TextLink>
  <TextLink color="cyan"   href="https://google.com" target="_blank" title="Google Link">Cyan <b>Link</b></TextLink>
  <TextLink color="indigo" href="https://google.com" target="_blank" title="Google Link">Indigo <b>Link</b></TextLink>
</div>

