---
title: Alert Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import ApiReference from "../../src/components/ApiReference.vue"

const message = "Requires <b>Employee</b> Role"
</script>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Alert Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference component="Alert" />

<p class="mb-4 text-lg">
    Show basic alert message:
</p>

```html
<Alert>Default <b>Message</b></Alert>
<Alert type="info">Information <b>Message</b></Alert>
<Alert type="success">Success <b>Message</b></Alert>
<Alert type="warn">Warning <b>Message</b></Alert>
<Alert type="error">Error <b>Message</b></Alert>
```

<Alert>Default <b>Message</b></Alert>
<Alert type="info">Information <b>Message</b></Alert>
<Alert type="success">Success <b>Message</b></Alert>
<Alert type="warn">Warning <b>Message</b></Alert>
<Alert type="error">Error <b>Message</b></Alert>

<p class="my-4 text-lg">
    Show alert message from dynamic HTML string:
</p>

```html
<Alert v-html="message" />

<script>
const message = "Requires <b>Employee</b> Role"
</script>
```

<Alert v-html="message" />

<ApiReference component="AlertSuccess">Alert Success</ApiReference>

<p class="mb-4 text-lg">
    Show success alert message:
</p>

```html
<AlertSuccess>Order was received</AlertSuccess>
```

<AlertSuccess>Order was received</AlertSuccess>

<ApiReference component="ErrorSummary">Error Summary</ApiReference>

<p class="mb-4 text-lg">
    Show failed Summary API Error Message:
</p>

```html
<ErrorSummary :status="{ message:'Requires Employee Role' }" />
```

<ErrorSummary :status="{ message:'Requires Employee Role' }" />
