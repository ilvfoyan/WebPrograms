var mocoplayer=function(e,t){var n="//moco.imooc.com/player/api/visitlog.html",r={url:"",image:"",volume:1,rate:1,title:"",showAd:!1,currentTime:0,events:{onReady:function(){},onbeforeComplete:function(){},onComplete:function(){}},plugin:{}},r=$.extend(r,t),i=function(e){var t=mocoplayer.config.get();$.ajax({url:n,data:{code:e,level:t.level,cdn:t.cdn,primary:"flash"==t.primary?1:0,rate:t.rate},cache:!1,dataType:"jsonp"})},a=function(){};return t.events&&t.events.onError&&(a=t.events.onError),r.events.onError=function(t){i(t);var n=mocoplayer.error(e,t);a(n)},i("00000000"),new mocoplayer.init(e,r)};!function(e){var t=e.utils=function(){};t.styleLoader=function(e,t){t=t||function(){};var n=document.getElementsByTagName("head")[0];if(n){var r=document.createElement("link");r.setAttribute("href",e),r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css");var i=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||t()};r.onreadystatechange=i,r.onload=t,n.appendChild(r)}},t.scriptLoader=function(e,t){t=t||function(){};var n=document.getElementsByTagName("head")[0];if(n){var r=document.createElement("script");r.setAttribute("src",e),r.setAttribute("type","text/javascript");var i=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||t()};r.onreadystatechange=i,r.onload=t,n.appendChild(r)}},t.getScriptPath=function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var r=t[n].src;if(r&&r.indexOf(e)>=0)return r.substr(0,r.indexOf(e))}return""},t.isSafari=function(){var e=navigator.vendor,t=navigator.userAgent;return e&&e.indexOf("Apple")>-1&&t&&!t.match("CriOS")},t.isIOS=function(){var e=navigator.userAgent;return!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},t.isIE=function(){var e=0;if(window.ActiveXObject||"ActiveXObject"in window){var t=navigator.userAgent;if(/MSIE \d+\.\d+/.test(t)){var n=/MSIE (\d+\.\d+)/.exec(t);e=n[1]}else if(t.match(/Trident/)&&t.match(/rv/)){var n=/rv:(\d+\.\d+)/.exec(t);e=n[1]}}return e},t.hlsSupported=function(){return window.MediaSource=window.MediaSource||window.WebKitMediaSource,window.MediaSource&&"function"==typeof window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')},t.ieTest=function(){var e=!1,n=navigator.userAgent;return t.isIE()&&(e=!0,t.isIE()>=11&&(n.indexOf("Windows NT 6.4")>-1||n.indexOf("Windows NT 10")>-1)&&(e=!1)),e},t.html5CanPlay=function(){var e=!1,n=navigator.userAgent.toLowerCase();if(document.createElement("video").canPlayType){e=!0;var n=navigator.userAgent.toLowerCase();(n.match(/chrome\/(\d+)/)&&parseInt(RegExp.$1,10)<45||t.ieTest())&&(e=!1)}return e},t.flashCanPlay=function(){return swfobject.hasFlashPlayerVersion("11")},t.setCookie=function(e,t,n){var r=new Date;r.setDate(r.getDate()+n),document.cookie=e+"="+t+";domain=imooc.com;path=/;expires="+r},t.getCookie=function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},t.EventEmitter=function(){this.fns={},this.on=function(e,t,n){"function"==typeof t&&(n=t,t=this),this.fns[e]||(this.fns[e]=[]),n.ctx=t,this.fns[e].push(n)},this.emit=function(e,t){var n=this.fns[e];if("undefined"==typeof n)return!1;for(var r=0;r<n.length;r++)n[r].call(n[r].ctx,t)}},t.isFeesCourse=function(t){return t=t||e.config.get().feesCourse,t.indexOf(location.hostname)>=0},t.getProtocol=function(){return window.location.protocol}}(mocoplayer);var swfobject=function(){function e(){if(!W){try{var e=F.getElementsByTagName("body")[0].appendChild(h("span"));e.parentNode.removeChild(e)}catch(e){return}W=!0;for(var t=B.length,n=0;n<t;n++)B[n]()}}function t(e){W?e():B[B.length]=e}function n(e){if(typeof O.addEventListener!=A)O.addEventListener("load",e,!1);else if(typeof F.addEventListener!=A)F.addEventListener("load",e,!1);else if(typeof O.attachEvent!=A)y(O,"onload",e);else if("function"==typeof O.onload){var t=O.onload;O.onload=function(){t(),e()}}else O.onload=e}function r(){_?i():a()}function i(){var e=F.getElementsByTagName("body")[0],t=h($);t.setAttribute("type",N);var n=e.appendChild(t);if(n){var r=0;!function(){if(typeof n.GetVariable!=A){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),J.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(r<10)return r++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,a()}()}else a()}function a(){var e=D.length;if(e>0)for(var t=0;t<e;t++){var n=D[t].id,r=D[t].callbackFn,i={success:!1,id:n};if(J.pv[0]>0){var a=v(n);if(a)if(!g(D[t].swfVersion)||J.wk&&J.wk<312)if(D[t].expressInstall&&l()){var u={};u.data=D[t].expressInstall,u.width=a.getAttribute("width")||"0",u.height=a.getAttribute("height")||"0",a.getAttribute("class")&&(u.styleclass=a.getAttribute("class")),a.getAttribute("align")&&(u.align=a.getAttribute("align"));for(var f={},d=a.getElementsByTagName("param"),p=d.length,m=0;m<p;m++)"movie"!=d[m].getAttribute("name").toLowerCase()&&(f[d[m].getAttribute("name")]=d[m].getAttribute("value"));s(u,f,n,r)}else c(a),r&&r(i);else b(n,!0),r&&(i.success=!0,i.ref=o(n),r(i))}else if(b(n,!0),r){var h=o(n);h&&typeof h.SetVariable!=A&&(i.success=!0,i.ref=h),r(i)}}}function o(e){var t=null,n=v(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=A)t=n;else{var r=n.getElementsByTagName($)[0];r&&(t=r)}return t}function l(){return!z&&g("6.0.65")&&(J.win||J.mac)&&!(J.wk&&J.wk<312)}function s(e,t,n,r){z=!0,S=r||null,E={success:!1,id:n};var i=v(n);if(i){"OBJECT"==i.nodeName?(T=u(i),x=null):(T=i,x=n),e.id=I,(typeof e.width==A||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==A||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),F.title=F.title.slice(0,47)+" - Flash Player Installation";var a=J.ie&&J.win?"ActiveX":"PlugIn",o="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+a+"&MMdoctitle="+F.title;if(typeof t.flashvars!=A?t.flashvars+="&"+o:t.flashvars=o,J.ie&&J.win&&4!=i.readyState){var l=h("div");n+="SWFObjectNew",l.setAttribute("id",n),i.parentNode.insertBefore(l,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()}f(e,t,n)}}function c(e){if(J.ie&&J.win&&4!=e.readyState){var t=h("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(u(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(u(e),e)}function u(e){var t=h("div");if(J.win&&J.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName($)[0];if(n){var r=n.childNodes;if(r)for(var i=r.length,a=0;a<i;a++)1==r[a].nodeType&&"PARAM"==r[a].nodeName||8==r[a].nodeType||t.appendChild(r[a].cloneNode(!0))}}return t}function f(e,t,n){var r,i=v(n);if(J.wk&&J.wk<312)return r;if(i)if(typeof e.id==A&&(e.id=n),J.ie&&J.win){var a="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?a+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(a+=" "+o+'="'+e[o]+'"'));var l="";for(var s in t)t[s]!=Object.prototype[s]&&(l+='<param name="'+s+'" value="'+t[s]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>",R[R.length]=e.id,r=v(e.id)}else{var c=h($);c.setAttribute("type",N);for(var u in e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?c.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&c.setAttribute(u,e[u]));for(var f in t)t[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&d(c,f,t[f]);i.parentNode.replaceChild(c,i),r=c}return r}function d(e,t,n){var r=h("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function p(e){var t=v(e);t&&"OBJECT"==t.nodeName&&(J.ie&&J.win?(t.style.display="none",function(){4==t.readyState?m(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function m(e){var t=v(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function v(e){var t=null;try{t=F.getElementById(e)}catch(e){}return t}function h(e){return F.createElement(e)}function y(e,t,n){e.attachEvent(t,n),V[V.length]=[e,t,n]}function g(e){var t=J.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function w(e,t,n,r){if(!J.ie||!J.mac){var i=F.getElementsByTagName("head")[0];if(i){var a=n&&"string"==typeof n?n:"screen";if(r&&(k=null,j=null),!k||j!=a){var o=h("style");o.setAttribute("type","text/css"),o.setAttribute("media",a),k=i.appendChild(o),J.ie&&J.win&&typeof F.styleSheets!=A&&F.styleSheets.length>0&&(k=F.styleSheets[F.styleSheets.length-1]),j=a}J.ie&&J.win?k&&typeof k.addRule==$&&k.addRule(e,t):k&&typeof F.createTextNode!=A&&k.appendChild(F.createTextNode(e+" {"+t+"}"))}}}function b(e,t){if(X){var n=t?"visible":"hidden";W&&v(e)?v(e).style.visibility=n:w("#"+e,"visibility:"+n)}}function C(e){var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=A?encodeURIComponent(e):e}var T,x,S,E,k,j,A="undefined",$="object",L="Shockwave Flash",M="ShockwaveFlash.ShockwaveFlash",N="application/x-shockwave-flash",I="SWFObjectExprInst",P="onreadystatechange",O=window,F=document,H=navigator,_=!1,B=[r],D=[],R=[],V=[],W=!1,z=!1,X=!0,J=function(){var e=typeof F.getElementById!=A&&typeof F.getElementsByTagName!=A&&typeof F.createElement!=A,t=H.userAgent.toLowerCase(),n=H.platform.toLowerCase(),r=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),a=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),o=!1,l=[0,0,0],s=null;if(typeof H.plugins!=A&&typeof H.plugins[L]==$)s=H.plugins[L].description,!s||typeof H.mimeTypes!=A&&H.mimeTypes[N]&&!H.mimeTypes[N].enabledPlugin||(_=!0,o=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(s.replace(/^(.*)\..*$/,"$1"),10),l[1]=parseInt(s.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(s)?parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof O.ActiveXObject!=A)try{var c=new ActiveXObject(M);c&&(s=c.GetVariable("$version"),s&&(o=!0,s=s.split(" ")[1].split(","),l=[parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)]))}catch(e){}return{w3:e,pv:l,wk:a,ie:o,win:r,mac:i}}();(function(){J.w3&&((typeof F.readyState!=A&&"complete"==F.readyState||typeof F.readyState==A&&(F.getElementsByTagName("body")[0]||F.body))&&e(),W||(typeof F.addEventListener!=A&&F.addEventListener("DOMContentLoaded",e,!1),J.ie&&J.win&&(F.attachEvent(P,function(){"complete"==F.readyState&&(F.detachEvent(P,arguments.callee),e())}),O==top&&!function(){if(!W){try{F.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}e()}}()),J.wk&&!function(){if(!W)return/loaded|complete/.test(F.readyState)?void e():void setTimeout(arguments.callee,0)}(),n(e)))})(),function(){J.ie&&J.win&&window.attachEvent("onunload",function(){for(var e=V.length,t=0;t<e;t++)V[t][0].detachEvent(V[t][1],V[t][2]);for(var n=R.length,r=0;r<n;r++)p(R[r]);for(var i in J)J[i]=null;J=null;for(var a in swfobject)swfobject[a]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(J.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,D[D.length]=i,b(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(J.w3)return o(e)},embedSWF:function(e,n,r,i,a,o,c,u,d,p){var m={success:!1,id:n};J.w3&&!(J.wk&&J.wk<312)&&e&&n&&r&&i&&a?(b(n,!1),t(function(){r+="",i+="";var t={};if(d&&typeof d===$)for(var v in d)t[v]=d[v];t.data=e,t.width=r,t.height=i;var h={};if(u&&typeof u===$)for(var y in u)h[y]=u[y];if(c&&typeof c===$)for(var w in c)typeof h.flashvars!=A?h.flashvars+="&"+w+"="+c[w]:h.flashvars=w+"="+c[w];if(g(a)){var C=f(t,h,n);t.id==n&&b(n,!0),m.success=!0,m.ref=C}else{if(o&&l())return t.data=o,void s(t,h,n,p);b(n,!0)}p&&p(m)})):p&&p(m)},switchOffAutoHideShow:function(){X=!1},ua:J,getFlashPlayerVersion:function(){return{major:J.pv[0],minor:J.pv[1],release:J.pv[2]}},hasFlashPlayerVersion:g,createSWF:function(e,t,n){return J.w3?f(e,t,n):void 0},showExpressInstall:function(e,t,n,r){J.w3&&l()&&s(e,t,n,r)},removeSWF:function(e){J.w3&&p(e)},createCSS:function(e,t,n,r){J.w3&&w(e,t,n,r)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=F.location.search||F.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return C(t);for(var n=t.split("&"),r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return C(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(z){var e=v(I);e&&T&&(e.parentNode.replaceChild(T,e),x&&(b(x,!0),J.ie&&J.win&&(T.style.display="block")),S&&S(E)),z=!1}}}}();!function(e,t){e.store=t()}(this,function(){function e(){try{return a in r&&r[a]}catch(e){return!1}}var t,n={},r="undefined"!=typeof window?window:global,i=r.document,a="localStorage",o="script";if(n.disabled=!1,n.version="1.3.20",n.set=function(e,t){},n.get=function(e,t){},n.has=function(e){return void 0!==n.get(e)},n.remove=function(e){},n.clear=function(){},n.transact=function(e,t,r){null==r&&(r=t,t=null),null==t&&(t={});var i=n.get(e,t);r(i),n.set(e,i)},n.getAll=function(){},n.forEach=function(){},n.serialize=function(e){return JSON.stringify(e)},n.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=r[a],n.set=function(e,r){return void 0===r?n.remove(e):(t.setItem(e,n.serialize(r)),r)},n.get=function(e,r){var i=n.deserialize(t.getItem(e));return void 0===i?r:i},n.remove=function(e){t.removeItem(e)},n.clear=function(){t.clear()},n.getAll=function(){var e={};return n.forEach(function(t,n){e[t]=n}),e},n.forEach=function(e){for(var r=0;r<t.length;r++){var i=t.key(r);e(i,n.get(i))}};else if(i&&i.documentElement.addBehavior){var l,s;try{s=new ActiveXObject("htmlfile"),s.open(),s.write("<"+o+">document.w=window</"+o+'><iframe src="/favicon.ico"></iframe>'),s.close(),l=s.w.frames[0].document,t=l.createElement("div")}catch(e){t=i.createElement("div"),l=i.body}var c=function(e){return function(){var r=Array.prototype.slice.call(arguments,0);r.unshift(t),l.appendChild(t),t.addBehavior("#default#userData"),t.load(a);var i=e.apply(n,r);return l.removeChild(t),i}},u=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),f=function(e){return e.replace(/^d/,"___$&").replace(u,"___")};n.set=c(function(e,t,r){return t=f(t),void 0===r?n.remove(t):(e.setAttribute(t,n.serialize(r)),e.save(a),r)}),n.get=c(function(e,t,r){t=f(t);var i=n.deserialize(e.getAttribute(t));return void 0===i?r:i}),n.remove=c(function(e,t){t=f(t),e.removeAttribute(t),e.save(a)}),n.clear=c(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(a);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(a)}),n.getAll=function(e){var t={};return n.forEach(function(e,n){t[e]=n}),t},n.forEach=c(function(e,t){for(var r,i=e.XMLDocument.documentElement.attributes,a=0;r=i[a];++a)t(r.name,n.deserialize(e.getAttribute(r.name)))})}try{var d="__storejs__";n.set(d,d),n.get(d)!=d&&(n.disabled=!0),n.remove(d)}catch(e){n.disabled=!0}return n.enabled=!n.disabled,n}),!function(e){var t={M0x00000:"视频播放器错误",M0x00001:"视频地址错误",M0x00002:"can not found container",M0x00003:"未安装Flash或Flash版本过低，为了更好的播放体验，建议安装最新版chrome或firefox浏览器 <a href='//www.imooc.com/static/html/browser.html'>下载浏览器</a>",H0x00001:"You aborted the video playback",H0x00003:"A network error caused the video download to fail part-way",H0x00004:"视频解析失败，推荐使用最新版chrome或者firefox浏览器观看视频",H0x00007:"CDN连接失败，请联系慕课网。异常反馈群：230569067",H0x00008:"CDN连接失败，请重新选择CDN线路",H0x10000:"视频播放器错误：HlsError",H0x10001:"LoadError：视频资源加载错误",H0x10002:"ParsingError：视频解析错误",H0x10003:"视频加载失败",H0x10004:"您使用的火狐浏览器没有开启MediaSource。请在浏览器栏输入about:config做如下设置<br>media.mediasource.enabled=true<br>media.mediasource.mp4.enabled=true<br>media.mediasource.whitelist=false",H0x10005:"您的浏览器不支持MediaSourceExtension / MP4 mediasource，建议安装最新版chrome或firefox浏览器 <a href='//www.imooc.com/static/html/browser.html'>下载浏览器</a>",F0x00007:"CDN连接失败，请联系慕课网。异常反馈群：230569067",F0x10002:"ParsingError：视频解析错误",F0x00001:"参数错误",F0x00002:"没有域名",F0x00008:"CDN连接失败，请重新选择CDN线路"};e.error=function(e,n){if("object"==typeof n){if(1==n.length&&"00x"==n[0].substr(0,3))return n}else if("00x"==n.substr(0,3))return n;var r=$(e);if(r.length){var i=r.width(),a=r.height(),o=n,l=[];if("object"==typeof n){o=n.join(",");for(var s=0;s<n.length;s++)t[n[s]]&&l.push(t[n[s]]);0==l.length&&l.push(t.M0x00000)}else l.push(t[o]||t.M0x00000);$(".mocoplayer-error").length&&$(".mocoplayer-error").remove(),$(e).prepend('<div class="mocoplayer-error" style="width:'+i+"px;height:"+a+'px">\t\t\t\t\t\t\t\t\t<div class="mocoplayer-error-content">\t\t\t\t\t\t\t\t\t\t<span>'+o+"</span>"+l.join("<br>")+'<br><a href="//www.imooc.com/about/faq" target="_blank">常见问题</a>　<a href="//www.imooc.com/user/feedback" target="_blank">意见反馈</a>　<a href="javascript:;" class="acdn" onclick="mocoplayer.reHTML.getCdnTestHTML(true);" target="_blank">选择CDN线路</a></div>\t\t\t\t\t\t\t\t</div>')}return n}}(mocoplayer),!function(e){var t={version:"2.7",playbackRates:["1.0","1.25","1.5","1.75","2.0"],line:[{name:"线路1",cdn:"aliyun",disabled:!1},{name:"线路2",cdn:"letv",disabled:!1},{name:"线路3",cdn:"aliyun1",disabled:!1},{name:"错误上报",cdn:"error",disabled:!0}],levels:[{id:"L",name:"普清",disabled:!1},{id:"M",name:"高清",disabled:!1},{id:"H",name:"超清",disabled:!1}],level:e.utils.isFeesCourse(["coding.imooc.com","class.imooc.com"])?3:2,cdn:2,model:{flash:e.utils.flashCanPlay(),html5:e.utils.html5CanPlay()},exe:"m3u8",feesCourse:["coding.imooc.com","class.imooc.com"]};e.config={playerSrc:{html5:e.utils.getScriptPath("mocoplayer.js")+"mocoplayer.html5.js?v="+t.version,css:e.utils.getScriptPath("mocoplayer.js")+"mocoplayer.css?v="+t.version,flash:e.utils.getScriptPath("mocoplayer.js")+"mocoplayer.flash.js?v="+t.version,swf:e.utils.getScriptPath("mocoplayer.js")+"mocoplayer.swf?v="+t.version,ios:e.utils.getScriptPath("mocoplayer.js")+"mocoplayer.ios.js?v="+t.version,iosnoplay:e.utils.getScriptPath("mocoplayer.js")+"iosnoplay.jpg?v="+t.version},levelToInt:function(e){for(var n=0,r=0;r<t.levels.length;r++)t.levels[r].id==e&&(n=r);return n+1},levelToString:function(e){var n="A";return t.levels[e]&&(n=t.levels[e].id),n},get:function(){var e=store.get("mocoplayer_conf")||{level:t.level};if(e.level?(isNaN(e.level)||e.level>3||e.level<0?e.level=1:e.level=parseInt(e.level),0===e.level&&(e.level=t.level)):e.level=t.level,e.cdn&&(isNaN(e.cdn)||e.cdn>t.line.length-1||e.cdn<0?e.cdn=t.cdn:e.cdn=parseInt(e.cdn)),e.primary&&"html5"!=e.primary&&"flash"!=e.primary&&(e.primary="html5"),e.rate){for(var n=0,r=0;r<t.playbackRates.length;r++)e.rate==t.playbackRates[r]&&(n=1);n||(e.rate=1)}return $.extend(t,e)},set:function(e,t){var n=store.get("mocoplayer_conf")||{};n[e]=t,store.set("mocoplayer_conf",n)},rm:function(e){var t=store.get("mocoplayer_conf")||{};delete t[e],store.set("mocoplayer_conf",t)},setLevelsState:function(e){for(var n=t.levels,r=0;r<n.length;r++)n[r].id==e&&(t.levels[r].disabled=!0)}}}(mocoplayer),!function(e){e.reHTML={getCdnTestHTML:function(t){var n=store.get("mocoplayer_conf")||{},r="";if(n.ManualSwitchCdn)var r=n.cdn||0;var i=['<div class="switch-cdn-line-wrap" id="switchCdnLineWrap">','<iframe class="report-wrap" src="/mocoplayer/report2.html?cdn='+r+'"></iframe>',"</div>"].join("");return t?$("#switchCdnLineWrap")[0]?($("#switchCdnLineWrap").remove(),!1):void $(e.container).css("position","relative").append(i):i},switchHtmlPlayerBut:function(t){if(t)return void $(".switch-html-button").remove();var n=function(){var t=$(e.container).height()/2+60;$(".switch-html-button").css("top",t)},r='<div class="switch-html-button">切换到html播放器</div>';$(e.container).prepend(r),n(),$(window).on("resize",n),$(".switch-html-button").on("click",function(){e.config.set("primary","html5"),window.location.reload(!0)})}}}(mocoplayer),!function(e){e.init=function(t,n){var r=this,i=0;this.container=t,e.container=t;var a=e.utils.getCookie("mocoplayer_cdn"),o=e.utils.getCookie("mocoplayer_exe");a&&("auto"==a?(e.config.set("ManualSwitchCdn",0),e.config.rm("cdn")):(e.config.set("cdn",a),e.config.set("ManualSwitchCdn",1)),e.config.set("cdntest",1),e.utils.setCookie("mocoplayer_cdn","0",-1)),o&&("jpg"==o?e.config.set("exe","jpg"):e.config.set("exe","ts"),e.utils.setCookie("mocoplayer_exe","0",-1)),e.utils.isFeesCourse()||e.config.setLevelsState("H");var l=e.config.get(),s=(new Date).getTime();"jpg"==l.exe&&(l.jpgTimestamp?s-l.jpgTimestamp>=36e5&&(e.config.set("jpgTimestamp",""),e.config.set("exe","ts")):e.config.set("jpgTimestamp",s)),"1"==l.tip&&(l.tipTimestamp?s-l.tipTimestamp>=2592e6&&(e.config.set("tipTimestamp",""),e.config.set("tip","0")):e.config.set("tipTimestamp",s));var c=store.get("mocoplayer_conf");if(c&&Number(c.cdn)>=0)if(c.cdnTimestamp){if(s-c.cdnTimestamp>=6048e5){var u,f={},d=["cdn","ManualSwitchCdn","cdnTimestamp","cdntest"];for(u in c)d.indexOf(u)<0&&(f[u]=c[u]);store.set("mocoplayer_conf",f)}}else e.config.set("cdnTimestamp",s);"flash"==l.primary?l.flashTimestamp?s-l.flashTimestamp>=432e5&&(e.config.set("flashTimestamp",""),e.config.set("primary","html5")):e.config.set("flashTimestamp",s):l.flashTimestamp&&e.config.set("flashTimestamp","");var l=e.config.get();$.extend(n,l),"jpg"==n.exe&&(n.url.indexOf("?")!=-1?n.url=n.url+"&type=jpg":n.url=n.url+"?type=jpg"),l.ManualSwitchCdn&&(n.lockCdnChange=1),0==l.level&&e.config.set("level",e.utils.isFeesCourse()?3:2),$(document).on("keydown",function(e){var t=$(e.target);if(!t.is("textarea")&&!t.is("input")&&!t.is("object")){if(r.getPlayState&&"complete"==r.getPlayState())return;switch(e.keyCode){case 32:r.getPlayState&&("playing"==r.getPlayState()?r.pause():r.play3(),e.preventDefault());break;case 37:if(r.getCurrentTime){var n=r.getCurrentTime()||0;n-=5,n>=0&&r.seek(n)}break;case 39:if(r.getCurrentTime){var n=r.getCurrentTime()||0;n+=5,r.getDuration&&n>r.getDuration()&&(n=r.getDuration()-.1),r.seek(n)}break;case 70:r.fullscreen&&r.fullscreen();break;case 38:r.isFullscreen&&r.isFullscreen()&&r.volume(.1);break;case 40:r.isFullscreen&&r.isFullscreen()&&r.volume(-.1)}}});var p=function(){if(""==n.url)return void n.events.onError("M0x00001");if(!$(t).length)return void n.events.onError("M0x00002");if(!n.model.html5||"flash"==n.primary&&n.model.flash){if(!n.model.flash)return n.events.onError("M0x00003"),!1;e.flash?h():e.utils.scriptLoader(e.config.playerSrc.flash,function(){h()})}else e.html5?m():e.utils.scriptLoader(e.config.playerSrc.html5,function(){m()})},m=function(){var a=e.html5.init.call(r,t,n);a.ready(function(){n.events.onReady.call(r)}),a.playbackRate(n.rate),r.onPlay=function(){i=0,$(".mocoplayer-error").length&&$(".mocoplayer-error").remove()},r.onComplete=function(){a.isFullscreen()&&a.exitFullscreen(),i=1,n.events.onComplete.call(r)},r.isFullscreen=function(){return a.isFullscreen()},r.onRateChange=function(){e.config.set("rate",a.playbackRate())},r.volumeChange=function(){n.volume=a.volume(),e.config.set("volume",n.volume)},r.volume=function(e){var t=Math.round(10*a.volume())/10+e;t<0&&(t=0),t>1&&(t=1),a.setVolume(t)},r.getDuration=function(){return a.duration()},r.play=function(){a.play()},r.play3=function(){a.play()},r.pause=function(){a.pause()},r.fullscreen=function(){a.requestFullscreen()},r.seek=function(e){a.currentTime(e),a.play()},r.getCurrentTime=function(){return a.currentTime()},r.getPlayType=function(){return"html5"},r.getPlayRate=function(){return a.playbackRate()},r.getPlayState=r.getState=function(){var e=a.paused()?"paused":"playing";return i&&(e="complete"),e},r.destroy=function(){a.destroy(),$(t).html("")}},v=function(){e.ios.init.call(r,t,n)},h=function(){var a=e.flash.init.call(r,t,n);r.play=function(){a.play2()},r.play3=function(){a.play3()},r.pause=function(){a.pause()},r.seek=function(e){a.seek(e)},r.getCurrentTime=function(){return a.getCurrentTime()},r.getPlayType=function(){return"flash"},r.getPlayState=r.getState=function(){var e=a.getState();return i&&(e="complete"),e},r.onPlay=function(){i=0,$(".mocoplayer-error").length&&$(".mocoplayer-error").remove(),e.reHTML.switchHtmlPlayerBut(!0)},r.onComplete=function(){a.blur(),i=1,n.events.onComplete.call(r)},r.volumeChange=function(t){n.volume=t,e.config.set("volume",t)},r.destroy=function(){a.destroy(),$(t).html("")}};window.switchPlayer=function(t){e.config.set("cdn",t.cdn),e.config.set("level",t.level),e.config.set("primary",t.primary),"flash"==t.primary?(r.switchPlayer("flash",t),e.config.set("flashTimestamp",(new Date).getTime())):window.hdChange(t.level)},this.switchPlayer=function(t,i){var a=r.getCurrentTime();n.primary=t,n.cdn=i.cdn,n.rate=e.config.get().rate,n.currentTime=a,n.level=i.level,i.lockCdnChange&&(n.lockCdnChange=i.lockCdnChange),r.pause(),r.destroy(),p()},this.showTip=function(){var t=e.config.get();if(!$(".js-mocoplayer-tip").length&&!t.cdntest&&1!=t.tip){n.events.onError("00x10002");var r=$(this.container);"static"==r.css("position")&&r.css("position","relative"),r.append('<div class="mocoplayer-tip js-mocoplayer-tip">系统检测到您的网速缓慢，点击<a href="javascript:;" target="_blank">线路检测</a>，自动选择合适线路<span class="mocoplayer-tip-close imv2-close"><span></div>'),$(".js-mocoplayer-tip a").one("click",function(){e.reHTML.getCdnTestHTML(!0),e.config.set("tip",1)}),$(".mocoplayer-tip-close").one("click",function(){$(".js-mocoplayer-tip").remove(),e.config.set("tip",1)})}};var y=function(){if(n.model.html5){if(!e.utils.hlsSupported()){if(!n.model.flash)return e.utils.isIOS()?void e.utils.scriptLoader(e.config.playerSrc.ios,function(){v()}):void(navigator.userAgent.toLowerCase().indexOf("firefox")!==-1?n.events.onError("H0x10004"):n.events.onError("H0x10005"));n.primary="flash",n.model.html5=!1,navigator.userAgent.toLowerCase().indexOf("firefox")!==-1?n.events.onError("00x10004"):n.events.onError("00x10005")}e.utils.isSafari()&&n.currentTime<.5&&(n.currentTime=.5)}var r=$(t).get(0).id+"-mocoplayer";t.html('<div id="'+r+'" class="mocoplayer" />'),t="#"+r,p()};e.utils.styleLoader(e.config.playerSrc.css,function(){y()})}}(mocoplayer);