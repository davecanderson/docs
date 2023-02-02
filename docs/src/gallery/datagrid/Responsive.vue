<template>
<DataGrid :items="bookings" 
      :visible-from="{ name:'xl', bookingStartDate:'sm', bookingEndDate:'xl' }"
      @header-selected="headerSelected"
      @row-selected="rowSelected" :is-selected="row => selected == row.id">
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
import { ref } from 'vue'
import { useFormatters } from '@servicestack/vue'
import { bookings } from '../data'
import { Booking } from '../dtos'

const { currency } = useFormatters()
const selected = ref()

function headerSelected(column:string) {
    console.log('headerSelected',column)
}
function rowSelected(row:Booking) {
    selected.value = selected.value === row.id ? null : row.id
    console.log('rowSelected', row)
}
</script>