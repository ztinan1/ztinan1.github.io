"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8792],{9720:(e,t)=>{t.c=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},9680:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>F,data:()=>J});var n=o(3968);const a=(0,n.QD)("p",null,"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。",-1),s=(0,n.QD)("h2",{id:"home-assistant",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#home-assistant"},[(0,n.QD)("span",null,"Home Assistant")])],-1),r=(0,n.QD)("p",null,"Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。",-1),l=(0,n.QD)("p",null,"Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。",-1),i={href:"https://github.com/hacs/integration/releases/",target:"_blank",rel:"noopener noreferrer"},m=(0,n.QD)("li",null,"重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。",-1),c=(0,n.QD)("li",null,[(0,n.mY)("选择「HACS」>「集成」>「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。"),(0,n.QD)("sup",{class:"footnote-ref"},[(0,n.QD)("a",{href:"#footnote1"},"[1]"),(0,n.QD)("a",{class:"footnote-anchor",id:"footnote-ref1"})])],-1),h=(0,n.QD)("p",null,"Home Assistant 虽然一直被吹得很厉害，但即时性的传感器可能不能及时触发，使用时需要注意这点。",-1),d={href:"https://home.miot-spec.com/s/lumi.gateway.mgl03",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/AlexxIT/XiaomiGateway3",target:"_blank",rel:"noopener noreferrer"},u=(0,n.QD)("sup",{class:"footnote-ref"},[(0,n.QD)("a",{href:"#footnote2"},"[2]"),(0,n.QD)("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),f=(0,n.QD)("h2",{id:"node-red",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#node-red"},[(0,n.QD)("span",null,"Node-RED")])],-1),D={href:"https://github.com/node-red/node-red",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://bbs.iobroker.cn/t/topic/1165",target:"_blank",rel:"noopener noreferrer"},b=(0,n.QD)("li",null,[(0,n.mY)("部署 Node-RED 时，Node-RED 对存储文件夹的读写权限要求较高，Docker 部署的话需修改 data 的文件夹权限，为避免麻烦，我给了最高权限 "),(0,n.QD)("code",null,"chmod 777 /volume1/docker/nodered/data"),(0,n.mY)("。")],-1),g={href:"https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#prerequisites",target:"_blank",rel:"noopener noreferrer"},A=(0,n.QD)("ul",null,[(0,n.QD)("li",null,"选择「设置」>「节点管理」>「控制板」>「安装」，点击右侧刷新按钮，加载节点目录，第一次加载要比较长时间，不用关闭网页。"),(0,n.QD)("li",null,"搜索并安装「node-red-contrib-home-assistant-websocket」。")],-1),k=(0,n.QD)("li",null,"选择「Home Assistant」>「HACS」>「集成」>「浏览并下载存储库」，下载 Node-RED Companion。",-1),H=(0,n.QD)("li",null,"选择「Home Assistant」>「配置」>「设备与服务」>「集成」，添加集成 Node-RED Companion，然后重启 Home Assistant 容器。",-1),Y={href:"https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#configuration",target:"_blank",rel:"noopener noreferrer"},_=(0,n.QD)("sup",{class:"footnote-ref"},[(0,n.QD)("a",{href:"#footnote3"},"[3]"),(0,n.QD)("a",{class:"footnote-anchor",id:"footnote-ref3"})],-1),w=(0,n.IL)('<h3 id="常用节点" tabindex="-1"><a class="header-anchor" href="#常用节点"><span>常用节点</span></a></h3><ul><li>inject: 定时启动，周期性触发执行。</li><li>call service：改变智能设备状态，比如开灯。 <ul><li>Domain：触发方式</li><li>Service：触发命令</li><li>Device：设备与服务</li><li>Entity：设备执行模块</li></ul></li></ul><h2 id="自动化场景" tabindex="-1"><a class="header-anchor" href="#自动化场景"><span>自动化场景</span></a></h2><ul><li>记录主卧关灯时间，默认其为睡眠时间，但实际关掉是关电源，不会在智能后端记录。或者用明暗度测试记录，每天最后暗的时候，记录为睡眠时间。</li><li>书房检测到没人时，对电脑发送暂停视频的快捷键。这步卡在硬件，需要有个硬件能被 Node-RED 识别并给电脑发送按键。</li></ul><h2 id="智能硬件" tabindex="-1"><a class="header-anchor" href="#智能硬件"><span>智能硬件</span></a></h2><h3 id="zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt"><span>Zigbee2MQTT</span></a></h3>',6),y={href:"https://www.youtube.com/watch?v=R_CikjR7tiw",target:"_blank",rel:"noopener noreferrer"},N=(0,n.QD)("p",null,"不过，我的设备都是米家系，暂时用不到开源网关，等买了其他品牌的设备，再考虑 Zigbee2MQTT。",-1),v=(0,n.QD)("h3",{id:"智趣盒子",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#智趣盒子"},[(0,n.QD)("span",null,"智趣盒子")])],-1),R={href:"https://item.taobao.com/item.htm?id=635639747170",target:"_blank",rel:"noopener noreferrer"},T=(0,n.QD)("blockquote",null,[(0,n.QD)("p",null,"盒子基于 arm 的 linux 的 debian 系统上运行 docker，在 docker 的基础上构建了 supervisor 版本，跟 homeassistant 开发官方的 hassos 的最大差异就是打开了 root 的权限，可以在底层进行操作。这些比较适合国内的使用环境（网络改善，装第三方工具等）.")],-1),E=(0,n.QD)("p",null,"不过与 NAS 相比，智趣这类硬件盒子同样是 Docker 容器，除了能直连网关和想象中的简便攻略，并没什么其他优势。",-1),x=(0,n.QD)("h3",{id:"其他硬件",tabindex:"-1"},[(0,n.QD)("a",{class:"header-anchor",href:"#其他硬件"},[(0,n.QD)("span",null,"其他硬件")])],-1),z={href:"https://item.taobao.com/item.htm?id=631865647089",target:"_blank",rel:"noopener noreferrer"},K={href:"https://item.taobao.com/item.htm?id=675107124036",target:"_blank",rel:"noopener noreferrer"},C=(0,n.QD)("hr",{class:"footnotes-sep"},null,-1),M={class:"footnotes"},q={class:"footnotes-list"},j={id:"footnote1",class:"footnote-item"},S={href:"https://baijiahao.baidu.com/s?id=1721932088542289661",target:"_blank",rel:"noopener noreferrer"},X=(0,n.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Z={id:"footnote2",class:"footnote-item"},I={href:"https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-909031222",target:"_blank",rel:"noopener noreferrer"},P=(0,n.QD)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),L={id:"footnote3",class:"footnote-item"},G={href:"https://zhuanlan.zhihu.com/p/456741817",target:"_blank",rel:"noopener noreferrer"},O=(0,n.QD)("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),W={},F=(0,o(9720).c)(W,[["render",function(e,t){const o=(0,n.E1)("ExternalLinkIcon");return(0,n.Wz)(),(0,n.An)("div",null,[a,s,r,l,(0,n.QD)("ol",null,[(0,n.QD)("li",null,[(0,n.mY)("下载 "),(0,n.QD)("a",i,[(0,n.mY)("hacs"),(0,n.K2)(o)]),(0,n.mY)("，将其解压到 Home Assistant 配置的 config\\custom_components\\hacs 文件夹下。")]),m,c]),h,(0,n.QD)("blockquote",null,[(0,n.QD)("p",null,[(0,n.mY)("对于人体传感器、门磁、无线开关类设备，它们的状态通常为瞬时状态 (即：事件)，部分型号支持获取最后一次事件触发的时间，且默认轮询时长为 15 秒，对于无法获取最后触发事件的设备，即使修改轮询时间到 1 秒，也可能无法获取正确的状态。因此此类设备通过本插件集成后不太推荐用于触发实时自动化，仅适合作为如几分钟无人移动关灯这类自动化的条件。如果需要实时更新状态，推荐使用"),(0,n.QD)("a",d,[(0,n.mY)("多模网关"),(0,n.K2)(o)]),(0,n.mY)("配合 "),(0,n.QD)("a",p,[(0,n.mY)("XiaomiGateway3"),(0,n.K2)(o)]),(0,n.mY)(" 集成。"),u])]),f,(0,n.QD)("p",null,[(0,n.QD)("a",D,[(0,n.mY)("Node-RED"),(0,n.K2)(o)]),(0,n.mY)(" 是本地版的 IFTTT，能与 Home Assistant 打通，实现本地化的互联。新手推荐 "),(0,n.QD)("a",Q,[(0,n.mY)("node-red 的入门教程集合"),(0,n.K2)(o)]),(0,n.mY)("。")]),(0,n.QD)("ol",null,[b,(0,n.QD)("li",null,[(0,n.mY)("Node-RED 上安装 "),(0,n.QD)("a",g,[(0,n.mY)("node-red-contrib-home-assistant-websocket"),(0,n.K2)(o)]),(0,n.mY)("。 "),A]),k,H,(0,n.QD)("li",null,[(0,n.mY)("进入 nodered 页面，配置 "),(0,n.QD)("a",Y,[(0,n.mY)("home assistant websocket"),(0,n.K2)(o)]),(0,n.mY)("，点击右上角的部署。"),_])]),w,(0,n.QD)("p",null,[(0,n.QD)("a",y,[(0,n.mY)("Zigbee2MQTT"),(0,n.K2)(o)]),(0,n.mY)(" 是开源的智能网关，支持大部分的智能设备。其辐射范围更大，能同时联接 200 个设备，它的插网线版更稳定不易掉线。")]),N,v,(0,n.QD)("p",null,[(0,n.QD)("a",R,[(0,n.mY)("智趣盒子"),(0,n.K2)(o)]),(0,n.mY)("集成了 Home Assistant 和 Node-RED 的 Docker，Home Assistant 能部署 Addons、supervisor，能直接插开源网关。")]),T,E,x,(0,n.QD)("ul",null,[(0,n.QD)("li",null,[(0,n.QD)("a",z,[(0,n.mY)("远程键盘控制器"),(0,n.K2)(o)]),(0,n.mY)("：基于易微联的第三方产品，手机通过 APP 远程控制电脑按键，不过只能按一个按键或者连续 6 个的自定义键值。不确定是否支持 HA。")]),(0,n.QD)("li",null,[(0,n.QD)("a",K,[(0,n.mY)("MQTT 转 usb 虚拟键盘鼠标注入器"),(0,n.K2)(o)]),(0,n.mY)("：通过 wifi 来控制，店家不清楚 HA。")])]),C,(0,n.QD)("section",M,[(0,n.QD)("ol",q,[(0,n.QD)("li",j,[(0,n.QD)("p",null,[(0,n.QD)("a",S,[(0,n.mY)("从零开始，基于群晖轻松玩转开源 homeassistant 智能家居前期搭建"),(0,n.K2)(o)]),(0,n.mY)(),X])]),(0,n.QD)("li",Z,[(0,n.QD)("p",null,[(0,n.QD)("a",I,[(0,n.mY)("为什么设备状态会有延迟？如何减小延迟？"),(0,n.K2)(o)]),(0,n.mY)(),P])]),(0,n.QD)("li",L,[(0,n.QD)("p",null,[(0,n.QD)("a",G,[(0,n.mY)("树莓派 HomeAssistant 系列（四）NodeRed 安装配置"),(0,n.K2)(o)]),(0,n.mY)(),O])])])])])}]]),J=JSON.parse('{"path":"/family/HomeAutomation.html","title":"智能家居","lang":"zh-CN","frontmatter":{"article":false,"title":"智能家居","icon":"home","order":3.1,"description":"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hac...","head":[["meta",{"property":"og:url","content":"https://newzone.top/family/HomeAutomation.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"智能家居"}],["meta",{"property":"og:description","content":"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hac..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:54:57.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:54:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"智能家居\\",\\"description\\":\\"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hac...\\"}"]]},"headers":[{"level":2,"title":"Home Assistant","slug":"home-assistant","link":"#home-assistant","children":[]},{"level":2,"title":"Node-RED","slug":"node-red","link":"#node-red","children":[{"level":3,"title":"常用节点","slug":"常用节点","link":"#常用节点","children":[]}]},{"level":2,"title":"自动化场景","slug":"自动化场景","link":"#自动化场景","children":[]},{"level":2,"title":"智能硬件","slug":"智能硬件","link":"#智能硬件","children":[{"level":3,"title":"Zigbee2MQTT","slug":"zigbee2mqtt","link":"#zigbee2mqtt","children":[]},{"level":3,"title":"智趣盒子","slug":"智趣盒子","link":"#智趣盒子","children":[]},{"level":3,"title":"其他硬件","slug":"其他硬件","link":"#其他硬件","children":[]}]}],"git":{"createdTime":1708066497000,"updatedTime":1708066497000,"contributors":[{"name":"ztinan1","email":"160204293+ztinan1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"family/HomeAutomation.md","localizedDate":"2024年2月16日","excerpt":"<p>智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。</p>\\n<h2>Home Assistant</h2>\\n<p>Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。</p>\\n<p>Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。</p>\\n<ol>\\n<li>下载 <a href=\\"https://github.com/hacs/integration/releases/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">hacs</a>，将其解压到 Home Assistant 配置的 config\\\\custom_components\\\\hacs 文件夹下。</li>\\n<li>重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。</li>\\n<li>选择「HACS」&gt;「集成」&gt;「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n</a></ol>","autoDesc":true}')}}]);