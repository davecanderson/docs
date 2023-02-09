---
title: FileInput Component
---

<link rel="stylesheet" href="/css/tailwind-components.css">

<script setup>
import { Icon } from "@iconify/vue"
import ApiReference from "../../src/components/ApiReference.vue"
import metadata from "../../src/gallery/metadata.json"
import { allContacts, files } from "../../src/gallery/data.ts"
import { useMetadata } from '@servicestack/vue'

const contact = allContacts[0]

const { setMetadata } = useMetadata()
setMetadata(metadata)
</script>

<Breadcrumbs class="not-prose my-4" home-href="/vue/">
  <Breadcrumb href="/vue/gallery/">gallery</Breadcrumb>
  <Breadcrumb>FileInput</Breadcrumb>
</Breadcrumbs>

The `<FileInput>` component beautifies the browsers default HTML file Input, supporting both Single file uploads: 

```html
<FileInput id="profileUrl" label="Single File Upload" v-model="contact.profileUrl" />
```
<FileInput id="profileUrl" label="Single File Upload" v-model="contact.profileUrl" class="max-w-lg mb-4" />

and Multiple File Uploads:

```html
<FileInput id="profileUrls" label="Multiple File Uploads" multiple :files="contact.files" />
```
<FileInput id="profileUrls" label="Multiple File Uploads" multiple :files="files" class="max-w-lg not-prose mb-4" />

Use **files** when your binding to a `UploadedFile` complex type or **values** when binding to a `string[]` of file paths.
When binding to relative paths, absolute URLs are resolved using [assetsPathResolver](/vue/use-config).

<h3 class="my-4 text-lg font-semibold">Invoking APIs containing uploaded files</h3>

When uploading files, you'll need to submit API requests using the `apiForm` or `apiFormVoid` methods to send
a populated `FormData` instead of a Request DTO, e.g:

```html
<form @submit.prevent="submit">
    <FileInput id="profileUrls" label="Multiple File Uploads" multiple :files="files" />
    <PrimaryButton>Save</PrimaryButton>
</form>

<script setup lang="ts">
import { useClient } from "@servicestack/vue"
import { CreateContact } from "/mjs/dtos.mjs"

const client = useClient()
async function submit(e:Event) {
    const form = e.target as HTMLFormElement
    const api = await client.apiForm(new CreateContact(), new FormData(form))
    if (api.succeeded) {
        //...
    }
}
</script>
```

<h3 class="my-4 text-lg font-semibold">Integrates with Managed File Uploads</h3>

Using [Managed File Uploads](/locode/files) is a productive solution for easily managing file uploads where you can declaratively specify
which location uploaded files should be written to, e.g:

```csharp
public class UpdateContact : IPatchDb<Contact>, IReturn<Contact>
{
    public int Id { get; set; }
    [ValidateNotEmpty]
    public string? FirstName { get; set; }
    [ValidateNotEmpty]
    public string? LastName { get; set; }
    [Input(Type = "file"), UploadTo("profiles")]
    public string? ProfileUrl { get; set; }
    public int? SalaryExpectation { get; set; }
    [ValidateNotEmpty]
    public string? JobType { get; set; }
    public int? AvailabilityWeeks { get; set; }
    public EmploymentType? PreferredWorkType { get; set; }
    public string? PreferredLocation { get; set; }
    [ValidateNotEmpty]
    public string? Email { get; set; }
    public string? Phone { get; set; }
    [Input(Type = "tag"), FieldCss(Field = "col-span-12")]
    public List<string>? Skills { get; set; }
    [Input(Type = "textarea")]
    [FieldCss(Field = "col-span-12 text-center", Input = "h-48", Label= "text-xl text-indigo-700")]
    public string? About { get; set; }
}
```

This metadata information is also available to [AutoForm components](/vue/gallery/autoform) which supports invoking APIs with uploaded files:

```html
<AutoEditForm type="UpdateContact" v-model="contact" formStyle="card" />
```
<AutoEditForm id="updatecontact" data-id="UpdateContact" type="UpdateContact" v-model="contact" formStyle="card" class="not-prose max-w-3xl" />
