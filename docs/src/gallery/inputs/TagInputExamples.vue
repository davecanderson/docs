<template>
<form @submit.prevent="submit">
    <div class="shadow sm:rounded-md bg-white dark:bg-black">
        <div class="relative px-4 py-5 sm:p-6">
            <fieldset>
                <legend class="text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4">
                    TagInput Examples
                </legend>

                <ErrorSummary :except="visibleFields" />

                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-6">
                        <TextInput v-model="request.firstName" />
                    </div>

                    <div class="col-span-6">
                        <TextInput v-model="request.lastName" />
                    </div>

                    <div class="col-span-12">
                        <TagInput v-model="request.skills" label="Technology Skills" />
                    </div>

                </div>
            </fieldset>
        </div>
        <div class="mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between">
            <div></div>
            <div class="flex justify-end">
                <SecondaryButton class="mr-4">Cancel</SecondaryButton>
                <PrimaryButton type="submit">Submit</PrimaryButton>
            </div>
        </div>
    </div>
</form>
</template>

<script setup lang="ts">
import { UpdateContact } from '../dtos'
import { allContacts } from '../data'
const visibleFields ="firstName,lastName,skills"

const request = new UpdateContact(allContacts[0])

function submit(e:Event) {    
}
</script>