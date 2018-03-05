function login_D(){
	

	$('#LoginVal').click(function(){//点击登录按钮
		//sessionStorage.setItem("landingSuccess",true)
		var LoginName=$('#LoginName').val();//获取用户名的值
		var PassWord=$('#PassWord').val();//获取用户名的密码
		var selecta=$('#select option:selected').text();//获取是管理员还是员工
		var num=1;
		if(LoginName&&PassWord){//判断输入是否为空
			if(selecta=='管理员'){
				num=2;
			}

			$.post('../fun/loadStaff.php',{user:LoginName,pasw:PassWord,type:num},function(res){

				if(res=='0'){
					layer.msg("账号或密码输入错误");
				}else{
					sessionStorage.setItem("landingSuccess",true)
					window.location.href="Backstage/index.html?id="+res+"&number="+num;		
				}
			})
	
		}else{
			layer.msg("用户名或密码不能为空");
		}
	})

}
login_D();



