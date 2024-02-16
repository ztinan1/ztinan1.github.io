"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8154],{9720:(e,o)=>{o.c=(e,o)=>{const r=e.__vccOpts||e;for(const[e,n]of o)r[e]=n;return r}},7800:(e,o,r)=>{r.r(o),r.d(o,{comp:()=>K,data:()=>j});var n=r(3968);const t=(0,n.QD)("h2",{id:"博客探索",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#博客探索"},[(0,n.QD)("span",null,"博客探索")])],-1),l=(0,n.QD)("p",null,"2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​",-1),i={href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"},a=(0,n.IL)('<p>到了 2021 年，<strong>随着文章和发布渠道的增多，文章的修改和管理变得愈加困难</strong>。慢慢地，我开始习惯本地 Markdown 只做初稿排版，更新则只在外部平台上进行。​</p><p>我的文章都是工具教程类，要随着工具的更新而修改，有时甚至要对几年前发布的文章进行更新。因此，针对少量平台更新的策略，带来了文章版本混乱，让博客偏离了知识记录的初衷。为了保证文章版本统一，我把博客从 Jekyll 迁移到 WordPress，准备以 WordPress 作为统一版。</p><figure><img src="https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/400x" alt="Jekyll 博客" tabindex="0" loading="lazy"><figcaption>Jekyll 博客</figcaption></figure><p>然而，WordPress 方案很快就被放弃了。原因除了 WordPress 糟糕的编辑体验，更重要的是，我遇到了 Notion。其界面美观，编辑方便，支持对外展示，能导出为 Markdown、HTML 文件。​</p><p>可是，没什么平台是完美的。Notion 不支持同步本地 markdown 内容，图床不能在站外使用，国内访问速度成谜。这令 <strong>Notion 只适合个人分享，而非博客网站</strong>。我用 Notion，纯属垂涎美色。​</p><p>2022 年，由于疫情被封控在家两个月。时间多了，我继续折腾博客，希望找到一个界面美观，能自动发布且具备本地管理功能的博客方案。</p><h2 id="博客方案" tabindex="-1"><a class="header-anchor" href="#博客方案"><span>博客方案</span></a></h2><p>最初，我幻想着修改一篇文章同步到多个平台，但找了许久也没有合适的。网上所谓的一键分发软件，实际上是通过网页操作来完成发布，并不能自动修改更新。​</p><p>剔除掉这类不现实的想法后，新的博客方案以 Markdown 版本为主，自动同步 WordPress，最后手动同步主要分发平台。​</p><p><strong>最终方案</strong>如下：​</p><ol><li><p>初稿：Markdown 本地编辑文章，使用七牛云自建图床。​</p></li><li><p>发布：同步本地 Markdown 文本，自动发布，保持主要平台内容为最新。​</p></li><li><p>管理：本地更新修改 Markdown 文件，docsify 页面整合文本内容，博客后台管理文章版本。​</p></li><li><p>订阅：用户能通过 RSS、邮件或微信来订阅博客更新。</p></li></ol><h2 id="wp-发布工具" tabindex="-1"><a class="header-anchor" href="#wp-发布工具"><span>WP 发布工具</span></a></h2><h3 id="工具说明" tabindex="-1"><a class="header-anchor" href="#工具说明"><span>工具说明</span></a></h3>',13),s={href:"https://github.com/zhaoolee/WordPressXMLRPCTools",target:"_blank",rel:"noopener noreferrer"},d=(0,n.QD)("p",null,"基于 WordPressXMLRPCTools，我做了三点修改：​",-1),p=(0,n.IL)("<li><p>发布设置：修改 <code>main.py</code> 文件。</p><ul><li>修复无法覆盖更新文章的 bug。</li><li>调整项目页的时间格式。</li><li>页首添加文章编辑时间，默认为格林尼治标准时间，比北京晚 8 小时。</li><li>将文章页尾部的本文永久更新地址从标题格式调整为常规字母。</li></ul></li><li><p>草稿箱：<code>_post</code> 路径内新建 <code>TEMP</code> 文件夹，用于存放文章草稿。WordPress 推送程序会忽略 <code>_post</code> 子文件夹的内容，换言之，<code>TEMP</code> 文件夹不会发布到 WordPress 网站。</p></li>",2),c=(0,n.QD)("code",null,".nojekyll",-1),h=(0,n.QD)("code",null,"index.html",-1),g=(0,n.QD)("code",null,"_sidebar.md",-1),m={href:"https://rockbenben.github.io/Blog_WP/",target:"_blank",rel:"noopener noreferrer"},u=(0,n.QD)("figure",null,[(0,n.QD)("img",{src:"https://img.newzone.top/2022-05-26-20-12-56.png",alt:"",tabindex:"0",loading:"lazy"}),(0,n.QD)("figcaption",null,"docsify 页面效果")],-1),b=(0,n.QD)("h3",{id:"使用流程",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#使用流程"},[(0,n.QD)("span",null,"使用流程")])],-1),f={href:"https://github.com/rockbenben/Blog_WP",target:"_blank",rel:"noopener noreferrer"},k=(0,n.QD)("li",null,[(0,n.mY)("回到你新建的 repo，删除 _post 文件夹中的所有文件，参照主目录下 "),(0,n.QD)("code",null,"example_article.md"),(0,n.mY)(" 的格式编辑文章。注意：md 文件名不能包含大写字母。")],-1),w={href:"https://github.com/zhaoolee/WordPressXMLRPCTools#%E7%94%A8github-actions%E5%86%99markdown%E6%96%87%E7%AB%A0%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%88%B0wordpress",target:"_blank",rel:"noopener noreferrer"},y=(0,n.QD)("li",null,[(0,n.mY)("修改主目录下的 "),(0,n.QD)("code",null,"index.html"),(0,n.mY)(" 和 "),(0,n.QD)("code",null,"_sidebar.md"),(0,n.mY)(" 文件，调整 docsify 网页设置。 "),(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("code",null,"index.html"),(0,n.mY)(" 修改 docsify 网页标题、描述和关键词。")]),(0,n.QD)("li",null,[(0,n.QD)("code",null,"_sidebar.md"),(0,n.mY)(" 修改 docsify 网页侧边栏，加入博客文章的标题和位置。")])])],-1),D=(0,n.IL)('<h2 id="wp-发布常见问题" tabindex="-1"><a class="header-anchor" href="#wp-发布常见问题"><span>WP 发布常见问题</span></a></h2><h3 id="文章发布不成功" tabindex="-1"><a class="header-anchor" href="#文章发布不成功"><span>文章发布不成功</span></a></h3><p><code>_post</code> 文件夹添加了文档，但同步后，<code>README.md</code> 和 WordPress 并没有添加文章。</p><p>检查以下两点：</p><ul><li><p>文章后缀必须为「.md」，不支持「.markdown」或其他后缀格式。</p></li><li><p>进入 repo 页面中的 <code>Actions</code>，检查最近一次的 update 是否正确。根据报错代码，寻找错误原因。</p><figure><img src="https://img.newzone.top/2022-05-26-20-36-56.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="error-git-denied-to-github-actions-bot" tabindex="-1"><a class="header-anchor" href="#error-git-denied-to-github-actions-bot"><span>Error: git denied to github-actions[bot]</span></a></h3><p>遇到 GitHub Actions 报错：<code>git denied to github-actions[bot]</code> 或 <code>Process completed with exit code 128</code>。</p><p>点击该 repository 的「Setting」&gt;「Code and automation」&gt;「Actions」&gt;「General」，然后在 Workflow permissions 中开启「Read and write permissions」。</p><h3 id="error-process-completed-with-exit-code-1" tabindex="-1"><a class="header-anchor" href="#error-process-completed-with-exit-code-1"><span>Error: Process completed with exit code 1</span></a></h3><p>遇到 GitHub Actions 报错：<code>Error: Process completed with exit code 1</code>，可能是文章内容触发了服务器的安全规则，拒绝了文章的同步。</p><p>如果出现该项报错，暂时关闭服务器防火墙，可解决问题。同步完成后，记得重新开启防火墙。</p><h3 id="无法覆盖更新原文章-​" tabindex="-1"><a class="header-anchor" href="#无法覆盖更新原文章-​"><span>无法覆盖更新原文章 ​</span></a></h3><p>修改旧文章并同步后，WordPress 站的文章没同步修改，而是新增了一篇相同的文章。</p><ul><li>检查 md 文件名有没有出现大写字母，有没有更改文件名。</li><li>进入 WordPress 后台，点击「设置」&gt;「固定链接」，选中自定义结构，并将文章链接设为 <code>/p/%postname%</code>。</li></ul><p>如果修改版在检查后依然出现此问题，建议手动将新文章内容覆盖旧文章，然后删除新文章。​ 这个 bug 可以当作是强提醒。当 WordPress 新增了旧文章，你就被提醒要在其他平台修改该文章，让文章版本保持统一。</p><h3 id="wordpress-发布时间与实际不符-​" tabindex="-1"><a class="header-anchor" href="#wordpress-发布时间与实际不符-​"><span>WordPress 发布时间与实际不符 ​</span></a></h3><p>同步文章后，WordPress 显示的文章发布时间是 GitHub push 时间，而非文章真实的发布时间。​</p><p>如果你将旧文章转移到 WordPress，文章的发布时间需在 WordPress 后台手动修改，无法在 Markdown 文件中指定 WordPress 显示的发布时间。</p><h3 id="有序列表编号有误" tabindex="-1"><a class="header-anchor" href="#有序列表编号有误"><span>有序列表编号有误</span></a></h3><p>文章中设定的编号是 <code>3</code>，但同步到 WordPress 后，变成了 <code>1</code>。</p><p>有序列表中穿插了图片、段落，编号就会重置到 <code>1</code>。去除图片与旧序列的空行，就能识别正确编号。</p><h3 id="无序列表只有一个层级" tabindex="-1"><a class="header-anchor" href="#无序列表只有一个层级"><span>无序列表只有一个层级</span></a></h3><p>Markdown 转 WordPRess 文章时，默认规则无法识别缩进级别。多层级列表只会显示一个层级，其他层级的列表都被提到第一层级。</p><h2 id="本地管理-markdown-文章" tabindex="-1"><a class="header-anchor" href="#本地管理-markdown-文章"><span>本地管理 Markdown 文章</span></a></h2><p>如果用 Windows 资源管理器管理 Markdown 文章，会存在 3 个问题：</p><ul><li>资源管理器的视觉效果非常难看。</li><li>Markdown 文件名称不能展示关键信息，较难定位文档。文章越多，管理越困难。</li><li>无法对文章内容进行本地检索，只能通过文件名称猜测内容。</li></ul><figure><img src="https://img.newzone.top/2022-05-30-19-00-15.png" alt="" tabindex="0" loading="lazy"><figcaption>难以管理的本地文档</figcaption></figure><p>为解决这些问题，我借助飞书表格、RunAny 和 docsify 重构本地文章管理方案。</p><h3 id="飞书文档管理" tabindex="-1"><a class="header-anchor" href="#飞书文档管理"><span>飞书文档管理</span></a></h3><p>飞书文档功能与 Notion、Airtable 类似，可将文字、链接、图片聚合在同一页面，操作便捷。</p><p>打开飞书多维表格，填入本地 Markdown 文章的标题、本地位置、链接、标签和封面，即可聚合本地文章的关键信息。将表格视图切换为「画册视图」，文档管理界面更达到 90% 的 Notion 视觉效果。</p><figure><img src="https://img.newzone.top/2022-05-06-12-43-36.png" alt="" tabindex="0" loading="lazy"><figcaption>飞书表格视图</figcaption></figure><figure><img src="https://img.newzone.top/2022-05-06-12-28-41.png" alt="" tabindex="0" loading="lazy"><figcaption>飞书画册视图</figcaption></figure><h3 id="runany-文档直达-​" tabindex="-1"><a class="header-anchor" href="#runany-文档直达-​"><span>RunAny 文档直达 ​</span></a></h3><p>在线文档中，无法像打开超链接一样直接打开本地文件。若要节省中间打开时间，可以使用 RunAny。​</p>',35),P={href:"https://hui-zz.gitee.io/runany/#/",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.QD)("code",null,"Code.exe",-1),W=(0,n.QD)("code",null,"notepad++.exe",-1),x=(0,n.IL)('<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token comment">;将 Runany 主目录下的 RunAny.ini 文件内的「编辑」模块替换为下方命令</span>\n-编辑(&amp;Edit)\n --编程|cmd bat md ahk html js css json yml yaml py\n vscode|Code.exe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docsify-全文检索" tabindex="-1"><a class="header-anchor" href="#docsify-全文检索"><span>docsify 全文检索</span></a></h3>',2),_={href:"https://docsify.js.org/#/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/rockbenben/Blog_WP",target:"_blank",rel:"noopener noreferrer"},Y=(0,n.QD)("code",null,"docsify serve",-1),v=(0,n.QD)("code",null,"http://localhost:3000/",-1),z=(0,n.QD)("figure",null,[(0,n.QD)("img",{src:"https://img.newzone.top/2022-05-30-20-03-19.png?imageMogr2/format/webp",alt:"docsify 本地运行",tabindex:"0",loading:"lazy"}),(0,n.QD)("figcaption",null,"docsify 本地运行")],-1),A={href:"https://rockbenben.github.io/Blog_WP/",target:"_blank",rel:"noopener noreferrer"},E=(0,n.QD)("h2",{id:"订阅管理-wordpress",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#订阅管理-wordpress"},[(0,n.QD)("span",null,"订阅管理：WordPress")])],-1),S=(0,n.QD)("p",null,"40% 的网站基于 WordPress 架构，因此 WordPress 有超多的主题和插件，可以实现你想要的功能，比如 RSS、Newsletter。",-1),N={href:"https://substack.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zhubai.love/",target:"_blank",rel:"noopener noreferrer"},B=(0,n.QD)("h2",{id:"后续",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#后续"},[(0,n.QD)("span",null,"后续")])],-1),T=(0,n.QD)("p",null,"比起原来的 Jekyll，新方案的配置要复杂些，但使用并不难，推荐稿件多的人采用。",-1),G=(0,n.QD)("p",null,"折腾新方案的过程中，我发现了篇 2021 年初写的文章。当时，稿子写到 90%，我就去忙其他事，忘了这篇文章。等到这次被发现，它已经在草稿箱待了一年半。",-1),C=(0,n.QD)("p",null,"用了新方案，稿件管理会变得很简单，稿件遗忘、找不到的情况也会减少许多。最近我出稿速度大增，也都跟这有关，都是从草稿箱捡回来的半成品。",-1),L=(0,n.QD)("p",null,"写完这篇稿子，疫情封控也正好结束，终于可以出门了，希望永远别再给「免费假期」了。",-1),J={},K=(0,r(9720).c)(J,[["render",function(e,o){const r=(0,n.E1)("ExternalLinkIcon");return(0,n.Wz)(),(0,n.An)("div",null,[t,l,(0,n.QD)("p",null,[(0,n.mY)("2018 年，我偶然接触到 "),(0,n.QD)("a",i,[(0,n.mY)("Jekyll"),(0,n.K2)(r)]),(0,n.mY)("，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录转变到知识整理输出。Jekyll 方案需要首先在本地用 Markdown 编辑排版，然后同步到 github 发布，最后以 Markdown 格式手动分发到各个渠道。当文章较少时，这套方案的体验感特别好。​")]),a,(0,n.QD)("p",null,[(0,n.QD)("a",s,[(0,n.mY)("WordPressXMLRPCTools"),(0,n.K2)(r)]),(0,n.mY)(" 能用 Markdown 生成博客，推送更新到 Github 后，通过 Github Actions 自动将文章更新到 WordPress，并将 WordPress 网站的文章索引更新到 Github 仓库的 README.md，供搜索引擎收录，方便 Windows 用户使用。iOS 用户有更成熟的发布工具，无需代码即可到同步 WordPress，比如 @ern 推荐的 MWeb/Ulysses。")]),d,(0,n.QD)("ul",null,[p,(0,n.QD)("li",null,[(0,n.QD)("p",null,[(0,n.mY)("文章聚合页：主路径添加 "),c,(0,n.mY)("、"),h,(0,n.mY)(" 和 "),g,(0,n.mY)(" 三个文件，引入了文档生成工具 docsify，使得博客文章能聚合在一个页面，方便快速定位和位置管理。示例："),(0,n.QD)("a",m,[(0,n.mY)("https://rockbenben.github.io/Blog_WP/"),(0,n.K2)(r)]),(0,n.mY)("。")]),u])]),b,(0,n.QD)("ol",null,[(0,n.QD)("li",null,[(0,n.mY)("进入 "),(0,n.QD)("a",f,[(0,n.mY)("项目页面"),(0,n.K2)(r)]),(0,n.mY)("，点击「Use this template」，复制模板文件。")]),k,(0,n.QD)("li",null,[(0,n.mY)("按 "),(0,n.QD)("a",w,[(0,n.mY)("WordPressXMLRPCTools 安装步骤"),(0,n.K2)(r)]),(0,n.mY)(" 执行，如遇报错，查看下方使用问题。注意检查 WordPress 登录授权和 Github Actions secret，这两步极易遗漏。")]),y]),D,(0,n.QD)("p",null,[(0,n.QD)("a",P,[(0,n.mY)("RunAny"),(0,n.K2)(r)]),(0,n.mY)(" 是基于 AutoHotkey 的一键启动软件。按下方配置后，点击飞书表格中的「本地位置」，即可使用默认编辑器打开 md 文件。如果你的默认编辑器是 notepad++，则将下方命令中的 "),Q,(0,n.mY)(" 替换为 "),W,(0,n.mY)("。")]),x,(0,n.QD)("p",null,[(0,n.mY)("飞书表格可以搜索关键元素，但不能对检索全文。这时，我们需要使用 "),(0,n.QD)("a",_,[(0,n.mY)("docsify"),(0,n.K2)(r)]),(0,n.mY)("，一款能将 markdown 文档自动生成网站的工具，相当于轻量级的 GitBook。​")]),(0,n.QD)("p",null,[(0,n.mY)("docsify 使用简单，如果使用了前文我修改过的"),(0,n.QD)("a",M,[(0,n.mY)("发布工具"),(0,n.K2)(r)]),(0,n.mY)("，则无需配置。在发布工具文件夹内的空白区域，右键打开终端，执行命令"),Y,(0,n.mY)("即可生成全文检索网页，默认管理链接为 "),v,(0,n.mY)("。")]),z,(0,n.QD)("p",null,[(0,n.mY)("如果你设置了 Github Pages，项目会默认启动在线 docsify 网页，页面链接取决于 Github 的设置。比如我的用户名是 rockbenben，项目名是 Blog_WP，所以 docsify 管理页面就是 "),(0,n.QD)("a",A,[(0,n.mY)("https://rockbenben.github.io/Blog_WP/"),(0,n.K2)(r)]),(0,n.mY)("。")]),E,S,(0,n.QD)("p",null,[(0,n.mY)("如果你拥有较多的粉丝，可以使用 "),(0,n.QD)("a",N,[(0,n.mY)("Substack"),(0,n.K2)(r)]),(0,n.mY)(" 和"),(0,n.QD)("a",R,[(0,n.mY)("竹白"),(0,n.K2)(r)]),(0,n.mY)("来分发博客。这两者都支持 Newsletter 付费订阅。只针对国内用户的话，竹白可支持微信订阅。")]),B,T,G,C,L])}]]),j=JSON.parse('{"path":"/posts/2022-06-07-blog_md_to_wordpress.html","title":"集自动发布、本地管理于一身：WordPress 博客管理方案分享","lang":"zh-CN","frontmatter":{"title":"集自动发布、本地管理于一身：WordPress 博客管理方案分享","subtitle":"18 年博客探索总结","date":"2022-06-07T00:00:00.000Z","category":["博客"],"tag":["blog","github","WordPress"],"order":-47,"description":"博客探索 2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​ 2018 年，我偶然接触到 Jekyll，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2022-06-07-blog_md_to_wordpress.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"集自动发布、本地管理于一身：WordPress 博客管理方案分享"}],["meta",{"property":"og:description","content":"博客探索 2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​ 2018 年，我偶然接触到 Jekyll，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:54:57.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"集自动发布、本地管理于一身：WordPress 博客管理方案分享"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:tag","content":"WordPress"}],["meta",{"property":"article:published_time","content":"2022-06-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:54:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集自动发布、本地管理于一身：WordPress 博客管理方案分享\\",\\"image\\":[\\"https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/400x\\",\\"https://img.newzone.top/2022-05-26-20-12-56.png \\\\\\"docsify 页面效果\\\\\\"\\",\\"https://img.newzone.top/2022-05-26-20-36-56.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-05-30-19-00-15.png \\\\\\"难以管理的本地文档\\\\\\"\\",\\"https://img.newzone.top/2022-05-06-12-43-36.png \\\\\\"飞书表格视图\\\\\\"\\",\\"https://img.newzone.top/2022-05-06-12-28-41.png \\\\\\"飞书画册视图\\\\\\"\\",\\"https://img.newzone.top/2022-05-30-20-03-19.png?imageMogr2/format/webp\\"],\\"datePublished\\":\\"2022-06-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-16T06:54:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"博客探索","slug":"博客探索","link":"#博客探索","children":[]},{"level":2,"title":"博客方案","slug":"博客方案","link":"#博客方案","children":[]},{"level":2,"title":"WP 发布工具","slug":"wp-发布工具","link":"#wp-发布工具","children":[{"level":3,"title":"工具说明","slug":"工具说明","link":"#工具说明","children":[]},{"level":3,"title":"使用流程","slug":"使用流程","link":"#使用流程","children":[]}]},{"level":2,"title":"WP 发布常见问题","slug":"wp-发布常见问题","link":"#wp-发布常见问题","children":[{"level":3,"title":"文章发布不成功","slug":"文章发布不成功","link":"#文章发布不成功","children":[]},{"level":3,"title":"Error: git denied to github-actions[bot]","slug":"error-git-denied-to-github-actions-bot","link":"#error-git-denied-to-github-actions-bot","children":[]},{"level":3,"title":"Error: Process completed with exit code 1","slug":"error-process-completed-with-exit-code-1","link":"#error-process-completed-with-exit-code-1","children":[]},{"level":3,"title":"无法覆盖更新原文章 ​","slug":"无法覆盖更新原文章-​","link":"#无法覆盖更新原文章-​","children":[]},{"level":3,"title":"WordPress 发布时间与实际不符 ​","slug":"wordpress-发布时间与实际不符-​","link":"#wordpress-发布时间与实际不符-​","children":[]},{"level":3,"title":"有序列表编号有误","slug":"有序列表编号有误","link":"#有序列表编号有误","children":[]},{"level":3,"title":"无序列表只有一个层级","slug":"无序列表只有一个层级","link":"#无序列表只有一个层级","children":[]}]},{"level":2,"title":"本地管理 Markdown 文章","slug":"本地管理-markdown-文章","link":"#本地管理-markdown-文章","children":[{"level":3,"title":"飞书文档管理","slug":"飞书文档管理","link":"#飞书文档管理","children":[]},{"level":3,"title":"RunAny 文档直达 ​","slug":"runany-文档直达-​","link":"#runany-文档直达-​","children":[]},{"level":3,"title":"docsify 全文检索","slug":"docsify-全文检索","link":"#docsify-全文检索","children":[]}]},{"level":2,"title":"订阅管理：WordPress","slug":"订阅管理-wordpress","link":"#订阅管理-wordpress","children":[]},{"level":2,"title":"后续","slug":"后续","link":"#后续","children":[]}],"git":{"createdTime":1708066497000,"updatedTime":1708066497000,"contributors":[{"name":"ztinan1","email":"160204293+ztinan1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.37,"words":2812},"filePathRelative":"_posts/2022-06-07-blog_md_to_wordpress.md","localizedDate":"2022年6月7日","excerpt":"<h2>博客探索</h2>\\n<p>2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​</p>\\n<p>2018 年，我偶然接触到 <a href=\\"https://jekyllrb.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Jekyll</a>，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录转变到知识整理输出。Jekyll 方案需要首先在本地用 Markdown 编辑排版，然后同步到 github 发布，最后以 Markdown 格式手动分发到各个渠道。当文章较少时，这套方案的体验感特别好。​</p>","autoDesc":true}')}}]);