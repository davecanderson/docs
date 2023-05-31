import{_ as o}from"./chunks/shared-api-reference.12884907.js";import{_ as a,o as r,c as s,a as t,d as e,b as i}from"./app.2aea72c0.js";const T='{"title":"Custom Locode Apps","description":"","frontmatter":{"title":"Custom Locode Apps"},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Update","slug":"update"},{"level":2,"title":"API Reference","slug":"api-reference"},{"level":3,"title":"Library Reference","slug":"library-reference"},{"level":3,"title":"UIs","slug":"uis"},{"level":2,"title":"Custom UI","slug":"custom-ui"},{"level":2,"title":"/wwwroot/modules","slug":"wwwroot-modules"},{"level":3,"title":"/locode","slug":"locode"},{"level":3,"title":"/ui","slug":"ui"},{"level":3,"title":"/admin-ui","slug":"admin-ui"},{"level":3,"title":"/shared","slug":"shared"},{"level":3,"title":"Custom App Example","slug":"custom-app-example"}],"relativePath":"locode/custom.md"}',n={},c=t('<p>Locode also lets you create rich custom user experiences by going beyond the <a href="/locode/declarative">declarative C# dev model</a> to create custom HTML &amp; JS Components loaded directly in your Locode Apps.</p><p>This lets us provide an enhanced UX beyond Locode&#39;s default UI to create <a href="/locode/custom-forms.html">Custom Forms</a> for some of our tables or <a href="/locode/custom-components">override Locode&#39;s own components</a> to create a custom home page or customize your <a href="/locode/custom.html#custom-app-example">App&#39;s branding components</a> or make use of <a href="/locode/formatters.html#custom-format-function">custom format functions</a> to change how results are rendered.</p><p>To facilitate custom HTML/JS UI development we&#39;ve packaged type definitions for all Locode&#39;s functionality in the<br><code>@servicestack/ui</code> npm package below to enable its productive typed development UX whose changes load instantly without App restarts when run in development mode:</p>',3),l=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"dotnet watch")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),d=t('<h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>When customizing any ServiceStack UI App you can enable static typing and intelli-sense by installing the <code>@servicestack/ui</code> npm package (containing their TypeScript <code>.d.ts</code> definitions) in your host project, where you&#39;ll be able to use the standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noopener noreferrer">ES6 import syntax</a> to enable static analysis on any built-in functionality you want to use.</p><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><p>Add TypeScript definitions for ServiceStack UI&#39;s to your Host project with:</p>',4),p=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"npm install -D @servicestack/ui")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),h=e("h3",{id:"update",tabindex:"-1"},[i("Update "),e("a",{class:"header-anchor",href:"#update","aria-hidden":"true"},"#")],-1),m=e("p",null,"Update your local Type definitions to the latest version with:",-1),u=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"npm install @servicestack/ui@latest")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),f=t('<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-hidden="true">#</a></h2><p>Type definitions for functionality available in ServiceStack UI&#39;s</p><p><a href="https://api.locode.dev/modules/shared.html" target="_blank" rel="noopener noreferrer"><img src="'+o+`" alt=""></a></p><h3 id="library-reference" tabindex="-1">Library Reference <a class="header-anchor" href="#library-reference" aria-hidden="true">#</a></h3><table><thead><tr><th>Namespace</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://api.locode.dev/modules/shared.html" target="_blank" rel="noopener noreferrer">shared</a></td><td>Type Definitions for all Types and shared functionality used in all UI&#39;s</td></tr><tr><td><a href="https://api.locode.dev/modules/client.html" target="_blank" rel="noopener noreferrer">client</a></td><td>Type Definitions for the <a href="https://github.com/ServiceStack/servicestack-client" target="_blank" rel="noopener noreferrer">@servicestack/client</a> library</td></tr></tbody></table><h3 id="uis" tabindex="-1">UIs <a class="header-anchor" href="#uis" aria-hidden="true">#</a></h3><table><thead><tr><th>UI</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://api.locode.dev/modules/locode.html" target="_blank" rel="noopener noreferrer">locode</a></td><td>Global App and Type instances available in <a href="https://www.locode.dev" target="_blank" rel="noopener noreferrer">Locode Apps</a></td></tr><tr><td><a href="https://api.locode.dev/modules/explorer.html" target="_blank" rel="noopener noreferrer">explorer</a></td><td>Global App and Type instances available in <a href="/api-explorer">API Explorer</a></td></tr><tr><td><a href="https://api.locode.dev/modules/admin.html" target="_blank" rel="noopener noreferrer">admin</a></td><td>Global App and Type instances available in ServiceStack&#39;s <a href="/admin-ui">Admin UI</a></td></tr></tbody></table><h2 id="custom-ui" tabindex="-1">Custom UI <a class="header-anchor" href="#custom-ui" aria-hidden="true">#</a></h2><p>Whilst <code>@servicestack/ui</code> isn&#39;t used at runtime and therefore not strictly required, it contains the type definitions for all built-in ServiceStack Apps to enable superior Developer UX by enabling static analysis, rich-intellisense and type safety feedback to provide a helpful guide ensuring correct usage of discoverable built-in functionality.</p><p>All built-in ServiceStack Apps can be customized the same way where each of their HTML components can be replaced by adding a local file at their same path in your AppHost Project&#39;s <code>/wwwroot/modules</code> folder:</p><h2 id="wwwroot-modules" tabindex="-1">/wwwroot/modules <a class="header-anchor" href="#wwwroot-modules" aria-hidden="true">#</a></h2><p>To make it easy to customize each App, purpose-specific <code>custom.*</code> placeholders can be overridden to include additional CSS, JS and HTML in each App. Whilst any of their existing components can be replaced by adding a local modified copy in its <code>/components/*.html</code> folder.</p><p>We&#39;ll go through each App&#39;s folder to better visualize their extension placeholders that&#39;s available:</p><h3 id="locode" tabindex="-1">/locode <a class="header-anchor" href="#locode" aria-hidden="true">#</a></h3><p>Lets you customize <a href="https://www.locode.dev" target="_blank" rel="noopener noreferrer">Locode Apps</a> where <a href="/locode/custom-forms">Custom Forms</a> can either be registered in <code>custom.html</code> or added to <code>/components/*.mjs</code> where you can also override any of Locode&#39;s components by including a locally modified copy from <a href="https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack/src/ServiceStack/modules/locode/components" target="_blank" rel="noopener noreferrer">/components/*.mjs</a></p><div class="language-"><pre><code>    /components
        *.mjs
    custom.js
    custom.css
    custom.html
</code></pre></div><h3 id="ui" tabindex="-1">/ui <a class="header-anchor" href="#ui" aria-hidden="true">#</a></h3><p>Is where to customize your Services <a href="/api-explorer">API Explorer UI</a> where each API can be documented by adding <a href="/api-explorer#api-docs">Custom API Docs</a> to <code>/docs/*.mjs</code>, whilst existing components can be overridden in <a href="https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack/src/ServiceStack/modules/ui/components" target="_blank" rel="noopener noreferrer">/components/*.html</a> and custom UI added to <code>custom.*</code></p><div class="language-"><pre><code>    /docs
        *.mjs
    /components
        *.mjs
    custom.js
    custom.css
    custom.html
</code></pre></div><h3 id="admin-ui" tabindex="-1">/admin-ui <a class="header-anchor" href="#admin-ui" aria-hidden="true">#</a></h3><p>Is where to add any customizations to <a href="/admin-ui">Admin UI</a> by overriding existing components in <a href="https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack/src/ServiceStack/modules/admin-ui/components" target="_blank" rel="noopener noreferrer">/components/*.mjs</a> or adding custom UI to <code>custom.*</code></p><div class="language-"><pre><code>    /components
        *.mjs
    custom.js
    custom.css
    custom.html
</code></pre></div><h3 id="shared" tabindex="-1">/shared <a class="header-anchor" href="#shared" aria-hidden="true">#</a></h3><p>The shared folder is where you can customize all Apps by overriding generic components in <a href="https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack/src/ServiceStack/modules/shared" target="_blank" rel="noopener noreferrer">shared/*.html</a> whilst custom HTML can be added to the <code>&lt;head/&gt;</code>, at the start and end of the <code>&lt;body/&gt;</code> of each App by including the <code>custom-*.html</code> placeholders below:</p><div class="language-"><pre><code>    custom-head.html
    custom-body.html
    custom-end.html        
</code></pre></div><h3 id="custom-app-example" tabindex="-1">Custom App Example <a class="header-anchor" href="#custom-app-example" aria-hidden="true">#</a></h3><p>The <a href="/templates-blazor">Blazor WASM</a> template includes example App customizations with <a href="/api-explorer#api-docs">Custom API Docs</a> for its <a href="https://blazor-wasm-api.jamstacks.net/ui/CreateBooking?tab=details" target="_blank" rel="noopener noreferrer">CreateBooking</a> and <a href="https://blazor-wasm-api.jamstacks.net/ui/QueryTodos?tab=details" target="_blank" rel="noopener noreferrer">Todos APIs</a>:</p><ul class="list-none"><li><a href="https://github.com/NetCoreTemplates/blazor-wasm/tree/main/MyApp/wwwroot/modules" class="font-medium">/modules</a><ul class="list-none"><li><span class="font-medium">/ui/docs</span><ul class="list-none"><li><a href="https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/tests/ServiceStack.Blazor.Bootstrap.Tests/Server/modules/ui/docs/CreateBookingDocs.mjs"> CreateBookingDocs.mjs </a></li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/tests/ServiceStack.Blazor.Bootstrap.Tests/Server/modules/ui/docs/TodoDocs.mjs"> TodoDocs.mjs </a></li></ul></li></ul></li></ul><p>Whilst replacing the existing <strong>shared</strong> <code>Brand</code> Component changes the top-left App Branding UI in each App:</p><ul class="list-none"><li><a href="https://github.com/ServiceStack/ServiceStack/tree/main/ServiceStack/src/ServiceStack/js/components" class="font-medium">/js/components</a><ul class="list-none"><li><a href="https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/tests/ServiceStack.Blazor.Bootstrap.Tests/Server/js/components/Brand.mjs"> Brand.mjs </a></li></ul></li></ul><p>Next we&#39;ll see how we to create <a href="/locode/custom-forms">Custom Forms</a> to replace the Auto Form UI in Locode Apps.</p>`,31),v=[c,l,d,p,h,m,u,f];function g(b,w,S,k,y,_){return r(),s("div",null,v)}var I=a(n,[["render",g]]);export{T as __pageData,I as default};
