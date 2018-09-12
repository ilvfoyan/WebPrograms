function SSOController(){var This=this;var actionCallBack={success:function(result){},error:function(){},complete:function(){}};var loginFrameName="ssoLoginFrame";var loginFormId="ssoLoginForm";var loginPubKey="";var loginPreCode="";var serverTime=0;var serverInterval=0;var crossDomainForward=null;var crossDomainTimer=null;var crossUrlCount=0;var formParam={};var loginApi="/passport/user/login";var registerApi="/passport/user/register";var preLoginApi="/passport/user/prelogin";this.verifyCodeUrl="/passport/user/verifycode";this.checkVerifyUrl="/passport/user/loginverifyshow";this.checkVerifyCode="/passport/user/verifycheck";this.checkUserName="/passport/user/checkusername";this.checkNickName="/passport/user/checknickname";this.tpRegister="/passport/user/tpregister";this.tpBind="/passport/user/tpbind";var createIFrame=function(frameName){$(loginFrameName).remove();var frame=$("<iframe></iframe>");frame.css("display","none");frame.attr("id",frameName);frame.attr("name",frameName);frame.attr("src","javascript:void(0)");frame.appendTo("body");return frame};var createForm=function(formName){$(loginFormId).remove();var form=$("<form></form>");form.attr("id",formName);form.attr("name",formName);form.attr("method","post");form.css("display","none");for(var name in formParam){form.append($("<input type='text' name='"+name+"' value='"+formParam[name]+"' />"))}form.appendTo("body");return form};var loginWarnTipTemp=function(result,isflag,id){var tepl='<p class="warn-info" style="font-size: 16px;line-height: 28px;max-width: 600px;">'+result+"</p>";if(isflag&&typeof id!="undefined"){if(id=="imooc"){tepl+='<p class="warn-tip" style="color: #999;margin-top: 30px;">可能导致账号冻结的原因  <a href="http://www.imooc.com/about/faq?t=5&id=13" target="_blank" style="color: #08c !important;">了解详情</a></p>'}else{tepl+='<p class="warn-tip" style="color: #999;margin-top: 30px;">可能导致账号冻结的原因  <a href="http://coding.imooc.com/user/faqdetail?column_id=2&id=17" target="_blank" style="color: #08c !important;">了解详情</a></p>'}}tepl+='<div class="moco-modal-btns"><a class="moco-btn moco-btn-blue moco-modal-close js-modal-close" href="javascript:void(0)"><span>确定</span></a></div>';return tepl};var loginByXMLHttpRequest=function(){if(typeof XMLHttpRequest=="undefined"){return false}var _xhr=new XMLHttpRequest();if(!"withCredentials" in _xhr){return false}$.ajax({url:loginApi,data:formParam,method:"post",dataType:"json",xhrFields:{withCredentials:true},success:function(res){var __callback=function(){if(window.location.href.indexOf("newlogin/from_url")>0){window.location.reload();return false}};if(res.status==10020){var str="";var _str="十分抱歉，由于您的账号最近在实战中存在严重违规的情况，已做冻结账号处理";str=loginWarnTipTemp(_str,true,"shizhan");if($.dialog){$.dialog(str,{title:"提示",modal:true,callback:__callback})}else{alert(_str);__callback()}$("#signin").remove();$(".modal-backdrop").remove()}else{if(res.status==10021){var str="";var _str="十分抱歉，由于您的账号最近在实战中被多次警告，已做冻结账号处理";str=loginWarnTipTemp(_str,true,"shizhan");if($.dialog){$.dialog(str,{title:"提示",modal:true,callback:__callback})}else{alert(_str);__callback()}$("#signin").remove();$(".modal-backdrop").remove()}else{if(res.status==10022){var str="";var _str="十分抱歉，由于您的账号最近在慕课网被多次警告，已做冻结账号处理";str=loginWarnTipTemp(_str,true,"imooc");if($.dialog){$.dialog(str,{title:"提示",modal:true,callback:__callback})}else{alert(_str);__callback()}$("#signin").remove();$(".modal-backdrop").remove()}else{if(res.status==10006){var str="";var _str="十分抱歉，由于您的账号最近在慕课网中存在严重违规的情况，已做冻结账号处理";str=loginWarnTipTemp(_str,true,"imooc");if($.dialog){$.dialog(str,{title:"提示",modal:true,callback:__callback})}else{alert(_str);__callback()}$("#signin").remove();$(".modal-backdrop").remove()}else{if(res.status==10001){if(res.caution){var str=loginWarnTipTemp(res.caution,false);$("#signin").remove();$(".modal-backdrop").remove();if($.dialog){$.dialog(str,{title:"提示",modal:true,callback:function(){window.location.href="http://www.imooc.com/index/usercheck?uid="+res.data.userInfo.uid}})}else{alert(res.caution);window.location.href="http://www.imooc.com/index/usercheck?uid="+res.data.userInfo.uid}}else{This.ssoLoginCallBack(res)}}else{This.ssoLoginCallBack(res)}}}}}},error:function(){formParam.returntype="html";loginByIframe()}});return true};var registerByXMLHttpRequest=function(){if(typeof XMLHttpRequest=="undefined"){return false}var _xhr=new XMLHttpRequest();$.ajax({url:registerApi,data:formParam,method:"post",dataType:"json",success:function(res){This.ssoLoginCallBack(res)},error:function(){formParam.returntype="html";registerByIframe()}});return true};var loginByIframe=function(){createIFrame(loginFrameName);var loginForm=createForm(loginFormId);loginForm.attr("action",loginApi);loginForm.attr("target",loginFrameName);try{loginForm.submit()}catch(e){$(loginFrameName).remove()}setTimeout(function(){$(loginForm).remove()},10)};var registerByIframe=function(){createIFrame(loginFrameName);var loginForm=createForm(loginFormId);loginForm.attr("action",registerApi);loginForm.attr("target",loginFrameName);
try{loginForm.submit()}catch(e){$(loginFrameName).remove()}setTimeout(function(){$(loginForm).remove()},10)};var preCallBack=function(res){clearInterval(serverInterval);serverInterval=null;loginPubKey=res.pubkey;loginPreCode=res.code;serverTime=res.servertime;setInterval(function(){serverTime++},1000)};this.preLogin=function(par){if(loginPubKey&&loginPreCode){par.success&&par.success();return}par=par||{success:function(){},error:function(){}};$.ajax({url:preLoginApi,method:"post",dataType:"json",success:function(res){if(res.status==10001){preCallBack(res);par.success&&par.success()}else{par.error&&par.error()}},error:function(){par.error()}})};this.setCrossDomainCookie=function(urls){url=urls[0];if(window.location.protocol.indexOf("https")!=-1){url=url.replace("http:","https:")}$.get(url,function(result){clearTimeout(crossDomainTimer);This.crossDomainResult()},"jsonp")};this.ssoLoginCallBack=function(result){if(result.status==10001){crossDomainForward=function(){actionCallBack.success(result);actionCallBack.complete()};this.setCrossDomainCookie(result.data.url);crossDomainTimer=setTimeout(function(){This.crossDomainResult()},5000)}else{actionCallBack.success(result);actionCallBack.complete()}};this.crossDomainResult=function(){if(typeof crossDomainForward=="function"){crossDomainForward()}};this.crossDomainAction=function(callback){if(typeof callback=="function"){crossDomainForward=callback}crossDomainTimer=setTimeout(function(){This.crossDomainResult()},5000);return false};this.frameLoginCallBack=function(result){actionCallBack.success(result);actionCallBack.complete();$(loginFrameName).remove()};this.login=function(params){if(params.data.pwencode){if(loginPreCode==""||serverTime==0||loginPubKey==""){params.error();params.complete();this.preLogin();return}var password=encrypt(loginPreCode+"\t"+serverTime+"\t"+params.data.password);params.data.password=window.btoa(password)}formParam=params.data;formParam.referer=window.location.protocol+"//"+window.location.hostname;actionCallBack={success:params.success,error:params.error,complete:params.complete};if(loginByXMLHttpRequest()){return true}else{formParam.returntype="html";loginByIframe()}};this.register=function(params){actionCallBack={success:params.success,error:params.error,complete:params.complete};formParam=params.data;formParam.referer=window.location.protocol+"//"+window.location.hostname;if(registerByXMLHttpRequest()){return true}else{formParam.returntype="html";registerByIframe()}};var encrypt=function(password){var biRadixBase=2;var biRadixBits=16;var bitsPerDigit=biRadixBits;var biRadix=1<<16;var biHalfRadix=biRadix>>>1;var biRadixSquared=biRadix*biRadix;var maxDigitVal=biRadix-1;var maxInteger=9999999999999998;var maxDigits;var ZERO_ARRAY;var bigZero,bigOne;function setMaxDigits(value){maxDigits=value;ZERO_ARRAY=new Array(maxDigits);for(var iza=0;iza<ZERO_ARRAY.length;iza++){ZERO_ARRAY[iza]=0}bigZero=new BigInt();bigOne=new BigInt();bigOne.digits[0]=1}setMaxDigits(20);var dpl10=15;var lr10=biFromNumber(1000000000000000);function BigInt(flag){if(typeof flag=="boolean"&&flag==true){this.digits=null}else{this.digits=ZERO_ARRAY.slice(0)}this.isNeg=false}function biFromDecimal(s){var isNeg=s.charAt(0)=="-";var i=isNeg?1:0;var result;while(i<s.length&&s.charAt(i)=="0"){++i}if(i==s.length){result=new BigInt()}else{var digitCount=s.length-i;var fgl=digitCount%dpl10;if(fgl==0){fgl=dpl10}result=biFromNumber(Number(s.substr(i,fgl)));i+=fgl;while(i<s.length){result=biAdd(biMultiply(result,lr10),biFromNumber(Number(s.substr(i,dpl10))));i+=dpl10}result.isNeg=isNeg}return result}function biCopy(bi){var result=new BigInt(true);result.digits=bi.digits.slice(0);result.isNeg=bi.isNeg;return result}function biFromNumber(i){var result=new BigInt();result.isNeg=i<0;i=Math.abs(i);var j=0;while(i>0){result.digits[j++]=i&maxDigitVal;i>>=biRadixBits}return result}function reverseStr(s){var result="";for(var i=s.length-1;i>-1;--i){result+=s.charAt(i)}return result}var hexatrigesimalToChar=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");function biToString(x,radix){var b=new BigInt();b.digits[0]=radix;var qr=biDivideModulo(x,b);var result=hexatrigesimalToChar[qr[1].digits[0]];while(biCompare(qr[0],bigZero)==1){qr=biDivideModulo(qr[0],b);digit=qr[1].digits[0];result+=hexatrigesimalToChar[qr[1].digits[0]]}return(x.isNeg?"-":"")+reverseStr(result)}function biToDecimal(x){var b=new BigInt();b.digits[0]=10;var qr=biDivideModulo(x,b);var result=String(qr[1].digits[0]);while(biCompare(qr[0],bigZero)==1){qr=biDivideModulo(qr[0],b);result+=String(qr[1].digits[0])}return(x.isNeg?"-":"")+reverseStr(result)}var hexToChar=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");function digitToHex(n){var mask=15;var result="";for(i=0;i<4;++i){result+=hexToChar[n&mask];n>>>=4}return reverseStr(result)}function biToHex(x){var result="";var n=biHighIndex(x);for(var i=biHighIndex(x);
i>-1;--i){result+=digitToHex(x.digits[i])}return result}function charToHex(c){var ZERO=48;var NINE=ZERO+9;var littleA=97;var littleZ=littleA+25;var bigA=65;var bigZ=65+25;var result;if(c>=ZERO&&c<=NINE){result=c-ZERO}else{if(c>=bigA&&c<=bigZ){result=10+c-bigA}else{if(c>=littleA&&c<=littleZ){result=10+c-littleA}else{result=0}}}return result}function hexToDigit(s){var result=0;var sl=Math.min(s.length,4);for(var i=0;i<sl;++i){result<<=4;result|=charToHex(s.charCodeAt(i))}return result}function biFromHex(s){var result=new BigInt();var sl=s.length;for(var i=sl,j=0;i>0;i-=4,++j){result.digits[j]=hexToDigit(s.substr(Math.max(i-4,0),Math.min(i,4)))}return result}function biFromString(s,radix){var isNeg=s.charAt(0)=="-";var istop=isNeg?1:0;var result=new BigInt();var place=new BigInt();place.digits[0]=1;for(var i=s.length-1;i>=istop;i--){var c=s.charCodeAt(i);var digit=charToHex(c);var biDigit=biMultiplyDigit(place,digit);result=biAdd(result,biDigit);place=biMultiplyDigit(place,radix)}result.isNeg=isNeg;return result}function biToBytes(x){var result="";for(var i=biHighIndex(x);i>-1;--i){result+=digitToBytes(x.digits[i])}return result}function digitToBytes(n){var c1=String.fromCharCode(n&255);n>>>=8;var c2=String.fromCharCode(n&255);return c2+c1}function biDump(b){return(b.isNeg?"-":"")+b.digits.join(" ")}function biAdd(x,y){var result;if(x.isNeg!=y.isNeg){y.isNeg=!y.isNeg;result=biSubtract(x,y);y.isNeg=!y.isNeg}else{result=new BigInt();var c=0;var n;for(var i=0;i<x.digits.length;++i){n=x.digits[i]+y.digits[i]+c;result.digits[i]=n&65535;c=Number(n>=biRadix)}result.isNeg=x.isNeg}return result}function biSubtract(x,y){var result;if(x.isNeg!=y.isNeg){y.isNeg=!y.isNeg;result=biAdd(x,y);y.isNeg=!y.isNeg}else{result=new BigInt();var n,c;c=0;for(var i=0;i<x.digits.length;++i){n=x.digits[i]-y.digits[i]+c;result.digits[i]=n&65535;if(result.digits[i]<0){result.digits[i]+=biRadix}c=0-Number(n<0)}if(c==-1){c=0;for(var i=0;i<x.digits.length;++i){n=0-result.digits[i]+c;result.digits[i]=n&65535;if(result.digits[i]<0){result.digits[i]+=biRadix}c=0-Number(n<0)}result.isNeg=!x.isNeg}else{result.isNeg=x.isNeg}}return result}function biHighIndex(x){var result=x.digits.length-1;while(result>0&&x.digits[result]==0){--result}return result}function biNumBits(x){var n=biHighIndex(x);var d=x.digits[n];var m=(n+1)*bitsPerDigit;var result;for(result=m;result>m-bitsPerDigit;--result){if((d&32768)!=0){break}d<<=1}return result}function biMultiply(x,y){var result=new BigInt();var c;var n=biHighIndex(x);var t=biHighIndex(y);var u,uv,k;for(var i=0;i<=t;++i){c=0;k=i;for(j=0;j<=n;++j,++k){uv=result.digits[k]+x.digits[j]*y.digits[i]+c;result.digits[k]=uv&maxDigitVal;c=uv>>>biRadixBits}result.digits[i+n+1]=c}result.isNeg=x.isNeg!=y.isNeg;return result}function biMultiplyDigit(x,y){var n,c,uv;result=new BigInt();n=biHighIndex(x);c=0;for(var j=0;j<=n;++j){uv=result.digits[j]+x.digits[j]*y+c;result.digits[j]=uv&maxDigitVal;c=uv>>>biRadixBits}result.digits[1+n]=c;return result}function arrayCopy(src,srcStart,dest,destStart,n){var m=Math.min(srcStart+n,src.length);for(var i=srcStart,j=destStart;i<m;++i,++j){dest[j]=src[i]}}var highBitMasks=new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535);function biShiftLeft(x,n){var digitCount=Math.floor(n/bitsPerDigit);var result=new BigInt();arrayCopy(x.digits,0,result.digits,digitCount,result.digits.length-digitCount);var bits=n%bitsPerDigit;var rightBits=bitsPerDigit-bits;for(var i=result.digits.length-1,i1=i-1;i>0;--i,--i1){result.digits[i]=((result.digits[i]<<bits)&maxDigitVal)|((result.digits[i1]&highBitMasks[bits])>>>(rightBits))}result.digits[0]=((result.digits[i]<<bits)&maxDigitVal);result.isNeg=x.isNeg;return result}var lowBitMasks=new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);function biShiftRight(x,n){var digitCount=Math.floor(n/bitsPerDigit);var result=new BigInt();arrayCopy(x.digits,digitCount,result.digits,0,x.digits.length-digitCount);var bits=n%bitsPerDigit;var leftBits=bitsPerDigit-bits;for(var i=0,i1=i+1;i<result.digits.length-1;++i,++i1){result.digits[i]=(result.digits[i]>>>bits)|((result.digits[i1]&lowBitMasks[bits])<<leftBits)}result.digits[result.digits.length-1]>>>=bits;result.isNeg=x.isNeg;return result}function biMultiplyByRadixPower(x,n){var result=new BigInt();arrayCopy(x.digits,0,result.digits,n,result.digits.length-n);return result}function biDivideByRadixPower(x,n){var result=new BigInt();arrayCopy(x.digits,n,result.digits,0,result.digits.length-n);return result}function biModuloByRadixPower(x,n){var result=new BigInt();arrayCopy(x.digits,0,result.digits,0,n);return result}function biCompare(x,y){if(x.isNeg!=y.isNeg){return 1-2*Number(x.isNeg)}for(var i=x.digits.length-1;i>=0;--i){if(x.digits[i]!=y.digits[i]){if(x.isNeg){return 1-2*Number(x.digits[i]>y.digits[i])}else{return 1-2*Number(x.digits[i]<y.digits[i])}}}return 0}function biDivideModulo(x,y){var nb=biNumBits(x);var tb=biNumBits(y);var origYIsNeg=y.isNeg;
var q,r;if(nb<tb){if(x.isNeg){q=biCopy(bigOne);q.isNeg=!y.isNeg;x.isNeg=false;y.isNeg=false;r=biSubtract(y,x);x.isNeg=true;y.isNeg=origYIsNeg}else{q=new BigInt();r=biCopy(x)}return new Array(q,r)}q=new BigInt();r=x;var t=Math.ceil(tb/bitsPerDigit)-1;var lambda=0;while(y.digits[t]<biHalfRadix){y=biShiftLeft(y,1);++lambda;++tb;t=Math.ceil(tb/bitsPerDigit)-1}r=biShiftLeft(r,lambda);nb+=lambda;var n=Math.ceil(nb/bitsPerDigit)-1;var b=biMultiplyByRadixPower(y,n-t);while(biCompare(r,b)!=-1){++q.digits[n-t];r=biSubtract(r,b)}for(var i=n;i>t;--i){var ri=(i>=r.digits.length)?0:r.digits[i];var ri1=(i-1>=r.digits.length)?0:r.digits[i-1];var ri2=(i-2>=r.digits.length)?0:r.digits[i-2];var yt=(t>=y.digits.length)?0:y.digits[t];var yt1=(t-1>=y.digits.length)?0:y.digits[t-1];if(ri==yt){q.digits[i-t-1]=maxDigitVal}else{q.digits[i-t-1]=Math.floor((ri*biRadix+ri1)/yt)}var c1=q.digits[i-t-1]*((yt*biRadix)+yt1);var c2=(ri*biRadixSquared)+((ri1*biRadix)+ri2);while(c1>c2){--q.digits[i-t-1];c1=q.digits[i-t-1]*((yt*biRadix)|yt1);c2=(ri*biRadix*biRadix)+((ri1*biRadix)+ri2)}b=biMultiplyByRadixPower(y,i-t-1);r=biSubtract(r,biMultiplyDigit(b,q.digits[i-t-1]));if(r.isNeg){r=biAdd(r,b);--q.digits[i-t-1]}}r=biShiftRight(r,lambda);q.isNeg=x.isNeg!=origYIsNeg;if(x.isNeg){if(origYIsNeg){q=biAdd(q,bigOne)}else{q=biSubtract(q,bigOne)}y=biShiftRight(y,lambda);r=biSubtract(y,r)}if(r.digits[0]==0&&biHighIndex(r)==0){r.isNeg=false}return new Array(q,r)}function biDivide(x,y){return biDivideModulo(x,y)[0]}function biModulo(x,y){return biDivideModulo(x,y)[1]}function biMultiplyMod(x,y,m){return biModulo(biMultiply(x,y),m)}function biPow(x,y){var result=bigOne;var a=x;while(true){if((y&1)!=0){result=biMultiply(result,a)}y>>=1;if(y==0){break}a=biMultiply(a,a)}return result}function biPowMod(x,y,m){var result=bigOne;var a=x;var k=y;while(true){if((k.digits[0]&1)!=0){result=biMultiplyMod(result,a,m)}k=biShiftRight(k,1);if(k.digits[0]==0&&biHighIndex(k)==0){break}a=biMultiplyMod(a,a,m)}return result}function BarrettMu(m){this.modulus=biCopy(m);this.k=biHighIndex(this.modulus)+1;var b2k=new BigInt();b2k.digits[2*this.k]=1;this.mu=biDivide(b2k,this.modulus);this.bkplus1=new BigInt();this.bkplus1.digits[this.k+1]=1;this.modulo=BarrettMu_modulo;this.multiplyMod=BarrettMu_multiplyMod;this.powMod=BarrettMu_powMod}function BarrettMu_modulo(x){var q1=biDivideByRadixPower(x,this.k-1);var q2=biMultiply(q1,this.mu);var q3=biDivideByRadixPower(q2,this.k+1);var r1=biModuloByRadixPower(x,this.k+1);var r2term=biMultiply(q3,this.modulus);var r2=biModuloByRadixPower(r2term,this.k+1);var r=biSubtract(r1,r2);if(r.isNeg){r=biAdd(r,this.bkplus1)}var rgtem=biCompare(r,this.modulus)>=0;while(rgtem){r=biSubtract(r,this.modulus);rgtem=biCompare(r,this.modulus)>=0}return r}function BarrettMu_multiplyMod(x,y){var xy=biMultiply(x,y);return this.modulo(xy)}function BarrettMu_powMod(x,y){var result=new BigInt();result.digits[0]=1;var a=x;var k=y;while(true){if((k.digits[0]&1)!=0){result=this.multiplyMod(result,a)}k=biShiftRight(k,1);if(k.digits[0]==0&&biHighIndex(k)==0){break}a=this.multiplyMod(a,a)}return result}function RSAKeyPair(modulus){var keylen=1024;this.e=biFromHex("10001");this.d=biFromHex("");this.m=biFromHex(modulus);if(typeof(keylen)!="number"){this.chunkSize=2*biHighIndex(this.m)}else{this.chunkSize=keylen/8}this.radix=16;this.barrett=new BarrettMu(this.m)}function encryptedString(s){var a=new Array();var sl=s.length;var i,j,k;var padtype=2;var encodingtype=1;var rpad;var al;var result="";var block;var crypt;var text;var key=new RSAKeyPair(loginPubKey);if(sl>(key.chunkSize-11)){sl=key.chunkSize-11}i=0;j=sl-1;while(i<sl){a[j]=s.charCodeAt(i);i++;j--}j=key.chunkSize-(sl%key.chunkSize);while(j>0){rpad=Math.floor(Math.random()*256);while(!rpad){rpad=Math.floor(Math.random()*256)}a[i]=rpad;i++;j--}a[sl]=0;a[key.chunkSize-2]=2;a[key.chunkSize-1]=0;al=a.length;for(i=0;i<al;i+=key.chunkSize){block=new BigInt();j=0;for(k=i;k<(i+key.chunkSize);++j){block.digits[j]=a[k++];block.digits[j]+=a[k++]<<8}crypt=key.barrett.powMod(block,key.e);text=biToBytes(crypt);result+=text}return result}setMaxDigits(131);return encryptedString(password)}}(function(){var object=typeof exports!="undefined"?exports:self;var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function InvalidCharacterError(message){this.message=message}InvalidCharacterError.prototype=new Error;InvalidCharacterError.prototype.name="InvalidCharacterError";object.btoa||(object.btoa=function(input){var str=String(input);for(var block,charCode,idx=0,map=chars,output="";str.charAt(idx|0)||(map="=",idx%1);output+=map.charAt(63&block>>8-idx%1*8)){charCode=str.charCodeAt(idx+=3/4);if(charCode>255){throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")}block=block<<8|charCode}return output});object.atob||(object.atob=function(input){var str=String(input).replace(/=+$/,"");if(str.length%4==1){throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.")
}for(var bc=0,bs,buffer,idx=0,output="";buffer=str.charAt(idx++);~buffer&&(bs=bc%4?bs*64+buffer:buffer,bc++%4)?output+=String.fromCharCode(255&bs>>(-2*bc&6)):0){buffer=chars.indexOf(buffer)}return output})}());imoocSSO=new SSOController();