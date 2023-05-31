import{_ as a,o as e,c as t,a as s,d as n}from"./app.2aea72c0.js";var o="/assets/miniprofiler-hello.fb6c5abe.png",p="/assets/miniprofiler-simpledb.5f0c8a66.png",c="/assets/miniprofiler-simpledb-n1.ebfff655.png",i="/assets/miniprofiler-simpledb-n1-sql.a7ebb5b4.png";const _='{"title":"Built-in Mini Profiler","description":"","frontmatter":{"slug":"built-in-profiling","title":"Built-in Mini Profiler"},"headers":[{"level":3,"title":"Using the MVC Mini Profiler","slug":"using-the-mvc-mini-profiler"},{"level":2,"title":"SQL Profiling","slug":"sql-profiling"},{"level":2,"title":"View executed SQL","slug":"view-executed-sql"}],"relativePath":"built-in-profiling.md"}',r={},l=s('<p>ServiceStack&#39;s <a href="/html5reportformat">HTML5 JSON Report Format</a> also includes the <a href="https://github.com/MiniProfiler/dotnet" target="_blank" rel="noopener noreferrer">Mvc Mini Profiler</a> - by <a href="https://twitter.com/jarrod_dixon" target="_blank" rel="noopener noreferrer">@jarrod_dixon</a> and <a href="https://twitter.com/samsaffron" target="_blank" rel="noopener noreferrer">@samsaffron</a>. It&#39;s the same profiler used to profile and help speed up sites like <a href="http://www.stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow</a> and more recently the much faster <a href="http://nuget.org" target="_blank" rel="noopener noreferrer">NuGet v2.0</a> website.</p><p>The MVC Mini Profiler plugin is only available for classic <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Framework Web Apps, for .NET Core Apps you can use the official <a href="https://www.nuget.org/packages/MiniProfiler.AspNetCore.Mvc" target="_blank" rel="noopener noreferrer">MiniProfiler.AspNetCore.Mvc</a> NuGet package, please see this community post for details:</p><ul><li><a href="http://inayearorso.io/2018/04/18/servicestack-miniprofiler-dotnetcore-angular2/" target="_blank" rel="noopener noreferrer">Servicestack + Miniprofiler + .NET Core + Angular</a></li></ul><h3 id="using-the-mvc-mini-profiler" tabindex="-1">Using the MVC Mini Profiler <a class="header-anchor" href="#using-the-mvc-mini-profiler" aria-hidden="true">#</a></h3><p>The built-in Mini Profiler is available in ServiceStack&#39;s .NET Framework features package:</p>',5),u=n("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-700"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.NetFramework" Version="6.*" />')])])]),n("div",{class:"flex"},[n("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),k=s(`<p>Just like the <a href="https://github.com/MiniProfiler/dotnet" target="_blank" rel="noopener noreferrer">Normal Mvc Mini Profiler</a> you can enable it by registering the <code>MiniProfilerFeature</code> Plugin:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MiniProfilerFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><p>Then starting it in your Global.asax, here&#39;s how to enable it for local requests:</p><div class="language-csharp"><pre><code><span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_BeginRequest</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> src<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Request<span class="token punctuation">.</span>IsLocal<span class="token punctuation">)</span>
        Profiler<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_EndRequest</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> src<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Profiler<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now if you also have ServiceStack Razor views you can enable the profiler by putting this into your _Layout.cshtml page:</p><div class="language-csharp"><pre><code>@ServiceStack<span class="token punctuation">.</span>MiniProfiler<span class="token punctuation">.</span>Profiler<span class="token punctuation">.</span><span class="token function">RenderIncludes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsRaw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><p>That&#39;s it! Now every time you view a web service or a razor page in your browser (locally) you&#39;ll see a profiler view of your service broken down in different stages:</p><p><img src="`+o+`" alt=""></p><p>By default you get to see how long it took ServiceStack to de-serialize your request, run any Request / Response Filters and more importantly how long it took to <strong>Execute</strong> your service.</p><h2 id="sql-profiling" tabindex="-1">SQL Profiling <a class="header-anchor" href="#sql-profiling" aria-hidden="true">#</a></h2><p>The profiler includes special support for SQL Profiling that can easily be enabled for OrmLite and Dapper by getting it to use a Profiled Connection using a ConnectionFilter:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MiniProfilerFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Register before using ProfiledDbConnection</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>Container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteConnectionFactory</span><span class="token punctuation">(</span>
        <span class="token string">&quot;~/App_Data/db.sqlite&quot;</span><span class="token punctuation">.</span><span class="token function">MapHostAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> SqliteDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ConnectionFilter <span class="token operator">=</span> x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProfiledDbConnection</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Profiler<span class="token punctuation">.</span>Current<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Refer to the <a href="https://github.com/MiniProfiler/dotnet" target="_blank" rel="noopener noreferrer">Main MVC MiniProfiler home page</a> for instructions on how to configure profiling for Linq2Sql and EntityFramework.</p><p>It&#39;s also trivial to add custom steps enabling even finer-grained profiling for your services. Here&#39;s a <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.IntegrationTests/Services/ProfilerService.cs" target="_blank" rel="noopener noreferrer">simple web service DB example</a> returning a list of Movies using both a simple DB query and a dreaded N+1 query.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MiniProfiler</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MiniProfilerService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MiniProfiler</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> profiler <span class="token operator">=</span> Profiler<span class="token punctuation">.</span>Current<span class="token punctuation">;</span>

        <span class="token keyword">using</span> <span class="token punctuation">(</span>profiler<span class="token punctuation">.</span><span class="token function">Step</span><span class="token punctuation">(</span><span class="token string">&quot;MiniProfiler Service&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>Type <span class="token operator">==</span> <span class="token string">&quot;n1&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">using</span> <span class="token punctuation">(</span>profiler<span class="token punctuation">.</span><span class="token function">Step</span><span class="token punctuation">(</span><span class="token string">&quot;N + 1 query&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Movie<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> movie <span class="token keyword">in</span> Db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Movie<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        results<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">QueryById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Movie<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">using</span> <span class="token punctuation">(</span>profiler<span class="token punctuation">.</span><span class="token function">Step</span><span class="token punctuation">(</span><span class="token string">&quot;Simple Select all&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> Db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Movie<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="view-executed-sql" tabindex="-1">View executed SQL <a class="header-anchor" href="#view-executed-sql" aria-hidden="true">#</a></h2><p>Calling the above service normally provides the following Profiler output:</p><p><img src="`+p+'" alt=""></p><p>Whilst calling the service with the <strong>n1</strong> param yields the following warning:</p><p><img src="'+c+'" alt=""></p><p>In both cases you see the actual SQL statements performed by clicking the <strong>SQL</strong> link. The N+1 query provides shows the following:</p><p><img src="'+i+'" alt=""></p><p>Notice the special attention the MVC MiniProfiler team put into identifying <strong>Duplicate</strong> queries - Thanks Guys!</p><h1 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h1><ul><li><a href="http://tunurgitr.blogspot.com/2012/04/miniprofiler-for-ajax-calls-with.html" target="_blank" rel="noopener noreferrer">MiniProfiler for AJAX calls with ServiceStack.Net</a> by Jeff Harris</li></ul>',25),d=[l,u,k];function f(g,h,m,v,w,y){return e(),t("div",null,d)}var S=a(r,[["render",f]]);export{_ as __pageData,S as default};
