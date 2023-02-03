---
title: Vue Tailwind Global Configuration
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../src/components/ApiReference.vue"
</script>

<Breadcrumbs class="not-prose my-4 mb-8" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>useConfig</Breadcrumb>
</Breadcrumbs>

<h2 id="formatters" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    Manage Global Configuration
</h2>

`useConfig` is used to maintain global configuration that's used throughout the Vue Component Library.

```ts
import { useConfig } from "@servicestack/vue"

const {
    config,               // Resolve configuration in a reactive Ref<UiConfig>
    setConfig,            // Set global configuration
    assetsPathResolver,   // Resolve Absolute URL to use for relative paths
    fallbackPathResolver, // Resolve fallback URL to use if primary URL fails
} = useConfig()
```

The asset and fallback URL resolvers are useful when hosting assets on a separate CDN from the hosted website.

<h3 class="my-4 text-lg font-semibold">Default configuration</h3>

```js
setConfig({
    redirectSignIn:       '/signin',
    assetsPathResolver:   src => src,
    fallbackPathResolver: src => src,
})
```

<ApiReference component="TypeScript Definition" />

TypeScript definition of the API surface area and type information for correct usage of `useConfig()`

```ts
interface UiConfig {
    redirectSignIn?: string
    assetsPathResolver?: (src:string) => string
    fallbackPathResolver?: (src:string) => string
}

/** Resolve configuration in a reactive Ref<UiConfig> */
const config:ComputedRef<UiConfig>

/** Set global configuration */
function setConfig(config: UiConfig): void;

/** Resolve Absolute URL to use for relative paths */
function assetsPathResolver(src?: string): string | undefined;

/** Resolve fallback URL to use if primary URL fails */
function fallbackPathResolver(src?: string): string | undefined;
```