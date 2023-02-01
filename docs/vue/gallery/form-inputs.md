---
title: Form Inputs Components
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import Responsive from "../../src/gallery/datagrid/Responsive.vue"
import { tracks } from "../../src/gallery/data.ts"
import metadata from "../../src/gallery/metadata.json"
import bookings from "../../src/gallery/bookings.json"

import { useAppMetadata } from '@servicestack/vue'
const { load } = useAppMetadata()
load(metadata)
</script>

<Breadcrumbs class="mt-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>Form Input Examples</Breadcrumb>
</Breadcrumbs>

<ApiReference Component="TextInput">Bookings Form</ApiReference>

<p class="mb-4 text-lg">
    The <code>TextInput</code>, <code>SelectInput</code>, <code>CheckboxInput</code> and <code>TextAreaInput</code> contains the most popular
    Input controls used by C# POCOs which can be bound directly to Request DTOs and includes support for
    <TextLink href="/declarative-validation">declarative</TextLink> and <TextLink href="/validation">Fluent Validation</TextLink> binding.
</p>

