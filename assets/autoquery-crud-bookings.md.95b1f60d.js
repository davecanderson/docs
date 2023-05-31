import{_ as t,o as e,c as o,a as s,d as n,b as a}from"./app.2aea72c0.js";var p="/assets/bookings-locode.967f9c3e.png";const B='{"title":"AutoQuery CRUD Bookings Demo","description":"","frontmatter":{"slug":"autoquery-crud-bookings","title":"AutoQuery CRUD Bookings Demo"},"headers":[{"level":2,"title":"Creating a multi-user .NET Core Booking system in minutes!","slug":"creating-a-multi-user-net-core-booking-system-in-minutes"},{"level":3,"title":"Download and Run","slug":"download-and-run"},{"level":3,"title":"Custom project from Scratch","slug":"custom-project-from-scratch"},{"level":3,"title":"Create Booking CRUD Services","slug":"create-booking-crud-services"},{"level":3,"title":"Single Patch Partial Update API","slug":"single-patch-partial-update-api"},{"level":2,"title":"Manage in Locode","slug":"manage-in-locode"}],"relativePath":"autoquery-crud-bookings.md"}',c={},l=s('<p>The powerfully productive combination of <a href="/autoquery-rdbms">AutoQuery</a> and <a href="/locode/">Locode</a> can be used to give <strong>Authorized Users an Instant UI</strong> to access AutoQuery Services resulting in an immediate fully queryable (inc. export to Excel) &amp; management UI over system tables within minutes. By virtue of being normal ServiceStack Services, AutoQuery APIs also inherit ServiceStack&#39;s ecosystem of features like <a href="/add-servicestack-reference">Add ServiceStack Reference</a> enabling high-performance end-to-end typed API access in all popular Web, Mobile &amp; Desktop platforms.</p><h2 id="creating-a-multi-user-net-core-booking-system-in-minutes" tabindex="-1">Creating a multi-user .NET Core Booking system in minutes! <a class="header-anchor" href="#creating-a-multi-user-net-core-booking-system-in-minutes" aria-hidden="true">#</a></h2><p>To see the rapid development of AutoQuery in action we&#39;ve created a quick demo showing how to create a simple multi-user Booking System from an empty <a href="https://github.com/NetCoreTemplates/web" target="_blank" rel="noopener noreferrer">web</a> project, <a href="/mix-tool">mixed in</a> with the preferred RDBMS &amp; Auth layered functionality, before enabling <a href="/validation">Validation</a>, <a href="/autoquery-rdbms">AutoQuery</a>, Admin Users &amp; <a href="/autoquery-audit-log">CRUD Event Log</a> plugins - to lay the foundational features before building our App by first defining its <code>Booking</code> data model &amp; its surrounding <strong>Query</strong>, <strong>Create</strong>, <strong>Update</strong> and <strong>Soft Delete</strong> Typed CRUD APIs with rich validation enforced by declarative Validation attributes and multi-layer authorization rules &amp; access permissions protected using Authorization attributes.</p><p>All declarative functionality is accessible in Locode which is used to create new Employee &amp; Manager Users, before signing in with each to hit the ground running and start entering new bookings using Locode&#39;s capability-based UI, with each change visible in its <strong>Audit History</strong>.</p>',4),i=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/rSFiikDjGos",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),u=s(`<h3 id="download-and-run" tabindex="-1">Download and Run <a class="header-anchor" href="#download-and-run" aria-hidden="true">#</a></h3><p>The quickest way to run the <a href="https://github.com/NetCoreApps/BookingsCrud" target="_blank" rel="noopener noreferrer">Bookings AutoQuery Example</a> is to install the <a href="/dotnet-tool">x tool</a>, download &amp; run the repo:</p><div class="language-bash"><pre><code>x download NetCoreApps/BookingsCrud
<span class="token builtin class-name">cd</span> BookingsCrud<span class="token punctuation">\\</span>Acme
dotnet run
</code></pre></div><h3 id="custom-project-from-scratch" tabindex="-1">Custom project from Scratch <a class="header-anchor" href="#custom-project-from-scratch" aria-hidden="true">#</a></h3><p>If you have different App requirements you can instead create a project from scratch that integrates with your existing preferred infrastructure - the <a href="/mix-tool">mix tool</a> and ServiceStack&#39;s layered <a href="/modular-startup">Modular Startup</a> configurations makes this a cinch, start with an empty <code>web</code> project:</p>`,5),r=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x new web ProjectName")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),k=n("p",null,"Then mix in your desired features. E.g. In order for this project to be self-hosting it utilizes the embedded SQLite database, which we can configure along with configuration to enable popular Authentication providers and an RDBMS SQLite Auth Repository with:",-1),d=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix auth auth-db sqlite")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),h=n("p",null,[a("But if you also wanted to enable the new "),n("a",{href:"/auth-signin-with-apple"},"Sign in with Apple"),a(" and use SQL Server you'll instead run:")],-1),g=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix auth-ext auth-db sqlserver")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),y=s(`<p>You can view all DB and Auth options available by searching for available layered gist configurations by tag:</p><div class="language-bash"><pre><code>x mix <span class="token punctuation">[</span>db<span class="token punctuation">]</span>
x mix <span class="token punctuation">[</span>auth<span class="token punctuation">]</span>
</code></pre></div><p>Typically the only configuration that needs updating is your DB connection string in <a href="https://github.com/NetCoreApps/BookingsCrud/blob/main/Acme/Configure.Db.cs" target="_blank" rel="noopener noreferrer">Configure.Db.cs</a>, in this case it&#39;s changed to use a persistent SQLite DB:</p><div class="language-csharp"><pre><code>services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteConnectionFactory</span><span class="token punctuation">(</span>
    Configuration<span class="token punctuation">.</span><span class="token function">GetConnectionString</span><span class="token punctuation">(</span><span class="token string">&quot;DefaultConnection&quot;</span><span class="token punctuation">)</span> 
        <span class="token operator">??</span> <span class="token string">&quot;bookings.sqlite&quot;</span><span class="token punctuation">,</span>
    SqliteDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You&#39;ll also want to create RDBMS tables for any that doesn&#39;t exist:</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">CreateTableIfNotExists</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Booking<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="create-booking-crud-services" tabindex="-1">Create Booking CRUD Services <a class="header-anchor" href="#create-booking-crud-services" aria-hidden="true">#</a></h3><p>The beauty of AutoQuery is that we only need to focus on the definition of our C# POCO Data Models which OrmLite uses to create the RDBMS tables and AutoQuery reuses to generates the Typed API implementations enabling us to build full functional high-performance systems with rich querying capabilities that we can further enhance with declarative validation &amp; authorization permissions and rich integrations with the most popular platforms without needing to write any logic.</p><p>The <code>Booking</code> class defines the Data Model whilst the remaining AutoQuery &amp; CRUD Services define the typed inputs, outputs and behavior of each API available that Queries and Modifies the <code>Booking</code> table.</p><p>An added utilized feature are the <code>[AutoApply]</code> attributes which applies generic behavior to AutoQuery Services. The <code>Behavior.Audit*</code> behaviors below depend on the same property names used in the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/AuditBase.cs" target="_blank" rel="noopener noreferrer">AuditBase.cs</a> class where:</p><ul><li><code>Behavior.AuditQuery</code> - adds an <a href="/autoquery-crud#autofilter">Ensure AutoFilter</a> to filter out any deleted records</li><li><code>Behavior.AuditCreate</code> - populates the <code>Created*</code> and <code>Modified*</code> properties with the Authenticated user info</li><li><code>Behavior.AuditModify</code> - populates the <code>Modified*</code> properties with the Authenticated user info</li><li><code>Behavior.AuditSoftDelete</code> - changes the behavior of the default <strong>Real Delete</strong> to a <strong>Soft Delete</strong> by<br> populating the <code>Deleted*</code> properties</li></ul><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Booking</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AuditBase</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoIncrement</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">RoomType</span> RoomType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> RoomNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BookingStartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> BookingEndDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span></span> Cost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Notes <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span><span class="token punctuation">?</span></span> Cancelled <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RoomType</span>
<span class="token punctuation">{</span>
    Single<span class="token punctuation">,</span>
    Double<span class="token punctuation">,</span>
    Queen<span class="token punctuation">,</span>
    Twin<span class="token punctuation">,</span>
    Suite<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoApply</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Behavior<span class="token punctuation">.</span>AuditQuery<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QueryBookings</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">QueryDb<span class="token punctuation">&lt;</span>Booking<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> Ids <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateHasRole</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Employee&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoApply</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Behavior<span class="token punctuation">.</span>AuditCreate<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateBooking</span>
    <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICreateDb<span class="token punctuation">&lt;</span>Booking<span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">IReturn<span class="token punctuation">&lt;</span>IdResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiAllowableValues</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">RoomType</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">RoomType</span> RoomType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateGreaterThan</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> RoomNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BookingStartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> BookingEndDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateGreaterThan</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span></span> Cost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Notes <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateHasRole</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Employee&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoApply</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Behavior<span class="token punctuation">.</span>AuditModify<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateBooking</span>
    <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPatchDb<span class="token punctuation">&lt;</span>Booking<span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">IReturn<span class="token punctuation">&lt;</span>IdResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiAllowableValues</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">RoomType</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">RoomType<span class="token punctuation">?</span></span> RoomType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateGreaterThan</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> RoomNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> BookingStartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> BookingEndDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateGreaterThan</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span><span class="token punctuation">?</span></span> Cost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span><span class="token punctuation">?</span></span> Cancelled <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Notes <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidateHasRole</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Manager&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoApply</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Behavior<span class="token punctuation">.</span>AuditSoftDelete<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteBooking</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDeleteDb<span class="token punctuation">&lt;</span>Booking<span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">IReturnVoid</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="single-patch-partial-update-api" tabindex="-1">Single Patch Partial Update API <a class="header-anchor" href="#single-patch-partial-update-api" aria-hidden="true">#</a></h3><p>Previously the Edit UI required the full update <code>IUpdateDb&lt;T&gt;</code> API, but now supports falling back to using a partial <code>IPatchDb&lt;T&gt;</code> API (if exists) where it will instead <strong>only update the modified fields</strong> that have changed.</p><p>Ultimately this means for most cases you&#39;ll only need to provide a single <code>IPatchDb&lt;T&gt;</code> API to update your data model as it allows for the most flexible functionality of only updating any <strong>non-null</strong> values provided. This does mean that every property other than the primary key should either be a <strong>nullable reference or Value Type</strong> (i.e. using <code>Nullable</code>).</p><p>Using <code>IPatchDb&lt;T&gt;</code> Partial Updates are also beneficial in <a href="/autoquery-audit-log">crud audit logs</a> as they only capture the fields that have changed instead of full record <code>IUpdateDb&lt;T&gt;</code> updates.</p><p><code>IPatchDb&lt;T&gt;</code> APIs can also be used to reset fields to <code>null</code> by specifying them in a <code>Reset</code> DTO string collection Property or <strong>Request Param</strong>, e.g. <code>?reset=Field1,Field2</code>.</p><h2 id="manage-in-locode" tabindex="-1">Manage in Locode <a class="header-anchor" href="#manage-in-locode" aria-hidden="true">#</a></h2><p>After defining your AutoQuery APIs, start your App then you can use the built-in <a href="/locode/">Locode UI</a> to manage Bookings at:</p><h3 class="text-4xl text-center text-indigo-800 pb-3"><span class="text-gray-300">https://example.org</span>/locode/</h3><p><a href="/locode/"><img src="`+p+'" alt=""></a></p>',21),m=[l,i,u,r,k,d,h,g,y];function w(b,f,v,A,x,_){return e(),o("div",null,m)}var T=t(c,[["render",w]]);export{B as __pageData,T as default};
