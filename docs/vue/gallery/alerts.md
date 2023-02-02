---
title: Alert Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import ApiReference from "../../src/components/ApiReference.vue"

const message = "Requires <b>Employee</b> Role"
</script>

<Breadcrumbs class="not-prose mt-4" home-href="/vue/">
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

<div class="not-prose mb-4">
<Alert>Default <b>Message</b></Alert>
<Alert type="info">Information <b>Message</b></Alert>
<Alert type="success">Success <b>Message</b></Alert>
<Alert type="warn">Warning <b>Message</b></Alert>
<Alert type="error">Error <b>Message</b></Alert>
</div>

Show alert message from dynamic HTML string:

```html
<Alert v-html="message" />

<script>
const message = "Requires <b>Employee</b> Role"
</script>
```

<Alert v-html="message" />

<ApiReference component="AlertSuccess">Alert Success</ApiReference>

Show success alert message:

```html
<AlertSuccess>Order was received</AlertSuccess>
```

<AlertSuccess class="not-prose">Order was received</AlertSuccess>

<ApiReference component="ErrorSummary">Error Summary</ApiReference>

Show failed Summary API Error Message:

```html
<ErrorSummary :status="{ message:'Requires Employee Role' }" />
```

<ErrorSummary :status="{ message:'Requires Employee Role' }" class="not-prose" />

