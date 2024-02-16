"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[328],{9720:(e,r)=>{r.c=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},8870:(e,r,t)=>{t.r(r),t.d(r,{comp:()=>we,data:()=>ye});var n=t(3968);const l=(0,n.QD)("p",null,"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：",-1),o=(0,n.QD)("ul",null,[(0,n.QD)("li",null,"选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。"),(0,n.QD)("li",null,"选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时任务脚本。"),(0,n.QD)("li",null,"SSD 缓存对家用的 NAS 性能提升不大，没必要加。"),(0,n.QD)("li",null,"群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？"),(0,n.QD)("li",null,"NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。"),(0,n.QD)("li",null,"升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。")],-1),a=(0,n.QD)("h2",{id:"nas-套件",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#nas-套件"},[(0,n.QD)("span",null,"NAS 套件")])],-1),i={href:"https://spk7.imnks.com/",target:"_blank",rel:"noopener noreferrer"},s=(0,n.QD)("li",null,"DS/Transmission：用于 PT 下载 (禁用 DHT，半小时停止做种)。",-1),c=(0,n.QD)("li",null,"Synology Drive Server：电脑文件备份。",-1),d=(0,n.QD)("li",null,"Hyper Backup：本地多硬盘备份，防止一个硬盘丢失后重要文件损坏，比如 docker 容器的本地配置文件夹。",-1),u=(0,n.QD)("li",null,[(0,n.mY)("Surveillance Station：管理 IP 摄像机以保护您的家庭和办公环境。借助 Surveillance Station，您可以透过网络浏览器，VisualStation 或移动设备观看和记录实时视频，设置定时记录，回放记录的视频，从而实现远程监控。发生重要事件时，您也会收到通知。注意，摄像头需支持 "),(0,n.QD)("strong",null,"ONVIF 协议"),(0,n.mY)("。")],-1),p={href:"https://www.clouddrive2.com",target:"_blank",rel:"noopener noreferrer"},h=(0,n.QD)("code",null,"sudo sed -i 's/package/root/g' /var/packages/CloudDrive2/conf/privilege",-1),m=(0,n.IL)('<h2 id="docker-api" tabindex="-1"><a class="header-anchor" href="#docker-api"><span>Docker API</span></a></h2><p>如果你想跨设备、网络来管理 Docker，就需要开通 Docker API，它可以让你远程管理 Docker 容器和镜像。以下以群晖 NAS 为例：</p><ol><li>使用 SSH 修改文件 <code>sudo vi /var/packages/Docker/etc/dockerd.json</code>。</li><li>在其中加入一行 <code>&quot;hosts&quot; : [ &quot;tcp://0.0.0.0:2375&quot;, &quot;unix:///var/run/docker.sock&quot; ],</code>。建议将 tcp 的 ip 改为 nas 在本地的 ip，监听端口也不要使用默认的 2375。</li><li>重启 docker 服务。群晖里没找到重启命令，我这是手动停止 Docker 套件，再启动。</li></ol><h2 id="docker-容器" tabindex="-1"><a class="header-anchor" href="#docker-容器"><span>Docker 容器</span></a></h2><h3 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h3>',5),D={href:"https://registry.hub.docker.com/r/linuxserver/qbittorrent/",target:"_blank",rel:"noopener noreferrer"},f=(0,n.QD)("code",null,"BitTorrent - DHT",-1),k={href:"https://blog.csdn.net/weixin_45120915/article/details/114691473",target:"_blank",rel:"noopener noreferrer"},g=(0,n.QD)("code",null,"config/qBittorrent/qBittorrent.conf",-1),b=(0,n.QD)("code",null,"WebUI\\AuthSubnetWhitelist",-1),Q=(0,n.QD)("code",null,"0.0.0.0/0",-1),Y={href:"https://github.com/AragonSnow/qiandao",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/ckx000/get-cookies",target:"_blank",rel:"noopener noreferrer"},v=(0,n.QD)("li",null,[(0,n.QD)("a",{href:"/services/dockers-on-nas/mt-photos"},"MT Photos"),(0,n.mY)("：支持自动整理、分类您的照片，比如：时间、地点、人物、照片类型。需要 99 元买断服务，每周连线检查授权状态。比较喜欢的是，支持网页分享特定图片影集，适合将宝宝照片批量分享给家人。")],-1),A={href:"https://docs.photoprism.app/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/immich-app/immich",target:"_blank",rel:"noopener noreferrer"},_={href:"https://containrrr.dev/watchtower/",target:"_blank",rel:"noopener noreferrer"},w=(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.mY)("监控指定名称的镜像："),(0,n.QD)("code",null,"docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis"),(0,n.mY)("。本案例只更新名为「nginx」和「redis」的容器，其他容器将被忽略。")]),(0,n.QD)("li",null,[(0,n.mY)("指定容器的 compose 命令中添加 lable "),(0,n.QD)("code",null,"com.centurylinklabs.watchtower.enable=false"),(0,n.mY)("，可禁止该容器的监控和更新。")])],-1),y=(0,n.QD)("h3",{id:"资讯",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#资讯"},[(0,n.QD)("span",null,"资讯")])],-1),K=(0,n.QD)("li",null,"RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。",-1),T=(0,n.QD)("li",null,"Huginn：定期备份抓取脚本，数据库保存在本地。",-1),x={href:"https://registry.hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"},B=(0,n.QD)("li",null,[(0,n.mY)("Cloudflare Tunnels：可以将局域网内容转发到外网。不过，每次容器重启后都需要重新构建，"),(0,n.QD)("code",null,"sudo docker run --name cloudflared -d --restart unless-stopped cloudflare/cloudflared:latest tunnel --no-autoupdate run --token [Your Tokens]"),(0,n.mY)("。后期考虑是否将启动命令放入容器。")],-1),M={href:"https://github.com/easychen/checkchan-dist",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/dgtlmoon/changedetection.io",target:"_blank",rel:"noopener noreferrer"},z=(0,n.QD)("h3",{id:"娱乐",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#娱乐"},[(0,n.QD)("span",null,"娱乐")])],-1),q={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.navidrome.org/docs/installation/docker/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/Difegue/LANraragi",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/Difegue/LANraragi/blob/32cc991e8c5bae3bbd57d163278048c50159ae9f/tools/Documentation/advanced-usage/external-readers.md",target:"_blank",rel:"noopener noreferrer"},E=(0,n.QD)("li",null,[(0,n.QD)("a",{href:"/services/dockers-on-nas/tachidesk"},"Tachidesk"),(0,n.mY)("：开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。")],-1),R={href:"https://github.com/gotson/komga",target:"_blank",rel:"noopener noreferrer"},L=(0,n.QD)("li",null,[(0,n.QD)("a",{href:"/services/dockers-on-nas/reader"},"reader"),(0,n.mY)("：阅读 3 的服务器版，摆脱客户端，网页版即可查看。自定义替换进入文章页面左侧的「设置」-「过滤规则管理」。")],-1),$={href:"https://github.com/talebook/talebook",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/zzcabc/Docker_Buildx_Danmuji",target:"_blank",rel:"noopener noreferrer"},W={href:"https://hub.docker.com/r/makedie/noname_kill",target:"_blank",rel:"noopener noreferrer"},F={href:"https://hub.docker.com/r/gswxy/gswxy",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.gswxy.com/?p=67",target:"_blank",rel:"noopener noreferrer"},O=(0,n.QD)("h3",{id:"自动化",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#自动化"},[(0,n.QD)("span",null,"自动化")])],-1),U={href:"https://blog.csdn.net/alex_yangchuansheng/article/details/122295193",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/monicahq/monica",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/monicahq/docker",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.QD)("code",null,"Me as a contact",-1),ee={href:"https://supermanito.github.io/Helloworld/#/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/jxxghp/MoviePilot",target:"_blank",rel:"noopener noreferrer"},te={href:"https://github.com/Putarku/MoviePilot-Help",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://registry.hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc",target:"_blank",rel:"noopener noreferrer"},le={href:"https://rustdesk.com/zh/",target:"_blank",rel:"noopener noreferrer"},oe=(0,n.QD)("h3",{id:"待了解",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#待了解"},[(0,n.QD)("span",null,"待了解")])],-1),ae=(0,n.QD)("li",null,"Nextcloud: 私有云盘，完成 PC 端文件同步、版本控制，提供 web 端、移动端 app。",-1),ie={href:"https://github.com/lsky-org/lsky-pro",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/EstrellaXD/Auto_Bangumi",target:"_blank",rel:"noopener noreferrer"},ce=(0,n.QD)("li",null,"Clash：代理服务器。",-1),de=(0,n.QD)("h2",{id:"影视整理",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#影视整理"},[(0,n.QD)("span",null,"影视整理")])],-1),ue=(0,n.QD)("p",null,"下载文件后，用 tinyMediaManager 重命名并下载 NFO 和影视封面，最后放置于分类文件夹。",-1),pe={href:"https://www.tinymediamanager.org/download/",target:"_blank",rel:"noopener noreferrer"},he=(0,n.QD)("sup",{class:"footnote-ref"},[(0,n.QD)("a",{href:"#footnote1"},"[1]"),(0,n.QD)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),me=(0,n.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 电视节目重命名规则</span>\n季文件夹名：Season <span class="token variable">${seasonNr}</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - S<span class="token variable">${seasonNr2}</span>E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n\n<span class="token comment"># 当只有一季时，则更改重命名规则</span>\n季文件夹名：为空时，会自动调用默认值\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span>\n\n<span class="token comment"># 多季，有标题时</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nas-硬盘" tabindex="-1"><a class="header-anchor" href="#nas-硬盘"><span>NAS 硬盘</span></a></h2><p>插入新硬盘，新建储存空间，使用 Btrfs 或 Basic 格式。SHR 是群晖的智能 RAID 格式，不适用于硬盘容量不同的情况。</p><table><thead><tr><th>硬盘</th><th>容量</th><th>到期时间（5 年）</th></tr></thead><tbody><tr><td>硬盘 1</td><td>10T</td><td>2025-06-18</td></tr><tr><td>硬盘 2</td><td>4T</td><td>2023-01-24</td></tr><tr><td>硬盘 3</td><td>14T</td><td>2027-02-11</td></tr><tr><td>硬盘 4</td><td>8T</td><td>2026-01-06</td></tr><tr><td>冷备份</td><td>2T</td><td>2014-10</td></tr></tbody></table><p>换下的机械硬盘做冷备份，存储照片等长期数据。</p><p>硬盘临期后，用大容量硬盘替换。选择「存储池」&gt;「更改 RAID 类型」，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。</p><p>更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>共享文件迁移：选择「控制面板」&gt;「共享文件夹」，把你的共享文件夹位置修改到新储存空间。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><hr class="footnotes-sep">',9),De={class:"footnotes"},fe={class:"footnotes-list"},ke={id:"footnote1",class:"footnote-item"},ge={href:"https://post.smzdm.com/p/a0d67m2z/",target:"_blank",rel:"noopener noreferrer"},be=(0,n.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Qe={id:"footnote2",class:"footnote-item"},Ye={href:"https://www.bigzhang.com/3264.html",target:"_blank",rel:"noopener noreferrer"},Se=(0,n.QD)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),ve={id:"footnote3",class:"footnote-item"},Ae={href:"https://blog.csdn.net/hilaryfrank/article/details/109722319",target:"_blank",rel:"noopener noreferrer"},Ne=(0,n.QD)("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),_e={},we=(0,t(9720).c)(_e,[["render",function(e,r){const t=(0,n.E1)("ExternalLinkIcon"),_e=(0,n.E1)("RouteLink");return(0,n.Wz)(),(0,n.An)("div",null,[l,o,a,(0,n.QD)("p",null,[(0,n.mY)("除了官方套件源，我会加上 "),(0,n.QD)("a",i,[(0,n.mY)("DSM7.x 矿神 SPK 套件源"),(0,n.K2)(t)]),(0,n.mY)("。")]),(0,n.QD)("ul",null,[s,c,d,u,(0,n.QD)("li",null,[(0,n.QD)("a",p,[(0,n.mY)("CloudDrive2"),(0,n.K2)(t)]),(0,n.mY)("：可以将网盘挂载在本地。安装套件后，需 SSH 终端运行 "),h,(0,n.mY)("。")])]),m,(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("a",D,[(0,n.mY)("qBittorrent"),(0,n.K2)(t)]),(0,n.mY)("：请修改所有默认端口，以避免可能的错误。对于 PT 下载，请关闭 "),f,(0,n.mY)(" 和其他隐私选项，将做种时间缩短至一小时，并为下载文件添加 Everyone 权限。有关其他设置，请参考"),(0,n.QD)("a",k,[(0,n.mY)("群晖使用 qbittorrent"),(0,n.K2)(t)]),(0,n.mY)("。为了解决登录和密码问题，请先停止容器，并将 "),g,(0,n.mY)(" 文件中的 "),b,(0,n.mY)(" 设置为 "),Q,(0,n.mY)("，这样即可无需密码登录 qBittorrent WebUI。")]),(0,n.QD)("li",null,[(0,n.QD)("a",Y,[(0,n.mY)("qiandao"),(0,n.K2)(t)]),(0,n.mY)("：自动签到开源框架，需搭配浏览器扩展 "),(0,n.QD)("a",S,[(0,n.mY)("get-cookies"),(0,n.K2)(t)]),(0,n.mY)(" 使用，可导出配置。")]),v,(0,n.QD)("li",null,[(0,n.QD)("a",A,[(0,n.mY)("PhotoPrism"),(0,n.K2)(t)]),(0,n.mY)("：基于 ai 私有化部署的个人相册，但实际很多照片无法识别，无法对外分享。如果部署时出错，则尝试删除数据库文件夹下的内容。地点标记功能非常强大，类似本地版 Google Photos。")]),(0,n.QD)("li",null,[(0,n.QD)("a",N,[(0,n.mY)("Immich"),(0,n.K2)(t)]),(0,n.mY)(": 相册备份、浏览，提供 web 端、移动端 app。但不支持扫描已有文件。")]),(0,n.QD)("li",null,[(0,n.QD)("a",_,[(0,n.mY)("watchtower"),(0,n.K2)(t)]),(0,n.mY)("：监控并更新 Docker 容器。 "),w])]),y,(0,n.QD)("ul",null,[K,T,(0,n.QD)("li",null,[(0,n.mY)("Tiny Tiny RSS：定期备份订阅源和设置，自动更新，可配置全文插件 "),(0,n.QD)("a",x,[(0,n.mY)("mercury-parser-api"),(0,n.K2)(t)]),(0,n.mY)("。")]),B,(0,n.QD)("li",null,[(0,n.QD)("a",M,[(0,n.mY)("Check 酱"),(0,n.K2)(t)]),(0,n.mY)("：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。同类工具有 "),(0,n.QD)("a",P,[(0,n.mY)("changedetection.io"),(0,n.K2)(t)]),(0,n.mY)("。")])]),z,(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("a",q,[(0,n.mY)("AList"),(0,n.K2)(t)]),(0,n.mY)("：开源的网盘管理工具，还支持对象存储，本地存储，FTP 等等。")]),(0,n.QD)("li",null,[(0,n.QD)("a",I,[(0,n.mY)("Navidrome"),(0,n.K2)(t)]),(0,n.mY)("：NAS 上的私人专属在线音乐库。")]),(0,n.QD)("li",null,[(0,n.K2)(_e,{to:"/services/dockers-on-nas/"},{default:(0,n.Ql)((()=>[(0,n.mY)("Emby")])),_:1}),(0,n.mY)("/Plex：这两者都是热门的视频流媒体解决方案。终身会员的价格为 119 美元。Jellyfin 作为一个开源免费的选择，同样是一个不错的考虑。")]),(0,n.QD)("li",null,[(0,n.QD)("a",H,[(0,n.mY)("LANraragi"),(0,n.K2)(t)]),(0,n.mY)("：免费开源的漫画管理器，支持 zip/rar/targz/lzma/7z/xz/cbz/cbr/pdf 多种格式，可从网页和 "),(0,n.QD)("a",C,[(0,n.mY)("第三方客户端"),(0,n.K2)(t)]),(0,n.mY)(" 浏览。")]),E,(0,n.QD)("li",null,[(0,n.QD)("a",R,[(0,n.mY)("Komga"),(0,n.K2)(t)]),(0,n.mY)("：观看本地漫画。（还没用过，我习惯直接导入平板看）")]),L,(0,n.QD)("li",null,[(0,n.QD)("a",$,[(0,n.mY)("Tale Book"),(0,n.K2)(t)]),(0,n.mY)("：基于 Calibre 的简单的个人图书管理系统，支持在线阅读，但阅读体验不强且 Bug 较多，个人更喜欢直接用 PC 端查看。")]),(0,n.QD)("li",null,[(0,n.QD)("a",j,[(0,n.mY)("Bilibili_Danmuji"),(0,n.K2)(t)]),(0,n.mY)("：B 站直播礼物答谢、定时广告、关注感谢，自动回复工具，房管工具，自动打卡，Bilibili 直播弹幕姬 (使用 websocket 协议)，java 版 B 站弹幕姬。部署 Docker 时需更新 jdr release 文件。")]),(0,n.QD)("li",null,[(0,n.QD)("a",W,[(0,n.mY)("无名杀"),(0,n.K2)(t)]),(0,n.mY)("：部署在 NAS 上的三国杀游戏。")]),(0,n.QD)("li",null,[(0,n.QD)("a",F,[(0,n.mY)("GSWXY - 魔兽世界单机服务端"),(0,n.K2)(t)]),(0,n.mY)("：需要 2G 内存和 20G 硬盘空间。你也可以直接使用"),(0,n.QD)("a",G,[(0,n.mY)("耳语海岸 RP 服"),(0,n.K2)(t)]),(0,n.mY)("。")])]),O,(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("a",U,[(0,n.mY)("n8n"),(0,n.K2)(t)]),(0,n.mY)("：开源 IFTTT 工具，偏重于云服务。")]),(0,n.QD)("li",null,[(0,n.K2)(_e,{to:"/family/HomeAutomation.html#node-red"},{default:(0,n.Ql)((()=>[(0,n.mY)("Node-RED")])),_:1}),(0,n.mY)("：开源流处理，类似本地版的 IFTTT。")]),(0,n.QD)("li",null,[(0,n.QD)("a",V,[(0,n.mY)("Home Assistant"),(0,n.K2)(t)]),(0,n.mY)("：开源家庭自动化平台，可自定义集中管理各品牌的智能家居设备。米家设备需使用 hacs 下的集成 "),(0,n.K2)(_e,{to:"/family/HomeAutomation.html#home-assistant"},{default:(0,n.Ql)((()=>[(0,n.mY)("Xiaomi Miot Auto")])),_:1}),(0,n.mY)("。")]),(0,n.QD)("li",null,[(0,n.QD)("a",X,[(0,n.mY)("Monica"),(0,n.K2)(t)]),(0,n.mY)("：Monica 允许人们记录所有关于朋友和家人的重要事情。喜欢和他们一起的活动。你最后一次打电话给某人的时候，你们谈了些什么。它会帮助你记住他们孩子的名字和年龄。它还能提醒你打电话给一个很久没联系的人。Monica 的容器设置查看 "),(0,n.QD)("a",J,[(0,n.mY)("Monica Docker"),(0,n.K2)(t)]),(0,n.mY)("。"),Z,(0,n.mY)(" 是它常年的一个 bug，可以通过指定数据库中的 users.me_contact_id 来解决。")]),(0,n.QD)("li",null,[(0,n.QD)("a",ee,[(0,n.mY)("supermanito/Helloworld"),(0,n.K2)(t)]),(0,n.mY)("：京东签到等脚本，功能很强大，没怎么研究。")]),(0,n.QD)("li",null,[(0,n.QD)("a",re,[(0,n.mY)("MoviePilot"),(0,n.K2)(t)]),(0,n.mY)(" 是 NAStool 作者重新推出的 NAS 媒体库自动化管理工具，使用说明参考 "),(0,n.QD)("a",te,[(0,n.mY)("MoviePilot-Help"),(0,n.K2)(t)]),(0,n.mY)("。个人使用并不习惯使用，可能是我设置错了，使用后反而把媒体结构弄乱了。")]),(0,n.QD)("li",null,[(0,n.QD)("a",ne,[(0,n.mY)("ubuntu-desktop-lxde-vnc"),(0,n.K2)(t)]),(0,n.mY)("：能在 Docker 上运行的 Ubuntu 桌面版，适合挂载要长期运行的程序。测试 OBS 时，对内存要求不高，但 CPU 直冲 100%，fps 只有 7。")]),(0,n.QD)("li",null,[(0,n.QD)("a",le,[(0,n.mY)("RustDesk"),(0,n.K2)(t)]),(0,n.mY)("：自建远程桌面，平替 TeamViewer 的开源软件。矿神源有套件，可直接部署中继服务器。")])]),oe,(0,n.QD)("ul",null,[ae,(0,n.QD)("li",null,[(0,n.QD)("a",ie,[(0,n.mY)("兰空图床"),(0,n.K2)(t)]),(0,n.mY)("：图床已经部署在七牛云，用 Picgo 上传，没感觉有必要用它。")]),(0,n.QD)("li",null,[(0,n.QD)("a",se,[(0,n.mY)("AutoBangumi"),(0,n.K2)(t)]),(0,n.mY)("：自动追番器，用以替代自我审查的 Bilibili。")]),ce]),de,ue,(0,n.QD)("p",null,[(0,n.QD)("a",pe,[(0,n.mY)("tinyMediaManager"),(0,n.K2)(t)]),(0,n.mY)(" v4 免费版足够个人使用，v3 作偶尔补充使用，搜索首选语言改为「大陆简体」更精准。"),he]),me,(0,n.QD)("section",De,[(0,n.QD)("ol",fe,[(0,n.QD)("li",ke,[(0,n.QD)("p",null,[(0,n.QD)("a",ge,[(0,n.mY)("群晖 NAS 使用 Emby+tMM 打造全平台观影畅爽体验（附下载地址）"),(0,n.K2)(t)]),(0,n.mY)(),be])]),(0,n.QD)("li",Qe,[(0,n.QD)("p",null,[(0,n.QD)("a",Ye,[(0,n.mY)("如何把群晖 NAS 上的套件搬到另外个硬盘上"),(0,n.K2)(t)]),(0,n.mY)(),Se])]),(0,n.QD)("li",ve,[(0,n.QD)("p",null,[(0,n.QD)("a",Ae,[(0,n.mY)("群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)"),(0,n.K2)(t)]),(0,n.mY)(),Ne])])])])])}]]),ye=JSON.parse('{"path":"/services/NAS.html","title":"NAS","lang":"zh-CN","frontmatter":{"article":false,"title":"NAS","icon":"process","order":1,"description":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/NAS.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"NAS"}],["meta",{"property":"og:description","content":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:54:57.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:54:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"NAS\\",\\"description\\":\\"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时...\\"}"]]},"headers":[{"level":2,"title":"NAS 套件","slug":"nas-套件","link":"#nas-套件","children":[]},{"level":2,"title":"Docker API","slug":"docker-api","link":"#docker-api","children":[]},{"level":2,"title":"Docker 容器","slug":"docker-容器","link":"#docker-容器","children":[{"level":3,"title":"常用","slug":"常用","link":"#常用","children":[]},{"level":3,"title":"资讯","slug":"资讯","link":"#资讯","children":[]},{"level":3,"title":"娱乐","slug":"娱乐","link":"#娱乐","children":[]},{"level":3,"title":"自动化","slug":"自动化","link":"#自动化","children":[]},{"level":3,"title":"待了解","slug":"待了解","link":"#待了解","children":[]}]},{"level":2,"title":"影视整理","slug":"影视整理","link":"#影视整理","children":[]},{"level":2,"title":"NAS 硬盘","slug":"nas-硬盘","link":"#nas-硬盘","children":[]}],"git":{"createdTime":1708066497000,"updatedTime":1708066497000,"contributors":[{"name":"ztinan1","email":"160204293+ztinan1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.66,"words":2599},"filePathRelative":"services/NAS.md","localizedDate":"2024年2月16日","excerpt":"<p>NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：</p>\\n<ul>\\n<li>选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。</li>\\n<li>选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。</li>\\n<li>SSD 缓存对家用的 NAS 性能提升不大，没必要加。</li>\\n<li>群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？</li>\\n<li>NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。</li>\\n<li>升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。</li>\\n</ul>","autoDesc":true}')}}]);