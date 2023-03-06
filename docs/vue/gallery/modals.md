---
title: Modal Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { useAuth } from "@servicestack/vue"
import { Icon } from "@iconify/vue"
import { ref } from "vue"
import ApiReference from "../../src/components/ApiReference.vue"

const showDialog = ref(false)
const showSlide = ref(false)

const { signIn, user } = useAuth()
</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Modal Components</Breadcrumb>
</Breadcrumbs>

<ApiReference component="ModalDialog" />

Use `<ModalDialog>` component to show any content inside a Modal Dialog:

```html
<SecondaryButton @click="showDialog=true">Show Modal</SecondaryButton>
<ModalDialog v-if="showDialog" @done="showDialog=false">
  <h3 class="p-8 text-3xl">Hello @servicestack/vue!</h3>
</ModalDialog>
```

<SecondaryButton @click="showDialog=true">Show Modal</SecondaryButton>
<ModalDialog v-if="showDialog" @done="showDialog=false"><h3 class="p-8 text-3xl">Hello @servicestack/vue!</h3></ModalDialog>

<ApiReference component="SlideOver" />

Use `<SlideOver>` to show contents inside an animated slide over:

```html
<SecondaryButton @click="showSlide=true" class="mt-4">Show Slide</SecondaryButton>
<SlideOver v-if="showSlide" title="The Title" @done="showSlide=false" content-class="relative flex-1">
  <template #subtitle>
    a <b>subtitle</b>
  </template>
  <Alert type="error">Authentication Required</Alert>
  <div class="md:p-4">
    <SecondaryButton>Sign In</SecondaryButton>
  </div>
</SlideOver>
```

<SecondaryButton @click="showSlide=true" class="mt-4">Show Slide</SecondaryButton>
<SlideOver v-if="showSlide" title="The Title" @done="showSlide=false" class="not-prose" content-class="relative flex-1"><template #subtitle>a <b>subtitle</b></template><Alert type="error">Authentication Required</Alert><div class="md:p-4"><SecondaryButton>Sign In</SecondaryButton></div></SlideOver>

As seen in this example we can use **content-class** to customize the inner body contents and the `<template #subtitle>` slot
to include an optional rich HTML subtitle, with all other inner contents is displayed in the SlideOver's body.

<ApiReference component="SignIn" />

The `<SignIn>` Component can be used to create an instant Sign Up form based on the [registered Auth Providers](/auth) that handles
Signing In authenticated users into Vue Apps with the [useAuth()](/vue/use-auth) APIs:


```html
<SignIn v-if="!user" />
<h3 v-else class="text-2xl my-4">Hello, {{ user.displayName }}</h3>

<script setup>
import { useAuth } from "@servicestack/vue"
const { user } = useAuth()
</script>
```
<SignIn v-if="!user" :tabs="false" class="not-prose" />
<h3 v-else class="text-2xl my-4">Hello, {{ user.displayName }}</h3>

**SignIn Properties**

```ts
defineProps<{
    provider?: string  // which Auth Provider to default to
    title?: string     //= Sign In - Heading
    tabs?: boolean     //= true - Show different Auth Provider tabs
    oauth?: boolean    //= true - Show OAuth Provider buttons
}>()
```

**Events**

Use `@login` to run custom logic after successful authentication:

```ts
defineEmits<{
    (e:'login', auth:AuthenticateResponse): void
}>()
```
