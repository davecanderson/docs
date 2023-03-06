<template>
<AutoQueryGrid type="Booking" :visibleFrom="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl', createdBy:'2xl' }">
    <template #id="{ id }">
        <span class="text-gray-900">{{ id }}</span>
    </template>
    
    <template #name="{ name }">
        {{ name }}
    </template>
    
    <template #roomNumber-header>
        <span class="hidden lg:inline">Room </span>No
    </template>

    <template #cost="{ cost }">{{ currency(cost) }}</template>
    
    <template #bookingStartDate-header>
        Start<span class="hidden lg:inline"> Date</span>
    </template>
    
    <template #bookingEndDate-header>
        End<span class="hidden lg:inline"> Date</span>
    </template>

    <template #createdBy-header>
        Employee
    </template>
    <template #createdBy="{ createdBy }">{{ createdBy }}</template>
</AutoQueryGrid>
</template>

<script setup lang="ts">
import { useFormatters } from '@servicestack/vue'
const { currency } = useFormatters()
</script>