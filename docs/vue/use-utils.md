---
title: General Utils
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../src/components/ApiReference.vue"
</script>

<Breadcrumbs class="not-prose my-4 mb-8" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>useUtils</Breadcrumb>
</Breadcrumbs>

<h2 id="formatters" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
    General functionality and utils
</h2>

General utils used by Vue Components you may also find useful in your Apps:

```js
import { useUtils } from "@servicestack/vue"

const {
    dateInputFormat,  // Format Date into required input[type=date] format
    timeInputFormat,  // Format TimeSpan or Date into required input[type=time] format
    setRef,           // Double set reactive Ref<T> to force triggering updates
    unRefs,           // Returns a dto with all Refs unwrapped
    transition,       // Update reactive `transition` class based on Tailwind animation transition rule-set
    parseHtml,        // Parse HTML fragment into tagName, innerHTML and attrs segments
    focusNextElement, // Set focus to the next element inside a HTML Form
    getTypeName,      // Resolve Request DTO name from a Request DTO instance
    htmlTag,          // HTML Tag builder
    htmlAttrs,        // Convert object dictionary into encoded HTML attributes
    linkAttrs,        // Convert HTML Anchor attributes into encoded HTML attributes
    toAppUrl,         // Resolve Absolute URL from relative path
    isPrimitive,      // Check if value is a scalar type
    isComplexType,    // Check if value is a non-scalar type
} = useUtils()
```

<ApiReference component="TypeScript Definition" />

TypeScript definition of the API surface area and type information for correct usage of `useUtils()`

```ts
/** Format Date into required input[type=date] format */
declare function dateInputFormat(d: Date): string;

/** Format TimeSpan or Date into required input[type=time] format */
declare function timeInputFormat(s?: string | number | Date | null): string;

/** Double set reactive Ref<T> to force triggering updates */
declare function setRef($ref: Ref<any>, value: any): void;

/** Returns a dto with all Refs unwrapped */
declare function unRefs(o: any): any;

/** Update reactive `transition` class based on Tailwind animation transition rule-set */
declare function transition(rule: TransitionRules, transition: Ref<string>, show: boolean): void;

/** Parse HTML fragment into tagName, innerHTML and attrs segments */
declare function parseHtml(html: string): ParsedHtml | null;

/** Set focus to the next element inside a HTML Form */
declare function focusNextElement(): void;

/** Resolve Request DTO name from a Request DTO instance */
declare function getTypeName(dto: any): any;

/** HTML Tag builder */
declare function htmlTag(tag: string, child?: string, attrs?: any): string;

/** Convert object dictionary into encoded HTML attributes */
declare function htmlAttrs(attrs: any): string;

/** Convert HTML Anchor attributes into encoded HTML attributes */
declare function linkAttrs(attrs: {
    href: string;
    cls?: string;
    target?: string;
    rel?: string;
}): {
    target: string;
    rel: string;
    class: string;
} & {
    href: string;
    cls?: string | undefined;
    target?: string | undefined;
    rel?: string | undefined;
};

/** Resolve Absolute URL from relative path */
declare function toAppUrl(url: string): string | undefined;

/** Check if value is a scalar type */
declare function isPrimitive(value: any): boolean;

/** Check if value is a non-scalar type */
declare function isComplexType(value: any): boolean;
```
