

$(window).ready(function(){
	
	mui.init();
	
	mui('.mui-off-canvas-wrap').offCanvas('hide');
	
	options = {
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	}
	
	// 用户的ID
	var loginUserId = sessionStorage.getItem("userId");
	
	if(loginUserId){
		getName();
		ini();
	}else{
		window.location.href= "login.html";
	}
	
	//获取昵称
	function getName(){
		$.post('/8KM/8GongLiXiangMu/fun/getnickName.php',{ id : loginUserId},function(res){
			console.log(res);
//			res = eval(res);
			if(res == 0 || res == "链接数据库失败"){
				mui.toast("出现错误");
			}else{
				$("#offHeadNickname").text(res);
			}
		});
	}
	
	
	
	function ini(){
		// 回填列表
		offOrderList();
		
		// 查看详情
		$(document).on("tap","#orderList>li",function(){
			var orderId = $(this).find(".orderDataStorage").attr("order-id");
			sessionStorage.setItem("orderListid",orderId);
			window.location.href = "orderPage/orderDetails.html";
		});
		
		// 换师傅
		$(document).on("tap",".mui-btn-success.offConfirmorder",function(e){
			e.stopPropagation();

			// 订单id
			var orderId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("order-id");
			// 当前时间戳
			var currentTime = new Date().getTime();
			currentTime = currentTime / 1000;
			// 未接单员工数组
			var staffStr = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("staff-arr");
			
			var staffArr = staffStr.substr(0,staffStr.length-1);
			staffArr = staffArr.split(",");
			
			
			mui.confirm("您是否要求换掉当前员工？","确认：",["取消","确认"],function(e){
				if(e.index == 1){
			$.post('/8KM/8GongLiXiangMu/fun/toggleStaff.php',{ id : orderId,staffarr:staffArr,staffstr:staffStr,newTime:currentTime},function(res){
				console.log(res);
				if(res==1){
					mui.alert("已确认","通知",function(){
						window.location.href = "index.html";
					});
				}
				else if(res==2){
					mui.alert("暂时没有闲置员工","通知：");
				}else{
					mui.toast("发生错误")
				}
			});
				}
			});
		});
		
		// 确认完成
		$(document).on("tap",".mui-btn-danger.offConfirmorder",function(e){
			e.stopPropagation();

			// 订单id
			var orderId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("order-id");
			// 师傅id
			var staffId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("staff-id");
			// 当前时间戳
			var currentTime = new Date().getTime();
			currentTime = currentTime / 1000;
			
			mui.confirm("您是否确认完成该订单？","确认：",["取消","确认"],function(e){
				if(e.index == 1){
					$.post('/8KM/8GongLiXiangMu/fun/OrderOk.php',{ id : orderId,staffId:staffId,newTime:currentTime},function(res){
						console.log(res);
						if(res==1){
							mui.alert("已确认","通知",function(){
								window.location.href = "index.html";
							})
						}
						else if(res==0){
							mui.alert("发生未知错误","警告:");
						}
					});
				}
			});
		});
		
		// 取消订单
		$(document).on("tap","button.offCancelorder",function(e){
			e.stopPropagation();

			// 订单id
			var orderId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("order-id");
			// 师傅id
			var staffId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("staff-id");
			// 当前订单状态
			var orderState = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("order-state");
			
			// staffState => 1 为待接，2为未分配
			var staffState = 1;
			var transId = "";
			if(orderState == "待接"){
				staffState = 1;
				transId = staffId;
			}else{
				staffState = 2;
				transId = orderId;
			}
			
			mui.confirm("您是否取消该订单？","确认：",["取消","确认"],function(e){
				if(e.index == 1){
					$.post('/8KM/8GongLiXiangMu/fun/cancelOrder.php',{ id:transId , state:staffState } ,function(res){
						console.log(res);
						if(res==1){
							mui.alert("已取消","通知",function(){
								window.location.href = "index.html";
							})
						}
						else{
							mui.alert("发生未知错误","警告:");
						}
					});
				}
			});
		});
	}
	
	
	// 订单列表的回填
	function offOrderList(){
		$.post('/8KM/8GongLiXiangMu/fun/checkOrder.php',{ id : loginUserId },function(res){
			
			res = eval(res);
			console.log(res,typeof(res));
			if(typeof(res) == "object"){
				if(res.length>0){
					
					// 未分配
					var orderUnassignedStr = "";
					// 待接
					var orderWaitingStr = "";
					// 进行中
					var orderHaveStr = "";
					// 完成
					var orderCompleteStr = "";

					for(var i = 0;i<res.length;i++){
						var cur = res[i];
						
						var orderId = cur.id;				// 订单ID
						var StaffId = cur.staffID; 			// 员工ID
						var StaffArr = cur.staffarr; 		// 当前订单未接单员工
						var orderType = cur.type;  			// 搬家类型
						var orderData = cur.orderjson;  	// 详细数据
						var orderTimeStart = parseFloat(cur.oldtime);   // 开始时间
						orderTimeStart = getLocalTime(orderTimeStart);	// 开始时间的时间格式转换
						var orderTimeNew = parseFloat(cur.newtime);   	// 1小时后时间
						var orderState = cur.state;			// 订单状态
						
						var orderbadge = "";  				// 角标颜色
						var orderCancel = "";				// 取消按钮
						var orderConfirm = "";				// 确认按钮
						var orderEndTime = "";				// 结束时间
						var htmlStr = "";
							
						if(orderState == "未分配"){
							orderbadge = '<span class="mui-badge mui-btn-warning mui-pull-right">未分配</span>';
							orderCancel = '<button type="button" class="mui-btn mui-btn-primary offCancelorder">取消订单</button>';
						}else if(orderState == "待接"){
							orderbadge = '<span class="mui-badge mui-badge-success mui-pull-right">待接</span>';
							orderCancel = '<button type="button" class="mui-btn mui-btn-primary offCancelorder">取消订单</button>';
							var currentTime = new Date().getTime();
							currentTime = currentTime / 1000;
							if(currentTime > orderTimeNew){
								orderConfirm = '<button type="button" class="mui-pull-right mui-btn mui-btn-success offConfirmorder">换师傅</button>';
							}
						}else if(orderState == "进行中"){
							orderbadge = '<span class="mui-badge mui-badge-primary mui-pull-right">进行中</span>';
							orderConfirm = '<button type="button" class="mui-pull-right mui-btn mui-btn-danger offConfirmorder">确认完成</button>';
						}else if(orderState == "完成"){
							orderbadge = '<span class="mui-badge mui-badge-danger mui-pull-right">完成</span>';
							orderTimeNew = getLocalTime(orderTimeNew);
							orderEndTime = '<p class="offlistTimeEnd"><span>完成时间：'+orderTimeNew+'</span></p>';
						}
						
						
						htmlStr += '<li class="mui-table-view-cell mui-media">';
						htmlStr += '<span class="orderDataStorage" staff-id="'+StaffId+'" data-type="'+orderType+'" order-id="'+orderId+'" order-state="'+orderState+'" staff-arr="'+StaffArr+'">存储数据</span>';
						htmlStr += '<a href="javascript:;">';
						htmlStr += '<div class="mui-media-body">';
						htmlStr += '<p><span>下单类型：'+orderType+'</span></p>';
						htmlStr += '<p>员工  ID：<span>'+StaffId+'</span>'+orderbadge+'</p>';
						htmlStr += '<p class="offlistTimeStart"><span>开始时间：'+orderTimeStart+'</span></p>';
						htmlStr += orderEndTime;
						htmlStr += '<div class="offlistEdit">';
						htmlStr += orderCancel;
						htmlStr += orderConfirm;
						htmlStr += '</div></div></a></li>';



						if(orderState == "未分配"){
							orderUnassignedStr += htmlStr;
						}else if(orderState == "待接"){
							orderWaitingStr += htmlStr;
						}else if(orderState == "进行中"){
							orderHaveStr += htmlStr;
						}else if(orderState == "完成"){
							orderCompleteStr += htmlStr;
						}
					}

					var orderCodeStr = orderUnassignedStr + orderWaitingStr + orderHaveStr + orderCompleteStr;
					
					$("#orderList").html(orderCodeStr);
				}
					
			}else{
				mui.toast("发生未知错误");
			}
		});
	}
	
	
	// 通过时间戳获取时间格式
	function getLocalTime(nS) {     
	   	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
	}     
	
	
	
	
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
	$("#perSonal-moving").on("tap",function(){
		window.location.href = "./orderPage/perSonal-page.html";
	});
	
	$("#freight-service").on("tap",function(){
		window.location.href = "./orderPage/freight-service.html";
	});
	
	$("#air-conDitioning").on("tap",function(){
		window.location.href = "./orderPage/air-conDitioning.html";
	});
	
	$("#comPany-moving").on("tap",function(){
		window.location.href = "./orderPage/comPany-moving.html";
	});
	
	$("#longDistance-moving").on("tap",function(){
		window.location.href = "./orderPage/longDistance-moving.html";
	});
	
});
