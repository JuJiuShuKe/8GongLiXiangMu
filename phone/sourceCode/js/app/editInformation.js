

/*
 * 信息修改
 */

$(window).ready(function(){
	mui.init();
	
	options = {
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	}
	
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
	

	// 用户的ID
	var loginUserId = sessionStorage.getItem("userId");
	
	if(loginUserId){
		ini();
	}else{
		window.location.href= "../login.html";
	}
	
	
	
	function ini(){
		$("#nameBtn").on("tap",function(){
			var nickName = $("#nickName").val();
			
			if(!nickName){
				mui.alert("不能为空","警告",function(){
					$("#nickName").focus();
				});
			}else if(nickName.length > 32){
				mui.alert("不昵称不能超过32个字符","警告",function(){
					$("#nickName").focus();
				});
			}else{
				loadData(loginUserId,"昵称",nickName);
			}
		});
		
		
		
		$("#numberBtn").on("tap",function(){
			var phoneNum = $("#phoneNum").val();
			var phoneProof = /^1[34578]\d{9}$/;
			
			if(!phoneNum){
				mui.alert("不能为空","警告",function(){
					$("#phoneNum").focus();
				});
			}else if(!phoneProof.test(phoneNum)){
				mui.alert("请重新验证您输入的号码的正确性","警告:",function(){
					$("#phoneNum").focus();
				});
			}else{
				loadData(loginUserId,"手机号",phoneNum);
			}
		});
	}
	
	
	
	function loadData(id,type,val){
		$.post('/8KM/8GongLiXiangMu/fun/userModifyData.php',{ id:id,type:type,val:val},function(res){
			console.log(res);
			if(res == 1){
				mui.alert("更改成功","通知:");
			}
			else{
				mui.alert("发生未知错误","警告:");
			}
		});
	}
	
});