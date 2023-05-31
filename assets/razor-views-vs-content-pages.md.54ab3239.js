import{_ as e,o as t,c as a,a as r}from"./app.2aea72c0.js";const f='{"title":"Razor Views vs Content Pages","description":"","frontmatter":{"title":"Razor Views vs Content Pages","slug":"razor-views-vs-content-pages"},"headers":[{"level":2,"title":"Default Pages","slug":"default-pages"}],"relativePath":"razor-views-vs-content-pages.md"}',o={},s=r(`<p>In <a href="http://www.servicestack.net/" target="_blank" rel="noopener noreferrer">ServiceStack</a>:</p><ul><li>Razor Pages that exist within the <code>/Views/</code> folder are called <strong>View Pages</strong></li><li>Razor Pages that exist anywhere else are called <strong>Content Pages</strong></li></ul><p>The difference between them is that <strong>View Pages</strong> are Razor views that are used to provide the HTML representations (aka views) <strong>for services</strong> in much the same way View Pages work for MVC Controllers.</p><p>View Pages <strong>cannot</strong> be called directly, that&#39;s the role of <strong>Content Pages</strong>, which <strong>can only</strong> be called directly, i.e. outside the context of a service (or redirected to, from a service).</p><p>In <a href="https://razor.netcore.io/" target="_blank" rel="noopener noreferrer">Razor Rockstars</a>, examples of Content Pages include:</p><ul><li><a href="https://razor.netcore.io/stars/dead/cobain/" target="_blank" rel="noopener noreferrer">/stars/dead/cobain/</a> which calls the <a href="https://github.com/ServiceStack/RazorRockstars/blob/master/src/RazorRockstars.WebHost/stars/dead/Cobain/default.cshtml" target="_blank" rel="noopener noreferrer">/stars/dead/Cobain/default.cshtml</a> Content Page</li><li><a href="https://razor.netcore.io/TypedModelNoController" target="_blank" rel="noopener noreferrer">/TypedModelNoController</a> which calls the <a href="https://github.com/ServiceStack/RazorRockstars/blob/master/src/RazorRockstars.WebHost/TypedModelNoController.cshtml" target="_blank" rel="noopener noreferrer">/TypedModelNoController.cshtml</a> Content Page</li></ul><p>Whereas examples of <strong>View Pages</strong> include:</p><ul><li><a href="https://razor.netcore.io/rockstars" target="_blank" rel="noopener noreferrer">/rockstars</a> which matches the <code>/rockstars</code> route on the <a href="https://github.com/ServiceStack/RazorRockstars/blob/master/src/RazorRockstars.WebHost/RockstarsService.cs" target="_blank" rel="noopener noreferrer">/RockstarsService.cs</a> and because of the <code>[DefaultView(&quot;Rockstars&quot;)]</code> attribute, uses the <a href="https://github.com/ServiceStack/RazorRockstars/blob/master/src/RazorRockstars.WebHost/Views/Rockstars.cshtml" target="_blank" rel="noopener noreferrer">/Rockstars.cshtml</a> <strong>View Page</strong></li></ul><h2 id="default-pages" tabindex="-1">Default Pages <a class="header-anchor" href="#default-pages" aria-hidden="true">#</a></h2><p>For <strong>Content Pages</strong> the <code>default.cshtml</code> is the index page for a folder. So to set a default page for the root <code>/</code> path, create a <code>/default.cshtml</code> page. An example of this is <a href="https://github.com/ServiceStack/ServiceStack.UseCases/blob/master/Reusability/default.cshtml" target="_blank" rel="noopener noreferrer">/default.cshtml</a> home page used in the <a href="https://github.com/ServiceStack/ServiceStack.UseCases/tree/master/Reusability" target="_blank" rel="noopener noreferrer">Reusability</a> demo.</p><p>If you want to use a view page as the Home page, you can set the default redirect to it by adding the AppHost config:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
    DefaultRedirectPath <span class="token operator">=</span> <span class="token string">&quot;~/home&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which would call a <strong>service</strong> matching the <code>/home</code> route that will use the most appropriate View Page based on the rules laid out in the <a href="https://razor.netcore.io/" target="_blank" rel="noopener noreferrer">Razor Rockstars</a> page.</p>`,13),n=[s];function c(l,i,p,h,d,g){return t(),a("div",null,n)}var k=e(o,[["render",c]]);export{f as __pageData,k as default};
