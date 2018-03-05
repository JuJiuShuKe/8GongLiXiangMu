

$(window).ready(function() {
	mui.init();
	
	init();
	
	
	
	var buttonLogin = $("#inputLogin");
	var buttonEint = $("#eintLogin");
	var buttonEdit = $("#editLogin");
	
	function init(){
		// 账号
		var localNumber = localStorage.getItem("LoginNumber");
		// 密码
		var localPassWd = localStorage.getItem("LoginPassw");
		
		if( localNumber && localPassWd ){
			$("#inputUserName").val(localNumber);
			$("#inputPassWord").val(localPassWd);
		}
		
		
		$("input").focus(function(){
			var bodyHeight = $("body").height();
			$(".loginFlag.mui-content").css("height",bodyHeight+"px");
		});
		
		var loginPage = $('.loginBlock');
		var eintPage = $('.eintBlock');
		var editPage = $('.editBlock');
		
		$('.onEint').on("click",function(){
			loginPage.css("display","none");
			editPage.css("display","none");
			eintPage.css("display","block");
		});
		
		$('.onLogin').on("click",function(){
			eintPage.css("display","none");
			editPage.css("display","none");
			loginPage.css("display","block");
		});
		
		$('.onEdit').on("click",function(){
			loginPage.css("display","none");
			eintPage.css("display","none");
			editPage.css("display","block");
		});
	}
	
	eintandloginEvent();
	
	// 注册 登陆 更改密码 事件
	function eintandloginEvent(){
		// 注册
		buttonEint.on("click",function(){
			var eintUserName = htmlEncodeJQ($("#eintUserName").val());
			var eintPassWord = htmlEncodeJQ($("#eintPassWord").val());
			var eintPhoneNumber = htmlEncodeJQ($("#eintPhoneNumber").val());
			var eintNickName = htmlEncodeJQ($("#eintNickName").val());
			
			var chinaString = new RegExp("[\\u4E00-\\u9FFF]+","g");
			var phoneProof = /^1[34578]\d{9}$/;
			
			if(!eintUserName || !eintPassWord || !eintPhoneNumber || !eintNickName){
				mui.alert("输入的内容不能为空","警告:",function(){
					for(var i=0;i<4;i++){
						var inputNode = $('.eintBlock').find('input').eq(i);
						if(!inputNode.val()){
							inputNode.focus();
							break;
						}
					}
				});
			}else if(chinaString.test(eintUserName) || chinaString.test(eintPassWord)){
				mui.alert("账户或者密码不能有中文","警告:",function(){
					if(chinaString.test(eintUserName)){
						$("#eintUserName").focus();
					}else if(chinaString.test(eintPassWord)){
						$("#eintPassWord").focus();
					}
				});
			}else if(eintUserName.length<9 || eintUserName.length>13){
				mui.alert("账号请输入9~13个字符串或数字","警告:",function(){
					$("#eintUserName").focus();
				});
			}else if(eintPassWord.length<6 || eintPassWord.length>13){
				mui.alert("密码请输入6~13个字符串或数字","警告:",function(){
					$("#eintPassWord").focus();
				});
			}else if(!phoneProof.test(eintPhoneNumber)){
				mui.alert("请重新验证您输入的号码的正确性","警告:",function(){
					$("#eintPhoneNumber").focus();
				});
			}else if(eintNickName.length<2 || eintNickName.length>22){
				mui.alert("昵称请输入2~22个字符串或数字","警告:",function(){
					$("#eintNickName").focus();
				});
			}else{
				eintUpload(eintUserName ,eintPassWord ,eintPhoneNumber ,eintNickName);
			}
		});
		
		
		
		// 更改密码
		buttonEdit.on("click",function(){
			var editUserName = htmlEncodeJQ($("#editUserName").val());
			var editPassWord = htmlEncodeJQ($("#editPassWord").val());
			var editPhoneNumber = htmlEncodeJQ($("#editPhoneNumber").val());
			
			var chinaString = new RegExp("[\\u4E00-\\u9FFF]+","g");
			var phoneProof = /^1[34578]\d{9}$/;
			
			if(!editUserName || !editPassWord || !editPhoneNumber){
				mui.alert("输入的内容不能为空","警告:",function(){
					for(var i=0;i<4;i++){
						var inputNode = $('.editBlock').find('input').eq(i);
						if(!inputNode.val()){
							inputNode.focus();
							break;
						}
					}
				});
			}else if(chinaString.test(editUserName) || chinaString.test(editPassWord)){
				mui.alert("账户或者密码不能有中文","警告:",function(){
					if(chinaString.test(editUserName)){
						$("#editUserName").focus();
					}else if(chinaString.test(editPassWord)){
						$("#editPassWord").focus();
					}
				});
			}else if(editUserName.length<9 || editUserName.length>13){
				mui.alert("账号请输入9~13个字符串或数字","警告:",function(){
					$("#editUserName").focus();
				});
			}else if(editPassWord.length<6 || editPassWord.length>13){
				mui.alert("密码请输入6~13个字符串或数字","警告:",function(){
					$("#editPassWord").focus();
				});
			}else if(!phoneProof.test(editPhoneNumber)){
				mui.alert("请重新验证您输入的号码的正确性","警告:",function(){
					$("#editPhoneNumber").focus();
				});
			}else{
				editUpload(editUserName ,editPassWord ,editPhoneNumber);
			}
		});
		
		
		
		// 登陆
		buttonLogin.on("click",function(){
			var loginUserName = htmlEncodeJQ($("#inputUserName").val());
			var loginPassWord = htmlEncodeJQ($("#inputPassWord").val());
			
			var chinaString = new RegExp("[\\u4E00-\\u9FFF]+","g");
			var phoneProof = /^1[34578]\d{9}$/;
			
			if(!loginUserName || !loginPassWord){
				mui.alert("输入的内容不能为空","警告:",function(){
					for(var i=0;i<4;i++){
						var inputNode = $('.loginBlock').find('input').eq(i);
						if(!inputNode.val()){
							inputNode.focus();
							break;
						}
					}
				});
			}else if(chinaString.test(loginUserName) || chinaString.test(loginPassWord)){
				mui.alert("账户或者密码不能有中文","警告:",function(){
					if(chinaString.test(loginUserName)){
						$("#inputUserName").focus();
					}else if(chinaString.test(loginPassWord)){
						$("#inputPassWord").focus();
					}
				});
			}else if(loginUserName.length<9 || loginUserName.length>13){
				mui.alert("账号请输入9~13个字符串或数字","警告:",function(){
					$("#inputUserName").focus();
				});
			}else if(loginPassWord.length<6 || loginPassWord.length>13){
				mui.alert("密码请输入6~13个字符串或数字","警告:",function(){
					$("#inputPassWord").focus();
				});
			}else{
				loginUpload(loginUserName ,loginPassWord);
			}
		});
	}
	
	
	
	// 登陆账号的验证
	function loginUpload(account_number,PassW){
		$.post('/8KM/8GongLiXiangMu/fun/loadUser.php',{ user:account_number , pasw:PassW},function(res){
			console.log(res);
			if(res == 0){
				mui.alert("账号或密码输入错误","警告:");
			}
			else if(!isNaN(res)){
				mui.alert("登陆成功，将跳转首页","通知:",function(){
					// 存储登录用户的id
					sessionStorage.setItem("userId", res);
					
					// 存储登录账号
					localStorage.setItem("LoginNumber", account_number);
					
					// 存储登录密码
					localStorage.setItem("LoginPassw", PassW);
					
					window.location.href = "./index.html";
				});
			}else{
				mui.alert("发生未知错误","警告:");
			}
		});
	}
	
	
	
	// 注册账号的存储
	function eintUpload(account_number,PassW,cell_phone,nickname){
		$.post('/8KM/8GongLiXiangMu/fun/newUser.php',{ thisUser:account_number , thisPasw:PassW , thisPhone:cell_phone , thisName:nickname},function(res){
				console.log(res);
			if(res==1){
				mui.confirm("注册成功","通知:",["取消","登陆"],function(e){
					if(e.index == 1){
						$('.eintBlock').css("display","none");
						$('.loginBlock').css("display","block");
						$("#inputUserName").val(account_number);
						$("#inputPassWord").val(PassW);
						// 存储登录账号
						localStorage.setItem("LoginNumber", account_number);
						
						// 存储登录密码
						localStorage.setItem("LoginPassw", PassW);
					}
				});
			}
			else{
				mui.alert(res,"警告:");
			}
		});
	}
	
	
	
	// 更改密码的存储
	function editUpload(account_number,PassW,cell_phone){
		$.post('/8KM/8GongLiXiangMu/fun/forgetPasw.php',{user:account_number , newPasw:PassW , phone:cell_phone},function(res){
				console.log(res);
			if(res==1){
				mui.confirm("密码更改成功","通知:",["取消","登陆"],function(e){
					if(e.index == 1){
						$('.editBlock').css("display","none");
						$('.loginBlock').css("display","block");
						$("#inputUserName").val(account_number);
						$("#inputPassWord").val(PassW);
						// 存储登录账号
						localStorage.setItem("LoginNumber", account_number);
						
						// 存储登录密码
						localStorage.setItem("LoginPassw", PassW);
					}
				});
			}
			else{
				mui.alert("出现错误","警告:");
			}
		});
	}

	
	
	
	// 防SQL脚本注入
	function htmlEncodeJQ ( str ) {  
	    return $('<span/>').text( str ).html();  
	}

})
