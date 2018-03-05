//轮播插件
//
//
	// var loginUserId = localStorage.getItem("userId");
	
	// if(loginUserId){
	// 	// ini();
	// }else{
	// 	window.location.href= "login.html";
	// }
function carousel_plugin(){
	layui.use('carousel', function(){
		 var carousel = layui.carousel;
		  //建造实例
		  carousel.render({
		    elem: '#test1'
		    ,width: '100%' //设置容器宽度
		    ,height:'400px'
		    ,arrow: 'always' //始终显示箭头
		    ,anim: 'fade' //切换动画方式
		  });
	});
}
carousel_plugin();


var click_order= $('#click_order');
var personal_move= $('.personal_move');
var click_order1= $('#click_order1');
var personal_move1= $('.personal_move1');
var click_order2= $('#click_order2');
var personal_move2= $('.personal_move2');
var click_order3= $('#click_order3');
var personal_move3= $('.personal_move3');
var click_order4= $('#click_order4');
var personal_move4= $('.personal_move4');

click_order.on('click',function(){
	layer.open({
	  type: 1,
	  title:"订单详情",
	  // skin: 'layui-layer-rim', //加上边框
	  area: ['730px','800px'], //宽高
	  content: personal_move
	});
})

click_order2.on('click',function(){
	layer.open({
	  type: 1,
	  title:"订单详情",
	  // skin: 'layui-layer-rim', //加上边框
	  area: ['730px','800px'], //宽高
	  content: personal_move2
	});
})

click_order1.on('click',function(){
	layer.open({
	  type: 1,
	  title:"订单详情",
	  // skin: 'layui-layer-rim', //加上边框
	  area: ['730px','800px'], //宽高
	  content: personal_move1
	});
})

click_order3.on('click',function(){
	layer.open({
	  type: 1,
	  title:"订单详情",
	  // skin: 'layui-layer-rim', //加上边框
	  area: ['730px','800px'], //宽高
	  content: personal_move3
	});
})

click_order4.on('click',function(){
	layer.open({
	  type: 1,
	  title:"订单详情",
	  // skin: 'layui-layer-rim', //加上边框
	  area: ['730px','800px'], //宽高
	  content: personal_move4
	});
})

function selected_box_selection(){
	$('input[name="yesd"]').on('click',function(){
	$('input[name="yesd"]').parent().removeClass('lab');
	if($('#yes:checked').val()){
		$(this).parent().addClass('lab');
	}else{
		$(this).parent().addClass('lab');
		}
	})

	$('input[name="option"]').on('click',function(){
	$('input[name="option"]').parent().removeClass('lab');
	if($('#yes:checked').val()){
		$(this).parent().addClass('lab');
	}else{
		$(this).parent().addClass('lab');
		}
	})
}
selected_box_selection();


    var dataObj = {
		modelsProblem : {
			problem : "",
			Answer : ""
		},
		artificialProblem : {
			problem : "",
			Answer : ""
		},
		onelevatorProblem : {
			problem : "",
			Answer : ""
		},
		toelevatorProblem :{
			problem : "",
			Answer : ""
		},
		timeProblem : {
			problem : "",
			Answer : ""
		},
		// 出发地
		addresetOutInput : {
			problem : "",
			Answer : ""
		},
		// 目的地
		addreDestinationInput : {
			problem : "",
			Answer : ""
		},
		phoneProblem : {
			// 问题
			problem : "",
			// 答案
			Answer : ""
		}
	}
	 	
var place_order= $('#place_order');
function Request_data(){
	place_order.on('click',function(){
		var pattern = /^1[34578]\d{9}$/;

		dataObj.modelsProblem.problem = $('#moving1').text();

		 dataObj.artificialProblem.problem = $('#movingq1').text();
		 dataObj.onelevatorProblem.problem = $('#moving2').text();
		 dataObj.toelevatorProblem.problem = $('#moving3').text();
		 dataObj.timeProblem.problem= $('#moving4').text();
		 dataObj.addresetOutInput.problem = $('#moving5').text();
		 dataObj.addreDestinationInput.problem = $('#moving6').text();
		 dataObj.phoneProblem.problem= $('#moving7').text();

		dataObj.modelsProblem.Answer= $('#models').val();
		dataObj.artificialProblem.Answer = $("input[type='radio']:checked").val();
		dataObj.onelevatorProblem.Answer = $('#move_out').val();
		 dataObj.toelevatorProblem.Answer = $('#move_to').val();
		 dataObj.timeProblem.Answer= $('#moving_time').val();
		 dataObj.addresetOutInput.Answer = $('#place_out').val();
		 dataObj.addreDestinationInput.Answer = $('#place_to').val();
		 dataObj.phoneProblem.Answer= $('#phone_number').val();

		 console.log(dataObj)
		if(!dataObj.artificialProblem.Answer||!dataObj.timeProblem.Answer||!dataObj.addreDestinationInput.Answer||!dataObj.phoneProblem.Answer){
			 layer.msg('不能为空');
		}
		else if(!(pattern.test(dataObj.phoneProblem.Answer))){
			layer.msg("手机号输入错误");
		}
		else{
			order_data();
			}	
		})
	}

Request_data();
function order_data(){
	var jsonData = JSON.stringify(dataObj);
	//console.log(jsonData);
	var problemUserId = localStorage.getItem("userId");
        var startTme = new Date().getTime();
        var endtTme = startTme + 3600;
	 $.post('../../fun/newOrder.php',{ orderType : "个人搬家" ,  orderData:jsonData ,thisUser : problemUserId , oldTime:startTme , newTime:endtTme},function(res){
                console.log(res);
            if(res==1){
              layer.msg("下单成功");
              $("#layui-layer-shade1,#layui-layer1").remove();
              window.location.href="Details.html";

            }
            else if(res==0){
                layer.msg("下单失败");

            }
        });
}


		var dataObj1 = {
		typeProblem : {
			problem : "",
			Answer : ""
		},
		onfloorProblem : {
			problem : "",
			Answer : ""
		},
		tofloorProblem : {
			problem : "",
			Answer : ""
		},
		ispersonalProblem : {
			problem : "",
			Answer : ""
		},
		additionalProblem : {
			problem : "",
			Answer : ""
		},
		horsesProblem : {
			problem : "",
			Answer : ""
		},
		timeProblem : {
			problem : "",
			Answer : ""
		},
		addresetOutInput : {
			problem : "",
			Answer : ""
		},
		addreDestinationInput : {
			problem : "",
			Answer : ""
		},
		phoneProblem : {
			problem : "",
			Answer : ""
		}
	}
var place_order1= $('#place_order1');
function Request_data1(){
	place_order1.on('click',function(){
	var pattern = /^1[34578]\d{9}$/;
	dataObj1.typeProblem.problem = $('.movinge').text();
	dataObj1.ispersonalProblem.problem= $(".movinge3").text();
	dataObj1.additionalProblem.problem = $(".movinge4").text();
	dataObj1.timeProblem.problem= $('.movinge6').text();
	dataObj1.horsesProblem.problem= $('.movinge5').text();
	dataObj1.addresetOutInput.problem = $('.movinge7').text();
	dataObj1.addreDestinationInput.problem = $('.movinge8').text();
	dataObj1.onfloorProblem.problem = $('.movinge1').text();
	dataObj1.tofloorProblem.problem = $('.movinge2').text();
	dataObj1.phoneProblem.problem= $('.movinge9').text();
	


	dataObj1.typeProblem.Answer = $('#models1').val();
	//console.log(dataObj1.typeProblem.Answer)
	dataObj1.ispersonalProblem.Answer= $("#radvaled input[type='radio']:checked").val();
	dataObj1.additionalProblem.Answer = $("#checkbox1 input[type='radio']:checked").val();
	dataObj1.timeProblem.Answer= $('#moving_time1').val();
	dataObj1.horsesProblem.Answer= $('#conditioner_number1').val();
	dataObj1.addresetOutInput.Answer = $('#place_out1').val();
	dataObj1.addreDestinationInput.Answer = $('#place_to1').val();
	dataObj1.onfloorProblem.Answer = $('#move_out1').val();
	dataObj1.tofloorProblem.Answer = $('#move_to1').val();
	dataObj1.phoneProblem.Answer= $('#phone_number1').val();
	console.log(dataObj1)
	//console.log(dataObj1.ispersonalProblem.Answer,dataObj1.additionalProblem.Answer,dataObj1.addresetOutInput.setOutInput,dataObj1.addreDestinationInput.DestinationInput,dataObj1.phone_number.Answer)
	if(!dataObj1.ispersonalProblem.Answer||!dataObj1.additionalProblem.Answer||!dataObj1.addresetOutInput.Answer||!dataObj1.addreDestinationInput.Answer||!dataObj1.phoneProblem.Answer){
		layer.msg('不能为空');
	}
	 else if(!(pattern.test(dataObj1.phoneProblem.Answer))){
		layer.msg("手机号输入错误");
	}
	else{
		order_data1();
		}		
	})
}
Request_data1();
function order_data1(){
	// console.log(dataObj1);
	var jsonData = JSON.stringify(dataObj1);
		
		var problemUserId = localStorage.getItem("userId");
		var startTme = new Date().getTime();
		var endtTme = startTme + 3600;
		$.post('../..//fun/newOrder.php',{ orderType : "空调移机" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
				//console.log("aaa",res);
			if(res==1){
				layer.msg("下单成功");
				$("#layui-layer-shade1,#layui-layer1").remove();
				window.location.href="Details.html";
			}
			else if(res==0){
				layer.msg("下单失败")
			}
	});
}


	var dataObj2 = {
		modelsProblem : {
			problem : "",
			Answer : ""
		},
		artificialProblem : {
			problem : "",
			Answer : ""
		},
		timeProblem : {
			problem : "",
			Answer : ""
		},
		addresetOutInput : {
			problem : "",
			Answer : ""
		},
		addreDestinationInput : {
			problem : "",
			Answer : ""
		},
		phoneProblem : {
			problem : "",
			Answer : ""
		}
	}
var place_order2= $('#place_order2');
function Request_data2(){

	place_order2.on('click',function(){
	var pattern = /^1[34578]\d{9}$/;

	 dataObj2.modelsProblem.problem = $('.need').text();
	 dataObj2.artificialProblem.problem = $(".need1").text();
	 dataObj2.timeProblem.problem= $('.need2').text();
	 dataObj2.addresetOutInput.problem = $('.need3').text();
	 dataObj2.addreDestinationInput.problem = $('.need4').text();
	 dataObj2.phoneProblem.problem= $('.need5').text();

	 dataObj2.modelsProblem.Answer = $('.models').val();
	 dataObj2.artificialProblem.Answer = $("input[type='radio']:checked").val();
	 dataObj2.timeProblem.Answer= $('.moving_time').val();
	 dataObj2.addresetOutInput.Answer = $('.place_out').val();
	 dataObj2.addreDestinationInput.Answer = $('.place_to').val();
	 dataObj2.phoneProblem.Answer= $('.phone_number').val();
	 //console.log(dataObj2)
	if(!dataObj2.addresetOutInput.Answer||!dataObj2.addreDestinationInput.Answer||!dataObj2.artificialProblem.Answer||!dataObj2.phoneProblem.Answer){
		layer.msg('不能为空');
	}
	else if(!(pattern.test(dataObj2.phoneProblem.Answer))){
		layer.msg("手机号输入错误");
	}
	else{
		order_data2();
		}	
	//order_data2();
	})
}
Request_data2();
function order_data2(){
	var jsonData = JSON.stringify(dataObj);
	var problemUserId = localStorage.getItem("userId");
        var startTme = new Date().getTime();
        var endtTme = startTme + 3600;
			$.post('../../fun/newOrder.php',{ orderType : "货运服务" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
				console.log(res);
			if(res==1){
				layer.msg("下单成功");
				$("#layui-layer-shade1,#layui-layer1").remove();
				window.location.href="Details.html";
			}
			else if(res==0){
				layer.msg("下单失败")
			}
	});
}


	var dataObj3 = {
		isenterpriseProblem : {
			problem : "",
			Answer : ""
		},
		additionalProblem : {
			problem : "",
			Answer : ""
		},
		isfragileProblem : {
			problem : "",
			Answer : ""
		},
		onfloorProblem : {
			problem : "",
			Answer : ""
		},
		tofloorProblem : {
			problem : "",
			Answer : ""
		},
		timeProblem : {
			problem : "",
			Answer : ""
		},
		addresetOutInput : {
			problem : "",
			Answer : ""
		},
		addreDestinationInput : {
			problem : "",
			Answer : ""
		},
		phoneProblem : {
			problem : "",
			Answer : ""
		}
	}
var place_order3= $('#place_order3');
function Request_data3(){
	place_order3.on('click',function(){
		var pattern = /^1[34578]\d{9}$/;

	dataObj3.additionalProblem.problem = $(".movingc").text();
	 dataObj3.isfragileProblem.problem = $(".movingc1").text();
	 dataObj3.isenterpriseProblem.problem = $('.movingc2').text();
	 dataObj3.timeProblem.problem= $('.movingc5').text();
	 dataObj3.onfloorProblem.problem = $('.movingc3').text();
	 dataObj3.tofloorProblem.problem= $('.movingc4').text();
	 dataObj3.addresetOutInput.problem = $('.moving6').text();
	 dataObj3.addreDestinationInput.problem = $('.moving7').text();
	 dataObj3.phoneProblem.problem= $('.moving8').text();

	 dataObj3.additionalProblem.Answer = $(".personal_company input[type='radio']:checked").val();
	 dataObj3.isfragileProblem.Answer = $(".additional input[type='radio']:checked").val();
	 dataObj3.isenterpriseProblem.Answer = $('.fragile_articles').val();
	 dataObj3.timeProblem.Answer= $('.moving_time').val();
	 dataObj3.onfloorProblem.Answer = $('.move_out').val();
	 dataObj3.tofloorProblem.Answer= $('.move_to').val();
	 dataObj3.addresetOutInput.Answer = $('.place_out1').val();
	 dataObj3.addreDestinationInput.Answer = $('.place_to1').val();
	 dataObj3.phoneProblem.Answer= $('.phone_number1').val();
	
	console.log(dataObj3)
	if(!dataObj3.additionalProblem.Answer||!dataObj3.addresetOutInput.Answer||!dataObj3.addreDestinationInput.Answer||!dataObj3.phoneProblem.Answer||!dataObj3.isfragileProblem.Answer){
		layer.msg('不能为空');
	}
	else if(!(pattern.test(dataObj3.phoneProblem.Answer))){
		layer.msg("手机号输入错误");
	}
	else{
		order_data3();
		}	
	})
}
Request_data3();
function order_data3(){
	var jsonData = JSON.stringify(dataObj);
	var problemUserId = localStorage.getItem("userId");
        var startTme = new Date().getTime();
        var endtTme = startTme + 3600;
		$.post('../../fun/newOrder.php',{ orderType : "公司搬家" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
				console.log(res);
			if(res==1){
				layer.msg("下单成功");
				$("#layui-layer-shade1,#layui-layer1").remove();
				window.location.href="Details.html";
			}
			else if(res==0){
				layer.msg("下单失败")
			}
		});
}


	var dataObj4 = {
		ispersonalProblem : {
			problem : "",
			Answer : ""
		},
		additionalProblem : {
			problem : "",
			Answer : ""
		},
		onfloorProblem : {
			problem : "",
			Answer : ""
		},
		tofloorProblem : {
			problem : "",
			Answer : ""
		},
		timeProblem : {
			problem : "",
			Answer : ""
		},
		addresetOutInput : {
			problem : "",
			Answer : ""
		},
		addreDestinationInput : {
			problem : "",
			Answer : ""
		},
		phoneProblem : {
			problem : "",
			Answer : ""
		}
	}
var place_order4= $('#place_order4');
function Request_data4(){
	place_order4.on('click',function(){
		var pattern = /^1[34578]\d{9}$/;

	dataObj4.ispersonalProblem.problem = $(".movingp").text();
	 dataObj4.additionalProblem.problem = $(".movingp3").text();
	 dataObj4.timeProblem.problem= $('.movingp4').text();
	 dataObj4.onfloorProblem.problem = $('.movingp1').text();
	 dataObj4.tofloorProblem.problem = $('.movingp2').text();
	 dataObj4.addresetOutInput.problem = $('.movingp5').text();
	 dataObj4.addreDestinationInput.problem = $('.movingp6').text();
	 dataObj4.phoneProblem.problem= $('.movingp7').text();

	 dataObj4.ispersonalProblem.Answer = $(".personal_company11 input[type='radio']:checked").val();
	 dataObj4.additionalProblem.Answer = $(".additional1 input[type='radio']:checked").val();
	 dataObj4.timeProblem.Answer= $('.moving_time1').val();
	 dataObj4.onfloorProblem.Answer = $('.move_out1').val();
	 dataObj4.tofloorProblem.Answer = $('.move_to1').val();
	 dataObj4.addresetOutInput.Answer = $('.place_out2').val();
	 dataObj4.addreDestinationInput.Answer = $('.place_to2').val();
	 dataObj4.phoneProblem.Answer= $('.phone_number2').val();

	console.log(dataObj4);
	
	if(!dataObj4.ispersonalProblem.Answer||!dataObj4.addresetOutInput.Answer||!dataObj4.addreDestinationInput.Answer||!dataObj4.phoneProblem.Answer||!dataObj4.additionalProblem.Answer){
		layer.msg('不能为空');
	}
	else if(!(pattern.test(dataObj4.phoneProblem.Answer))){
		layer.msg("手机号输入错误");
	}
	else{
		order_data4();
		}	
	})
}
Request_data4();
function order_data4(){
	var jsonData = JSON.stringify(dataObj);
	var problemUserId = localStorage.getItem("userId");
        var startTme = new Date().getTime();
        var endtTme = startTme + 3600;
		$.post('../../fun/newOrder.php',{ orderType : "长途搬家" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
				console.log(res);
			if(res==1){
				layer.msg("下单成功");
				$("#layui-layer-shade1,#layui-layer1").remove();
				window.location.href="Details.html";
			}
			else if(res==0){
				layer.msg("下单失败")
			}
		});
}

//修改
// var modify = $('#modify');
// function modifyfun(){
// 	modify.on('click',function(){
// 		var nicknameval = $('.nickname').val();	
// 	})
// }
var loginUserId = localStorage.getItem("userId");
 getName();
	function getName(){
		$.post('../../fun/getnickName.php',{ id : loginUserId},function(res){
			console.log(res);
//			res = eval(res);
			if(res == 0 || res == "链接数据库失败"){
				alert("未知错误")
			}else{
				$("#offHeadNickname").text(res);
			}
		});
	}











