if(sessionStorage.getItem("landingSuccess") == 'true'){		
}else{
	window.location.href="../../../login.html"
}



function Add_Y(){
	 var name;
	 var pwd;
	 var Number1;
		
	var url = location.search; //获取url中"?"符后的字串
	if (url.indexOf("?") != -1){
		
		var str = url.substr(1);
		strs = str.split("=");  //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
		var str_one=strs[1];
		$.post('../../../../fun/inEditStaff.php',{id:str_one},function(res){
			res=eval(res)
			if(res){
				var str='';
				for(var i=0;i<res.length;i++){
					$('.name').val(res[i][3]);
					$('.pwd').val(res[i][2]);
					$('.number').val(res[i][4]);


					var pree=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
					var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  //电话号码的正则表达式
					$('#add_don').click(function(){
						name=$('.name').val();
						pwd=$('.pwd').val();
						Number1=$('.number').val();

						if(!name||!pwd||!Number1){
							layer.msg("输入不能为空");
						}else if(pwd.length<6||pwd.length>13){
							layer.msg("密码必须6-13位");
						}else if(!myreg.test(Number1)){
							layer.msg("电话号码输入错误")
						}else{
							var json={
								name:name,
								Pasw:pwd,
								phone:Number1,
								id:str_one
							}
							$.post('../../../../fun/EditStaffOk.php',json,function(res){
								if(res=='1'){
									layer.msg("修改成功");
									setTimeout(function(){
										window.location='http://localhost/8KM/8GongLiXiangMu/admin/Backstage/page/news/newsList.html';
									},400)
								}else{
									layer.msg("修改失败");
								}
							})
						}
					})		
				}			
						
			}else{
				layer.msg("没有请求到数据");
			}
			
		})
	}else{
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
Add_Y();

