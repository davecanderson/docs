---
title: "@servicestack/vue"
---

`@serviceStack/vue` is our growing Vue 3 Tailwind component library with a number of rich Tailwind components useful 
in .NET Web Apps, including Input Components with auto form validation binding. 


#### useClient

[useClient()](https://github.com/ServiceStack/servicestack-vue/blob/main/src/api.ts) provides managed APIs around the `JsonServiceClient` 
instance registered in Vue App's with:

```js
app.provide('client', client)
```

Which maintains contextual information around your API calls like **loading** and **error** states, used by `@servicestack/vue` components to 
enable its auto validation binding. Other functionality in this provider include:

```js
let { 
    api, apiVoid, apiForm, apiFormVoid, // Managed Typed ServiceClient APIs
    loading, error,                     // Maintains 'loading' and 'error' states
    setError, addFieldError,            // Add custom errors in client
    unRefs                              // Returns a dto with all Refs unwrapped
} = useClient()
```

Typically you would need to unwrap `ref` values when calling APIs, i.e:

```js
let client = new JsonServiceClient()
let api = await client.api(new Hello({ name:name.value }))
```

#### useClient - api

This is unnecessary in useClient `api*` methods which automatically unwraps ref values, allowing for the more pleasant API call:

```js
let api = await client.api(new Hello({ name }))
```

#### useClient - unRefs

But as DTOs are typed, passing reference values will report a type annotation warning in IDEs with type-checking enabled, 
which can be avoided by explicitly unwrapping DTO ref values with `unRefs`:

```js
let api = await client.api(new Hello(unRefs({ name })))
```

#### useClient - setError

`setError` can be used to populate client-side validation errors which the 
[SignUp.mjs](https://github.com/NetCoreTemplates/vue-mjs/blob/main/MyApp/wwwroot/Pages/SignUp.mjs)
component uses to report an invalid submissions when passwords don't match:

```js
const { api, setError } = useClient()
async function onSubmit() {
    if (password.value !== confirmPassword.value) {
        setError({ fieldName:'confirmPassword', message:'Passwords do not match' })
        return
    }
    //...
}
```

### Form Validation

All `@servicestack/vue` Input Components support contextual validation binding that's typically populated from API
[Error Response DTOs](https://docs.servicestack.net/error-handling) but can also be populated from client-side validation
as done above.

#### Explicit Error Handling

This populated `ResponseStatus` DTO can either be manually passed into each component's **status** property as done in [/Todos](/TodoMvc):

```html
<template id="TodoMvc-template">
    <div class="mb-3">
        <text-input :status="store.error" id="text" label="" placeholder="What needs to be done?"
                    v-model="store.newTodo" v-on:keyup.enter.stop="store.addTodo()"></text-input>
    </div>
    <!-- ... -->
</template>
```

Where if you try adding an empty Todo the `CreateTodo` API will fail and populate its `store.error` reactive property with the 
APIs Error Response DTO which the `<TextInput />` component checks for to display any field validation errors matching the
field in `id` adjacent to the HTML Input:

```js
let store = {
    /** @type {Todo[]} */
    todos: [],
    newTodo:'',
    error:null,
    async refreshTodos(errorStatus) {
        this.error = errorStatus
        let api = await client.api(new QueryTodos())
        if (api.succeeded)
            this.todos = api.response.results
    },
    async addTodo() {
        this.todos.push(new Todo({ text:this.newTodo }))
        let api = await client.api(new CreateTodo({ text:this.newTodo }))
        if (api.succeeded)
            this.newTodo = ''
        return this.refreshTodos(api.error)
    },
    //...
}
```

#### Implicit Error Handling

More often you'll want to take advantage of the implicit validation support in `useClient()` which makes its state available to child
components, alleviating the need to explicitly pass it in each component as seen in the [/Contacts](/Contacts) `Edit` component
which doesn't do any manual error handling:

```js
const Edit = {
    template:/*html*/`<SlideOver @done="close" title="Edit Contact">
    <form @submit.prevent="submit">
      <input type="submit" class="hidden">
      <fieldset>
        <ErrorSummary :except="visibleFields" class="mb-4" />
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="title" v-model="request.title" :options="enumOptions('Title')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput id="name" v-model="request.name" required placeholder="Contact Name" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="color" v-model="request.color" :options="colorOptions" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="favoriteGenre" v-model="request.favoriteGenre" :options="enumOptions('FilmGenre')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput type="number" id="age" v-model="request.age" />
          </div>
        </div>
      </fieldset>
    </form>
    <template #footer>
      <div class="flex justify-between space-x-3">
        <div><ConfirmDelete @delete="onDelete">Delete</ConfirmDelete></div>
        <div><PrimaryButton @click="submit">Update Contact</PrimaryButton></div>
      </div>
    </template>
  </SlideOver>`,
    props:['contact'],
    emits:['done'],
    setup(props, { emit }) {
        const visibleFields = "title,name,color,filmGenres,age,agree"
        const client = useClient()

        const request = ref(new UpdateContact(props.contact))
        const colorOptions = propertyOptions(getProperty('CreateContact','Color'))

        /** @param {Event} e */
        const submit = async (e) => {
            const api = await client.api(request.value)
            if (api.succeeded) close()
        }
        const onDelete = async () => {
            const api = await client.apiVoid(new DeleteContact({id: props.id}))
            if (api.succeeded) close()
        }
        const close = () => emit('done')
        return { visibleFields, submit, close, enumOptions, colorOptions, request }
    }
}
```

This effectively makes form validation binding a transparent detail where all `@servicestack/vue` 
Input Components are able to automatically apply contextual validation errors next to the fields they apply to: 

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/scripts/edit-contact-validation.png)