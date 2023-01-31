<template>
<DataGrid :items="bookings" />
</template>
<script setup lang="ts">
import { bookings } from '../data'
</script>