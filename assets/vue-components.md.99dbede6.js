import{_ as n,o as a,c as s,a as t}from"./app.2aea72c0.js";const h='{"title":"Vue Components","description":"","frontmatter":{"slug":"vue-components","title":"Vue Components"},"headers":[{"level":2,"title":"Vuetify Markdown Editor","slug":"vuetify-markdown-editor"},{"level":2,"title":"Beautiful, free Hero Backgrounds","slug":"beautiful-free-hero-backgrounds"},{"level":3,"title":"Image Upload Vue Component","slug":"image-upload-vue-component"}],"relativePath":"vue-components.md"}',e={},o=t(`<p>A collection of Vue and Vuetify Components you might find useful for use in your own Apps:</p><h2 id="vuetify-markdown-editor" tabindex="-1">Vuetify Markdown Editor <a class="header-anchor" href="#vuetify-markdown-editor" aria-hidden="true">#</a></h2><p>To make contributing ServiceStack Community content as pleasant as possible we&#39;ve developed a custom Markdown Editor that enhances a Vuetify Text Input component with editing features optimal for authoring Markdown of developer content.</p><p><a href="https://github.com/ServiceStack/servicestack-editor" target="_blank" rel="noopener noreferrer">@servicestack/editor</a> is a developer-friendly Markdown Editor for Vuetify Apps which is optimized for <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown</a> where it supports popular IDE short-cuts for authoring code like tab un/indenting, single-line code and comments blocks, etc.</p><p><a href="https://github.com/ServiceStack/servicestack-editor" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/YPlfplv.png" alt=""></a></p><p>For wrist-friendly productivity the Editor supports many of the popular Keyboard shortcuts found in popular IDEs:</p><p><img src="https://i.imgur.com/PXqkSuN.png" alt=""></p><p>It&#39;s ideal for use in Apps that need to accept rich Content and can be installed with:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> @servicestack/editor
</code></pre></div><p>Where it&#39;s used like a regular Vue or Vuetify component:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Markdown<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Editor <span class="token keyword">from</span> <span class="token string">&quot;@servicestack/editor&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Editor <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>See the Project Page for <a href="https://github.com/ServiceStack/servicestack-editor/blob/master/README.md#example-usage" target="_blank" rel="noopener noreferrer">documented Example Usage</a> of its features and how to make use of it within an existing component.</p><h2 id="beautiful-free-hero-backgrounds" tabindex="-1">Beautiful, free Hero Backgrounds <a class="header-anchor" href="#beautiful-free-hero-backgrounds" aria-hidden="true">#</a></h2><p><a href="https://github.com/ServiceStack/images" target="_blank" rel="noopener noreferrer">@servicestack/images</a> is a growing hand-picked curated collection of beautiful free images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">unsplash.com</a> that&#39;s an easy drop-in to any Website, with backgrounds being served from GitHub&#39;s CDN.</p><p><a href="https://github.com/ServiceStack/images/blob/master/heroes.js" target="_blank" rel="noopener noreferrer">heroes.js</a> is a dependency-free script that returns different URLs to <strong>2560x1000</strong> <a href="https://github.com/ServiceStack/images/tree/master/hero" target="_blank" rel="noopener noreferrer">/hero</a> images ideal for usage in hero backgrounds.</p><p>It includes a number of different API&#39;s to control which hero to get and for how long to return the same hero for:</p><div class="language-"><pre><code>heroes.random()          // a random hero each time
heroes.daily()           // the same hero for the day
heroes.hourly()          // the same hero for the hour
heroes.static(&#39;foo&#39;)     // the same hero for this string constant
heroes.static(&#39;foo&#39;,10)  // the same hero + 10 for this string constant
heroes.get(1)            // the first hero
heroes.get(1000000)      // the hero at mod length 1000000

heroes.images            // the array of hero image names
heroes.baseUrl           //= https://servicestack.github.io/images/ 
</code></pre></div><p>Live Example: <a href="https://servicestack.github.io/images/heroes" target="_blank" rel="noopener noreferrer">/heroes</a></p><p>It&#39;s used in all TechStacks pages containing background hero images where it&#39;s embedded inside a <a href="https://vuetifyjs.com/en/components/parallax" target="_blank" rel="noopener noreferrer">Vuetify Parallax Component</a> where it provides a subtle parallax effect. This example shows the same hero image for each Technology based on its <code>slug</code>:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-parallax</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heroUrl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> heroes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@servicestack/images&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">heroUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">return</span> heroes<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>The <a href="https://github.com/ServiceStack/images/blob/master/README.md#usage" target="_blank" rel="noopener noreferrer">Usage</a> section on the project page contains additional examples showing how to use it within a static web page, a npm-based Web App using ES6/TypeScript as well as inside a React or Vue Component.</p><h3 id="image-upload-vue-component" tabindex="-1">Image Upload Vue Component <a class="header-anchor" href="#image-upload-vue-component" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/NetCoreApps/TechStacks/blob/master/src/TechStacks/src/components/FileInput.vue" target="_blank" rel="noopener noreferrer">FileInput.vue</a> is a simple single File Upload Component with an image preview.</p><p>The basic usage example below shows an example of using it to upload files with the <code>JsonServiceClient</code> where instead of sending a Request DTO, use <code>toFormData</code> to create a &quot;multipart/form-data&quot; <code>FormData</code> request that can be sent using the <code>postBody</code> API, e.g:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file-input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logoUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFileChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Add Logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file-input</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> JsonServiceClient<span class="token punctuation">,</span> toFormData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@servicestack/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> FileInput <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">onFileChange</span><span class="token punctuation">(</span><span class="token parameter">imgFile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token function">toFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>fields<span class="token punctuation">,</span> imgFile <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">postBody</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CreateTechnology</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Inside your ServiceStack Service the uploaded file will be accessible from <code>IRequest.Files</code> collection with any additional arguments used to populate the Request DTO.</p><p>You could use <code>VirtualFiles.WriteFile(path, Request.Files[0].InputStream)</code> to write the file to the configured <a href="/virtual-file-system">Virtual File System provider</a>, but as we want to keep the App Server stateless we&#39;re instead uploading it to Imgur and just saving the URL on Imgur:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token class-name">CreateTechnology</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Request<span class="token punctuation">.</span>Files<span class="token punctuation">.</span>Length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        tech<span class="token punctuation">.</span>LogoUrl <span class="token operator">=</span> Request<span class="token punctuation">.</span>Files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">UploadToImgur</span><span class="token punctuation">(</span>AppSettings<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;oauth.imgur.ClientId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">nameof</span><span class="token punctuation">(</span>tech<span class="token punctuation">.</span>LogoUrl<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">minWidth</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">minHeight</span><span class="token punctuation">:</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">maxWidth</span><span class="token punctuation">:</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">maxHeight</span><span class="token punctuation">:</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you&#39;d also like to upload to Imgur you can copy the <code>UploadToImgur</code> extension in <a href="https://github.com/NetCoreApps/TechStacks/blob/master/src/TechStacks.ServiceInterface/ImgurExtensions.cs" target="_blank" rel="noopener noreferrer">ImgurExtensions.cs</a> into your project which includes image size validation as well as extracting any Imgur error responses into a readable C# Exception so it displays the cause of any downstream Imgur Upload Error in your UI.</p>`,29),p=[o];function c(r,u,l,i,k,d){return a(),s("div",null,p)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};
