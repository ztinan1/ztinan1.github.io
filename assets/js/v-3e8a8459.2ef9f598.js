"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8392],{9720:(e,n)=>{n.c=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},1984:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>c});var s=a(3968);const t={href:"https://github.com/OwO-Network/DeepLX/",target:"_blank",rel:"noopener noreferrer"},p=(0,s.IL)('<p>以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">deeplx</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/owo<span class="token punctuation">-</span>network/deeplx<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> deeplx\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;32770:1188&quot;</span>\n    <span class="token comment"># environment:</span>\n    <span class="token comment"># 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。</span>\n    <span class="token comment"># - TOKEN=helloworld</span>\n    <span class="token comment"># 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。</span>\n    <span class="token comment"># - AUTHKEY=xxxxxxx:fx</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦遇到请求频率过快的情况，DeepLX 会自动使用官方的 AuthKey 进行请求，从而加快翻译速度，提高效率。</p>',3),o={},l=(0,a(9720).c)(o,[["render",function(e,n){const a=(0,s.E1)("ExternalLinkIcon");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("p",null,[(0,s.QD)("a",t,[(0,s.mY)("DeepLX"),(0,s.K2)(a)]),(0,s.mY)(" 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。")]),p])}]]),c=JSON.parse('{"path":"/services/dockers-on-nas/deeplx.html","title":"DeepLX - 免费翻译接口","lang":"zh-CN","frontmatter":{"article":false,"title":"DeepLX - 免费翻译接口","order":102,"description":"DeepLX 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。 以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务： 如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/deeplx.html"}],["meta",{"property":"og:site_name","content":"嘲讽南北"}],["meta",{"property":"og:title","content":"DeepLX - 免费翻译接口"}],["meta",{"property":"og:description","content":"DeepLX 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。 以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务： 如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:54:57.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:54:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"DeepLX - 免费翻译接口\\",\\"description\\":\\"DeepLX 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。 以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务： 如果你已经注册了 DeepL 的免费接口，建议设置 AUTHKEY。这样，一旦...\\"}"]]},"headers":[],"git":{"createdTime":1708066497000,"updatedTime":1708066497000,"contributors":[{"name":"ztinan1","email":"160204293+ztinan1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"services/dockers-on-nas/deeplx.md","localizedDate":"2024年2月16日","excerpt":"<p><a href=\\"https://github.com/OwO-Network/DeepLX/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">DeepLX</a> 提供了一个基于 DeepL 的免费翻译服务。它可以将 DeepL Free API 转换为本地 API，使得第三方程序能够方便地使用 DeepL 提供的翻译功能。</p>\\n<p>以下是通过 Docker 部署 DeepLX 的配置文件，简单易懂，你可以快速启动你的翻译服务：</p>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"3\\"</span>\\n\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">deeplx</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> ghcr.io/owo<span class=\\"token punctuation\\">-</span>network/deeplx<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> deeplx\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"32770:1188\\"</span>\\n    <span class=\\"token comment\\"># environment:</span>\\n    <span class=\\"token comment\\"># 如果设置了 TOKEN，则每个请求都需要包含 Authorization 标头。</span>\\n    <span class=\\"token comment\\"># - TOKEN=helloworld</span>\\n    <span class=\\"token comment\\"># 如果设置了 AUTHKEY，在 429 响应（请求过多/过快）后，会使用官方的 AuthKey 进行请求。如果同时使用多个 authKey，需要用逗号分隔。</span>\\n    <span class=\\"token comment\\"># - AUTHKEY=xxxxxxx:fx</span>\\n</code></pre></div>","autoDesc":true}')}}]);