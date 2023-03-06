<template>
<div>
    <AutoQueryGrid type="Booking" selectedColumns="id,name,cost,bookingStartDate,bookingEndDate,discount">
        <template #discount="{ discount }">
            <TextLink v-if="discount" class="flex items-end" @click.stop="showCoupon(discount.id)" :title="discount.id">
                <Icon class="w-5 h-5 mr-1" type="Coupon" />
                <PreviewFormat :value="discount.description" />
            </TextLink>
        </template>
    </AutoQueryGrid>
    <AutoEditForm v-if="coupon" type="UpdateCoupon" v-model="coupon" @done="close" @save="close" />
</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { QueryCoupons } from "../dtos"

const client = useClient()
const coupon = ref()
async function showCoupon(id:string) {
    const api = await client.api(new QueryCoupons({ id }))
    if (api.succeeded) {
        coupon.value = api.response!.results[0]
    }
}
const close = () => coupon.value = null
</script>
