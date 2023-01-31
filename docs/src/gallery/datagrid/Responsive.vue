<template>
<DataGrid :items="bookings" 
      :visible-from="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl' }"
      :allow-header-selection="true" @header-selected="headerSelected"
      :allow-selection="true" @row-selected="rowSelected">
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
</DataGrid>
</template>

<script setup lang="ts">
import { bookings } from '../data'
import { useFormatters } from '@servicestack/vue'

const { currency } = useFormatters()

function headerSelected(column:string) {
    console.log('headerSelected',column)
}
function rowSelected(row:string) {
    console.log('rowSelected',row)
}
</script>