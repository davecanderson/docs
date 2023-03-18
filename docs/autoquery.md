---
slug: autoquery
title: AutoQuery
---

<script setup>
import { Icon } from "@iconify/vue"
import AutoQueryExamples from "./src/components/AutoQueryExamples.vue"
</script>

<i data-hide=".container>h1"></i>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-20">
    <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        <div class="pb-4">
            AutoQuery
            <span class="relative whitespace-nowrap text-blue-600">
                <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"
                    ><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                <span class="relative">made simple</span>
            </span>
        </div>
        <div>Instant Query & CRUD APIs</div>
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        High performance, Industrial strength, effortless, code-first APIs
    </p>
    <div class="mt-36 lg:mt-24">
        <p class="font-display text-base text-slate-900">
            Rapidly develop rich queryable APIs for
        </p>
        <ul class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0 justify-center">
            <li class="flex" title="PostgreSQL">
                <Icon icon="cib:postgresql" class="w-16 h-16" />
            </li>
            <li class="flex" title="Microsoft SQL Server">
                <Icon icon="simple-icons:microsoftsqlserver" class="w-16 h-16" />
            </li>
            <li class="flex" title="SQLite">
                <Icon icon="simple-icons:sqlite" class="w-16 h-16" />
            </li>
            <li class="flex" title="MySQL">
                <Icon icon="cib:mysql" class="w-16 h-16" />
            </li>
            <li class="flex" title="MariaDB">
                <Icon icon="simple-icons:mariadbfoundation" class="w-16 h-16" />
            </li>
        </ul>
    </div>
</div>

## Fast, typed, code-first Queryable APIs

ServiceStack's AutoQuery is a fresh, approach to enable Auto Querying functionality akin to OData's querying support for Web Api, but without its [webservice anti-patterns](/why-not-odata) where instead of adopting an opaque implementation encumbered syntax, it adheres to HTTP API's simple flat structure by instead
enhancing the ideal API the developer would naturally write and completes their implementation for them!

This is the design philosophy behind AutoQuery which utilizes conventions to automate creation of intent-based self-descriptive APIs that are able to specify configurable conventions and leverage extensibility options to maximize the utility of AutoQuery services.

AutoQuerying aims to work like optional typing by making it easy to expose contract-less data services for rapid prototyping, then allowing the API to be gradually formalized by decorating Request DTO's with its supported usage, whilst allowing complete freedom in either utilizing and extending AutoQuery's built-in functionality or replacing it entirely without breaking the Service Contract.

<h3 class="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Great alternative to OData, GraphQL or JSON:API</h3>

<div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 px-4">
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Connect to anything with data</h3>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Expose data from various data sources including 
                <a class="text-indigo-600 hover:text-indigo-800" href="/autoquery-rdbms">RDBMS</a>, 
                <a class="text-indigo-600 hover:text-indigo-800" href="/autoquery-memory">In Memory</a>, 
                <a class="text-indigo-600 hover:text-indigo-800" href="/autoquery-dynamodb">DynamoDb</a>
                or even 
                <a class="text-indigo-600 hover:text-indigo-800" href="/autoquery-service">other services </a>
                through consistent flexible APIs where clients can control the query details.
            </p>
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Works with your favorite databases</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            AutoQuery RDBMS works with anything OrmLite can connect to, including:
        </p>
        <ul class="ul-circle mx-auto mt-5 max-w-prose text-xl text-gray-500">
            <li class="mt-2">PostgreSQL</li>
            <li class="mt-2">SQL Server</li>
            <li class="mt-2">SQLite</li>
            <li class="mt-2">MySQL</li>
            <li class="mt-2">MariaDB</li>
            <li class="mt-2">AWS Aurora</li>
        </ul>
    </div>
    <div class="w-full sm:w-1/2 px-4">
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Clean REST routes, accessible from everywhere</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Unlike OData and GraphQL, AutoQuery provides clean REST services making them easy to use from standard browsers, avoiding the requirement for complex clients.
        </p>
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Unmatched client integration experience</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Add ServiceStack Reference provides best in class client generation in a multitude of languages straight from the server you're integrating with.
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Instant Client Apps can generate working native client solutions through an easy to use free web tool, only needing a base URL of a ServiceStack service.
        </p>
    </div>
</div>


### AutoQuery Services are ServiceStack Services

An important point worthy of highlighting is that AutoQuery Services are just normal ServiceStack Services, utilizing the same [Request Pipeline](/order-of-operations), which can be mapped to any [user-defined route](/routing), is available in all [registered formats](/formats) and can be [consumed from existing typed Service Clients](/clients-overview). 

In addition to leveraging ServiceStack's existing functionality, maximizing re-use in this way reduces the cognitive overhead required for developers who can re-use their existing knowledge in implementing, customizing, introspecting and consuming ServiceStack services. 

### [AutoQuery RDBMS](/autoquery-rdbms)

Enables the rapid development of high-performance, fully-queryable typed RDBMS data-driven services and [supports most major Relational Databases](./ormlite/#ormlite-rdbms-providers)

### [AutoQuery Data](/autoquery-data) Sources

AutoQuery Data's Open Provider model supports multiple back-end data sources. The 3 data source providers available include:

 - [AutoQuery Memory](/autoquery-memory) - for querying static or dynamic in-memory .NET collections, some example uses include showing querying a flat-file **.csv** file and querying a throttled 3rd Party API with it's built-in configurable caching.
 - [AutoQuery Service](/autoquery-service) - a step higher than `MemorySource` where you can decorate the response of existing Services with AutoQuery's rich querying capabilities.
 - [AutoQuery DynamoDB](/autoquery-dynamodb) - adds rich querying capabilities over an AWS DynamoDB Table, offering a giant leap of productivity than constructing DynamoDB queries manually.

<h2 class="flex border-none text-4xl">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-10 h-10 align-middle mr-1 text-blue-500 iconify iconify--ri" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .682 1.2l-1.516 6.068A4.992 4.992 0 0 1 16 16a4.992 4.992 0 0 1-4 2a4.992 4.992 0 0 1-4-2a4.992 4.992 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2L4 10.4zm2-.6L12 8l2.754.826l1.809.543L18 9.8V5H6v4.8zM4 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 12 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 20 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 12 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 4 22H2v-2h2z"></path></svg>
    <a href="https://www.locode.dev">Locode</a>
</h2>

If you're just getting started AutoQuery we also recommend using the built-in [Locode UI](/locode/) which lets you rapidly develop beautiful database-powered Web Apps, from an Instant UI around existing database-first RDBMS tables, or export into [highly customizable](/locode/declarative) declarative code-first development model with, on top of AutoQuery's industrial strength APIs to enable a rapid end-to-end typed development model for Web, Mobile & Desktop Apps.

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/hkuO_DMFXmc" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Effortless High performance Query & CRUD APIs

To see the rapid development of AutoQuery in action we've created a quick demo showing how to create a simple multi-user Booking System in minutes from an empty [web](https://github.com/NetCoreTemplates/web) project, [mixed in](/mix-tool) with the preferred RDBMS, [Authentication](/auth) and [Validation](/validation).

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/rSFiikDjGos" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### This step-by-step guide shows how to:

- Start project from empty web template
- Add SQLite support
- Add Authentication support
- Define code-first database model
- Define code-first validation
- Add User Management support
- Add API event audit history support
- Use AutoFilters with AutoQuery services
- Add Excel integration

## Create Typed APIs with minimal code 

Configure AutoQuery with your RDBMS in your AppHost:

```csharp
// Configure your database
container.AddSingleton<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
    MapProjectPath("~/northwind.sqlite"), SqliteDialect.Provider));

// Add the AutoQuery Plugin
Plugins.Add(new AutoQueryFeature {
    MaxLimit = 1000
});
```

Add your custom DTO with route to register a table to query:

```csharp
[Route("/customers")]
public class QueryCustomers : QueryDb<Customer> {}
```

That's all that's needed! From your contract-first API blueprint ServiceStack implements a fully queryable, type safe API for the Customer table that you can query with ServiceStack's built-in [API Explorer](/api-explorer) and [Locode](/locode/) UIs.

<div class="py-4 w-full text-center">
    <div class="buttons text-center text-2xl my-2">
        <a href="https://servicestack.net/start#Name=MyApp&Mix=autoquery" style="text-decoration:none"
            class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white hover:text-white shadow-xl px-5 py-2 inline-block text-blue-100 rounded">
            New Project with AutoQuery
        </a>
    </div>
</div>

### Highly customizable & overridable when needed

Example below shows how to return a custom `CustomRockstar` Response calling an overridable AutoQuery implementation which services are free to customize as needed:

```csharp
[Route("/rockstar-albums")]
public class QueryRockstarAlbums
  : QueryDb<Rockstar,CustomRockstar>, IJoin<Rockstar,RockstarAlbum>
{
    public int? Age { get; set; }
    public string RockstarAlbumName { get; set; }
}

// Custom result
public class CustomRockstar
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }

    // Comes from joined table
    public string RockstarAlbumName { get; set; }
}

// Override with custom implementation
public class MyQueryServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; }

    public async Task<object> Any(QueryRockstarAlbums query)
    {
        using var db = AutoQuery.GetDb(query, base.Request);
        var q = AutoQuery.CreateQuery(query, base.Request, db);
        return await AutoQuery.ExecuteAsync(query, q, base.Request, db);
    }
}
```

#### Multiple Customization Options

- [Custom AutoQuery Implementations](/autoquery-rdbms#custom-autoquery-implementations)
- [Return Custom Results](/autoquery-rdbms#returning-custom-results)
- [Join with other table](/autoquery-rdbms#joining-tables)
- [Join multiple tables](/autoquery-rdbms#joining-multiple-tables)
- [Return nested related results](/autoquery-rdbms#returning-nested-related-results)
- [Customizable Operands](/autoquery-rdbms#customizable-operands)
- [Customizable Templates](/autoquery-rdbms#customizable-templates)
- [Formatting Values](/autoquery-rdbms#formatting-values)
- [Query against multiple client values](/autoquery-rdbms#specifying-multi-airity-queries)
- [Change query behavior per field](/autoquery-rdbms#changing-querying-behavior)

## Create APIs for all RDBMS tables with AutoGen

Connect your existing database and configure to use AutoGen to generate typed end to end HTTP services for your database tables:

```csharp
container.AddSingleton<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
    MapProjectPath("~/northwind.sqlite"), SqliteDialect.Provider));

// Configure AutoQuery to Generate CRUD services
Plugins.Add(new AutoQueryFeature {
    MaxLimit = 1000,
    GenerateCrudServices = new GenerateCrudServices {
        AutoRegister = true
    }
});
```

### AutoGen in Action

[AutoGen](/autoquery-autogen) enables a number of exciting possibilities, predominantly it’s the fastest way to ServiceStack-ify an existing systems RDBMS where it will serve as an invaluable tool for anyone wanting to quickly migrate to ServiceStack and access its functionality ecosystem around ServiceStack Services

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/NaJ7TW-Q_pU" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

AutoGen’s code generation is programmatically customizable where the generated types can be easily augmented with additional declarative attributes to inject your App’s conventions into the auto generated Services & Types to apply custom behavior like Authorization & additional validation rules.

After codifying your system conventions the generated classes can optionally be "ejected" where code-first development can continue as normal.

## Highly versatile ServiceStack APIs

AutoQuery seamlessly integrates with ServiceStack's endpoints, features and tools for maximum reuse and simplified integrations
where it's typed service message contracts are able to drive completely dynamic user interfaces, enabling smart clients to deliver amazing levels of reuse.

Your AutoQuery services can be managed with ServiceStack's built-in dynamic, capability-driven [API Explorer](/api-explorer) and [Locode](/locode/) UI's that are enabled by default, integrating with your existing App.

### Multiple, clean data formats allows for flexible data integrations

As all AutoQuery Services are pure HTTP APIs available in multiple data formats they allow for simple,
rich integrations like being able to use its CSV Format to create live table data sources in Excel or
easily import any query into any data store supporting CSV imports:

![Easy Excel Data Source Integration](/images/autoquery/import-csv.png)

AutoQuery's usage of simple, user-defined Clean URLs and intuitive implicit query conventions makes it easy for
stakeholders to create custom Queries of their Systems Data that they can link to directly in their Excel worksheets
to generate Live Reports:

![Added Excel Datasource](/images/autoquery/import-csv-table.png)

<h2 class="mt-20 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl border-none text-center">
    Leverage ServiceStack's ecosystem of features
</h2>

<div class="flex flex-wrap text-xl">
    <div class="w-full sm:w-1/2">
        <ul class="ul-circle">
            <li class="mt-2"><a href="/formats"> JSON, CSV, XML, JSV, ProtoBuf data formats</a></li>
            <li class="mt-2"><a href="/service-reference"> Add ServiceStack Reference</a></li>
            <li class="mt-2"><a href="/grpc">gRPC</a></li>
            <li class="mt-2"><a href="/encrypted-messaging">Encrypted Messaging</a></li>
            <li class="mt-2"><a href="/messaging">Message Queues</a></li>
            <li class="mt-2"><a href="/declarative-validation">Declarative + Fluent Validation</a></li>
            <li class="mt-2"><a href="/authentication-and-authorization">ServiceStack Authentication providers</a></li>
            <li class="mt-2"><a href="/caching">Caching</a></li>
            <li class="mt-2"><a href="https://servicestack.net/features">And much more!</a></li>
        </ul>
    </div>
    <div class="w-full sm:w-1/2">
        <p>
            AutoQuery services are ServiceStack services, so they benefit from the ServiceStack ecosystem of features.
            This makes responding to changing requirements more straight forward as all these features are designed from the ground up to
            work together with clean consistent APIs.
        </p>
        <p>
            ServiceStack Plugins use the same interfaces that your custom plugins can use, giving you the ability to extend and expand
            your service features consistently across AutoQuery or standard ServiceStack services.
        </p>
        <div>
            <h3 class="text-center">Create new App with AutoQuery or AutoGen</h3>
            <div class="flex justify-center">
                <a class="archive-url" href="https://account.servicestack.net/archive/NetCoreTemplates/web?Name=MyApp&amp;Mix=autoquery">
                    <div class="bg-white px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl" style="min-width:180px">
                        <div class="text-center font-extrabold flex items-center justify-center bg-white mb-2">
                            <div class="text-6xl text-blue-400 my-3">
                                <Icon icon="la:servicestack" />
                            </div>
                        </div>
                        <div class="text-xl font-medium text-gray-700">Web</div>
                        <div class="flex justify-center h-8">
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autoquery</span></div>
                        </div>
                        <span class="archive-name px-4 pb-2 text-blue-600">MyApp.zip</span>
                    </div>
                </a>
                <a class="archive-url" href="https://account.servicestack.net/archive/NetCoreTemplates/web?Name=MyApp&amp;Mix=autocrudgen">
                    <div class="bg-white px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl" style="min-width:180px">
                        <div class="text-center font-extrabold flex items-center justify-center bg-white mb-2">
                            <div class="text-6xl text-blue-400 my-3">
                                <Icon icon="la:servicestack" />
                            </div>
                        </div>
                        <div class="text-xl font-medium text-gray-700">Web</div>
                        <div class="flex justify-center h-8">
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autoquery</span></div>
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autogen</span></div>
                        </div>
                        <span class="archive-name px-4 pb-2 text-blue-600">MyApp.zip</span>
                    </div>
                </a>
            </div>
            <div class="text-gray-400 text-center text-sm">
            or choose custom 
            <a href="https://servicestack.net/start#Name=MyApp&Mix=autoquery">
                Project Template with AutoQuery
            </a>
        </div>
        </div>
    </div>
</div>

<AutoQueryExamples />

