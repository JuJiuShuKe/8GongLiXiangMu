

/*
 * 详情页面
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
	
	if(!loginUserId){
		window.location.href= "../login.html";
	}
	
	
	var dataJson = {
		question : {
			problem : "没有问题",
			Answer : "没有答案"
		}
	}
	
	// 订单 ID
	var orderId = parseInt(sessionStorage.getItem("orderListid"));
	var dataType = "";
	
	
	
	$.ajax({
	 	async: false,
	  	type : "post",
	  	data : { id : loginUserId},
	  	url : '/8KM/8GongLiXiangMu/fun/checkOrder.php',
	 	success : function(res) {
			res = eval(res);
			if(typeof(res) == "object"){
				if(res.length>0){
					var htmlStr = "";
					for(var i = 0;i<res.length;i++){
						var cur = res[i];
						
						var currrentorderId = cur.id;				// 订单ID
						var orderType = cur.type;  					// 搬家类型
						
						var orderData = cur.orderjson;  			// 详细数据
						orderData = JSON.parse(orderData);
						
						if(currrentorderId == orderId){
							dataType = orderType;
							dataJson = orderData;
							$(".orderType p>span").text(dataType);
							
							break;
						}
					}
					
					$("#orderList").html(htmlStr);
				}
					
			}else{
				mui.toast("发生未知错误");
			}
		}
	});
	
	
	
	

	var Vm = new Vue({
		el : "#app",
		data : {
			jsonObj : dataJson
		}
	});
	
});