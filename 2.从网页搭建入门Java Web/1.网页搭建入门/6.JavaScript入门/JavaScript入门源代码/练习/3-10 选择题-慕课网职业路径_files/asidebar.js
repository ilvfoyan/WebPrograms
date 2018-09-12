define("lesson/js/asidebar",["lesson/js/common","sc/js/inc/qa-search","ueditor"],function(t){var e={},i={},n={};e={init:function(){this.bindEvents(),this.properties(),$("#lessonLeft").on("click",function(){e()}),$("#lessonRight").on("click",function(){e()});var e=function(){$("#chapterlist").hasClass("active")&&$("#asidebar .js-chapter").click()},i=$("#note-scrollbar"),n=$("#qa-scrollbar");t.on("lesson.resize",function(){t.scrollbar.init(i),t.scrollbar.init(n)})},Api:{loadChapterlist:"/lesson/chapterlist"},properties:function(){this.$chapterlist=$("#chapterlist")},bindEvents:function(){var t=this;$("#asidebar").on("click",".js-chapter",function(){t.onChapters()}),$("#asidebar").on("click",".js-wenda",function(){t.onWendaList(),o(".captcha-verify-box")}),$("#asidebar").on("click",".js-note",function(){$(this).addClass("on"),t.onNoteList(),o(".captcha-verify-box")})},onChapters:function(){var t=App.MEDIAINFO.id,e=this.$chapterlist.hasClass("active");e?($(".js-chapter").removeClass("on"),this.$chapterlist.removeClass("active")):($(".js-chapter").addClass("on"),this.$chapterlist.addClass("active")),t!=this.$chapterlist.data("mid")&&(this.$chapterlist.data("mid",t),this.loadChapters())},loadChapters:function(){var t=this,e={};e.mid=$("#chapterlist").data("mid"),e.cid=OP_CONFIG.curCourse.id,$.post(t.Api.loadChapterlist,e,function(e){0==e.result?t.RendeChapters(e.data):$.alert(e.msg)},"json")},RendeChapters:function(e){if(e.length>0){var i=$("#chapter-tpl").html(),n="",a=1;2==OP_CONFIG.later&&(a=2),n=juicer(i,{data:e,later:a})}else n="";if($("#chapterlist").removeClass("loading").find(".js-chapterlist").html(n),e.length>0){var s=$("#chapter-scrollbar");t.scrollbar.init(s,function(){var e=s.find(".cur"),i=e.parent(),n=0,a=s.height();n=i.position().top,n>a&&(s.scrollTop(n-i.height()),t.scrollbar.update(s))})}},onWendaList:function(){var e=App.MEDIAINFO.id,i=$("#qa-pannel");"visible"==i.css("visibility")?($("#lessonwrap").hasClass("renewal")&&$("#lessonDrag").hide(),$(".js-wenda").removeClass("on"),$(".js-chapter").removeClass("on"),this.$chapterlist.removeClass("active"),t.Pannel.wenda.hide()):($(".js-wenda").addClass("on"),$(".js-note").removeClass("on"),$(".js-chapter").removeClass("on"),this.$chapterlist.removeClass("active"),t.Pannel.wenda.show()),e!=i.data("mid")&&(i.data("mid",e),this.initList("wenda"))},onNoteList:function(){var e=this,i=App.MEDIAINFO.id,n=$("#note-pannel"),a="visible"==n.css("visibility");a?($("#lessonwrap").hasClass("renewal")&&$("#lessonDrag").hide(),$(".js-note").removeClass("on"),$(".js-chapter").removeClass("on"),this.$chapterlist.removeClass("active"),t.Pannel.note.hide()):($(".js-note").addClass("on"),$(".js-wenda").removeClass("on"),$(".js-chapter").removeClass("on"),this.$chapterlist.removeClass("active"),t.Pannel.note.show()),i!=n.data("mid")&&(n.data("mid",i),e.initList("note"))},initList:function(t){"wenda"==t?i.init():"note"==t&&n.init()},__scrollbar:function(e,i,n,a){if(t.scrollbar.init(i),null!=e&&1==e.data.page.page){var s=n.find(".pagination"),o={};e.data.page&&e.data.page.total>e.data.page.pageSize?(o=e.data.page,s.pagination(o.total,{prev_text:"上一页",next_text:"下一页",items_per_page:o.pageSize,num_display_entries:3,num_edge_entries:2,callback:function(t){a&&a(t)}})):s.html("")}else null==e?(n.find(".pagination").html(""),i.scrollTop(0),t.scrollbar.update(i)):(i.scrollTop(0),t.scrollbar.update(i))}};var a="",s="",o=function(t){$(t).addClass("hide").html(""),a=""};$(document).on("click",".js-mocaptcha-close",function(){$(".captcha-verify-box").addClass("hide").html(""),a=""});var r,l=1,d=!0,c=!0;return i={Api:{verifycode:function(){var t=new Date;return"/course/verifycode?_t=addqa&v="+t.getTime()},loadList:"/lesson/ajaxqa",addqa:"/course/addqa"},properties:function(){this.askBox=$(".wenda-ask-box")},init:function(){this.bindEvents(),this.loadList()},loadList:function(t,e){var i=this;if(2==OP_CONFIG.later)var t=t||"myquestion";else var t=t||"all";var e=e||0,n={};n.mid=App.MEDIAINFO.id,n.page=e+1,n.t=t,$.post(i.Api.loadList,n,function(e){0==e.result?i.RendeList(e,t):$.alert(e.msg)},"json")},RendeList:function(t,i){var n=this,a=$("#wenda-tpl").html(),s="",o=$("#qa-scrollbar");t.data.list.length>0?(s=juicer(a,{data:{list:t.data.list,ulimit:OP_CONFIG.ulimit,current:i,uid:OP_CONFIG.userInfo.uid}}),$("#wendalist").html(s),e.__scrollbar(t,o,$("#qa-pannel"),function(t){n.loadList(i,t)})):(2==OP_CONFIG.later?s="myquestion"==i?'<p class="notdata">你还没有发布任何的提问</p>':'<div class="renewal-text">								<p>您的教学服务已到期，如需使用完整的问答功能请续费</p>								<a class="go-renewal" href="//class.imooc.com/service/renewal?cid='+OP_CONFIG.curCourse.id+'&tid=1" target="_blank">马上续费</a>							</div>':"all"==i?s='<p class="notdata">暂无相关问答</p>':"pending"==i?s='<p class="notdata">暂无待解决问答</p>':"myquestion"==i?s='<p class="notdata">你还没有发布任何的提问</p>':"myanswer"==i&&(s='<p class="notdata">你还没有回复任何的提问</p>'),$("#wendalist").html(s),e.__scrollbar(null,o,$("#qa-pannel")))},showAskBox:function(){var t=$("#wenda-ask-modal-tpl").html(),e=($("body"),this),i={value:"",id:l};0==$(".js-wenda-ask-box").length&&(i.value=$(".qa-input-text").val(),$.dialog(juicer(t,i),{title:"我要提问",width:780,height:396,modal:!0}),e.properties(),e.initUEditor(),d=!0)},removeAskBox:function(){$(".js-wenda-ask-box").remove(),$(".js-wenda-block").remove(),$(".wenda-ask-loading").remove()},initUEditor:function(){var t=this,e="editQuestionEditor"+l;t.id=e,UE.delEditor(r),r=UE.getEditor(e,{initialFrameHeight:124,initialFrameWidth:"100%",autoFloatEnabled:!1,autoClearinitialContent:!0,autoHeightEnabled:!1,initialStyle:"p{line-height:24px; font-size:14px; color:#4d555d;}#initContent {color: #93999F;}"}),r.on("ready",function(){var t=this;setTimeout(function(){$(t.container).find(".edui-editor-iframeholder").addClass("tag")})}),r.addListener("focus",function(){$(this.container).find(".edui-editor-iframeholder").removeClass("tag")}),r.addListener("blur",function(){""==r.getContent()&&$(this.container).find(".edui-editor-iframeholder").addClass("tag")}),l++},initVerifyCode:function(){var e=t.RenderQrcodeTpl(this.Api.verifycode());this.askBox.find(".wenda-ask-bottom").prepend(e)},updateVerCode:function(){$(".js-codeimg").attr("src",this.Api.verifycode()),$(".verify-text").val("")},bindEvents:function(){var t=this;$(".qa-input-button").on("click",function(){return d?(d=!1,void t.showAskBox()):void $.prompt("响应中，请稍等~",{icon:"error"})}),$("body").on("click",".js-wenda-ask-save",function(){return c?void t.addqa():void $.prompt("请求中，请稍后~",{icon:"error"})}),$("body").on("click",".wenda-ask-box .js-codeimg",function(){t.updateVerCode()}),$("body").on("click",".wenda-ask-box .js-imv2-refresh",function(){t.updateVerCode()}),$(".js-qanav").on("click","a",function(){var e=$(this),i=e.attr("data-type");e.siblings("a").removeClass("cur"),e.addClass("cur"),t.loadList(i)}),$("#qa-pannel").on("click",".js-close",function(){$("#asidebar .js-wenda").click()})},showError:function(t,e){t.html(e)},hideError:function(){this.askBox.find(".wenda-ask-title").next(".wenda-ask-error").html(""),$("#editQuestionEditor"+(l-1)).next(".wenda-ask-error").html("")},addqa:function(){var t=this,e=t.askBox.find(".wenda-ask-title"),i=t.askBox.find(".js-qa-verify-box");this.hideError();var n={};return n.mid=App.MEDIAINFO.id,n.title=e.val(),n.content=r.getContent(),n.title.length<5?(this.showError(e.next(".wenda-ask-error"),"标题不能小于5个字符"),o(i),!1):n.title.length>50?(this.showError(e.next(".wenda-ask-error"),"标题不能多于50个字符"),o(i),!1):$.trim(n.content).length<5?(this.showError($("#editQuestionEditor"+(l-1)).next(".wenda-ask-error"),"内容不能少于5个字符"),o(i),!1):$.trim(n.content).length>1e5?(this.showError($("#editQuestionEditor"+(l-1)).next(".wenda-ask-error"),"内容不能多于100000个字符"),o(i),!1):"undefined"==typeof a||""==a?(i.removeClass("hide"),s=new mocaptcha(i,{type:0,success:function(t){a=t,$(".js-wenda-ask-save").trigger("click")}}),void $(".js-mocaptcha").append('<span class="js-mocaptcha-close imv2-close"></span>')):(n.token=a,c=!1,void $.post(t.Api.addqa,n,function(t){0==t.result?($.prompt("问题添加成功！"),$(".js-qanav a")[2].click(),$(".js-modal-close").trigger("click"),c=!0,o(i)):(-103002==t.result?(s.reset(),o(i)):$.alert(t.msg),o(i),c=!0)},"json"))},refreshList:function(){this.loadList()}},n={Api:{verifycode:function(){var t=new Date;return"/course/verifycode?_t=addnote&v="+t.getTime()},loadList:"/lesson/ajaxnote",addnote:"/course/addnote"},init:function(){if(this.initN){var e=$("#note-pannel");if(this.bindEvents(),1==OP_CONFIG.later){var i=t.RenderQrcodeTpl(this.Api.verifycode());e.find(".Qrcode-wrap").html(i)}this.initN=!1}this.loadList()},initN:!0,loadList:function(t,e){var i=this;if(2==OP_CONFIG.later)var t=t||"my";else var t=t||"all";var e=e||0,n={};n.mid=OP_CONFIG.mid,n.page=e+1,n.t=t,$.post(i.Api.loadList,n,function(e){0==e.result?i.RendeList(e,t):$.alert(e.msg)},"json")},RendeList:function(t,i){var n=this,a={},s=$("#note-scrollbar"),o=$("#note-tpl").html(),r="";a.list=t.data.list,a.uid=OP_CONFIG.userInfo.uid,a.nickname=OP_CONFIG.userInfo.nickname,a.t=t.data.t,a.list.length>0?(r=juicer(o,{data:a}),$("#notelist").html(r),e.__scrollbar(t,s,$("#note-pannel"),function(t){n.loadList(i,t)})):(r=2==OP_CONFIG.later?"my"==i?'<p class="notdata">暂无相关笔记</p>':'<div class="renewal-text">								<p>您的教学服务已到期，如需使用完整的笔记功能请续费</p>								<a class="go-renewal" href="//class.imooc.com/service/renewal?cid='+OP_CONFIG.curCourse.id+'&tid=1" target="_blank">马上续费</a>							</div>':'<p class="notdata">暂无相关笔记</p>',$("#notelist").html(r),e.__scrollbar(null,s,$("#note-pannel")))},$noteWrap:$("#note-pannel"),$FormParent:$("#noteForm"),$listParent:$("#notelist"),bindEvents:function(){var t=this;$(".js-notenav").on("click","a",function(){var e=$(this),i=e.attr("data-type");e.siblings("a").removeClass("cur"),e.addClass("cur"),t.loadList(i)}),t.$FormParent.on("click",".js-save",function(){t.save($(this))}),t.$listParent.on("click",".js-edit",function(){t.editShow($(this))}),t.$listParent.on("click",".js-cancel",function(){t.editHide($(this))}),t.$listParent.on("click",".js-save",function(){t.revised($(this))}),t.$listParent.on("click",".js-delete",function(){var e=$(this);$.confirm("你确定要删除这条笔记吗？",{callback:function(){t.rmNote(e)}})}),t.$listParent.on("click",".js-favor",function(){t.favorNote($(this))}),t.$listParent.on("click",".js-collect",function(){t.collectNote($(this))}),t.$listParent.on("mousewheel",".edit-area",function(t){t.stopPropagation()}),t.$listParent.on("click",".js-lookimg-trigger",function(){var t=$(this).parents(".attachment").find(".js-lookimg img");t.trigger("click")}),moco.imagePreview.init("#notelist"),t.$noteWrap.on("click",".switch-wrap",function(){var t=$(this).find(".switch"),e=t.hasClass("on");e?t.removeClass("on"):t.addClass("on")}),$("#note-pannel").on("click",".js-close",function(){$("#asidebar .js-note").click()})},save:function(t){var e=this,i=e.$FormParent.find("textarea"),n=$(".note-pannel .js-note-verify-box");i.next(".error").html("");var r=i.val(),l={};return l.mid=OP_CONFIG.mid,l.share=e.$FormParent.find(".share").hasClass("on")?1:0,""==$.trim(r)?(i.next(".error").html("笔记内容不能为空！"),o(n),!1):$.trim(r).length>2e3?(i.next(".error").html("笔记内容不能多于2000个字符！"),o(n),!1):(l.content=r,"video"==App.MEDIAMODE&&e.$FormParent.find(".pic").hasClass("on")&&(l.pic_time=App.picTime()),"code"==App.MEDIAMODE&&e.$FormParent.find(".pic").hasClass("on")&&(l.files=App.getFiles),"undefined"==typeof a||""==a?(n.removeClass("hide"),s=new mocaptcha(n,{type:0,success:function(e){a=e,t.trigger("click")}}),void $(".js-mocaptcha").append('<span class="js-mocaptcha-close imv2-close"></span>')):(l.token=a,void $.post(e.Api.addnote,l,function(t){if(0==t.result){var a=$(".js-notenav").find(".cur").data("type");e.refreshList(a),$.prompt("笔记添加成功！"),i.val(""),i.next(".error").html(""),o(n)}else-103002==t.result?(Util.loading.hide(),s.reset(),o(n)):($.alert(t.msg),o(n))},"json")))},editShow:function(t){var e=t.parents(".note-item");e.addClass("edit"),e.find(".error").html("")},editHide:function(t){var e=t.parents(".note-item"),i=e.find(".edit-area");e.removeClass("edit"),i.val($.trim(e.find(".content").text()))},revised:function(t){var e=this,i={},n=t.parents(".note-item"),a=n.find(".edit-area"),s=a.val();return i.id=n.attr("data-noteid"),""==$.trim(s)?(a.next().find(".error").html("笔记内容不能为空！"),!1):$.trim(s).length>2e3?(a.next().find(".error").html("笔记内容不能多于2000个字符！"),!1):(i.content=s,void $.post("/course/editnote",i,function(a){0==a.result?($.prompt("笔记修改成功！"),n.find(".content").text(i.content),e.editHide(t)):$.alert("修改失败")},"json"))},rmNote:function(t){var e=this,i=t.parents(".note-item"),n={};n.id=i.attr("data-noteid"),$.post("/course/deletenote",n,function(t){if(0==t.result){$.prompt("删除成功");var i=$(".js-notenav").find(".cur").data("type");e.refreshList(i)}else $.alert("删除失败")},"json")},favorNote:function(t){var e=t.parents(".note-item"),i=t.find("span").html()-0,n={};n.id=e.attr("data-noteid"),n.option=1==e.attr("data-option")?0:1,$.post("/course/supportnote",n,function(a){0==a.result?1==n.option?(e.attr("data-option",1),t.find("span").html(i+1),t.addClass("favored").attr("title","取消赞")):(e.attr("data-option",0),t.find("span").html(i-1),t.removeClass("favored").attr("title","赞")):$.prompt(a.msg,{icon:"error"})},"json")},collectNote:function(t){var e=t.parents(".note-item"),i=t.parents(".bottom-r"),n={};n.id=e.attr("data-noteid"),$.post("/course/collectnote",n,function(e){0==e.result?(i.find(".collect-num").html(i.find(".collect-num").html()-0+1),t.removeClass("collect js-collect").html("已采集")):$.prompt(e.msg,{icon:"error"})},"json")},refreshList:function(t){this.loadList(t)}},window.wendacmd=i,e});