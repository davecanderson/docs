import { JsonApiClient } from "@servicestack/client"
import ServiceStackVue, { useMetadata } from "@servicestack/vue"

import * as Vue from "vue"

export function createApp(App, props) {
    
    const client = JsonApiClient.create('https://blazor-gallery-api.jamstacks.net/')
    
    const app = Vue.createApp(App)
    app.provide('client', client)
    app.use(ServiceStackVue)
    
    const { loadMetadata } = useMetadata()
    loadMetadata({ 
        olderThan: 24 * 60 * 60 * 1000, //1day
        resolvePath: '/gallery/metadata.json'
    })
    
    return app
}