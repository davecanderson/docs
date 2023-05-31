import"./chunks/iconify.2272db1b.js";import{_ as b}from"./chunks/ApiReference.8128d97b.js";import{f as T,b as w,t as u}from"./chunks/data.783f420d.js";import{f as y,D as d,o as _,E as v,q as t,b as n,A as k,u as p,d as s,r as D,Q as S,Z as C,c as A,e as a,a as e}from"./app.2aea72c0.js";import{m as x}from"./chunks/metadata.46b41fb9.js";import{F as I}from"./chunks/formatters.71b2dc9d.js";var q=[{id:1,name:"First Booking!",roomType:"Queen",roomNumber:10,bookingStartDate:"/Date(1670620983771-0000)/",bookingEndDate:"/Date(1671225783771-0000)/",cost:100},{id:2,name:"Booking 2",roomType:"Double",roomNumber:12,bookingStartDate:"/Date(1670793783778-0000)/",bookingEndDate:"/Date(1671398583778-0000)/",cost:120},{id:3,name:"Booking the 3rd",roomType:"Suite",roomNumber:13,bookingStartDate:"/Date(1670880183778-0000)/",bookingEndDate:"/Date(1671484983778-0000)/",cost:130}];const E=s("span",{class:"text-indigo-600"},"Date",-1),P=y({__name:"Custom",setup(h){return(m,r)=>{const g=d("DataGrid");return _(),v(g,{items:p(T),class:"max-w-screen-md",tableStyle:["stripedRows","uppercaseHeadings"],"header-titles":{temperatureC:"TEMP. (C)",temperatureF:"TEMP. (F)"}},{"date-header":t(()=>[E]),date:t(({date:o})=>[n(k(new Intl.DateTimeFormat().format(new Date(o))),1)]),temperatureC:t(({temperatureC:o})=>[n(k(o)+"\xB0 ",1)]),temperatureF:t(({temperatureF:o})=>[n(k(o)+"\xB0 ",1)]),summary:t(({summary:o})=>[n(k(o),1)]),_:1},8,["items","header-titles"])}}}),B={class:"text-gray-900"},V=s("span",{class:"hidden lg:inline"},"Room ",-1),G=s("span",{class:"hidden lg:inline"}," Date",-1),N=s("span",{class:"hidden lg:inline"}," Date",-1),R=y({__name:"Responsive",setup(h){const{currency:m}=S(),r=D();function g(i){console.log("headerSelected",i)}function o(i){r.value=r.value===i.id?null:i.id,console.log("rowSelected",i)}return(i,c)=>{const f=d("DataGrid");return _(),v(f,{items:p(w),"visible-from":{name:"xl",bookingStartDate:"sm",bookingEndDate:"xl"},onHeaderSelected:g,onRowSelected:o,"is-selected":l=>r.value==l.id},{id:t(({id:l})=>[s("span",B,k(l),1)]),name:t(({name:l})=>[n(k(l),1)]),"roomNumber-header":t(()=>[V,n("No ")]),cost:t(({cost:l})=>[n(k(p(m)(l)),1)]),"bookingStartDate-header":t(()=>[n(" Start"),G]),"bookingEndDate-header":t(()=>[n(" End"),N]),"createdBy-header":t(()=>[n(" Employee ")]),createdBy:t(({createdBy:l})=>[n(k(l),1)]),_:1},8,["items","is-selected"])}}}),F=s("link",{rel:"stylesheet",href:"/css/tailwind-components.css"},null,-1),W=e(`<p>In its most simple usage the DataGrid component can be used to render typed collections:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> tracks <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token function">track</span><span class="token punctuation">(</span><span class="token string">&quot;Everythings Ruined&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Faith No More&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Angel Dust&quot;</span><span class="token punctuation">,</span> <span class="token number">1992</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">track</span><span class="token punctuation">(</span><span class="token string">&quot;Lightning Crashes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Live&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Throwing Copper&quot;</span><span class="token punctuation">,</span> <span class="token number">1994</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">track</span><span class="token punctuation">(</span><span class="token string">&quot;Heart-Shaped Box&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Nirvana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;In Utero&quot;</span><span class="token punctuation">,</span> <span class="token number">1993</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">track</span><span class="token punctuation">(</span><span class="token string">&quot;Alive&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Pearl Jam&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Ten&quot;</span><span class="token punctuation">,</span> <span class="token number">1991</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Which by default will display all object properties:</p>`,3),H=e(`<p>Use <strong>selected-columns</strong> to control which columns to display and <strong>header-titles</strong> to use different column names:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:selected-columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;year&#39;,&#39;album&#39;,&#39;name&#39;,&#39;artist&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:header-titles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name:&#39;Track&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),L=e(`<p>Which for a wrist-friendly alternative also supports a string of comma delimited column names, e.g:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selected-columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>year,album,name,artist<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 class="pt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100"> Simple Customizations </h2><p>Which columns are shown and how they&#39;re rendered is customizable with custom <code>&lt;template #column&gt;</code> definitions:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>forecasts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>max-w-screen-md<span class="token punctuation">&quot;</span></span> <span class="token attr-name">::tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;stripedRows&#39;,&#39;uppercaseHeadings&#39;]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:header-titles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ temperatureC:&#39;TEMP. (C)&#39;, temperatureF:&#39;TEMP. (F)&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#date-header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-indigo-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ date }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ new Intl.DateTimeFormat().format(new Date(date)) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#temperatureC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ temperatureC }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ temperatureC }}<span class="token entity named-entity" title="\xB0">&amp;deg;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#temperatureF</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ temperatureF }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ temperatureF }}<span class="token entity named-entity" title="\xB0">&amp;deg;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ summary }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ summary }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DataGrid</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5),M=e(`<p>Column names can be changed with a <strong>header-titles</strong> alias mapping, or dynamically with a <strong>header-title</strong> mapping function.</p><p>Alternatively for more advanced customizations, custom <code>&lt;template #column-header&gt;</code> definitions can be used to control how column headers are rendered.</p><p>If any custom column or header definitions are provided, only those columns will be displayed. Alternatively specify an explicit array of column names in <strong>selected-columns</strong> to control the number and order or columns displayed.</p><h2 class="pt-4 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100"> Responsive </h2><p>A more advanced example showing how to implement a responsive datagrid defining what columns and Headers are visible at different screen sizes using <strong>visible-from</strong> to specify which columns to show from different Tailwind responsive breakpoints and <code>&lt;template #column-header&gt;</code> definitions to collapse column names at small screen sizes:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookings<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:visible-from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name:&#39;xl&#39;, bookingStartDate:&#39;sm&#39;, bookingEndDate:&#39;xl&#39; }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@header-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headerSelected<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@row-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rowSelected<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:is-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row =&gt; selected == row.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ id }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-gray-900<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#roomNumber-header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden lg:inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Room <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>No
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#cost</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ cost }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ currency(cost) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#bookingStartDate-header</span><span class="token punctuation">&gt;</span></span>
        Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden lg:inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#bookingEndDate-header</span><span class="token punctuation">&gt;</span></span>
        End<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden lg:inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#createdBy-header</span><span class="token punctuation">&gt;</span></span>
        Employee
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#createdBy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ createdBy }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ createdBy }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DataGrid</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFormatters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@servicestack/vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bookings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../data&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Booking <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../dtos&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> currency <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFormatters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> selected <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">headerSelected</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">column</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;headerSelected&#39;</span><span class="token punctuation">,</span>column<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">rowSelected</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span>Booking</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    selected<span class="token punctuation">.</span>value <span class="token operator">=</span> selected<span class="token punctuation">.</span>value <span class="token operator">===</span> row<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> row<span class="token punctuation">.</span>id
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;rowSelected&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),z=s("p",null,[n("Behavior of the DataGrid can be customized with the "),s("code",null,"@header-selected"),n(" event to handle when column headers are selected to apply custom filtering to the "),s("strong",null,"items"),n(" data source whilst the "),s("code",null,"@row-selected"),n(" event can be used to apply custom behavior when a row is selected.")],-1),U=e(`<p>The <a href="/vue/gallery/formats">PreviewFormat</a> component also offers a variety of flexible formatting options.</p><h2 id="table-styles" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100"> Table Styles </h2><p>The appearance of DataGrids can use <strong>tableStyles</strong> to change to different <a href="https://tailwindui.com/components/application-ui/lists/tables" target="_blank" rel="noopener noreferrer">Tailwind Table Styles</a>, e.g:</p><h3 class="my-4 text-lg font-semibold">Default (Striped Rows)</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,5),$=e(`<h3 class="my-4 text-lg font-semibold">Simple</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>simple<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),j=e(`<h3 class="my-4 text-lg font-semibold">Uppercase Headings</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uppercaseHeadings<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),O=e(`<h3 class="my-4 text-lg font-semibold">Vertical Lines</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>verticalLines<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),Q=e(`<h3 class="my-4 text-lg font-semibold">White Background</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>whiteBackground<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),Z=e(`<h3 class="my-4 text-lg font-semibold">Full Width</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullWidth<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),J=e(`<h3 class="my-4 text-lg font-semibold">Full Width, Uppercase with Vertical Lines</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracks<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:tableStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;uppercaseHeadings&#39;, &#39;fullWidth&#39;, &#39;verticalLines&#39;]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,2),K=e(`<h2 id="app-metadata" class="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100"> Using App Metadata </h2><p>By default DataGrid will render values using its default configured formatters, so results with strings, numbers and defaults will display a stock standard resultset:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookings<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,3),X=e(`<p>Another option for formatting this dataset is to use the rich <a href="/locode/formatters">format functions</a> in ServiceStack to annotate the DTOs with how each field should be formatted, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Booking</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AutoIncrement</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">RoomType</span> RoomType <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> RoomNumber <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IntlDateTime</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DateStyle<span class="token punctuation">.</span>Long<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BookingStartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IntlRelativeTime</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> BookingEndDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">IntlNumber</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Currency <span class="token operator">=</span> NumberCurrency<span class="token punctuation">.</span>USD<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span></span> Cost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Which can be enabled when using <a href="/vue/use-metadata.html">useMetadata</a> by specifying the <code>MetadataType</code> for the DataGrid&#39;s results in <strong>type</strong>:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataGrid</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookings<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Booking<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,4),Y=s("p",null,"Declaratively annotating your DTOs with preferred formatting hints makes this rich metadata information available to clients where it's used to enhance ServiceStack's built-in UI's and Components like:",-1),aa=s("ul",null,[s("li",null,[s("a",{href:"/api-explorer"},"API Explorer")]),s("li",null,[s("a",{href:"/locode/"},"Locode")]),s("li",null,[s("a",{href:"/templates-blazor-components"},"Blazor Tailwind Components")])],-1),la='{"title":"DataGrid Component","description":"","frontmatter":{"title":"DataGrid Component"},"headers":[],"relativePath":"vue/gallery/datagrid.md"}',na={},ua=Object.assign(na,{__name:"datagrid",setup(h){const{setMetadata:m}=C();return m(x),(r,g)=>{const o=d("Breadcrumb"),i=d("Breadcrumbs"),c=d("DataGrid");return _(),A("div",null,[F,a(i,{class:"not-prose mt-4","home-href":"/vue/"},{default:t(()=>[a(o,{href:"/vue/gallery/"},{default:t(()=>[n("gallery")]),_:1}),a(o,null,{default:t(()=>[n("DataGrid Examples")]),_:1})]),_:1}),a(b,{Component:"DataGrid<Model>"},{default:t(()=>[n("Default")]),_:1}),W,a(c,{items:p(u),class:"mb-4"},null,8,["items"]),H,a(c,{items:p(u),"selected-columns":["year","album","name","artist"],"header-titles":{name:"Track"},class:"mb-4"},null,8,["items"]),L,a(P,{class:"mb-4"}),M,a(R,{class:"mb-4"}),z,a(p(I)),U,a(c,{items:p(u)},null,8,["items"]),$,a(c,{items:p(u),tableStyle:"simple"},null,8,["items"]),j,a(c,{items:p(u),tableStyle:"uppercaseHeadings"},null,8,["items"]),O,a(c,{items:p(u),tableStyle:"verticalLines"},null,8,["items"]),Q,a(c,{items:p(u),tableStyle:"whiteBackground"},null,8,["items"]),Z,a(c,{items:p(u),tableStyle:"fullWidth"},null,8,["items"]),J,a(c,{items:p(u),tableStyle:["uppercaseHeadings","fullWidth","verticalLines"]},null,8,["items"]),K,a(c,{items:p(q),class:"mb-4"},null,8,["items"]),X,a(c,{items:p(q),type:"Booking",class:"mb-4"},null,8,["items"]),Y,aa])}}});export{la as __pageData,ua as default};
