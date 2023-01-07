<script setup>
import BlazorTemplates from "./src/components/BlazorTemplates.vue"
import { Icon } from "@iconify/vue"
</script>

<div id="blazor-server" class="mt-12 ml-20 flex flex-col items-center">
    <div>
        <Icon icon="simple-icons:blazor" class="w-24 h-24 text-purple-600 mr-8" />
        <Icon icon="logos:tailwindcss-icon" class="w-28 h-28" />
    </div>
</div>
<div class="relative bg-white py-4">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Blazor Server Tailwind Template</p>
    <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
      Ultimate dev model & UX ideal for low-latency Intranet environments 
    </p>
  </div>
</div>

<a href="https://blazor-server.jamstacks.net">
  <div class="block flex justify-center shadow hover:shadow-lg rounded py-1">
    <img class="p-4" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/blazor-server.png">
  </div>
</a>

[ServiceStack.Blazor's Tailwind Components](/templates-blazor-components) also work flawlessly in [Blazor Server Apps](https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models?view=aspnetcore-6.0#blazor-server) which benefits from fast startup and exceptional responsiveness in low latency environments thanks to its architecture of running your App in a server session that only needs to propagate thin UI Virtual DOM updates to clients.

The Blazor Server App template offers a number compelling advantages over Blazor WASM, including:

 - A superior dev model and debugging experience
 - Improved live-reload and faster iterative dev cycles
 - Full access to .NET Server functionality 
 - Better start times & UI responsiveness 
 - Less complexity from unnecessary client project or pre-rendering solutions

Although [the limitations](https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models?view=aspnetcore-6.0#blazor-server) of its highly-coupled stateful server rendering session architecture does make it a poor fit for most high latency Internet sites which we continue to recommend our [Blazor WASM project template](/templates-blazor-tailwind) for.

To better showcase our growing Blazor functionality we've created the new Blazor Gallery websites showcasing usage of available rich Blazor Components for rapidly develop beautiful Tailwind Web Apps:

<div id="blazor-component-gallery" class="relative bg-white py-4">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Blazor Gallery</p>
    <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
      Discover ServiceStack.Blazor Rich UI Components and Integrated Features
    </p>
  </div>
</div>

[![](/images/blazor/gallery-splash.png)](https://blazor-gallery.servicestack.net)

As our components support both hosting models we're maintaining identical Gallery sites running on both **Blazor Server** and **WASM**:

<div class="mb-16 mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
  <div class="rounded-md shadow">
    <a href="https://blazor-gallery.servicestack.net" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg hover:no-underline">
      Blazor Server
    </a>
  </div>
  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
    <a href="https://blazor-gallery.jamstacks.net" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg hover:no-underline">
      Blazor WASM
    </a>
  </div>
</div>

For a closer look at ServiceStack.Blazor Components in action, download & run them to see how good they'll run in your Environment:

<div class="flex flex-col">
  <a href="https://github.com/NetCoreApps/BlazorGallery" class="text-xl text-gray-800">
    <Icon icon="simple-icons:github" class="w-6 h-6 mr-2 align-text-bottom" />
    <span>NetCoreApps/BlazorGallery</span>
  </a>
  <a href="https://github.com/NetCoreApps/BlazorGalleryWasm" class="mt-2 text-xl text-gray-800">
    <Icon icon="simple-icons:github" class="w-6 h-6 mr-2 align-text-bottom" />
    <span>NetCoreApps/BlazorGalleryWasm</span>
  </a>
</div>

<p class="hide-h2"></p>

## Getting Started

Customize and Download a new Blazor WASM Bootstrap project with your preferred project name:

<h3 class="text-center">Download new C# Blazor Project</h3>

<BlazorTemplates class="pb-8" />

Alternatively you can create & download a new Blazor Project with the [x dotnet tool](/dotnet-new):

:::sh
x new blazor-server ProjectName
:::


## Universal Blazor Components

Blazor Server has become our preferred platform for Interactive **Intranet** Apps which excels in **low-latency environments** to enable a best-in-class responsive end-user UX that also offers a superior development experience in Visual Studio's live reload where it enables a fast iterative development workflow and good debugging experience.

A fantastic property of Blazor is its support for multiple hosting modes which allows the same components from being able to run in the Browser with Blazor WASM or rendered on the Server with Blazor Server. But whilst Blazor is capable of it, this trait is typically conceded in most Apps with database access where it recommends using
[EF Core directly in Blazor components](https://learn.microsoft.com/en-us/aspnet/core/blazor/blazor-server-ef-core?view=aspnetcore-7.0) - effectively prohibiting reuse in Blazor WASM should you ever want to utilize Blazor's preferred hosting model for hosting your Blazor App's on the Internet.

<div class="my-8 flex justify-center">
    <iframe class="video-hd" src="https://www.youtube.com/embed/66DgLHExC9E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Blazing Fast Networkless APIs

Whilst better performing, having Blazor components access DB's directly encourages a more tightly-coupled and less reusable & testable architecture than the traditional well-defined API dev model used in client/server Mobile & Desktop Apps or Web SPA Apps like WASM. 

To achieve the best of both worlds, we've enabled support for utilizing the In Process [Service Gateway](/service-gateway) in Blazor Server Apps which lets you retain the traditional client/server dev model for invoking your Server APIs **In Process** - avoiding any serialization, HTTP networking or even Kestrel middleware overhead to invoke your APIs directly!

This enables using the **exact same source code** to call APIs in Blazor Server and WASM which allows us to develop reusable Blazor Components to invoke the same Server APIs that serve Web, Mobile and Desktop Apps in Blazor Server Apps. Where instead of using HttpClient to invoke your APIs, they're invoked directly from a C# method which will preserve its StackTrace where you'll be able to track the API call down to the Blazor UI component calling it.

ServiceStack's [Message-based API Design](/api-design) makes it possible for all API calls in ServiceStack.Blazor components and project templates to be routed through these 2 methods:

```csharp
public interface IServiceGatewayAsync
{
    Task<TResponse> SendAsync<TResponse>(object dto, CancellationToken ct=default);
    //...
}

public interface IServiceGatewayFormAsync
{
    Task<TResponse> SendFormAsync<TResponse>(object dto, MultipartFormDataContent form, CancellationToken ct=default);
}
```

::: info
The `SendFormAsync` API is a new method added to support multi-part API requests with File Uploads
:::

Which allows the HTTP `JsonApiClient` and networkless `InProcessGateway` clients to be used interchangeably. By default Blazor Server Apps now use the InProcess Gateway but can be switched over to invoke APIs using the HTTP `JsonApiClient` with:

```csharp
BlazorConfig.Set(new() {
    UseInProcessClient = false
});
```

Which changes all `Api*` methods in Blazor components and Pages inheriting ServiceStack.Blazor's [BlazorComponentBase](https://reference.servicestack.net/api/ServiceStack.Blazor/BlazorComponentBase) to use the registered `JsonApiClient` client. 

Other components can access both the InProcess Gateway or `JsonApiClient` by injecting the `IClientFactory` dependency into their components, e.g:

```csharp
public class MyComponent : ComponentBase
{
    [Inject] public IClientFactory? ClientFactory { get; set; }

    public IServiceGateway Gateway => ClientFactory!.GetGateway();
    public JsonApiClient Client => ClientFactory!.GetClient();
}
```

This capability is what has made it possible for high-level "API-enabled" components like [AutoQuery Grids](https://blazor-gallery.jamstacks.net/grid) and [AutoForm](https://blazor-gallery.jamstacks.net/gallery/autoform) to support both Blazor Server and Blazor WASM utilizing the most efficient API client available to its platform.

The Blazor Gallery websites themselves are also good demonstrations of being able to run **entire Web Apps** in both Blazor Server and WASM, with all development being done with Blazor Server to take advantage of its superior iterative dev model then a script is used to "export" all pages to an identical Blazor WASM project.

## Api and ApiAsync methods

.NET was originally conceived to use Exceptions for error control flow however there's been a tendency in modern languages & libraries to shun Exceptions and return errors as normal values, an approach we believe is a more flexible & ergonomic way to handle API responses.

### The ApiResult way

The `Api(Request)` and `ApiAsync(Request)` APIs returns a typed `ApiResult<Response>` Value Result encapsulating either a Typed Response or a structured API Error populated in `ResponseStatus` allowing you to handle API responses programmatically without `try/catch` handling:

The below example code to create a new Booking:

```csharp
CreateBooking request = new();

ApiResult<IdResponse> api = new();

async Task OnSubmit()
{
    api = await Client.ApiAsync(request);

    if (api.Succeeded)
    {
        await done.InvokeAsync(api.Response!);
        request = new();
    }
}
```

Which despite its terseness handles both **success** and **error** API responses, **if successful** it invokes the `done()` callback notifying its parent of the new Booking API Response before resetting the Form's data model with a new Request DTO.

Upon **failure** the error response is populated in `api.Error` which binds to the UI via Blazor's `<CascadingValue Value=@api.Error>` to propagate it to all its child components in order to show contextual validation errors next to their respective Input controls.

### Public Pages & Components

To reduce boiler plate, your Blazor Pages & components can inherit the templates local [AppComponentBase.cs](https://github.com/NetCoreTemplates/blazor-wasm/blob/main/MyApp.Client/AppComponentBase.cs) which inherits `BlazorComponentBase` that gets injected with the `IClientFactory` and provides convenient access to most common APIs:

```csharp
public class BlazorComponentBase : ComponentBase, IHasJsonApiClient
{
    [Inject] public IClientFactory? ClientFactory { get; set; }
    public IServiceGateway Gateway => ClientFactory!.GetGateway();
    public JsonApiClient Client => ClientFactory!.GetClient();

    public virtual Task<ApiResult<TResponse>> ApiAsync<TResponse>(IReturn<TResponse> request) => UseGateway 
        ? Gateway.ManagedApiAsync(request)
        : Client.ManagedApiAsync(request);

    public virtual Task<ApiResult<EmptyResponse>> ApiAsync(IReturnVoid request); /*...*/
    public virtual Task<TResponse> SendAsync<TResponse>(IReturn<TResponse> request);
    public virtual Task<IHasErrorStatus> ApiAsync<Model>(object request);
    public virtual Task<ApiResult<Model>> ApiFormAsync<Model>(object requestDto, MultipartFormDataContent request);
}
```

### Protected Pages & Components

Pages and Components requiring Authentication should inherit from [AppAuthComponentBase](https://github.com/NetCoreTemplates/blazor-wasm/blob/main/MyApp.Client/AppComponentBase.cs) instead which integrates with Blazor's Authentication Model to provide access to the currently authenticated user:

```csharp
public abstract class AppAuthComponentBase : AppComponentBase
{
    [CascadingParameter]
    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }

    protected bool HasInit { get; set; }

    protected bool IsAuthenticated => User?.Identity?.IsAuthenticated ?? false;

    protected ClaimsPrincipal? User { get; set; }

    protected override async Task OnParametersSetAsync()
    {
        var state = await AuthenticationStateTask!;
        User = state.User;
        HasInit = true;
    }
}
```

## Benefits of Shared DTOs

Typically with Web Apps, our client is using a different language to C#, so an equivalent request DTOs need to be generated for the client.

### TypeScript Example

For example, TypeScript generated DTOs still give us typed end-to-end services with the help of tooling like [Add ServiceStack Reference](/add-servicestack-reference)

```csharp
[Route("/hello/{Name}")]
public class Hello : IReturn<HelloResponse>
{
    public string Name { get; set; }
}

public class HelloResponse
{
    public string Result { get; set; }
}
```

Turns into:

```typescript
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Hello'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new HelloResponse(); }
}

export class HelloResponse
{
    public result: string;
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}
```

When Request or Response DTOs changes during development, the client DTOs need to be regenerated using a command like [`x csharp`](./add-servicestack-reference.md#simple-command-line-utilities).

### Blazor Server Example

Developing your Blazor Server UI however, you just change your shared request/response DTO in the shared `ServiceModel` project, and both your client and server compile against the same request/response DTO classes.
This eliminates the need for any additional step.

In the `ServiceModel` project, we still have:

```csharp
[Route("/hello/{Name}")]
public class Hello : IReturn<HelloResponse>
{
    public string Name { get; set; }
}

public class HelloResponse
{
    public string Result { get; set; }
}
```

Which the Blazor C# App can use directly in its **.razor** pages:

```csharp
@code {
    Hello request = new()
    {
        Name = "Blazor WASM"
    };

    ApiResult<HelloResponse> api = new();

    protected override async Task OnInitializedAsync() => await submit();

    async Task submit() => api = await ApiAsync(request);
}
```

## ServiceStack.Blazor Components

The [ServiceStack.Blazor Components library](/templates-blazor-components) contains integrated functionality for Blazor including API-enabled base components, HTML Utils and Tailwind UI Input components heavily utilized throughout the template.
