import{_ as t,o,c as p,a as s,d as n,b as a}from"./app.2aea72c0.js";const L='{"title":"gRPC protoc Swift Client","description":"","frontmatter":{"slug":"grpc-swift","title":"gRPC protoc Swift Client"},"headers":[{"level":2,"title":"Swift protoc generated GrpcServiceClient TodoWorld Example","slug":"swift-protoc-generated-grpcserviceclient-todoworld-example"},{"level":3,"title":"Swift protoc gRPC insecure Example","slug":"swift-protoc-grpc-insecure-example"},{"level":3,"title":"Swift protoc gRPC SSL Example","slug":"swift-protoc-grpc-ssl-example"},{"level":3,"title":"Swift Local Development gRPC SSL CRUD Example","slug":"swift-local-development-grpc-ssl-crud-example"}],"relativePath":"grpc-swift.md"}',e={},c=s('<p><a href="https://youtu.be/FLHbN_Z9z98" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/grpc/swift.png" alt=""></a></p><blockquote><p>YouTube: <a href="https://youtu.be/FLHbN_Z9z98" target="_blank" rel="noopener noreferrer">youtu.be/FLHbN_Z9z98</a></p></blockquote><h2 id="swift-protoc-generated-grpcserviceclient-todoworld-example" tabindex="-1">Swift protoc generated GrpcServiceClient TodoWorld Example <a class="header-anchor" href="#swift-protoc-generated-grpcserviceclient-todoworld-example" aria-hidden="true">#</a></h2><p>Install <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a>:</p>',4),l=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet tool install --global x")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),i=n("p",null,"Create a new Swift Console App:",-1),u=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"swift package init --type executable")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),r=s(`<p>Add <code>grpc-swift</code> Swift Package in <code>Package.swift</code> and <strong>&quot;GRPC&quot;</strong> dependency to each target:</p><div class="language-swift"><pre><code><span class="token keyword">import</span> <span class="token class-name">PackageDescription</span>

<span class="token keyword">let</span> package <span class="token operator">=</span> <span class="token class-name">Package</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;TodoWorld&quot;</span></span><span class="token punctuation">,</span>
    dependencies<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// Dependencies declare other packages that this package depends on.</span>
        <span class="token comment">// .package(url: /* package url */, from: &quot;1.0.0&quot;),</span>
        <span class="token punctuation">.</span><span class="token function">package</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://github.com/grpc/grpc-swift.git&quot;</span></span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;1.0.0-alpha.8&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    targets<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// Targets are the basic building blocks of a package. A target can define a module or a test suite.</span>
        <span class="token comment">// Targets can depend on other targets in this package, and on products in packages which this package depends on.</span>
        <span class="token punctuation">.</span><span class="token function">target</span><span class="token punctuation">(</span>
            name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;TodoWorld&quot;</span></span><span class="token punctuation">,</span>
            dependencies<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;GRPC&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span><span class="token function">testTarget</span><span class="token punctuation">(</span>
            name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;TodoWorldTests&quot;</span></span><span class="token punctuation">,</span>
            dependencies<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;TodoWorld&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&quot;GRPC&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre></div><p>Add protoc generated TodoWorld DTOs and gRPC GrpcServiceClient:</p><div class="language-bash"><pre><code><span class="token builtin class-name">cd</span> Sources/TodoWorld
x proto-swift https://todoworld.servicestack.net
</code></pre></div><p>Use protoc generated DTOs and <code>GrpcServiceClient</code> to call TodoWorld gRPC Service:</p><h3 id="swift-protoc-grpc-insecure-example" tabindex="-1">Swift protoc gRPC insecure Example <a class="header-anchor" href="#swift-protoc-grpc-insecure-example" aria-hidden="true">#</a></h3><div class="language-swift"><pre><code><span class="token keyword">import</span> <span class="token class-name">Foundation</span>
<span class="token keyword">import</span> <span class="token constant">GRPC</span>
<span class="token keyword">import</span> <span class="token constant">NIO</span>
<span class="token keyword">import</span> <span class="token constant">NIOSSL</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> configuration <span class="token operator">=</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">.</span><span class="token class-name">Configuration</span><span class="token punctuation">(</span>
        target<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">hostAndPort</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;todoworld.servicestack.net&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5054</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        eventLoopGroup<span class="token punctuation">:</span> <span class="token class-name">MultiThreadedEventLoopGroup</span><span class="token punctuation">(</span>numberOfThreads<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">GrpcServicesServiceClient</span><span class="token punctuation">(</span>connection<span class="token punctuation">:</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> configuration<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;gRPC Swift&quot;</span></span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result
    <span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;ERROR\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Override <code>main.swift</code> with the above Swift Example:</p>`,8),k=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix todoworld-swift")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),d=n("p",null,"Run example:",-1),g=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"swift run")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),w=n("h3",{id:"swift-protoc-grpc-ssl-example",tabindex:"-1"},[a("Swift protoc gRPC SSL Example "),n("a",{class:"header-anchor",href:"#swift-protoc-grpc-ssl-example","aria-hidden":"true"},"#")],-1),h=n("p",null,"Download TodoWorld SSL Certificate used for its gRPC HTTP/2 Services:",-1),f=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[a("x get "),n("a",{href:"https://todoworld.servicestack.net/grpc.crt",target:"_blank",rel:"noopener noreferrer"},"https://todoworld.servicestack.net/grpc.crt")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),m=s(`<p>Use certificate when initializing ClientConnection.Configuration:</p><div class="language-swift"><pre><code><span class="token keyword">import</span> <span class="token class-name">Foundation</span>
<span class="token keyword">import</span> <span class="token constant">GRPC</span>
<span class="token keyword">import</span> <span class="token constant">NIO</span>
<span class="token keyword">import</span> <span class="token constant">NIOSSL</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> configuration <span class="token operator">=</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">.</span><span class="token class-name">Configuration</span><span class="token punctuation">(</span>
        target<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">hostAndPort</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;todoworld.servicestack.net&quot;</span></span><span class="token punctuation">,</span> <span class="token number">50051</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        eventLoopGroup<span class="token punctuation">:</span> <span class="token class-name">MultiThreadedEventLoopGroup</span><span class="token punctuation">(</span>numberOfThreads<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        tls<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>certificateChain<span class="token punctuation">:</span> <span class="token keyword">try</span> <span class="token class-name">NIOSSLCertificate</span><span class="token punctuation">.</span><span class="token function">fromPEMFile</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;grpc.crt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token function">certificate</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
                   certificateVerification<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">none</span><span class="token punctuation">)</span> <span class="token comment">//TODO enable SSL verification</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">GrpcServicesServiceClient</span><span class="token punctuation">(</span>connection<span class="token punctuation">:</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> configuration<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;gRPC Swift&quot;</span></span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result
    <span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;ERROR\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Override <code>main.swift</code> with the above Swift Example:</p>`,3),v=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix todoworld-swift-ssl")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),y=n("p",null,"Run example:",-1),x=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"swift run")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),_=s(`<h3 id="swift-local-development-grpc-ssl-crud-example" tabindex="-1">Swift Local Development gRPC SSL CRUD Example <a class="header-anchor" href="#swift-local-development-grpc-ssl-crud-example" aria-hidden="true">#</a></h3><div class="language-swift"><pre><code><span class="token keyword">import</span> <span class="token class-name">Foundation</span>
<span class="token keyword">import</span> <span class="token constant">GRPC</span>
<span class="token keyword">import</span> <span class="token constant">NIO</span>
<span class="token keyword">import</span> <span class="token constant">NIOSSL</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> configuration <span class="token operator">=</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">.</span><span class="token class-name">Configuration</span><span class="token punctuation">(</span>
        target<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">hostAndPort</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;localhost&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5001</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        eventLoopGroup<span class="token punctuation">:</span> <span class="token class-name">MultiThreadedEventLoopGroup</span><span class="token punctuation">(</span>numberOfThreads<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        tls<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>certificateChain<span class="token punctuation">:</span> <span class="token keyword">try</span> <span class="token class-name">NIOSSLCertificate</span><span class="token punctuation">.</span><span class="token function">fromPEMFile</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;dev.crt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>map <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token function">certificate</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">GrpcServicesServiceClient</span><span class="token punctuation">(</span>connection<span class="token punctuation">:</span> <span class="token class-name">ClientConnection</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> configuration<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;TODO EXAMPLE&quot;</span></span><span class="token punctuation">)</span>

    <span class="token omit keyword">_</span> <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">postResetTodos</span><span class="token punctuation">(</span><span class="token class-name">ResetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//POST /todos</span>
    <span class="token keyword">var</span> createTodo <span class="token operator">=</span> <span class="token class-name">CreateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    createTodo<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;ServiceStack&quot;</span></span>
    <span class="token keyword">var</span> todo <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">postCreateTodo</span><span class="token punctuation">(</span>createTodo<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;new todo Id: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, Title: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>title</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token comment">//GET /todos</span>
    <span class="token keyword">var</span> all <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">callGetTodos</span><span class="token punctuation">(</span><span class="token class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;todos: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">all<span class="token punctuation">.</span>results<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token comment">//GET /todos/1</span>
    <span class="token keyword">var</span> getTodo <span class="token operator">=</span> <span class="token class-name">GetTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    getTodo<span class="token punctuation">.</span>id <span class="token operator">=</span> todo<span class="token punctuation">.</span>id
    todo <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">callGetTodo</span><span class="token punctuation">(</span>getTodo<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;get todo Id: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, Title: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>title</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token comment">//PUT /todos/1</span>
    <span class="token keyword">var</span> updateTodo <span class="token operator">=</span> <span class="token class-name">UpdateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    updateTodo<span class="token punctuation">.</span>id <span class="token operator">=</span> todo<span class="token punctuation">.</span>id
    updateTodo<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;gRPC&quot;</span></span>
    <span class="token omit keyword">_</span> <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">putUpdateTodo</span><span class="token punctuation">(</span>updateTodo<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//GET /todos/1</span>
    todo <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">callGetTodo</span><span class="token punctuation">(</span>getTodo<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;get todo Id: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, Title: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">todo<span class="token punctuation">.</span>title</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token comment">//DELETE /todos/1</span>
    <span class="token keyword">var</span> deleteTodo <span class="token operator">=</span> <span class="token class-name">DeleteTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    deleteTodo<span class="token punctuation">.</span>id <span class="token operator">=</span> todo<span class="token punctuation">.</span>id
    <span class="token omit keyword">_</span> <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">callDeleteTodo</span><span class="token punctuation">(</span>deleteTodo<span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//GET /todos</span>
    all <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">callGetTodos</span><span class="token punctuation">(</span><span class="token class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;todos: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">all<span class="token punctuation">.</span>results<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;ERROR\\n</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Refer to <a href="https://github.com/NetCoreApps/todo-world/tree/master/src/clients/swift" target="_blank" rel="noopener noreferrer">/src/clients/swift</a> for a complete example project.</p>`,3),T=[c,l,i,u,r,k,d,g,w,h,f,m,v,y,x,_];function b(C,S,q,P,R,M){return o(),p("div",null,T)}var G=t(e,[["render",b]]);export{L as __pageData,G as default};
