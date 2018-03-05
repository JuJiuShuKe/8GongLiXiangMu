if(sessionStorage.getItem("landingSuccess") == 'true'){	
}else{
	window.location.href="../../../login.html"
}


function Add_D(){
	
	$('#add_don').click(function(){
		var Account=$('.Account').val();
		var name=$('.name').val();
		var pwd=$('.pwd').val();
		var Number=$('.number').val();	
		var pree=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  //电话号码的正则表达式
		
		if(!Account||!name||!pwd||!Number){
			layer.msg("输入不能为空");
		}else if(pree.test(Account)){
			layer.msg("账号不能输入中文");
		}else if(pwd.length<6||pwd.length>13){
			layer.msg("密码必须6-13位");
		}else if(!myreg.test(Number)){
			layer.msg("电话号码输入错误")
		}else{
			var json={
				thisUser:Account,
				thisName:name,
				thisPasw:pwd,
				thisPhone:Number
			}
			
			$.post('../../../../fun/newStaff.php',json,function(res){
				if(res=='1'){
					layer.msg("添加成功");
					setTimeout(function(){
						window.location='http://localhost/8KM/8GongLiXiangMu/admin/Backstage/page/news/newsList.html';
					},400)
				}else if(res == "2"){
					layer.msg("账号或手机号重复");
				}else{
					layer.msg("添加失败");
				}
			})
		}
	})
}
Add_D();

