import{_ as e,o as t,c as o,d as n,b as s,a}from"./app.2aea72c0.js";var p="/assets/grpc-horizontal-color.24aa4d70.svg";const L=`{"title":"ServiceStack gRPC","description":"","frontmatter":{"slug":"grpc","title":"ServiceStack gRPC"},"headers":[{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"ServiceStack Services are gRPC Services","slug":"servicestack-services-are-grpc-services"},{"level":3,"title":"Enable gRPC Services in existing .NET Core 3 projects","slug":"enable-grpc-services-in-existing-net-core-3-projects"},{"level":2,"title":"Advantages of ServiceStack gRPC","slug":"advantages-of-servicestack-grpc"},{"level":3,"title":"Maximize reuse of Knowledge and Investments","slug":"maximize-reuse-of-knowledge-and-investments"},{"level":2,"title":"gRPC code-first Development","slug":"grpc-code-first-development"},{"level":3,"title":"Code-First gRPC Services","slug":"code-first-grpc-services"},{"level":3,"title":"Flattened Request Hierarchy's","slug":"flattened-request-hierarchy-s"},{"level":3,"title":"No additional complexity or artificial machinery","slug":"no-additional-complexity-or-artificial-machinery"},{"level":3,"title":"Smart, Substitutable, Generic GrpcServiceClient","slug":"smart-substitutable-generic-grpcserviceclient"},{"level":3,"title":"Preserve rich Semantics and API Design","slug":"preserve-rich-semantics-and-api-design"},{"level":3,"title":"Offer best API for every platform","slug":"offer-best-api-for-every-platform"},{"level":2,"title":"Architecture","slug":"architecture"},{"level":2,"title":"Limitations","slug":"limitations"},{"level":3,"title":"Inheritance","slug":"inheritance"},{"level":2,"title":"Features","slug":"features"},{"level":3,"title":"protobuf-net Inheritance","slug":"protobuf-net-inheritance"},{"level":3,"title":"Dynamic gRPC Requests","slug":"dynamic-grpc-requests"},{"level":3,"title":"Simulate HTTP Requests","slug":"simulate-http-requests"},{"level":3,"title":"Server Stream gRPC Services","slug":"server-stream-grpc-services"},{"level":3,"title":"Implementing Server Stream Services","slug":"implementing-server-stream-services"},{"level":2,"title":"SSL Certificate Configuration","slug":"ssl-certificate-configuration"},{"level":2,"title":"gRPC Clients","slug":"grpc-clients"},{"level":3,"title":"protoc generated clients","slug":"protoc-generated-clients"},{"level":2,"title":"gRPC Web","slug":"grpc-web"},{"level":3,"title":"x dotnet tool gRPC Web support","slug":"x-dotnet-tool-grpc-web-support"},{"level":2,"title":"gRPC Configuration","slug":"grpc-configuration"},{"level":3,"title":"Protobuf Serialization","slug":"protobuf-serialization"},{"level":3,"title":"Any Methods","slug":"any-methods"},{"level":3,"title":"Custom gRPC Status Codes","slug":"custom-grpc-status-codes"},{"level":3,"title":"Filtered HTTP Headers","slug":"filtered-http-headers"},{"level":3,"title":"Proto Options","slug":"proto-options"},{"level":2,"title":"Public gRPC protoc Service and UI","slug":"public-grpc-protoc-service-and-ui"},{"level":3,"title":"grpc.servicestack.net","slug":"grpc-servicestack-net"},{"level":3,"title":"From .proto descriptors","slug":"from-proto-descriptors"},{"level":3,"title":"Using curl","slug":"using-curl"}],"relativePath":"grpc.md"}`,c={},r=n("p",null,[n("a",{href:"https://grpc.io"},[n("img",{src:p,style:{height:"250px"},alt:"gRPC Logo"})])],-1),i=n("p",null,[s("ServiceStack's gRPC support enables a highly productive development environment for developing high-performance gRPC HTTP/2 Services by making ServiceStack's existing typed Services available from "),n("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),s("'s gRPC endpoints. In addition to offering superior value in developing gRPC Services on the Server, ServiceStack also offers a "),n("a",{href:"https://todoworld.servicestack.net",target:"_blank",rel:"noopener noreferrer"},"simplified development model for gRPC Clients"),s(" for streamlined end-to-end productivity.")],-1),l=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/UQlYodNS1xc",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),u=n("h3",{id:"getting-started",tabindex:"-1"},[s("Getting Started "),n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#")],-1),d=n("p",null,[s("The easiest way to get started is to start from a new "),n("a",{href:"https://github.com/NetCoreTemplates/grpc",target:"_blank",rel:"noopener noreferrer"},"grpc"),s(" template that's a copy of the empty "),n("a",{href:"https://github.com/NetCoreTemplates/web",target:"_blank",rel:"noopener noreferrer"},"web"),s(" project template pre-configured with gRPC support:")],-1),k=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x new grpc MyGrpcProject")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),h=a("",9),g=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix grpc")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),m=n("p",null,[s("Which applies this "),n("a",{href:"https://gist.github.com/gistlyn/656c29a7257dc374d22d4aa709ba7244",target:"_blank",rel:"noopener noreferrer"},"modular ConfigureGrpc configuration"),s(" to your project.")],-1),v=n("p",null,[s("Or to manually configure gRPC support, add a reference to the .NET Core 3 "),n("strong",null,"ServiceStack.Extensions"),s(" NuGet package:")],-1),f=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet add package ServiceStack.Extensions")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),y=a("",35),w=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[n("code",null,"x csharp https://todoworld.servicestack.net")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),b=a("",4),S=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet add package ServiceStack.GrpcClient")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),C=a("",158),T=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[n("code",null,"x proto-<lang> https://todoworld.servicestack.net")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),P=n("h3",{id:"from-proto-descriptors",tabindex:"-1"},[s("From .proto descriptors "),n("a",{class:"header-anchor",href:"#from-proto-descriptors","aria-hidden":"true"},"#")],-1),x=n("p",null,[s("Other clients can generate protoc clients from either a single "),n("strong",null,".proto"),s(" services description:")],-1),R=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[n("code",null,"x proto-<lang> services.proto")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),q=n("p",null,[s("Or upload multiple "),n("strong",null,".proto"),s(" files by specifying a directory instead:")],-1),A=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[n("code",null,"x proto-<lang> /path/to/grpc/protos")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),_=n("p",null,[s("Use "),n("strong",null,"-out"),s(" to specify a different directory to save the protoc generated classes to, e.g:")],-1),D=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[n("code",null,"x proto-<lang> services.proto -out /path/to/dir")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),I=n("h3",{id:"using-curl",tabindex:"-1"},[s("Using curl "),n("a",{class:"header-anchor",href:"#using-curl","aria-hidden":"true"},"#")],-1),E=n("p",null,[s("Alternatively you can use curl command-line HTTP Client to download protoc generated classes in a "),n("strong",null,".zip"),s(" archive:")],-1),G=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[s("curl -F 'file1=@services.proto' "),n("a",{href:"https://grpc.servicestack.net/protoc/%5Blang%5D?zip",target:"_blank",rel:"noopener noreferrer"},"https://grpc.servicestack.net/protoc/[lang]?zip"),s(" -L -o grpc.zip")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),N=a("",2),O=[r,i,l,u,d,k,h,g,m,v,f,y,w,b,S,C,T,P,x,R,q,A,_,D,I,E,G,N];function H(j,M,F,B,V,z){return t(),o("div",null,O)}var W=e(c,[["render",H]]);export{L as __pageData,W as default};
