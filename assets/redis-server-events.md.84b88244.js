import{_ as s,o as a,c as t,a as n,d as e}from"./app.2aea72c0.js";const b='{"title":"Redis ServerEvents","description":"","frontmatter":{"title":"Redis ServerEvents"},"headers":[{"level":2,"title":"Enable Redis ServerEvents","slug":"enable-redis-serverevents"},{"level":3,"title":"Cross-platform Memory and Redis ServerEvent Enabled Chat.exe","slug":"cross-platform-memory-and-redis-serverevent-enabled-chat-exe"},{"level":3,"title":"Chat.zip (1.2MB)","slug":"chat-zip-1-2mb"},{"level":3,"title":"Redis ServerEvents Chat Usage","slug":"redis-serverevents-chat-usage"}],"relativePath":"redis-server-events.md"}',r={},o=n(`<p>One limitation the default <code>MemoryServerEvents</code> implementation has is being limited for use within a single App Server where all client connections are maintained. This is no longer a limitation with the new <strong>Redis ServerEvents back-end</strong> which utilizes a distributed redis-server back-end to provide a scale-out option capable of serving fan-out/load-balanced App Servers. If you&#39;re familiar with SignalR, this is akin to <a href="http://www.asp.net/signalr/overview/signalr-20/performance-and-scaling/scaleout-with-redis" target="_blank" rel="noopener noreferrer">SignalR&#39;s scaleout with Redis back-end</a>.</p><p><code>RedisServerEvents</code> is a drop-in replacement for the built-in <code>MemoryServerEvents</code> that&#39;s effectively a transparent implementation detail, invisible to Server or Client API&#39;s where both implementations even <a href="https://github.com/ServiceStack/ServiceStack/blob/b9eb34eb80ff64fa1171d2f7f29ef359c3580eed/tests/ServiceStack.WebHost.Endpoints.Tests/ServerEventTests.cs#L169-L189" target="_blank" rel="noopener noreferrer">share the same integration Tests</a>.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/gap/Chat/redis-scaleout.png" alt=""></p><h2 id="enable-redis-serverevents" tabindex="-1">Enable Redis ServerEvents <a class="header-anchor" href="#enable-redis-serverevents" aria-hidden="true">#</a></h2><p>As a drop-in replacement it can easily be configured with just a few lines of code, as seen in the updated Chat App which can run on either <a href="https://github.com/ServiceStackApps/Chat/blob/326617e88272d7cc0a8b7513272cf055378957e2/src/Chat/Global.asax.cs#L46-L54" target="_blank" rel="noopener noreferrer">Memory or Redis ServerEvents providers</a>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> redisHost <span class="token operator">=</span> AppSettings<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;RedisHost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>redisHost <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IRedisClientsManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisManagerPool</span><span class="token punctuation">(</span>redisHost<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IServerEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> 
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisServerEvents</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IRedisClientsManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IServerEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above configuration will use Redis ServerEvents if there&#39;s a <code>RedisHost</code> <strong>appSetting</strong> in Chat&#39;s <a href="https://github.com/ServiceStackApps/Chat/blob/326617e88272d7cc0a8b7513272cf055378957e2/src/Chat/Web.config#L21" target="_blank" rel="noopener noreferrer">Web.config</a>:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RedisHost<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>localhost:6379<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>RedisServerEvents is in the <a href="http://www.nuget.org/packages/ServiceStack.Server" target="_blank" rel="noopener noreferrer">ServiceStack.Server</a> NuGet Package:</p>`,9),i=e("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-700"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[e("p",null,[e("code",null,'<PackageReference Include="ServiceStack.Redis" Version="6.*" />')])])]),e("div",{class:"flex"},[e("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),c=n(`<h3 id="cross-platform-memory-and-redis-serverevent-enabled-chat-exe" tabindex="-1">Cross-platform Memory and Redis ServerEvent Enabled Chat.exe <a class="header-anchor" href="#cross-platform-memory-and-redis-serverevent-enabled-chat-exe" aria-hidden="true">#</a></h3><p>To showcase Redis ServerEvents in action, we&#39;ve prepared a stand-alone <a href="https://github.com/ServiceStack/ServiceStack.Gap" target="_blank" rel="noopener noreferrer">ServiceStack.Gap</a> version of <a href="http://chat.netcore.io" target="_blank" rel="noopener noreferrer">Chat</a> compiled down into a single <strong>Chat.exe</strong> that can run on either Windows and OSX with Mono which can be downloaded from:</p><h3 id="chat-zip-1-2mb" tabindex="-1"><a href="https://github.com/ServiceStack/ServiceStack.Gap/raw/master/deploy/Chat.zip" target="_blank" rel="noopener noreferrer">Chat.zip</a> (1.2MB) <a class="header-anchor" href="#chat-zip-1-2mb" aria-hidden="true">#</a></h3><p><a href="https://github.com/ServiceStack/ServiceStack.Gap/raw/master/deploy/Chat.zip" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/redis-server-events.gif" alt=""></a></p><h3 id="redis-serverevents-chat-usage" tabindex="-1">Redis ServerEvents Chat Usage <a class="header-anchor" href="#redis-serverevents-chat-usage" aria-hidden="true">#</a></h3><p>Running <strong>Chat.exe</strong> without any arguments will run Chat using the default <strong>Memory ServerEvents</strong>. This can be changed to use <strong>Redis ServerEvents</strong> by <a href="https://github.com/ServiceStack/ServiceStack.Gap/blob/master/src/Chat/Chat/appsettings.txt#L5" target="_blank" rel="noopener noreferrer">un-commenting this line in appsettings.txt</a>:</p><div class="language-"><pre><code>#redis localhost
</code></pre></div><p>This will require a <strong>redis-server</strong> running on <code>localhost</code>. If you don&#39;t have redis yet, <a href="https://github.com/ServiceStack/redis-windows" target="_blank" rel="noopener noreferrer">download redis-server for Windows</a>.</p><p>Alternatively you can specify which <strong>port</strong> to run Chat on and change it to use Redis ServerEvents by specifying the <strong>redis</strong> instance it should connect to on the command-line with:</p><div class="language-"><pre><code>Chat.exe /port=1337 /redis=localhost
</code></pre></div><p>Also included in <code>Chat.zip</code> are <a href="https://github.com/ServiceStack/ServiceStack.Gap/blob/master/src/Chat/build/test-fanout-redis-events.bat" target="_blank" rel="noopener noreferrer">test-fanout-redis-events.bat</a> and equivalent <a href="https://github.com/ServiceStack/ServiceStack.Gap/blob/master/src/Chat/build/test-fanout-redis-events.sh" target="_blank" rel="noopener noreferrer">test-fanout-redis-events.sh</a> helper scripts for <strong>spawning multiple versions of Chat.exe</strong> on different ports (and backgrounds) for <strong>Windows or OSX</strong>, showing how multiple clients are able to send messages to each other via Redis whilst being subscribed to different HTTP Servers:</p><div class="language-"><pre><code>START Chat.exe /port=1337 /redis=localhost /background=/port-1337.jpg
START Chat.exe /port=2337 /redis=localhost /background=/port-2337.jpg
START Chat.exe /port=3337 /redis=localhost /background=/port-3337.jpg
</code></pre></div><p>This script was used to create the animated gif above to launch <strong>3 self-hosting instances of Chat.exe</strong> running on <strong>different ports</strong>, all connected to each other via Redis. This enables some interesting peer-to-peer scenarios where users are able to run a network of (CPU/resource isolated) decentralized stand-alone HTTP Servers on their local machines, but can still communicate with each other via redis.</p>`,13),p=[o,i,c];function l(d,u,h,v,g,k){return a(),t("div",null,p)}var m=s(r,[["render",l]]);export{b as __pageData,m as default};
