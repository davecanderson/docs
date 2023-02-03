---
layout: page
---
<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { ref } from "vue"
import ApiReference from "../../src/components/ApiReference.vue"
import metadata from "../../src/gallery/metadata.json"

import { useMetadata } from '@servicestack/vue'
const { setMetadata } = useMetadata()
setMetadata(metadata)

const show = ref(true)
</script>

<AutoCreateForm v-if="show" type="CreateBooking" @done="show=false" @save="show=false"/>
