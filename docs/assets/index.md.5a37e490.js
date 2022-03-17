import{d as v,r as o,u as f,o as b,w as _,a as g,c as h,b as m,m as q,e as w,f as c,g as u,h as s,i as k}from"./app.bfc71b2f.js";const i=v({props:{open:Boolean,inline:Boolean},setup(r){const t=r,a=o(null),p=o(!1),l=f();function d(){!(a!=null&&a.value)||(t.open?a.value.show():a.value.close())}function n(){!(a!=null&&a.value)||(t.open?a.value.showModal():a.value.close())}return b(()=>{_(()=>{t.open!==p.value&&(t.inline?d():n(),p.value=t.open)})}),(e,V)=>(g(),h("dialog",q({ref_key:"dialog",ref:a,class:"v-native-dialog"},w(l)),[m(e.$slots,"default")],16))}}),T=k('<h1 id="vue-native-dialog" tabindex="-1">Vue Native Dialog <a class="header-anchor" href="#vue-native-dialog" aria-hidden="true">#</a></h1><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-hidden="true">#</a></h2><p>A wrapper arround browser is <code>&lt;dialog&gt;</code> tag Read more about this new tag <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dialog#browser_compatibility" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p>TODO</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>TODO</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>All the native dialog proprieties are passed to the parent using <code>v-bind=&quot;attrs&quot;</code> but those bellow are computed internally</p><table><thead><tr><th>name</th><th>type</th><th>default</th><th>description</th></tr></thead><tbody><tr><td>open</td><td>boolean</td><td>false</td><td>defines if the dialog is open</td></tr><tr><td>inline</td><td>boolean</td><td>false</td><td>should show the dialog as inline</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>All the native dialog events are passed to the parent using <code>v-bind=&quot;attrs&quot;</code></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="inline-dialog" tabindex="-1">Inline dialog <a class="header-anchor" href="#inline-dialog" aria-hidden="true">#</a></h3><p>Creates a <code>dialog</code> component where it&#39;s declared, useful for inline questions and confirmation <em>Example:</em></p>',15),C=s("p",null,"This is a native dialog with a vue wrapper",-1),x=k(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-native-dialog</span> <span class="token attr-name">inline</span> <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a native dialog with a vue wrapper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Close
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-native-dialog</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Open inline dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> open <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="backdrop-dialog" tabindex="-1">Backdrop dialog <a class="header-anchor" href="#backdrop-dialog" aria-hidden="true">#</a></h3><p>Creates a <code>dialog</code> component over all the html with a backdrop behind. <em>Example:</em></p>`,4),y=s("p",null,"This is a native dialog with a vue wrapper and a backdrop behind",-1),A=k(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-native-dialog</span> <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a native dialog with a vue wrapper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Close
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-native-dialog</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Open inline dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
const open = ref(false);
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> open <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="dialog-inside-another-dialog" tabindex="-1">Dialog inside another dialog <a class="header-anchor" href="#dialog-inside-another-dialog" aria-hidden="true">#</a></h3><p>You can define dialogs inside another dialog. <em>Example:</em></p>`,4),E=s("p",null,"This is a native dialog with another dialog inside",-1),O=s("p",null,"The other one",-1),S=k(`<div class="language-vue"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-native-dialog</span>
    <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a native dialog with another dialog inside<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Close
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Open embed dialog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-native-dialog</span>
      <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The other one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Close
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-native-dialog</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-native-dialog</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open=true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Open dialog with another inside
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> open <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> open2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-hidden="true">#</a></h2><p><a href="https://github.com/algoz098/vue-native-dialog" target="_blank" rel="noopener noreferrer">https://github.com/algoz098/vue-native-dialog</a></p>`,4),P='{"title":"Vue Native Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"About","slug":"about"},{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Inline dialog","slug":"inline-dialog"},{"level":3,"title":"Backdrop dialog","slug":"backdrop-dialog"},{"level":3,"title":"Dialog inside another dialog","slug":"dialog-inside-another-dialog"},{"level":2,"title":"Github","slug":"github"}],"relativePath":"index.md"}',D={},$=Object.assign(D,{setup(r){const t=o(!1),a=o(!1),p=o(!1),l=o(!1);return(d,n)=>(g(),h("div",null,[T,c(i,{inline:"",open:t.value,style:{"z-index":"9"}},{default:u(()=>[C,s("button",{onClick:n[0]||(n[0]=e=>t.value=!1)}," Close ")]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[1]||(n[1]=e=>t.value=!0)}," Open inline dialog ")]),x,c(i,{open:a.value,style:{"z-index":"9"}},{default:u(()=>[y,s("button",{onClick:n[2]||(n[2]=e=>a.value=!1)}," Close ")]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[3]||(n[3]=e=>a.value=!0)}," Open dialog ")]),A,c(i,{open:p.value},{default:u(()=>[E,s("button",{onClick:n[4]||(n[4]=e=>p.value=!1)}," Close "),s("button",{onClick:n[5]||(n[5]=e=>l.value=!0)}," Open embed dialog "),c(i,{open:l.value},{default:u(()=>[O,s("button",{onClick:n[6]||(n[6]=e=>l.value=!1)}," Close ")]),_:1},8,["open"])]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[7]||(n[7]=e=>p.value=!0)}," Open dialog with another inside ")]),S]))}});export{P as __pageData,$ as default};
