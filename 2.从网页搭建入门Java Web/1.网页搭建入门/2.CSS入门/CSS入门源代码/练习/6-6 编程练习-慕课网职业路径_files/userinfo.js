define("common/js/userinfo",["require"],function(){var a=function(a){var s="";0!=a.coupons&&(s='<i id="js-usercard-coupon-icon"></i>');var e='<div class="card-inner">                        <div class="card-top clearfix">                            <a href="//www.imooc.com/u/'+a.uid+'" class="l"><img src="'+a.img+'" alt="'+a.nickname+'"></a>                            <div class="card-top-right-box l">                                <a href="//www.imooc.com/u/'+a.uid+'"><span class="name text-ellipsis">'+a.nickname+'</span></a>                                <div class="meta">                                    <a href="//www.imooc.com/u/'+a.uid+'/experience">经验<b id="js-user-mp">'+(a.mp?a.mp:0)+'</b></a>                                    <a href="//www.imooc.com/u/'+a.uid+'/credit">积分<b id="js-user-credit">'+(a.credit?a.credit:0)+'</b></a>                                </div>                            </div>                        </div>                        <div class="user-center-box">                            <ul class="clearfix">                                <li class="l"><a href="//www.imooc.com/u/'+a.uid+'/courses" target="_blank"><span class="user-center-icon imv2-kecheng"></span>我的课程</a></li>                                <li class="l">                                    <a href="//order.imooc.com/myorder" target="_blank"><span class="user-center-icon imv2-receipt"></span>订单中心</a>                                    '+s+'                                </li>                                <li class="l"><a href="//www.imooc.com/mall/index" target="_blank"><span class="user-center-icon imv2-score_shop"></span>积分商城</a></li>                                <li class="l"><a href="//www.imooc.com/user/setbindsns" target="_blank"><span class="user-center-icon imv2-set_1"></span>个人设置</a></li>                            </ul>                        </div>';return a.last_learning&&""!=a.last_learning&&(e+='<div class="card-history">                            <span class="history-item">                                <span class="tit text-ellipsis">'+a.last_learning.course_name+'</span>                                <span class="media-name text-ellipsis">'+a.last_learning.last_chapter_media+" "+a.last_learning.media_name+'</span>                                <i class="imv2-history"></i>                                <a href="'+a.last_learning.url+'" class="continue" title="'+a.last_learning.course_name+"&#10;"+a.last_learning.last_chapter_media+"  "+a.last_learning.media_name+'">继续</a>                            </span>                    </div>'),e+='<div class="card-sets clearfix"><a href="/passport/user/logout?referer=//www.imooc.com"class="l">安全退出</a></div>                    </div>'},s=function(){"undefined"!=typeof OP_CONFIG&&1==OP_CONFIG.isLogin&&$.ajax({url:"//www.imooc.com/u/card",type:"get",dataType:"jsonp",jsonp:"jsonpcallback"}).done(function(s){0==s.result&&($(".js-header-avator img").attr("src",s.data.img),$(".g-user-card").html(a(s.data)).show())})};s()});