// 公共函数
console.log("Power By Anspray");

// 接口域
var baseUrl = window.baseUrl='http://192.168.1.138:8001';

// config的设置是全局的
layui.config({
	base: '/build/js/'
}).extend({
	ajaxmod: 'ajaxmod',
	verifymod: 'verifymod',
	arouter: 'router'
});









// 提示更新浏览器
(function(w) {
	if(!("WebSocket" in w && 2 === w.WebSocket.CLOSING)) {
		var d = document.createElement("div");
		d.className = "browsehappy";
		d.innerHTML = '<div style="width:100%;height:100px;font-size:20px;line-height:100px;text-align:center;background-color:#E90D24;color:#fff;margin-bottom:40px;">\u4f60\u7684\u6d4f\u89c8\u5668\u5b9e\u5728<strong>\u592a\u592a\u65e7\u4e86</strong>\uff0c\u592a\u592a\u65e7\u4e86 <a target="_blank" href="http://browsehappy.osfipin.com/" style="background-color:#31b0d5;border-color: #269abc;text-decoration: none;padding: 6px 12px;background-image: none;border: 1px solid transparent;border-radius: 4px;color:#FFEB3B;">\u7acb\u5373\u5347\u7ea7</a></div>';
		var f = function() {
			var s = document.getElementsByTagName("body")[0];
			if("undefined" == typeof(s)) {
				setTimeout(f, 10)
			} else {
				s.insertBefore(d, s.firstChild)
			}
		};
		f()
	}
}(window));


/*
 * HTTP Cookie:存储会话信息
 * 名称和值传送时必须是经过RUL编码的
 * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站
 * cookie有一些限制：比如IE6 & IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie
 * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie
 *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB
 * */
//对cookie的封装，采取getter、setter方式

(function(global){
	//获取cookie对象，以对象表示
	function getCookiesObj(){
		var cookies = {};
		if(document.cookie){
			var objs = document.cookie.split('; ');
			for(var i in objs){
				var index = objs[i].indexOf('='),
					name = objs[i].substr(0, index),
					value = objs[i].substr(index + 1, objs[i].length);	
				cookies[name] = value;
			}
		}
		return cookies;
	}
	//设置cookie
	function set(name, value, opts){
		//opts maxAge, path, domain, secure
		if(name && value){
			var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
			//可选参数
			if(opts){
				if(opts.maxAge){
					cookie += '; max-age=' + opts.maxAge; 
				}
				if(opts.path){
					cookie += '; path=' + opts.path;
				}
				if(opts.domain){
					cookie += '; domain=' + opts.domain;
				}
				if(opts.secure){
					cookie += '; secure';
				}
			}
			document.cookie = cookie;
			return cookie;
		}else{
			return '';
		}
	}
	//获取cookie
	function get(name){
		return decodeURIComponent(getCookiesObj()[name]) || null;
	}
	//清除某个cookie
	function remove(name){
		if(getCookiesObj()[name]){
			document.cookie = name + '=; max-age=0';
		}
	}
	//清除所有cookie
	function clear(){
		var cookies = getCookiesObj();
		for(var key in cookies){
			document.cookie = key + '=; max-age=0';
		}
	}
	//获取所有cookies
	function getCookies(name){
		return getCookiesObj(name);
	}
	//解决冲突
	function noConflict(name){
		if(name && typeof name === 'string'){
			if(name && window['cookie']){
				window[name] = window['cookie'];
				delete window['cookie'];
				return window[name];
			}
		}else{
			return window['cookie'];
			delete window['cookie'];
		}
	}
	global['cookie'] = {
		'getCookies': getCookies,
		'set': set,
		'get': get,
		'remove': remove,
		'clear': clear,
		'noConflict': noConflict
	};
})(window);


// 反序列化
function unserialize (data) {
	var obj = {};
	data.split('&').forEach(function (item) {
	    item = item.split('=');
	    var name = item[0],
	        val = item[1];
	        
	    obj[name] = val;
	});
	return obj;
}

// 遍历对象去空（提交参数,针对一层对象）
function objTrim (obj) {
	
	
}

// url参数转对象，适用于iframe的参数传递,对象中存在数组处理欠佳
function geturlparam () {
	var searchstr = decodeURI(location.search),
		param = unserialize(searchstr.substr(1,searchstr.length));
	return param;
}

// 调用函数
function action(url,method,data,success,error) {
	// ajax 配置
	var options = {
		url: url,
		method: method,
		data: data,
		success: "操作成功",
		error: "操作失败"
	}
	return throttle(request,options,500,1000);
}
	
// 请求处理
function request (options,success,error=null,complete = null) {
	layui.use(['jquery'], function () {
		if (options.method == undefined) {
			options.method = "POST";
		}
	    var $ = layui.jquery;
	    $.ajax({
		    type: options.method,
		    url: "http://vuetable.ratiw.net/api/users",
		    dataType: 'json',
		    data: options.data,
		    success: function(data){
		    	res = data;
		    	obj.del(); 
				layer.close(index);
		    	alert(success);
		    	alert(error);
		    	console.log(1)
		    	console.log(data);
		    	res = data.total;
		    },
		    error: function(xhr){
		    	console.log(2)
		        layer.msg(options.error);
		    }
	    });
	});
	return res;
}

// 节流函数
function throttle(fn,options,delay,mustApplyTime){
	clearTimeout(fn.timer);
	fn._cur=Date.now();  //记录当前时间
	if(!fn._start){ 
	    //若该函数是第一次调用，则直接设置_start,即开始时间，为_cur，即此刻的时间
	    fn._start=fn._cur;
	}
	if(fn._cur-fn._start>mustApplyTime){ 
		//当前时间与上一次函数被执行的时间作差，与mustApplyTime比较，若大于，则必须执行一次函数，若小于，则重新设置计时器
	    	return fn.call(null,options);
     	fn._start=fn._cur;
	}else{
	    fn.timer=setTimeout(function(){
	    	return fn.call(null,options);
	    },delay);
	}
}

// ajax 原生封装(初级)
function ajaxFun (method,url,dosome) {
	
	var xmlhttp;
	
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			return dosome(xmlhttp);
		}
	}
	xmlhttp.open(method, url, true);
	xmlhttp.send();
}

layui.use(['jquery'], function () {
	var $ = layui.jquery;

	$("body").keydown(function (e) {
        if (76 == e.keyCode && e.altKey){
        }
	})
	
	$(".aview-more").click(function () {
		if ($(".search-2").css("display") == "none") {
			$(this).css({"transform":"rotate(180deg)"});
		}else{
			$(this).css({"transform":"rotate(360deg)"});
		}
		$(".search-2").slideToggle();
	})
	
	$(".aview-more").click(function () {
		$(".more-content").slideToggle();
	})

	$(".aview-more").click(function () {
		$(this).parents(".adown").children(".more-content").slideToggle();
	})
})
































