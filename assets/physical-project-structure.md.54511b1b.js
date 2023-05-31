import{_ as e,o as t,c as r,a as o}from"./app.2aea72c0.js";const v='{"title":"Physical Project Structure","description":"","frontmatter":{"title":"Physical Project Structure"},"headers":[{"level":3,"title":"Host Project","slug":"host-project"},{"level":3,"title":"ServiceInterface Project","slug":"serviceinterface-project"},{"level":3,"title":"ServiceModel Project","slug":"servicemodel-project"},{"level":3,"title":"Test Project","slug":"test-project"},{"level":2,"title":"Concrete Example","slug":"concrete-example"},{"level":2,"title":"Documented Example Project","slug":"documented-example-project"}],"relativePath":"physical-project-structure.md"}',n={},a=o(`<p>The Recommended structure below is built into all ServiceStackVS <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Templates where creating any new ServiceStack project will create a solution with a minimum of 4 projects:</p><img class="ml-4 float-right" src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/solution-layout.png"><h3 id="host-project" tabindex="-1">Host Project <a class="header-anchor" href="#host-project" aria-hidden="true">#</a></h3><p>The Host project contains your AppHost that references and registers all your App&#39;s concrete dependencies in its IOC. It also contains any Web Assets like any Razor Views, JS, CSS, Images, Fonts, etc. that&#39;s needed to deploy with your App. The AppHost is the master project which references all dependencies used by your App whose role is to act like a conduit where it decides which concrete implementations should be used. By design it references everything and nothing references it which as a goal should be kept logic-free.</p><h3 id="serviceinterface-project" tabindex="-1">ServiceInterface Project <a class="header-anchor" href="#serviceinterface-project" aria-hidden="true">#</a></h3><p>The ServiceInterface project is the implementation project where all Business Logic and Services live which typically references every other project except the Host projects. Small and Medium projects can maintain all their implementation here where logic can be grouped under sub feature folders. Large solutions can split this project into more manageable cohesive and modular projects which we also recommend encapsulates any dependencies they might use.</p><h3 id="servicemodel-project" tabindex="-1">ServiceModel Project <a class="header-anchor" href="#servicemodel-project" aria-hidden="true">#</a></h3><p>The ServiceModel Project contains all your Application&#39;s DTOs which is what defines your Services contract, keeping them isolated from any Server implementation is how your Service is able to encapsulate its capabilities and make them available behind a remote facade. There should be the only ServiceModel project per solution which should be impl, dependency and logic-free which should only reference the impl/dep-free <strong>ServiceStack.Interfaces.dll</strong> contract assembly to ensure Service contracts are decoupled from its implementation, enforces interoperability ensuring that your Services don&#39;t mandate specific client implementations and will ensure this is the only project clients need to be able to call any of your Services using either referencing the <strong>ServiceModel.dll</strong> directly or downloading the DTOs from a remote ServiceStack instance using <a href="/add-servicestack-reference">Add ServiceStack Reference</a>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/dtos-role.png" alt=""></p><h3 id="test-project" tabindex="-1">Test Project <a class="header-anchor" href="#test-project" aria-hidden="true">#</a></h3><p>The Unit Test project contains all your Unit and Integration tests. It&#39;s also a Host project that typically references all other non-Host projects in the solution and contains a combination of concrete and mock dependencies depending on what&#39;s being tested. See the <a href="/testing">Testing Docs</a> for more information on testing ServiceStack projects.</p><h2 id="concrete-example" tabindex="-1">Concrete Example <a class="header-anchor" href="#concrete-example" aria-hidden="true">#</a></h2><p>Ideally the root-level <strong>AppHost</strong> project should be kept lightweight and implementation-free. Although for small/prototype projects with only a few services it&#39;s fine for everything to be in a single project and to simply grow your architecture when and as needed.</p><p>For medium-to-large projects we recommend the physical structure below we&#39;ve modelled after this <a href="http://stackoverflow.com/a/15235822/85785" target="_blank" rel="noopener noreferrer">concrete Events example</a> to describe how we&#39;d typically layout a ServiceStack project. For the purposes of this illustration we&#39;ll assume our Application is called <strong>EventMan</strong>.</p><p>The order of the projects also show its dependencies, e.g. the top-level <code>EventMan</code> project references <strong>all</strong> sub projects whilst the last <code>EventMan.ServiceModel</code> project references <strong>none</strong>:</p><div class="language-"><pre><code>/EventMan
  AppHost.cs                  // The ServiceStack ASP.NET Web or Console Host Project

/EventMan.ServiceInterface    // All Service implementations (akin to MVC Controllers)
  EventsService.cs
  EventsReviewsService.cs

/EventMan.Logic               // For larger projs: pure C# logic deps, data models, etc
  IGoogleCalendarGateway      // E.g of a external dependency this project could use

/EventMan.ServiceModel        // Service Request/Response DTOs and DTO types in /Types
  Events.cs                   // Events, CreateEvent, GetEvent, UpdateEvent DTOs 
  EventReviews.cs             // EventReviews, GetEventReview, CreateEventReview DTOs
  /Types
    Event.cs                  // Event type
    EventReview.cs            // EventReview type
</code></pre></div><p>With the <code>EventMan.ServiceModel</code> DTO&#39;s kept in their own separate implementation and dependency-free dll, you&#39;re freely able to share this dll in any .NET client project as-is - which you can use with any of the generic <a href="/csharp-client">C# Service Clients</a> to provide an end-to-end typed API without any code-gen.</p><h2 id="documented-example-project" tabindex="-1">Documented Example Project <a class="header-anchor" href="#documented-example-project" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/ServiceStack/EmailContacts/" target="_blank" rel="noopener noreferrer">EmailContacts solution</a> details the recommended setup and physical layout structure of typical medium-sized ServiceStack projects. It includes the complete documentation going through how to create the solution from scratch, and explains all the ServiceStack hidden features it makes use of along the way.</p>`,19),c=[a];function s(i,l,d,p,h,u){return t(),r("div",null,c)}var g=e(n,[["render",s]]);export{v as __pageData,g as default};
