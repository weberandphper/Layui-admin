// 字段校验封装
layui.define(['jquery'], function(exports) {
	
	var $ = layui.jquery;

	var verifyobj = {
		
//		layui本生提供
//		required（必填项）
//		phone（手机号）
//		email（邮箱）
//		url（网址）
//		number（数字）
//		date（日期）
//		identity（身份证）
//		自定义值
			
		// 常见验证规则 
		
		// 账号
		account: [/(.+){4,12}$/, '账号必须4到12位'],
		// 姓名
		username: function (value) {
			
		},
		// 密码
		password: [/(.+){4,10}$/, '密码必须4到10位'],
		// 验证码
		captcha: function (value) {
			if(value.length != 4) {
				return '验证码必须为4位';
			}
		},
		// 金额
		price: function (value) {
			
			
			
		},
		// 经度
		longitude: function (value) {
			
			
			
		},
		// 维度
		dimension: function (value) {
			
			
			
		},
		// 备注等类似字串
		remark: function (value) {
			
			
		},
		
	};


	exports('verifymod', verifyobj);
});