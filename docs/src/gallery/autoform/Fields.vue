<template>
<form v-if="request" @submit.prevent="submit">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
        <div class="space-y-6 py-6 px-4 sm:p-6 bg-white dark:bg-black">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Change an existing Room Booking
                </h3>
                <p class="notes mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Find out how to quickly create a 
                    <a class='svg-external' target='_blank' href='https://youtu.be/rSFiikDjGos'>
                        C# Bookings App from Scratch
                    </a>
                </p>
            </div>

            <AutoFormFields v-model="request" :api="api" />

        </div>
        <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-right sm:px-12">
            <PrimaryButton>Save</PrimaryButton>
        </div>
    </div>
</form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ApiResponse } from '@servicestack/client'
import { useClient } from '@servicestack/vue'
import { QueryBookings, UpdateBooking } from '../dtos'

const client = useClient()

let api = ref<ApiResponse>()
let request = ref<UpdateBooking>()

async function submit(e:Event) {
    api.value = await client.api(request.value!)
}

onMounted(async () => {
    let api = await client.api(new QueryBookings({ id: 1 }))
    if (api.succeeded) {
        const booking = api.response!.results[0]
        request.value = new UpdateBooking(booking)
    }
})
</script>