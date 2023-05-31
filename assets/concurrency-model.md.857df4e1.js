import{_ as e,o as t,c as s,a}from"./app.2aea72c0.js";const g='{"title":"ASP.NET Host (AppHostBase)","description":"","frontmatter":{"slug":"concurrency-model"},"headers":[{"level":3,"title":"ASP.NET Host (AppHostBase)","slug":"asp-net-host-apphostbase"},{"level":3,"title":"HttpListener Self-Host (AppSelfHostBase)","slug":"httplistener-self-host-appselfhostbase"},{"level":3,"title":"HttpListener Pool Self-Host (AppHostHttpListenerPoolBase)","slug":"httplistener-pool-self-host-apphosthttplistenerpoolbase"},{"level":3,"title":"HttpListener Single Self-Host (AppHostHttpListenerBase)","slug":"httplistener-single-self-host-apphosthttplistenerbase"},{"level":3,"title":"RedisMQ Host (RedisMqServer)","slug":"redismq-host-redismqserver"}],"relativePath":"concurrency-model.md"}',n={},o=a(`<p>ServiceStack doesn&#39;t have a configurable concurrency model per AppHost, it is dependent upon the AppHost that your ServiceStack services are hosted with:</p><h3 id="asp-net-host-apphostbase" tabindex="-1"><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Host (AppHostBase) <a class="header-anchor" href="#asp-net-host-apphostbase" aria-hidden="true">#</a></h3><p>For <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> web hosts, ServiceStack <strong>doesn&#39;t create any new threads</strong> itself, the requests are simply handled on the same IIS/Nginx/etc <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> HTTP WebWorker that handles the request.</p><h3 id="httplistener-self-host-appselfhostbase" tabindex="-1">HttpListener Self-Host (AppSelfHostBase) <a class="header-anchor" href="#httplistener-self-host-appselfhostbase" aria-hidden="true">#</a></h3><p>The default Self-Host HttpListener option for ServiceStack that executes requests on the <a href="http://www.codeproject.com/Articles/7933/Smart-Thread-Pool" target="_blank" rel="noopener noreferrer">SmartThreadPool</a> managed ThreadPool. By default it executes on <code>Environment.ProcessorCount * 2</code> or maximum of 16 worker threads. See this chart for the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/release-notes.md#new-much-faster-self-host" target="_blank" rel="noopener noreferrer">performance of the different ServiceStack Hosts</a>.</p><h3 id="httplistener-pool-self-host-apphosthttplistenerpoolbase" tabindex="-1">HttpListener Pool Self-Host (AppHostHttpListenerPoolBase) <a class="header-anchor" href="#httplistener-pool-self-host-apphosthttplistenerpoolbase" aria-hidden="true">#</a></h3><p>This is another Self-Host HttpListener option for ServiceStack that uses its own managed ThreadPool to execute requests on (free-ing up the HttpListener async callback thread). The default poolSize of the ThreadPool is <strong>500</strong> threads, though this is configurable in the <code>AppHostHttpListenerPoolBase(serviceName, handlerPath, poolSize, assembliesWithServices)</code> constructor.</p><h3 id="httplistener-single-self-host-apphosthttplistenerbase" tabindex="-1">HttpListener Single Self-Host (AppHostHttpListenerBase) <a class="header-anchor" href="#httplistener-single-self-host-apphosthttplistenerbase" aria-hidden="true">#</a></h3><p>ServiceStack only creates a new thread on <strong>Startup</strong> when you call <code>new AppHost().Start(url)</code>. There are no new threads created at run-time, i.e. the request is handled on the HttpListener async callback thread.</p><h3 id="redismq-host-redismqserver" tabindex="-1">RedisMQ Host (RedisMqServer) <a class="header-anchor" href="#redismq-host-redismqserver" aria-hidden="true">#</a></h3><p>A good option for managing long-running tasks is to delegate requests to a <a href="/redis-mq">Redis MQ Host</a> which is a light-weight MQ Server allowing you to defer and process requests in managed background threads. By default the RedisMqServer spawns a single background thread for each Message type (i.e. Request), though this is configurable on start-up, e.g: in the example below <strong>2 background threads</strong> are used to handle <code>PostTwitter</code> requests, whilst only 1 background thread each is used to process <code>CallFacebook</code> and <code>EmailMessage</code> requests:</p><div class="language-csharp"><pre><code>mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>PostTwitter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ServiceController<span class="token punctuation">.</span>ExecuteMessage<span class="token punctuation">,</span> <span class="token named-parameter punctuation">noOfThreads</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CallFacebook<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ServiceController<span class="token punctuation">.</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EmailMessage<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ServiceController<span class="token punctuation">.</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,12),r=[o];function p(l,c,i,h,d,u){return t(),s("div",null,r)}var k=e(n,[["render",p]]);export{g as __pageData,k as default};
