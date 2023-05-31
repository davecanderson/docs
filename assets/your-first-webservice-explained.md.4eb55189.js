import{_ as s,o as n,c as a,a as e}from"./app.2aea72c0.js";const h='{"title":"Your first Web Service Explained","description":"","frontmatter":{"slug":"your-first-webservice-explained","title":"Your first Web Service Explained"},"headers":[{"level":2,"title":"Calling Web Services","slug":"calling-web-services"},{"level":3,"title":"Registering Custom Routes","slug":"registering-custom-routes"},{"level":3,"title":"Routing Tips","slug":"routing-tips"}],"relativePath":"your-first-webservice-explained.md"}',t={},p=e(`<p>Let&#39;s look a bit deeper into the <a href="/create-your-first-webservice#how-does-it-work">Hello World service</a> you created:</p><p>As you have seen, the convention for response DTO is <code>RequestDTO</code> and <code>RequestDTOResponse</code>. <strong>Note, request and response DTO should be in the same namespace if you want ServiceStack to recognize the DTO pair</strong>.</p><p>To support automatic exception handling, you also need to add a <code>ResponseStatus</code> property to the response DTO:</p><div class="language-csharp"><pre><code><span class="token comment">// Request DTO</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Response DTO (follows naming convention)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloResponse</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">ResponseStatus</span> ResponseStatus <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Automatic exception handling</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Services are implemented in a class that either inherits from the <code>Service</code> base class or implements the <code>IService</code> empty marker interface. Inheriting from the convenient <code>Service</code> base class provides easy access to the most common functionality.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above service can be called with <strong>Any</strong> HTTP Verb (e.g. GET, POST,..) from any endpoint or format (e.g. JSON, XML, etc). You can also choose to handle a specific Verb by changing the method name to suit.</p><p>E.g. you can limit the Service to only handle HTTP <strong>GET</strong> requests by using the <code>Get</code> method:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">request<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="calling-web-services" tabindex="-1">Calling Web Services <a class="header-anchor" href="#calling-web-services" aria-hidden="true">#</a></h2><p>Thanks to the above <code>IReturn&lt;T&gt;</code> interface marker you&#39;ll be able to use the terse, typed Service Client APIs, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>BaseUri<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">HelloResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>Request DTOs that don&#39;t implement <code>IReturn&lt;T&gt;</code> will need to explicitly specify the Response DTO on their call-site, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name">HelloResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">HelloResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/hello/World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>Alternatively you could use a general purpose HTTP Client like <a href="https://docs.servicestack.net/http-utils" target="_blank" rel="noopener noreferrer">HTTP Utils</a>:</p><div class="language-csharp"><pre><code><span class="token class-name">HelloResponse</span> response <span class="token operator">=</span> <span class="token string">&quot;http://base.url/hello/World&quot;</span>
    <span class="token punctuation">.</span><span class="token function">GetJsonFromUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>We highly recommend annotating Request DTO&#39;s with the above <code>IReturn&lt;T&gt;</code> marker as it enables a generic typed API without clients having to know and specify the Response at each call-site, which would be invalidated and need to be manually updated if the Service Response Type changes.</p><p>More details on the Service Clients is available on the <a href="/csharp-client">C#/.NET Service Clients page</a>.</p><h3 id="registering-custom-routes" tabindex="-1">Registering Custom Routes <a class="header-anchor" href="#registering-custom-routes" aria-hidden="true">#</a></h3><p>If no routes are defined the .NET Service Clients will use the <a href="/routing#pre-defined-routes">pre-defined Routes</a>. You can annotate your Request DTO with the <code>[Route]</code> attribute to register additional Custom Routes, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Request DTO</span>
<span class="token punctuation">[</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>HelloResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The .NET ServiceClients will then use the best matching Route based on the populated properties on the Request DTO.</p><h3 id="routing-tips" tabindex="-1">Routing Tips <a class="header-anchor" href="#routing-tips" aria-hidden="true">#</a></h3><p>No <strong>?queryString</strong> or POST Form Data should be included in the route as ServiceStack automatically populates Request DTOs with all matching params, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>Matches both <code>/hello</code> and <code>/hello?name=World</code> with the latter populating the <code>Name</code> Request DTO <strong>public property</strong>.</p><p>When the route includes a variable, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>It only matches:</p><div class="language-"><pre><code>/hello/name
</code></pre></div><p>Whereas using a wildcard:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name*}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>Matches all routes:</p><div class="language-"><pre><code>/hello
/hello/name
/hello/my/name/is/ServiceStack 
</code></pre></div><p>More details about Routing is available on the <a href="/routing">Routing page</a>.</p>`,35),o=[p];function c(l,i,u,r,k,d){return n(),a("div",null,o)}var m=s(t,[["render",c]]);export{h as __pageData,m as default};
