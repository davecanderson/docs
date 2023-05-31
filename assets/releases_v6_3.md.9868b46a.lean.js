import{_ as t}from"./chunks/migration-scripts.4545570b.js";import{_ as e}from"./chunks/migration-database-admin.d60906fa.js";import{_ as o}from"./chunks/admin-ui-redis-stats.3a9d7244.js";import{_ as p}from"./chunks/admin-ui-redis.384233c6.js";import{_ as c,a as i,b as l,c as r,d as u,e as k,f as d,g as m,h as g,i as h,j as y,k as w}from"./chunks/admin-ui-redis-command.8c1b9fbb.js";import{_ as f}from"./chunks/profiling-redis-CommandAfter.e40ef79a.js";import{_ as b}from"./chunks/admin-ui-database.a4fdf62a.js";import{_ as v,a as _,b as A,c as x,d as T,e as q,f as D,g as S}from"./chunks/admin-ui-database-api-url.3185772c.js";import{_ as M}from"./chunks/users-edit-default.473d8bf8.js";import{_ as R,o as C,c as I,a as s,d as n,b as a}from"./app.2aea72c0.js";const bn='{"title":"ServiceStack v6.3","description":"","frontmatter":{"title":"ServiceStack v6.3"},"headers":[{"level":2,"title":"Code-First DB Migrations","slug":"code-first-db-migrations"},{"level":3,"title":"Introduction","slug":"introduction"},{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Class names used to determine order of Migrations","slug":"class-names-used-to-determine-order-of-migrations"},{"level":3,"title":"Basic Example","slug":"basic-example"},{"level":3,"title":"Declarative Code-First Migrations","slug":"declarative-code-first-migrations"},{"level":3,"title":"Code-First approach","slug":"code-first-approach"},{"level":3,"title":"Complex Example","slug":"complex-example"},{"level":3,"title":"Reverting Migrations","slug":"reverting-migrations"},{"level":3,"title":"Running Migrations","slug":"running-migrations"},{"level":3,"title":"Running migrations from command-line","slug":"running-migrations-from-command-line"},{"level":3,"title":"Configuring existing Projects","slug":"configuring-existing-projects"},{"level":3,"title":"ASP .NET Core Projects","slug":"asp-net-core-projects"},{"level":3,"title":"New RDBMS Projects configured with DB Migrations by default","slug":"new-rdbms-projects-configured-with-db-migrations-by-default"},{"level":3,"title":"Failed migration behavior","slug":"failed-migration-behavior"},{"level":2,"title":"Running migrations from GitHub Actions","slug":"running-migrations-from-github-actions"},{"level":2,"title":"Running migrations from unit tests","slug":"running-migrations-from-unit-tests"},{"level":3,"title":"Running Migrations individually","slug":"running-migrations-individually"},{"level":3,"title":"Clearing Migration State","slug":"clearing-migration-state"},{"level":3,"title":"Running Migrations on Named Connections","slug":"running-migrations-on-named-connections"},{"level":3,"title":"Reviewing Migrations","slug":"reviewing-migrations"},{"level":2,"title":"Redis Admin UI","slug":"redis-admin-ui"},{"level":3,"title":"Redis Stats on Dashboard","slug":"redis-stats-on-dashboard"},{"level":3,"title":"Info","slug":"info"},{"level":3,"title":"Modify Redis Connection","slug":"modify-redis-connection"},{"level":3,"title":"Search","slug":"search"},{"level":3,"title":"Command","slug":"command"},{"level":3,"title":"Profile App Redis Usage","slug":"profile-app-redis-usage"},{"level":2,"title":"Database Admin UI","slug":"database-admin-ui"},{"level":3,"title":"Database Admin Customizations","slug":"database-admin-customizations"},{"level":2,"title":"New Videos!","slug":"new-videos"},{"level":3,"title":"Blazor WASM Litestream Apps","slug":"blazor-wasm-litestream-apps"},{"level":3,"title":"Useful Blazor Litestream Video Links","slug":"useful-blazor-litestream-video-links"},{"level":3,"title":"Build a Bookings API from scratch in minutes","slug":"build-a-bookings-api-from-scratch-in-minutes"},{"level":2,"title":"Run As Admin","slug":"run-as-admin"},{"level":2,"title":"App Tasks","slug":"app-tasks"},{"level":2,"title":"Microsoft Graph Roles","slug":"microsoft-graph-roles"}],"relativePath":"releases/v6_3.md"}',P={},L=s("",5),B=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet tool update -g x")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),F=s("",44),N=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix migrations")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),U=s("",5),E=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet run --AppTasks=migrate")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),O=s("",3),V=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet run --AppTasks=migrate.revert:last")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),j=n("p",null,[a("or "),n("strong",null,"all"),a(" to revert all migrations:")],-1),W=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet run --AppTasks=migrate.revert:all")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),z=s("",46),H=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/AACZtTOcQbg",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),G=s("",51),K=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/NZkeyuc_prg",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),Q=s("",26),J=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/fY50dWszpw4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),$=s("",4),X=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/rSFiikDjGos",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),Y=s("",10),Z=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet run --AppTasks=task1:arg1,arg2;task2:arg1,arg2")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),nn=s("",6),sn=[L,B,F,N,U,E,O,V,j,W,z,H,G,K,Q,J,$,X,Y,Z,nn];function an(tn,en,on,pn,cn,ln){return C(),I("div",null,sn)}var vn=R(P,[["render",an]]);export{bn as __pageData,vn as default};
