import{_ as s,o as n,c as a,a as e}from"./app.2aea72c0.js";const m='{"title":"Auto Batched Requests","description":"","frontmatter":{"slug":"auto-batched-requests","title":"Auto Batched Requests"},"headers":[{"level":2,"title":"All Services support Batching","slug":"all-services-support-batching"},{"level":2,"title":"Request Execution Flow","slug":"request-execution-flow"},{"level":2,"title":"Custom Batched Requests Implementations","slug":"custom-batched-requests-implementations"},{"level":2,"title":"Defining a Request DTO to accept a collection of Types","slug":"defining-a-request-dto-to-accept-a-collection-of-types"},{"level":2,"title":"Auto Batch Index","slug":"auto-batch-index"}],"relativePath":"auto-batched-requests.md"}',t={},o=e(`<p>One of the best ways to improve performance, efficiency and reduce latency is to minimize the number of network requests required, which is one of the reasons we&#39;ve always encouraged <a href="/why-servicestack#servicestack-encourages-development-of-message-style-re-usable-and-batch-full-web-services">Coarse-grained API designs</a> - which also lend themselves to better encapsulation and re-use.</p><p>A common use-case that can be improved are clients making multiple requests to the same API, but due to the lack of a better alternative batched API or control over the server implementation, will default to making multiple N+1 web service requests.</p><h2 id="all-services-support-batching" tabindex="-1">All Services support Batching <a class="header-anchor" href="#all-services-support-batching" aria-hidden="true">#</a></h2><p>Thanks to it&#39;s <a href="/advantages-of-message-based-web-services">message-based design</a>, ServiceStack is able to enable high-level generic functionality like Request Batching which is now implicitly available for all Services, without any additional effort - where multiple requests of the same type can be sent together in a single HTTP Request.</p><p>This is enabled in all <a href="/csharp-client">.NET Service Clients</a> via the new <code>SendAll()</code> and <code>SendAllOneWay()</code> API&#39;s, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>BaseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> requests <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;Foo&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;Bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Request</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;Baz&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">List<span class="token punctuation">&lt;</span>Response<span class="token punctuation">&gt;</span></span> responses <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">SendAll</span><span class="token punctuation">(</span>requests<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The API works as you would expect where multiple requests can be sent together and the Service Client will return a list of all responses in the same order as the requests were sent. ServiceStack also adds the <code>X-AutoBatch-Completed</code> HTTP Response Header containing the <strong>number</strong> of Requests that were executed. E.g. if one of the Requests threw an Exception it will contain the number of requests that were processed before the Exception was thrown, which short-circuits processing the remaining Auto Batched requests and returns a populated <a href="/error-handling">structured Error Response</a> of the Exception.</p><p>And on the back-end, your Services are none the wiser, remaining focused on handling a single Request DTO. In the case below the Service does some work then stores the response in Redis before returning it:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Redis<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="request-execution-flow" tabindex="-1">Request Execution Flow <a class="header-anchor" href="#request-execution-flow" aria-hidden="true">#</a></h2><p>From the Service&#39;s point of view nothing changes. Request DTO&#39;s still get executed one at a time, through all existing filters just as if they we&#39;re sent on their own. They&#39;re just delivered together within a single HTTP Request, in this case POST&#39;ed as JSON to the <code>/json/reply/Request[]</code> <a href="/routing#pre-defined-routes">pre-defined route</a>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/auto-batched-requests.png" alt=""></p><h2 id="custom-batched-requests-implementations" tabindex="-1">Custom Batched Requests Implementations <a class="header-anchor" href="#custom-batched-requests-implementations" aria-hidden="true">#</a></h2><p>If a client was previously calling the same API 100 times, the existing overhead of 100 HTTP Requests would be reduced to just <strong>1 HTTP Request</strong> when batched. Although the above Service would still be calling Redis 100 times to store each Response.</p><p>If later this API has become really hot and you want to improve it even further, you can later add a custom implementation that accepts a <code>Request[]</code> and it will only get called once, with access to all the Request DTO&#39;s together. In this case we can use a custom implementation and take advantage of Redis&#39;s own batched API&#39;s and reduce this further to 1 Redis operation:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Redis<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request<span class="token punctuation">[</span><span class="token punctuation">]</span></span> requests<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> responses <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>DoWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Redis<span class="token punctuation">.</span><span class="token function">StoreAll</span><span class="token punctuation">(</span>responses<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> responses<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>So with this custom implementation we&#39;ve gone from <strong>100 HTTP Requests + 100 Redis Operations</strong> to <strong>1 HTTP Request + 1 Redis Operation</strong>.</p><p>Another scenario where you may consider using a <strong>Custom Batched Implementation</strong> is if you wanted to execute all requests within a single RDBMS transaction, which with <a href="https://github.com/ServiceStack/ServiceStack.OrmLite" target="_blank" rel="noopener noreferrer">OrmLite</a> would look something like:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token function">DoWork</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request<span class="token punctuation">[</span><span class="token punctuation">]</span></span> requests<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> trans <span class="token operator">=</span> Db<span class="token punctuation">.</span><span class="token function">OpenTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> responses <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token function">Any</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	

            trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> responses<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Just like with normal Batched Requests, Custom Batched implementations are still executed one at a time through all request/response filters, taking advantage of any existing logic/validation.</p><h2 id="defining-a-request-dto-to-accept-a-collection-of-types" tabindex="-1">Defining a Request DTO to accept a collection of Types <a class="header-anchor" href="#defining-a-request-dto-to-accept-a-collection-of-types" aria-hidden="true">#</a></h2><p>If you instead only wanted multiple Requests to be treated as a single Request through the entire pipeline you can create a new Request DTO that inherits from <code>List&lt;TRequest&gt;</code> which then gets treated as a normal Request DTO e, g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Requests</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">List<span class="token punctuation">&lt;</span>Request<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
	<span class="token range operator">..</span><span class="token punctuation">.</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Requests</span> requests<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> responses <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>DoWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
        Redis<span class="token punctuation">.</span><span class="token function">StoreAll</span><span class="token punctuation">(</span>responses<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> responses<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>More examples of Auto Batched Requests and its behavior can be found in the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.Endpoints.Tests/ReplyAllTests.cs" target="_blank" rel="noopener noreferrer">ReplyAllTests suite</a>.</p><h2 id="auto-batch-index" tabindex="-1">Auto Batch Index <a class="header-anchor" href="#auto-batch-index" aria-hidden="true">#</a></h2><p>The current index of the Auto Batched Request being processed is now being maintained in <code>IRequest.Items[Keywords.AutoBatchIndex]</code>.</p><p>In Error Responses the index of the request that failed is now being populated in your Response DTO&#39;s <code>ResponseStatus.Meta[&quot;AutoBatchIndex&quot;]</code>.</p><p>To also maintain the active <code>AutoBatchIndex</code> in <a href="#custom-batched-requests-implementations">Custom Batched Requests Implementations</a> you can use the <code>IRequest.EachRequest()</code> extension method, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">GetCustomAutoBatchIndex<span class="token punctuation">[</span><span class="token punctuation">]</span></span> requests<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> responses <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>GetAutoBatchIndexResponse<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Request<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">EachRequest</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GetCustomAutoBatchIndex<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>dto <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        responses<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">Any</span><span class="token punctuation">(</span>dto<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> responses<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,29),p=[o];function c(u,l,i,r,k,d){return n(),a("div",null,p)}var g=s(t,[["render",c]]);export{m as __pageData,g as default};
