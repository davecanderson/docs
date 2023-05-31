import{I as f}from"./chunks/iconify.2272db1b.js";import{f as b,r as y,o as d,c as k,d as a,p as v,b as n,A as h,u as g,B as x,G as _,y as S,z as T,e as p,q as i,a as s}from"./app.2aea72c0.js";var P="/assets/150M-downloads.0fba0479.png",A="/assets/servicestack.net-home-1440.a842ad4b.png",M="/assets/razor-ssg.215edf69.png",C="/assets/codespaces.18e1ac2e.png",R="/assets/flutter-mix-project-structure.39daa2d1.png",z="/assets/flutter-hello.c91707ba.png",N="/assets/flutter-search-files.c7492444.png",F="/assets/vue-autoquerygrid.623275c5.png";const q={class:"lang relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex"},j=a("span",null,"$ ",-1),I={class:""},V=a("small",{class:"text-xs text-gray-400 px-3 -mt-1"},"sh",-1),E={key:0,class:"-mr-24 right-0 absolute text-md text-gray-200 bg-green-700 px-1 rounded"},D={class:"flex pr-1"},B=a("svg",{class:"w-5 h-5 mt-0.5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{fill:"currentColor",d:"m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"})],-1),u=b({__name:"ShellCommand",props:{text:null},setup(r){let e=y("");function c(o){let t=document.createElement("input"),l=o.target.parentElement.querySelector("label");if(t.setAttribute("value",l.innerText),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),typeof window.getSelection=="function"){const m=document.createRange();m.selectNodeContents(l),_.map(window.getSelection(),w=>{w.removeAllRanges(),w.addRange(m)})}e.value="copied",setTimeout(()=>e.value="",3e3)}return(o,t)=>(d(),k("div",q,[a("div",{class:"flex ml-2 w-full justify-between cursor-pointer",onClick:c},[a("div",null,[j,a("label",I,[v(o.$slots,"default",{},()=>[n(h(r.text),1)])])]),V]),g(e)?(d(),k("div",E,[a("div",D,[B,n(" "+h(g(e)),1)])])):x("",!0)]))}}),L={class:"flex flex-col w-96"},W=a("h4",{class:"py-6 text-center text-xl"},"Create New Project",-1),G=a("h4",{class:"py-6 text-center text-xl"},[n("In "),a("span",{class:"font-semibold text-indigo-700"},"/MyApp"),n(", Run Tailwind")],-1),H=a("h4",{class:"py-6 text-center text-xl"},"Run .NET Project (New Terminal)",-1),O=b({__name:"GettingStarted",props:{template:null},setup(r){const e=y("ProjectName");function c(o){if(o.key.match(/[\W]+/g))return o.preventDefault(),!1}return(o,t)=>(d(),k("div",L,[W,S(a("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),autocomplete:"off",spellcheck:"false",onKeydown:c,class:"mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"},null,544),[[T,e.value]]),p(u,{class:"mb-2"},{default:i(()=>[n("dotnet tool install -g x")]),_:1}),p(u,{class:"mb-2"},{default:i(()=>[n("x new "+h(r.template)+" "+h(e.value),1)]),_:1}),G,p(u,{class:"mb-2"},{default:i(()=>[n("npm run ui:dev")]),_:1}),H,p(u,{class:"mb-2"},{default:i(()=>[n("dotnet watch")]),_:1})]))}}),J=a("link",{rel:"stylesheet",href:"/css/not-prose.css"},null,-1),U=a("link",{rel:"stylesheet",href:"/css/release.css"},null,-1),Q={class:"mb-20"},$={class:"flex mx-auto justify-center items-center"},Y=s("",21),X=a("div",{class:"my-8"},[a("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/MRQMBrXi5Sc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),K=s("",9),Z=s("",54),aa=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"node postinstall.js")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),na=s("",9),sa=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"npm run serve")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),ea=s("",39),ta=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"npm run prerender")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),oa=a("p",null,[n("Which renders your site to "),a("code",null,"/_dist"),n(" which you can run a HTTP Server from with:")],-1),pa=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"npm run serve")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),ra=s("",13),ca=a("div",{class:"my-16 px-4 sm:px-6"},[a("div",{class:"text-center"},[a("h3",{id:"new-website",class:"text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900"}," Create a Flutter Todo App with .NET APIs ")]),a("p",{class:"mx-auto mt-5 max-w-prose text-xl text-gray-500"},[n(" Add Flutter Mobile Apps to Existing ServiceStack Projects with "),a("b",null,"mix flutter")]),a("div",{class:"my-8"},[a("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/t4WcXo4Vnio",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),la=a("p",null,[n("Now that we can see how these tools work together to be able to create a simple App, lets try our hand at a more advanced example and create a full CRUD Bookings App that calls new "),a("a",{href:"https://youtu.be/rSFiikDjGos",target:"_blank",rel:"noopener noreferrer"},"AutoQuery Bookings APIs"),n(".")],-1),ia=a("h3",{id:"flutter-and-autoquery",tabindex:"-1"},[n("Flutter and AutoQuery "),a("a",{class:"header-anchor",href:"#flutter-and-autoquery","aria-hidden":"true"},"#")],-1),ua=a("p",null,"In this video, we walk through creating a new Flutter Android Bookings App from scratch and add it to an existing .NET project using:",-1),da=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"x mix flutter")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),ka=a("p",null,"After adding the Flutter App to the .NET project, we dive into the development process, where we demonstrate how to call typed .NET APIs using typed Dart DTOs for end-to-end typed integrations that can be updated from within Android Studio, making it easy to maintain your App in-sync over time.",-1),ha=a("div",{class:"my-16 px-4 sm:px-6"},[a("div",{class:"text-center"},[a("h3",{id:"new-website",class:"text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900"}," Use Flutter to build a Bookings CRUD App, Fast ")]),a("p",{class:"mx-auto mt-5 max-w-prose text-xl text-gray-500"}," Rapidly develop full-featured CRUD Apps with Flutter & AutoQuery "),a("div",{class:"my-8"},[a("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/eMbwaMuIk84",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),ga=s("",5),ma=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"dotnet tool install --global x")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),wa=a("p",null,[n("Both Flutter and .NET have great CLI tooling where you can get a great development experience using a text editor like "),a("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},"VS Code"),n(" with its great multi-terminal support.")],-1),fa=a("h3",{id:"_1-create-your-net-project",tabindex:"-1"},[n("1. Create your .NET Project "),a("a",{class:"header-anchor",href:"#_1-create-your-net-project","aria-hidden":"true"},"#")],-1),ba=a("p",null,[n("Start with your "),a("a",{href:"https://servicestack.net/start",target:"_blank",rel:"noopener noreferrer"},"preferred project"),n(", or create an empty Project with your preferred project name:")],-1),ya=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"x new web MyApp")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),va=a("p",null,[n("That can be run immediately in the "),a("strong",null,"Host"),n(" project with dotnet watch for a live reload dev UX:")],-1),xa=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"dotnet watch")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),_a=a("h3",{id:"_2-add-a-new-flutter-app-to-your-project",tabindex:"-1"},[n("2. Add a new Flutter App to your project "),a("a",{class:"header-anchor",href:"#_2-add-a-new-flutter-app-to-your-project","aria-hidden":"true"},"#")],-1),Sa=a("p",null,[n("Then from a new Terminal in your Solution folder (e.g. "),a("strong",null,"MyApp"),n("), add a new Flutter App with:")],-1),Ta=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"x mix flutter")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Pa=a("p",null,[n("This will run "),a("strong",null,"flutter create"),n(" to add a new Flutter App to your solution that should look like:")],-1),Aa=a("figure",{class:"mt-4"},[a("a",{class:"my-8 max-w-3xl mx-auto block",href:"/flutter"},[a("img",{class:"bg-gray-50 shadow hover:shadow-lg",src:R,alt:""})])],-1),Ma=a("p",null,[n("It also adds the "),a("strong",null,"servicestack"),n(" client library package that's pre-configured to call the default "),a("strong",null,"Hello"),n(" API in new ServiceStack projects which we can test by running fluter from "),a("strong",null,"myapp_flutter"),n(":")],-1),Ca=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"flutter run")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Ra=s("",12),za=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"x dart")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Na=s("",22),Fa=a("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-800"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[a("p",null,"mix flutter-grpc")])]),a("div",{class:"flex"},[a("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),qa=a("p",null,[n("Which works like "),a("strong",null,"mix flutter"),n(" but instead adds a new Flutter gRPC App to an existing ServiceStack "),a("a",{href:"/grpc"},"grpc"),n(" project, with pre-configured gRPC integrations. To demonstrate this productive workflow we've created a new video which walks through the process of creating a new Flutter App from scratch, adding a Flutter gRPC App to an existing "),a("strong",null,"grpc"),n(" .NET project, and using "),a("strong",null,"mix flutter-grpc"),n(" to configure the Flutter App to work with ServiceStack's gRPC Services.")],-1),ja=a("div",{class:"my-16 px-4 sm:px-6"},[a("div",{class:"text-center"},[a("h3",{id:"new-website",class:"text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900"}," Fastest way to a working gRPC Server and Flutter solution ")]),a("p",{class:"mx-auto mt-5 max-w-prose text-xl text-gray-500"},[n(" Easily configure a Flutter Apps with gRPC .NET services using "),a("b",null,"mix flutter-grpc")]),a("div",{class:"my-8"},[a("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/fgts6sQ2Ags",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),Ia=s("",3),Va=a("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-700"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[a("p",null,'<PackageReference Include="Npgsql" Version="7.0.2" />')])]),a("div",{class:"flex"},[a("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Ea=a("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[a("div",{class:"flex-grow bg-gray-700"},[a("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[a("p",null,'<PackageReference Include="ServiceStack.OrmLite.PostgreSQL" Version="6.*" />')])]),a("div",{class:"flex"},[a("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[a("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),a("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Da=s("",10),Ga=`{"title":"ServiceStack v6.8","description":"","frontmatter":{"title":"ServiceStack v6.8"},"headers":[{"level":2,"title":"Celebrating 150M Total Downloads","slug":"celebrating-150m-total-downloads"},{"level":3,"title":"Migrating away from Jekyll","slug":"migrating-away-from-jekyll"},{"level":3,"title":"Search for a better SSG Solution","slug":"search-for-a-better-ssg-solution"},{"level":3,"title":"SSG C# Razor Pages with Vue & Tailwind","slug":"ssg-c-razor-pages-with-vue-tailwind"},{"level":3,"title":"Benefits from Jekyll","slug":"benefits-from-jekyll"},{"level":2,"title":"Create FREE Razor SSG Websites from your Browser!","slug":"create-free-razor-ssg-websites-from-your-browser"},{"level":3,"title":"GitHub Codespaces friendly","slug":"github-codespaces-friendly"},{"level":3,"title":"Enhance with simple, modern JavaScript","slug":"enhance-with-simple-modern-javascript"},{"level":2,"title":"Razor Pages","slug":"razor-pages"},{"level":3,"title":"Content in Markdown, Functionality in Razor Pages","slug":"content-in-markdown-functionality-in-razor-pages"},{"level":3,"title":"Markdown Feature Structure","slug":"markdown-feature-structure"},{"level":2,"title":"Pages Feature","slug":"pages-feature"},{"level":3,"title":"/_pages","slug":"pages"},{"level":3,"title":"Loading Pages Markdown","slug":"loading-pages-markdown"},{"level":3,"title":"Rendering Markdown Pages","slug":"rendering-markdown-pages"},{"level":2,"title":"What's New Feature","slug":"what-s-new-feature"},{"level":3,"title":"/_whatsnew","slug":"whatsnew"},{"level":2,"title":"Blog Feature","slug":"blog-feature"},{"level":3,"title":"/_posts","slug":"posts"},{"level":3,"title":"General Features","slug":"general-features"},{"level":3,"title":"Initializing and Loading Markdown Features","slug":"initializing-and-loading-markdown-features"},{"level":3,"title":"Custom Frontmatter","slug":"custom-frontmatter"},{"level":3,"title":"Updating to latest versions","slug":"updating-to-latest-versions"},{"level":3,"title":"Markdown Tag Helper","slug":"markdown-tag-helper"},{"level":2,"title":"Static Static Generation (SSG)","slug":"static-static-generation-ssg"},{"level":3,"title":"Static Razor Pages","slug":"static-razor-pages"},{"level":3,"title":"Pages with Static Routes","slug":"pages-with-static-routes"},{"level":3,"title":"Pages with Dynamic Routes","slug":"pages-with-dynamic-routes"},{"level":3,"title":"Limitations","slug":"limitations"},{"level":2,"title":"Prerendering Task","slug":"prerendering-task"},{"level":3,"title":"Previewing prerendered site","slug":"previewing-prerendered-site"},{"level":3,"title":"Publishing","slug":"publishing"},{"level":3,"title":"Feedback & Feature Requests Welcome","slug":"feedback-feature-requests-welcome"},{"level":2,"title":"Flutter","slug":"flutter"},{"level":3,"title":"Flutter and AutoQuery","slug":"flutter-and-autoquery"},{"level":2,"title":"Simple Walkthrough of creating Flutter Apps with VS Code","slug":"simple-walkthrough-of-creating-flutter-apps-with-vs-code"},{"level":3,"title":"Pre-requisites","slug":"pre-requisites"},{"level":3,"title":"1. Create your .NET Project","slug":"_1-create-your-net-project"},{"level":3,"title":"2. Add a new Flutter App to your project","slug":"_2-add-a-new-flutter-app-to-your-project"},{"level":3,"title":"3. Create your .NET API","slug":"_3-create-your-net-api"},{"level":3,"title":"3. Update Flutter App","slug":"_3-update-flutter-app"},{"level":2,"title":"ServiceStack Dart Client Improvements","slug":"servicestack-dart-client-improvements"},{"level":3,"title":"Create Service Clients configured to use /api JSON Route","slug":"create-service-clients-configured-to-use-api-json-route"},{"level":3,"title":"New ApiResult APIs","slug":"new-apiresult-apis"},{"level":3,"title":"Reserved Words and built-in Types use PascalCase","slug":"reserved-words-and-built-in-types-use-pascalcase"},{"level":2,"title":"Flutter gRPC","slug":"flutter-grpc"},{"level":2,"title":"Npgsql v7.0.2","slug":"npgsql-v7-0-2"},{"level":2,"title":"Vue TypeScript JAMStack templates Upgraded","slug":"vue-typescript-jamstack-templates-upgraded"},{"level":2,"title":"OrmLite WhereExists APIs","slug":"ormlite-whereexists-apis"}],"relativePath":"releases/v6_8.md"}`,Ba={},Ha=Object.assign(Ba,{__name:"v6_8",setup(r){return(e,c)=>(d(),k("div",null,[J,U,a("div",Q,[a("div",$,[p(g(f),{icon:"vscode-icons:file-type-html",class:"w-80 h-80"}),p(g(f),{icon:"logos:flutter",class:"w-72 h-72"})])]),Y,X,K,p(O,{class:"my-16 not-prose text-base mx-auto flex justify-center",template:"razor-ssg"}),Z,aa,na,sa,ea,ta,oa,pa,ra,ca,la,ia,ua,da,ka,ha,ga,ma,wa,fa,ba,ya,va,xa,_a,Sa,Ta,Pa,Aa,Ma,Ca,Ra,za,Na,Fa,qa,ja,Ia,Va,Ea,Da]))}});export{Ga as __pageData,Ha as default};
