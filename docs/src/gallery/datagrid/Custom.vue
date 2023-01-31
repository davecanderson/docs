<template>
<DataGrid :items="forecasts" class="max-w-screen-md" :tableStyle="['stripedRows','uppercaseHeadings']"
          :header-titles="{ temperatureC:'TEMP. (C)', temperatureF:'TEMP. (F)' }">
    <template #date-header>
        <span class="text-indigo-600">Date</span>
    </template>
    <template #date="{ date }">
        {{ new Intl.DateTimeFormat().format(new Date(date)) }}
    </template>
    <template #temperatureC="{ temperatureC }">
        {{ temperatureC }}&deg;
    </template>
    <template #temperatureF="{ temperatureF }">
        {{ temperatureF }}&deg;
    </template>
    <template #summary="{ summary }">{{ summary }}</template>
</DataGrid>
</template>

<script setup lang="ts">
import { forecasts } from '../data'
</script>