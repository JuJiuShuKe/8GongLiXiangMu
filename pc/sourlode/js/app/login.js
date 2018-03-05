
var login = $('#login');
var register = $('#register');
var remember_pwd = $('#remember_pwd');
login.on('click',function(){
	var reg =/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
	var account_number = $('.account_number').val();
	var password = $('.passworde').val();
	if(!account_number||!password){
		alert("请输入账号密码");
	}
	// else if(reg.test(account_number)){
	// 	layer.msg("账号不能输入中文");
	// }
	// else if(account_number.length<9||account_number.length>13){
	// 	layer.msg("账号必须9-13位");
	// }
	// else if(password.length<6||password.length>13){
	// 	layer.msg("密码必须6-13位")  
	// }
	else{
		Login_success(account_number,password);
	}
})
register.on('click',function(){
	 window.location.href = "register.html";
})
remember_pwd.on('change',function(){
	if($('remember_pwd').is(':checked')) {
    	
	}
	else{
		localStorage.setItem("LoginNumber", account_number);	
		localStorage.setItem("LoginPassw", password);
	}
})

function Login_success(account_number,password){
	$.post('../../fun/loadUser.php',{user:account_number,pasw:password},function(res){
		console.log(res);
		// localStorage.setItem("lastname","Gates");
		// localStorage.setItem("userId",res)
		if(res==0){
			alert("账号或密码错误");
			 // window.location.href="login.html";
		}
		else if(!isNaN(res)){
			alert("登录成功");
			localStorage.setItem("userId",res);
			window.location.href="index.html";	
		}
		else{
			alert("发生错误")
		}
	})
}

