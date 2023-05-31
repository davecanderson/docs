import{_ as n,o as a,c as s,a as e}from"./app.2aea72c0.js";const h='{"title":"Content Types","description":"","frontmatter":{"slug":"formats","title":"Content Types"},"headers":[{"level":3,"title":".NET Service Clients","slug":"net-service-clients"},{"level":2,"title":"HTTP API Formats","slug":"http-api-formats"},{"level":2,"title":"Default Content-Type","slug":"default-content-type"},{"level":2,"title":"Pre-defined Routes","slug":"pre-defined-routes"},{"level":3,"title":"Forcing a Content Type","slug":"forcing-a-content-type"},{"level":2,"title":"Registering a Custom Format","slug":"registering-a-custom-format"},{"level":3,"title":"XmlSerializerFormat Plugin","slug":"xmlserializerformat-plugin"},{"level":2,"title":"SOAP Endpoint","slug":"soap-endpoint"},{"level":2,"title":"MQ Endpoint","slug":"mq-endpoint"}],"relativePath":"formats.md"}',t={},o=e(`<p>ServiceStack supports the following formats:</p><ul><li><a href="https://github.com/ServiceStack/ServiceStack.Text" target="_blank" rel="noopener noreferrer">JSON</a></li><li><a href="https://docs.microsoft.com/en-us/dotnet/api/system.runtime.serialization.datacontractserializer" target="_blank" rel="noopener noreferrer">XML</a></li><li><a href="/csv-format">CSV</a></li><li><a href="/jsv-format">JSV</a> (hybrid CSV-style escaping + JSON format that is optimized for both size and speed)</li><li><a href="/soap-support">SOAP 1.1/1.2</a> (requires <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Framework)</li><li><a href="/messagepack-format">Message Pack</a></li><li><a href="/protobuf-format">Protocol Buffers</a></li><li>HTML <ul><li><a href="https://sharpscript.net/docs/script-pages" target="_blank" rel="noopener noreferrer">#Script Pages</a> (Simple, clean, fast alternative to Razor)</li><li><a href="https://razor.netcore.io" target="_blank" rel="noopener noreferrer">Razor</a> (Microsoft&#39;s Razor View Engine)</li><li><a href="/markdown-razor">Markdown Razor</a> (Razor-inspired syntax combined with markdown)</li><li><a href="/html5reportformat">HTML5 Report</a> (Human-friendly HTML auto-layout to quickly visualize data returned by services)</li></ul></li></ul><h3 id="net-service-clients" tabindex="-1">.NET Service Clients <a class="header-anchor" href="#net-service-clients" aria-hidden="true">#</a></h3><p>The different Content Types can be easily consumed using <a href="/csharp-client#httpwebrequest-service-clients">ServiceStack&#39;s Typed Generic Service Clients</a>.</p><h2 id="http-api-formats" tabindex="-1">HTTP API Formats <a class="header-anchor" href="#http-api-formats" aria-hidden="true">#</a></h2><p>ServiceStack Services supports a number of <a href="/routing#content-negotiation">Content Negotiation</a> options where you can define which format should be returned by adding a <code>.{format}</code> extension to your <code>/route.{format}</code>. Built-in Formats include:</p><ul><li><code>.json</code></li><li><code>.xml</code></li><li><code>.jsv</code></li><li><code>.csv</code></li><li><code>.html</code></li></ul><p>Example: <a href="http://web.web-templates.io/hello/World.json" target="_blank" rel="noopener noreferrer">http://web.web-templates.io/hello/World.json</a></p><p>Or by appending <code>?format={format}</code> to the end of the URL:</p><ul><li><code>?format=json</code></li><li><code>?format=xml</code></li><li><code>?format=jsv</code></li><li><code>?format=csv</code></li><li><code>?format=html</code></li></ul><p>Example: <a href="http://web.web-templates.io/hello/World?format=json" target="_blank" rel="noopener noreferrer">http://web.web-templates.io/hello/World?format=json</a></p><p>Alternatively ServiceStack also recognizes which format should be used with the <code>Accept</code> <a href="http://en.wikipedia.org/wiki/List_of_HTTP_header_fields" target="_blank" rel="noopener noreferrer">http header</a>:</p><ul><li><code>Accept: application/json</code></li><li><code>Accept: application/xml</code></li></ul><h2 id="default-content-type" tabindex="-1">Default Content-Type <a class="header-anchor" href="#default-content-type" aria-hidden="true">#</a></h2><p>The recommended way to request a specific content type is to add it to the Accept HTTP Request Header, e.g:</p><div class="language-"><pre><code>Accept: application/json
</code></pre></div><p>Alternatively you can specify to use a specific Content-Type as the default Content Type in your AppHost with:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
     DefaultContentType <span class="token operator">=</span> MimeTypes<span class="token punctuation">.</span>Json 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Sometimes when calling web services from a web browser they&#39;ll ask for <code>Accept: text/html</code> and not JSON which by contract ServiceStack obliges by returning back HTML if it is enabled.</p><p>To ensure JSON is always returned you can disable the HTML support with:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
    EnableFeatures <span class="token operator">=</span> Feature<span class="token punctuation">.</span>All<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>Feature<span class="token punctuation">.</span>Html<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pre-defined-routes" tabindex="-1">Pre-defined Routes <a class="header-anchor" href="#pre-defined-routes" aria-hidden="true">#</a></h2><pre><code>/[xml|json|html|jsv|csv]/[reply|oneway]/[servicename]
</code></pre><p>Examples:</p><ul><li>/json/reply/Hello (JSON)</li><li>/xml/oneway/SendEmail (XML)</li></ul><h3 id="forcing-a-content-type" tabindex="-1">Forcing a Content Type <a class="header-anchor" href="#forcing-a-content-type" aria-hidden="true">#</a></h3><p>Whilst ServiceStack Services are typically available on any endpoint and format, there are times when you only want adhoc Services available in a particular format, for instance you may only want the View Models for your dynamic Web Views available in HTML. This can now be easily enabled with the new <code>[HtmlOnly]</code> Request Filter Attribute, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HtmlOnly</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HtmlServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyViewModel</span> <span class="token punctuation">{</span> <span class="token range operator">..</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This feature is also available for other built-in Content Types: <code>[JsonOnly]</code>, <code>[XmlOnly]</code>, <code>[JsvOnly]</code> and <code>[CsvOnly]</code>.</p><h2 id="registering-a-custom-format" tabindex="-1">Registering a Custom Format <a class="header-anchor" href="#registering-a-custom-format" aria-hidden="true">#</a></h2><p>Registering a custom format is done by registering the Format&#39;s Content-Type with to your AppHost&#39;s <code>ContentTypes</code> API, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Register the &#39;text/csv&#39; content-type format</span>
<span class="token comment">//Note: Format is inferred from the last part of the content-type, e.g. &#39;csv&#39;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CsvFormat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPlugin</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        appHost<span class="token punctuation">.</span>ContentTypes<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>MimeTypes<span class="token punctuation">.</span>Csv<span class="token punctuation">,</span>
            SerializeToStream<span class="token punctuation">,</span> 
            CsvSerializer<span class="token punctuation">.</span>DeserializeFromStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//ResponseFilter to add &#39;Content-Disposition&#39; header for browsers to open in Spreadsheet</span>
        appHost<span class="token punctuation">.</span>GlobalResponseFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> dto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>ResponseContentType <span class="token operator">==</span> MimeTypes<span class="token punctuation">.</span>Csv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> fileName <span class="token operator">=</span> req<span class="token punctuation">.</span>OperationName <span class="token operator">+</span> <span class="token string">&quot;.csv&quot;</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span>HttpHeaders<span class="token punctuation">.</span>ContentDisposition<span class="token punctuation">,</span> 
                    <span class="token interpolation-string"><span class="token string">$&quot;attachment;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">HttpExt<span class="token punctuation">.</span><span class="token function">GetDispositionFileName</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SerializeToStream</span><span class="token punctuation">(</span><span class="token class-name">IRequest</span> req<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">object</span></span> request<span class="token punctuation">,</span> <span class="token class-name">Stream</span> stream<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        CsvSerializer<span class="token punctuation">.</span><span class="token function">SerializeToStream</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>We recommend encapsulating Custom Formats registrations into a <a href="/plugins">Plugin</a> as done with the built-in <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Formats/CsvFormat.cs" target="_blank" rel="noopener noreferrer">CsvFormat</a> which is added by default:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CsvFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//added by default</span>
</code></pre></div><p>Which makes it easy to register, detect and remove. E.g. to remove built-in support for CSV you can just remove it from the <code>Plugins</code> collection:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x <span class="token keyword">is</span> <span class="token class-name">CsvFormat</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="xmlserializerformat-plugin" tabindex="-1">XmlSerializerFormat Plugin <a class="header-anchor" href="#xmlserializerformat-plugin" aria-hidden="true">#</a></h3><p>The <code>XmlSerializerFormat</code> plugin changes ServiceStack to serialize XML with .NET <code>XmlSerializer</code> instead of .NET XML <code>DataContractSerializer</code>:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlSerializerFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The implementation provides a typical example of how to register or override different Content-Types in ServiceStack:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlSerializerFormat</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPlugin</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Serialize</span><span class="token punctuation">(</span><span class="token class-name">IRequest</span> req<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">object</span></span> response<span class="token punctuation">,</span> <span class="token class-name">Stream</span> stream<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> serializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlSerializer</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serializer<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>stream<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Deserialize</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">,</span> <span class="token class-name">Stream</span> stream<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> serializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlSerializer</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> obj <span class="token operator">=</span> <span class="token punctuation">(</span>Type<span class="token punctuation">)</span> serializer<span class="token punctuation">.</span><span class="token function">Deserialize</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        appHost<span class="token punctuation">.</span>ContentTypes<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>MimeTypes<span class="token punctuation">.</span>Xml<span class="token punctuation">,</span> Serialize<span class="token punctuation">,</span> Deserialize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="soap-endpoint" tabindex="-1"><a href="/soap-support">SOAP Endpoint</a> <a class="header-anchor" href="#soap-endpoint" aria-hidden="true">#</a></h2><p>Consume ServiceStack Services via <a href="/soap-support">SOAP</a> using WCF Add Service Reference or <a href="/csharp-client#httpwebrequest-service-clients">ServiceStack generic SOAP Clients</a>.</p><h2 id="mq-endpoint" tabindex="-1"><a href="/messaging">MQ Endpoint</a> <a class="header-anchor" href="#mq-endpoint" aria-hidden="true">#</a></h2><p>Consume ServiceStack Services via <a href="/messaging">Message Queue</a>.</p>`,45),p=[o];function c(i,l,r,u,k,d){return a(),s("div",null,p)}var f=n(t,[["render",c]]);export{h as __pageData,f as default};
