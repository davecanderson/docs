---
title: Blazor Diffusion
---

The goal of our increasing Blazor investments is to enable a highly productive and capable platform for rapidly developing a majority of internal Apps CRUD functionality as well as enabling a hybrid development model where the management of Back office supporting tables can be quickly implemented using custom AutoQueryGrid components freeing up developers to be able to focus a majority of their efforts where they add the most value - in the bespoke Blazor UI's optimized customer-facing UX.

To best demonstrate its potential we've embarked on development of a new project we're excited to announce that does exactly this!

<div class="my-8 flex justify-center">
    <a href="https://blazordiffusion.com" class="flex items-center hover:no-underline" title="blazordiffusion.com">
        <Icon icon="simple-icons:blazor" class="w-20 h-20 text-purple-600 mr-2" />
        <h2 class="border-none text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold">
            <span class="text-purple-600 mr-6">Diffusion</span>
        </h2>
    </a>
</div>

[![blazordiffusion.com](/images/blazor/blazordiffusion.com_splash.png)](https://blazordiffusion.com)


[blazordiffusion.com](https://blazordiffusion.com) is a new ServiceStack.Blazor App front-end for [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion) - a deep learning text-to-image model that can generate quality images from a text prompt whose ability to run on commodity GPU hardware makes it 
one of the most exciting Open Source AI projects ever released. If you haven't experienced Stable Diffusion yet, we welcome you to create an account and start building your Stable Diffusion portfolio for FREE!

### Effortless Admin Pages

It's a great example of Hybrid Development in action where the entire user-facing UI is a bespoke Blazor App that's optimized for creating, searching, cataloging and discovering Stable Diffusion generated images, whilst all its supporting admin tasks to manage the back office tables that power the UI were effortlessly implemented with custom AutoQueryGrid components. 

To get a glimpse of this in action we've created a video showing how quick it was to build the first few Admin Pages:

<div class="my-8 flex justify-center">
    <iframe class="video-hd" src="https://www.youtube.com/embed/tt0ytzVVjEY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Blazor Diffusion is an example of a real-world App leveraging a number of different ServiceStack features to achieve its functionality that we're using to ["dog food"](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) new ServiceStack features to help identify any friction points or missing functionality that we can feedback into the design and improvements of new and existing features, which it has done for most of the new features in this release.

### Blazor Server or Blazor WASM

To ensure all new ServiceStack.Blazor features continue to work in both Blazor Server and Blazor WASM we're maintaining identical versions of Blazor Diffusion running in both of Blazor's hosting modes:

<div class="py-8 flex justify-center">
    <div class="flex flex-col">
    <a href="https://github.com/NetCoreApps/BlazorDiffusion" class="text-xl text-gray-800">
        <Icon icon="simple-icons:github" class="w-6 h-6 mr-2 align-text-bottom" />
        <span>NetCoreApps/BlazorDiffusion</span>
    </a>
    <a href="https://github.com/NetCoreApps/BlazorDiffusionWasm" class="mt-2 text-xl text-gray-800">
        <Icon icon="simple-icons:github" class="w-6 h-6 mr-2 align-text-bottom" />
        <span>NetCoreApps/BlazorDiffusionWasm</span>
    </a>
    </div>
</div>

Where it's initially developed from a Blazor Server project template to take advantage of its fast iterative dev model then uses a [script to export](https://github.com/NetCoreApps/BlazorDiffusionWasm/blob/main/sync.bat) all Pages and Server functionality to a Blazor WASM project template that's optimal for Internet deployments.

### Blazor Diffusion Features

To help discovery we'll link to where new features in this release are used.

<Icon icon="ic:outline-dark-mode" class="w-20 h-20 text-gray-800" />

### Dark Mode

The decision to build [blazordiffusion.com](https://blazordiffusion.com) was in large part due to choosing an App that would look best in Dark Mode, as-is often preferred when viewing images and video. The public UI uses [JS.init() to force Dark Mode](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion/Pages/_Layout.cshtml#L63) whilst the Admin Pages uses a different [AdminLayout.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion/Shared/AdminLayout.razor) that allows dark mode to be toggled on/off as seen in the [BlazorDiffusion Video](https://www.youtube.com/watch?v=tt0ytzVVjEY).

### AutoComplete

The [Create.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion/Pages/Create.razor) uses the new `<Autocomplete>` to quickly select Artists 
and Modifiers.

<div class="mt-8 flex justify-center">
    <a href="https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Pages/Create.razor">
        <img src="/images/blazor/blazordiffusion-Autocomplete.png" style="width:600px">
    </a>
</div>

### Admin Pages

The [/admin](https://github.com/NetCoreApps/BlazorDiffusion/tree/main/BlazorDiffusion/Pages/admin) pages we're all built using [AutoQueryGrid](https://blazor-gallery.jamstacks.net/grid) for its data management and uses [NavList and Breadcrumbs](https://blazor-gallery.jamstacks.net/gallery/navigation) for its navigation.

<div class="flex justify-center">
    <a href="https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Pages/admin/Index.razor">
        <img src="/images/blazor/blazordiffusion-admin-pages.png" style="width:600px">
    </a>
</div>

#### EditForm

The following components make use of `<EditForm>` AutoQueryGrid extensibility to display unique forms for their custom workflow requirements:

 - [Creatives.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Pages/admin/Creatives.razor)
 - [ArtifactAutoQueryGrid.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Shared/admin/ArtifactAutoQueryGrid.razor)
 - [ArtifactReportsAutoQueryGrid.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Shared/admin/ArtifactReportsAutoQueryGrid.razor)

```csharp
<AutoQueryGrid @ref=@grid Model="Creative" Apis="Apis.AutoQuery<QueryCreatives,UpdateCreative,HardDeleteCreative>()"
               ConfigureQuery="ConfigureQuery">
    <EditForm>
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <CreativeEdit Creative="context" OnClose="grid!.OnEditDone" />
            </div>
        </div>
    </EditForm>
</AutoQueryGrid>
```

### SelectInput

The [Modifiers.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Pages/admin/Modifiers.razor) admin page uses 
[SelectInput EvalAllowableValues](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion.ServiceModel/Creative.cs#L168-L187) feature to populate its options from a C# [AppData](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion.ServiceModel/AppData.cs) property:

```csharp
public class CreateModifier : ICreateDb<Modifier>, IReturn<Modifier>
{
    [ValidateNotEmpty, Required]
    public string Name { get; set; }
    [ValidateNotEmpty, Required]
    [Input(Type="select", EvalAllowableValues = "AppData.Categories")]
    public string Category { get; set; }
    public string? Description { get; set; }
}
```

<div class="mt-8 flex justify-center">
    <img src="/images/blazor/diffusion-CreateModifier.png" class="max-w-screen-md" style="border:1px solid #CACACA">
</div>

### TagInput

The [Artists.razor](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Pages/admin/Artists.razor) admin page uses [declarative TagInput](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion.ServiceModel/Creative.cs#L122-L141) to render its AutoQueryGrid Create and Edit Forms:

```csharp
public class UpdateArtist : IPatchDb<Artist>, IReturn<Artist>
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public int? YearDied { get; set; }
    [Input(Type = "tag"), FieldCss(Field = "col-span-12")]
    public List<string>? Type { get; set; }
}
```

<div class="my-8 flex justify-center">
    <img src="/images/blazor/blazordiffusion-TagInput.png" class="max-w-screen-md" style="border:1px solid #CACACA">
</div>

<h2 id="litestream" class="mx-auto max-w-screen-md text-center py-8 border-none">
    <a href="https://litestream.io">
        <img src="/images/litestream/logo.svg">
    </a>
</h2>

We're excited to be able to leverage our [support for Litestream](https://docs.servicestack.net/ormlite/litestream) and showcase an example of architecting a production App at minimal cost which avoids paying for expensive managed hosted RDBMS's by effortlessly replicating its SQLite databases to object storage.

<div class="mt-16 mx-auto max-w-7xl px-4">
    <div class="text-center">
        <h3 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Reduce Complexity &amp; Save Costs</span>
        </h3>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Avoid expensive managed RDBMS servers, reduce deployment complexity, eliminate 
            infrastructure dependencies & save order of magnitude costs vs production hosting
        </p>
    </div>
    <img src="/images/litestream/litestream-costs.svg">
</div>

To make it easy for Blazor Tailwind projects to take advantage of our first-class [Litestream support](/ormlite/litestream), we've created a new video combining these ultimate developer experience & value combo solutions that walks through how to deploy a new Blazor Tailwind SQLite + Litestream App to any Linux server with SSH access, Docker and Docker Compose:

<iframe class="video-hd" src="https://www.youtube.com/embed/fY50dWszpw4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Useful Blazor Litestream Video Links

- [Blazor Litestream Tutorial](https://docs.servicestack.net/blazor-litestream)
- [Blazor](https://servicestack.net/blazor)
- [Litestream](https://servicestack.net/litestream)
- [Docker Install](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose Install](https://docs.docker.com/compose/install/linux/#install-using-the-repository)

### Custom SQLite functions

Using SQLite also gives us access to features not available in other RDBMS's, e.g. for the "Explore Similar Artifacts" feature we're using a custom registered C# function that we can use in SQL to find other Artifacts with the nearest background colors in [SearchService.cs](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion.ServiceInterface/SearchService.cs):

```csharp
public static class DbFunctions
{
    public static void RegisterBgCompare(this IDbConnection db)
    {
        var sqliteConn = (SqliteConnection)db.ToDbConnection();
        sqliteConn.CreateFunction("bgcompare", (string a, string b) => ImageUtils.BackgroundCompare(a, b));
    }
}
```

After registering the function with the db connection we can reference it in our typed SQL Expression with OrmLite's `Sql.Custom()` API:

```csharp
db.RegisterBgCompare();
q.SelectDistinct<Artifact, Creative>((a, c) => new {
    a,
    c.UserPrompt,
    c.ArtistNames,
    c.ModifierNames,
    c.PrimaryArtifactId,
    Similarity = Sql.Custom($"bgcompare('{similarToArtifact.Background}',Background)"),
});
```

This same technique is also used for finding similar images by [PerceptualHash](https://www.hackerfactor.com/blog/index.php?/archives/432-Looks-Like-It.html), [AverageHash](https://www.hackerfactor.com/blog/index.php?/archives/432-Looks-Like-It.html) & [DifferenceHash](http://01101001.net/programming.php) functions provided by the [ImageHash](https://github.com/coenm/ImageHash) library.

The [SearchService.cs](https://github.com/NetCoreApps/BlazorDiffusion/blob/v0.1/BlazorDiffusion.ServiceInterface/SearchService.cs) itself is a great example of a complex [custom AutoQuery implementation](/autoquery-rdbms#custom-autoquery-implementations) which is solely responsible for providing the entire search functionality on the home page. 

### Hetzner US Cloud

Our analysis of [US Cloud Hosting Providers](https://servicestack.net/blog/finding-best-us-value-cloud-provider) led us to moving to [Hetzner Cloud](https://www.hetzner.com/cloud) for hosting where it costs vastly less than equivalent specs at a major cloud provider. But this also meant we also had to look elsewhere to also avoid AWS's expensive egress costs for S3 for image storage which can easily get out of control for a highly traffic image host. 

### R2 Virtual Files Provider

Fortunately we were in time to take advantage of Cloudflare's inexpensive [R2 Object Storage solution](https://www.cloudflare.com/products/r2/) with **$0 egress fees**, together with their generous free tier and ability to serve R2 assets behind their free CDN, we ended up with great value and performance managed cloud storage solution with the only cost expected in the near future to be R2's **$0.015 / GB storage** cost.

R2 is mostly S3 compatible however it needed a custom `S3VirtualFiles` provider to workaround missing features which is being maintained in the new `R2VirtualFiles` VFS provider.

### Files Upload Transformer

The [Managed Files Upload Feature](https://docs.servicestack.net/locode/files) is configured in [Configure.AppHost.cs](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Configure.AppHost.cs) and used for all website File Uploads:

```csharp
var appFs = VirtualFiles = new R2VirtualFiles(s3Client, appConfig.ArtifactBucket);
Plugins.Add(new FilesUploadFeature(
    new UploadLocation("artifacts", appFs,
        readAccessRole: RoleNames.AllowAnon,
        maxFileBytes: AppData.MaxArtifactSize),
    new UploadLocation("avatars", appFs, allowExtensions: FileExt.WebImages, 
        // Use unique URL to invalidate CDN caches
        resolvePath: ctx => X.Map((CustomUserSession)ctx.Session, x => $"/avatars/{x.RefIdStr[..2]}/{x.RefIdStr}/{ctx.FileName}")!,
        maxFileBytes: AppData.MaxAvatarSize,
        transformFile:ImageUtils.TransformAvatarAsync)
    ));
```

It utilizes the new **transformFile:** option to transform an uploaded file and save a reference to the transformed file instead. This is used to only save a reference to the **128x128** resized avatar used by the App, whilst still persisting the original uploaded image in a [Background MQ](/background-mq) task in case a higher resolution of their avatar is needed later.

```csharp
public class ImageDetails
{
    public static async Task<IHttpFile?> TransformAvatarAsync(FilesUploadContext ctx)
    {
        var originalMs = await ctx.File.InputStream.CopyToNewMemoryStreamAsync();

        // Offload persistance of original image to background task
        using var mqClient = HostContext.AppHost.GetMessageProducer(ctx.Request);
        mqClient.Publish(new DiskTasks {
            SaveFile = new() {
                FilePath = ctx.Location.ResolvePath(ctx),
                Stream = originalMs,
            }
        });

        var resizedMs = await CropAndResizeAsync(originalMs, 128, 128, PngFormat.Instance);

        return new HttpFile(ctx.File)
        {
            FileName = $"{ctx.FileName.LastLeftPart('.')}_128.{ctx.File.FileName.LastRightPart('.')}",
            ContentLength = resizedMs.Length,
            InputStream = resizedMs,
        };
    }

    public static async Task<MemoryStream> CropAndResizeAsync(Stream inStream, int width, int height, IImageFormat format)
    {
        var outStream = new MemoryStream();
        var image = await Image.LoadAsync(inStream);
        using (image)
        {
            var clone = image.Clone(context => context
                .Resize(new ResizeOptions {
                    Mode = ResizeMode.Crop,
                    Size = new Size(width, height),
                }));
            await clone.SaveAsync(outStream, format);
        }
        outStream.Position = 0;
        return outStream;
    }
}
```

### Background MQ

[Background MQ](/background-mq) is utilized to improve API response times by offloading a number of non-essential background tasks in [BackgroundMqServices.cs](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion.ServiceInterface/BackgroundMqServices.cs) to perform functions like:

 - Saving JSON metadata snapshot of Stable Diffusion generated images alongside the images themselves
 - Write Files to R2
 - Recalculating temporal scores and ranking of Artifacts and Albums
 - Recording Analytics
 - Prerendering pages at runtime

### Prerendering Blazor Pages at runtime

The [current prerendering solution](https://blazor-tailwind.jamstacks.net/docs/prerender) built into the Blazor WASM template follows the [JAMStack](https://jamstack.org/) approach of pre-rendering pages at build time, however in order to keep the home page "fresh" and show the newest & most liked images first we needed a solution that pre-renders pages at runtime and publishes them to R2 object storage where the Blazor WASM static assets are deployed to. 

This feature is implemented in [Configure.Ui.cs](https://github.com/NetCoreApps/BlazorDiffusion/blob/main/BlazorDiffusion/Configure.Ui.cs) where it lets you specify the pages to render, any custom parameters and where to save it:

```csharp
container.Register<IPrerenderer>(c => new Prerenderer
{
    BaseUrl = appConfig.BaseUrl,
    VirtualFiles = virtualFiles,
    PrerenderDir = "/prerender",
    Renderer = c.Resolve<IComponentRenderer>(),
    Pages = {
        new(typeof(Pages.Index),  "/index.html",  new() { [nameof(Pages.Index.LazyLoad)] = "false" }),
        new(typeof(Pages.Albums), "/albums.html", new() { [nameof(Pages.Index.LazyLoad)] = "false" }),
    }
});
```

To avoid a dependency to bUnit in our App we've created a new `ComponentRenderer` to render Blazor components to string that's useful if needing to render a Blazor Component to HTML in an API, e.g. you can create a generic API to render any component with:

```csharp
[Route("/render/{Type}")]
public class RenderComponent : IGet, IReturn<string> 
{
    public string Type { get; set; }
}

//...

public async Task<object> Any(RenderComponent request)
{
    var componentType = GetComponentType(request.Type); //TODO resolve Component Type from Name
    var httpContext = ((NetCoreRequest)Request).HttpContext;
    var args = Request.GetRequestParams().ToObjectDictionary();
    var renderer = new ComponentRender();
    var html = await renderer.RenderComponentAsync(componentType, httpContext, args);
    return html;
}
```

Where it will populate a component instance from a QueryString then render it to string that can be called like:

    /render/MyPage?Param1=A&Param2=B

Or if needing to render a component outside of a HTTP Context (e.g. in a Background Task or Console App), you can create a empty HttpContext with the new `HttpContextFactory`, e.g:

```csharp
var testContext = HttpContextFactory.CreateHttpContext(baseUrl);
var renderer = new ComponentRender();
var html = await renderer.RenderComponentAsync(componentType, testContext, args);
```
