// layer.confirm('你是否确认该订单', {
//   btn: ['确定','取消'] //按钮
// }, function(){
//   layer.msg('确定成功', {icon: 1});
// }, function(){
//   layer.msg('取消成功', {
//   });
// });
	
	
	
	


	// 用户的ID
// 	var loginUserId = sessionStorage.getItem("userId");
	
// 	if(loginUserId){
// 		ini();
// 	}else{
// //			window.location.href= "login.html";
// 	}
	
 	var loginUserId = localStorage.getItem("userId");
 
	offOrderList();
	
	// 订单列表的回填
	function offOrderList(){
		$.post('../../fun/checkOrder.php',{ id:loginUserId },function(res){
			
			res = eval(res);
			
			
			// if(typeof(res) == "object"){
				if(res.length>0){
					var htmlStr = "";
					for(var i = 0;i<res.length;i++){
						
						var cur = res[i];
						
						var orderId = cur.id;				// 订单ID
						var StaffId = cur.staffID; 			// 员工ID
						var orderType = cur.type;  			// 搬家类型
						var orderData = cur.orderjson;  	// 详细数据
						var orderTimeStart = parseInt(cur.oldtime);   // 开始时间
						var orderTimeNew = parseInt(cur.newtime);   // 1小时后时间
						var orderState = cur.state;			// 订单状态
						

						var orderCancel = "";				// 取消按钮
						var orderConfirm = "";				// 确认按钮
						var orderEndTime = "";				// 结束时间
						var orderMaster = "";               //换师傅按钮
						htmlStr = 	'<tr class="trtd">\
										<td width="20%" height="40px">'+orderType+'</th>\
										<td width="10%" >'+StaffId+'</th>\
										<td width="15%">'+orderTimeStart+'</td>\
										<td width="15%">'+orderTimeNew+'</td>\
										<td width="15%">'+orderState+'</td>'
						if(orderState == "未分配"){
							htmlStr += '<td width="25%">\
											<button class="cancel">取消订单</button>\
											<button class="details">查看详情</button>\
										</th>\
									</tr>'
						}else if(orderState == "完成"){
							htmlStr += '<td width="25%">\
											<button class="details">查看详情</button>\
										</th>\
									</tr>'
						}else if(orderState == "待接"){
								htmlStr += '<td width="25%">\
											<button class="cancel">取消订单</button>\
											<button class="cance2">换师傅</button>\
											<button class="details">查看详情</button>\
										</th>\
									</tr>'

						}else if(orderState == "进行中"){
							htmlStr += '<td width="25%">\
											<button class="confirm">确定订单</button>\
											<button class="details">查看详情</button>\
										</th>\
									</tr>'
						}

						$("#tbodyed").append(htmlStr);
							var cancel= $('.cancel');
							cancel.on('click',function(){
								var staffState = 1;
									var transId = "";
									if(orderState == "待接"){
										staffState = 1;
										transId = staffId;
									}else{
										staffState = 2;
										transId = orderId;
									}

								$.post('../../fun/cancelOrder.php',{ id:transId , state:staffState } ,function(res){
								console.log(res);
								if(res==1){
									alert("取消成功");
									window.location.reload();
								}
								else{
									alert("取消失败")
								}
							});		
						});

						var confirm= $('.confirm');
							confirm.on('click',function(){
								var currentTime = new Date().getTime();
									currentTime = currentTime / 1000;

							$.post('../../fun/OrderOk.php',{ id : orderId,staffId:staffId,newTime:currentTime},function(res){
								console.log(res);
								if(res==1){
									alert("确定成功")
									window.location.reload();
								}
								else if(res==0){
									alert("确定失败")
								}
							});	
						});

						var cance2= $('.cance2');
							cance2.on('click',function(){
								var currentTime = new Date().getTime();
									currentTime = currentTime / 1000;

							$.post('/8KM/8GongLiXiangMu/fun/toggleStaff.php',{ id : orderId,staffarr:staffArr,staffstr:staffStr,newTime:currentTime},function(res){
								//console.log(res);
								if(res==1){
									alert("换师傅成功")
									window.location.reload();
								}
								else if(res==2){
									alert("暂时没有闲置师傅")
								}else{
									alert("发生未知错误")
								}
							});
						});

						var datails= $('.details');
							datails.on('click',function(){
								$(".detailser>.centered").find("p").eq(0).find("span").text(orderType);

								$('.tablist').css("display","none");
								$('.detailser').css("display","block");
								orderData = JSON.parse(orderData);
								var liStr = "";
								for(var i in orderData){
									liStr += '<li class="orderDetaulList"><p class="detail-problem">'+orderData[i].problem+'</p> <p class="detail-answer">'+orderData[i].Answer+'</p></li>'
								}
								$(".detailser>.centered ul").append(liStr);
						});


					}
				}
					
			// }else{
			// 	alert("发生未知错误");
			// }
		});

	}

	// var confirm= $('.confirm');
	// console.log(confirm)

	//详情
	// function orderDetails(){
	// 	cancel.on('click',function(){
	// 		alert(1)

	// 	})
	// }


	// function confirmOrder(){

	// }

	// var confirm= $('.confirm');
	// function determine(){
	// 	confirm.on('click',function(){
	// 					e.stopPropagation();

	// 		// 订单id
	// 		var orderId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("order-id");
	// 		// 师傅id
	// 		var staffId = $(this).parents("li.mui-table-view-cell").find(".orderDataStorage").attr("staff-id");
	// 		// 当前时间戳
	// 		var currentTime = new Date().getTime();
	// 		currentTime = currentTime / 1000;
			
	// 		layer.confirm("您是否确认完成该订单？","确认：",["取消","确认"],function(e){
	// 			if(e.index == 1){
	// 				$.post('/8KM/8GongLiXiangMu/fun/OrderOk.php',{ id : orderId,staffId:staffId,newTime:currentTime},function(res){
	// 					console.log(res);
	// 					if(res==1){
	// 						mui.alert("已确认","通知",function(){
	// 							ini();
	// 						})
	// 					}
	// 					else if(res==0){
	// 						mui.alert("发生未知错误","警告:");
	// 					}
	// 				});
	// 			}
	// 		});

	// 	})

	// }	
