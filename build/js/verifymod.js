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
		
		// account
		cAccount: function (value) {
			
			
			
		},
		// 姓名
		cUsername: function (value) {
			
			
			
		},
		// 密码
		cPassword: function (value) {
			
			
			
		},
		// 验证码
		cCaptchaPic: function (value) {
			
			
			
		},
		// 金额
		cPrice: function (value) {
			
			
			
		},
		// 经度
		cLongitude: function (value) {
			
			
			
		},
		// 维度
		cDimension: function (value) {
			
			
			
		},
		// 备注等类似字串
		cStr: function (value) {
			
			
		},
		
 
 
 

		// 公共部分
		price: function (value) {					// 价格
			
		},
		
		// 添加机器人
		code: function (value) {					// 机器人出场编号
			
		},
		price: function (value) {					// 入库价格
		
		},
		// 机器人库
		reason: function (value) {					// 报修原因
			
		},
		repaircost: function (value) {				// 报修费用
			
			
		},
		// 维修记录
		cost: function (value) {					// 维修成本
			
			
		},
		// 公司列表
		Code: function (value) {
			
		},
		Code: function (value) {
			
		},
		Code: function (value) {
			
		},
		
		
		
		Code: function (value) {
			
		},
		Code: function (value) {
			
		},
		Code: function (value) {
			
		},
		


		company: function(value) {
			if(value.length < 5) {
				return '标题至少得5个字符啊';
			}
		},
		pass: [/(.+){6,12}$/, '密码必须6到12位'],
		content: function(value) {
			layedit.sync(editIndex);
		},
		address: function(value) {
			if(value == '') {
				return '';
			}
		},
		contacts: function(value) {
			
			
			

			//	    	if(value!=$("#addaccount input[id='pass']").val()){
			//	    		return '密码不一致';
			//	    	}

		},
		contacts2: function(value) {

			//	    	if(value!=$("#addaccount input[id='resetpass']").val()){
			//	    		return '密码不一致';
			//	    	}

		},
		
		
		oldpassword: function(value) {
			
			
			

			//	    	if(value!=$("#addaccount input[id='pass']").val()){
			//	    		return '密码不一致';
			//	    	}



		},
		newpassword: function(value) {





			//	    	if(value!=$("#addaccount input[id='resetpass']").val()){
			//	    		return '密码不一致';
			//	    	}
			
			
			

		},
		
		
		
		
	};





	exports('verifymod', verifyobj);
	
	
	
	
});