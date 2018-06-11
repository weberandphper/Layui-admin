// ajax 封装
layui.define(['jquery','layer'], function(exports) { 
	var $ = layui.jquery,
		layer = layui.layer;
	
	// 获取全局变量
	var domain = baseUrl;
	
	//提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
	/* layui ajax 封装
	 * url 接口地址
	 * data 数据
	 * success 成功回调函数
	 * cache 浏览器缓存
	 * alone
	 * async 异步请求
	 * type 请求的类型
	 * dataType 接收数据类型
	 * error ： 请求失败后执行的函数
	 */
	
	// ajax封装
	function ajax(url, data, success, cache, alone, async, type, dataType, error) {
		var type = type || 'post'; //请求类型
		var dataType = dataType || 'json'; //接收数据类型
		var async = async || true; //异步请求
		var alone = alone || false; //独立提交（一次有效的提交）
		var cache = cache || false; //浏览器历史缓存
		var ajaxStatus = true;
		
		var success = success || function(data) {
			console.log('请求成功');
			setTimeout(function() {
				layer.msg(data.msg); //通过layer插件来进行提示信息
			}, 300);
			if(data.status) { //服务器处理成功
				setTimeout(function() {
					if(data.url) {
						location.replace(data.url);
					} else {
						location.reload(true);
					}
				}, 500);
			} else { 
				//服务器处理失败
				if(alone) { //改变ajax提交状态
					ajaxStatus = true;
				}
			}
		};
		
		var error = error || function(data) {
			/*console.error('请求失败');*/
			/*data.status;//错误状态吗*/
			layer.closeAll('loading');
			setTimeout(function() {
				if(data.status == 404) {
					layer.msg('请求失败，请求未找到');
				} else if(data.status == 503) {
					layer.msg('请求失败，服务器内部错误');
				} else {
					// layer.msg('请求失败,网络连接超时');
					layer.msg('请求失败,服务器报错');
				}
				ajaxStatus = true;
			}, 500);
		};

		/*判断是否可以发送请求*/
		if(!ajaxStatus) {
			return false;
		}
		ajaxStatus = false; //禁用ajax请求
		/*正常情况下1秒后可以再次多个异步请求，为true时只可以有一次有效请求（例如添加数据）*/
		if(!alone) {
			setTimeout(function() {
				ajaxStatus = true;
			}, 1000);
		}
		$.ajax({
			url: url,
			data: data,
			type: type,
			dataType: dataType,
			async: async,
			success: success,
			error: error,
			jsonpCallback: 'jsonp' + (new Date()).valueOf().toString().substr(-4),
			beforeSend: function() {
				layer.msg('加载数据中...', {
					time: 500,
					icon: 16,
					shade: 0.06
				});
			},
		})
		.done(function(data) {
			
        })
        .fail(function(data) {
        	
        })
        .always(function(data) {
        	if (data.code == 1001) {
        		setTimeout(function() {
					layer.msg('登录验证失效，即将跳转到登录页面');
					parent.tologins();
				}, 1000);
        	}
        });
	}
	
	var ajaxobj = {
		// submitAjax(post方式提交) layui ajax 函数命名规则 layui+method
		layuiSubmitAjax: function(form, success, cache, alone) {
			cache = cache || true;
			var form = $(form);
			var url = form.attr('action');
			var data = form.serialize();
			ajax(url, data, success, cache, alone, false, 'post', 'json');
		},
		// ajax提交(post方式提交)
		layuiPost: function(url, data, success, alone, urlbool=0) {
			var url = urlbool? url+"?token="+cookie.get('usertoken') : domain+url+"?token="+cookie.get('usertoken');
			ajax(url, data, success, false, alone = "1", true, 'POST', 'json', '');
		},
		// ajax提交(get方式提交,urlbool 代表url代表url字串是否是一个完整的url字串)
		layuiGet: function(url, data, success, urlbool=0) {
			var url = urlbool? url+"?token="+cookie.get('usertoken') : domain+url+"?token="+cookie.get('usertoken');
			ajax(url, data, success, false, 1, true, 'GET', 'json', "");
		},
		// jsonp跨域请求(get方式提交)
		layuiJsonp: function(url, success, cache, alone) {
			var url = domain+url+"?token="+cookie.get('usertoken');
			ajax(url, {}, success, cache, alone, false, 'get', 'jsonp');
		},
		layuiTest: function(str) {
			alert("调用成功");
		}
	}
	
	
	exports('ajaxmod', ajaxobj);
});