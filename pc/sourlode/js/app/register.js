

var register = $('#register');
register.on('click',function(){

	var reg =/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
	var pattern = /^1[34578]\d{9}$/; 
	var account_number = htmlEncodeJQ($('.account_number').val());
	var password = htmlEncodeJQ($('.passworde').val());
	var cell_phone = htmlEncodeJQ($('.cell_phone').val());
	var nickname= htmlEncodeJQ($('.nickname').val());
	if(!account_number||!password||!cell_phone||!nickname){
		parent.layer.msg("不能为空");
	}
	else if(reg.test(account_number)){
		layer.msg("账号不能输入中文");
	}
	else if(account_number.length<9||account_number.length>13){
		layer.msg("账号必须9-13位");
	}
	else if(password.length<6||password.length>13){
		layer.msg("密码必须6-13位")  
	}
	else if(!(pattern.test(cell_phone))){
		layer.msg("手机号输入错误");
	}
	else if(!$('#checkbox-id').is(':checked')) {
   		layer.msg("没有同意")
	}else{
		registration_request(account_number,password,cell_phone,nickname);
	}
})
function registration_request(account_number,password,cell_phone,nickname){
	$.post('../../fun/newUser.php',{thisUser:account_number,thisPasw:password,thisPhone:cell_phone,thisName:nickname},function(res){
			console.log(res);
		if(res==1){
			layer.msg("注册成功");
			 window.location.href="login.html";
		}
		else if(res==0){
			layer.msg("注册失败")
		}
	})
}

function htmlEncodeJQ ( str ) {  
	    return $('<span/>').text( str ).html();  
	}

