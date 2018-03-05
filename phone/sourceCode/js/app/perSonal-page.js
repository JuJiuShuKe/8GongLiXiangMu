
/*
 * 个人搬家
 */

$(window).ready(function(){
	
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
	
	
	ModelsPage();




	
	
	
	// 提交
	$("#submitPage").on("touchstart",function(){
		// 手机号码的正则表达式
		var phoneProof = /^1[34578]\d{9}$/;
		
		var phonNumber = $(".currentProblem-input>input").val();
		var chinaString = new RegExp("[\\u4E00-\\u9FFF]+","g");
		
		if(!phonNumber){
			mui.alert("您未输入手机号码，请输入","警告:",function(){
				$(".currentProblem-input>input").focus();
			});
		}else if(chinaString.test(phonNumber)){
			mui.alert("您输入的手机号码包含中文，请重新输入","警告:",function(){
				$(".currentProblem-input>input").val("");
				$(".currentProblem-input>input").focus();
			});
		}else if(!phoneProof.test(phonNumber)){
			mui.alert("请重新验证您输入的号码的正确性","警告:",function(){
				$(".currentProblem-input>input").focus();
			});
		}else{
			problemData();
		}
	});
	

	
	
	// 问题一  需要的车型
	function ModelsPage(){
		var dataObj = {
			"dataArr" : [
				{
					"color" : "#7ab6e9",
					"title" : "小面<br/>包车",
					"textTitle" : "小件搬家，适用于学生、白领等",
					"textMidle" : "空间：1.0m*1.2m*1.2m，可容纳6-10个软包裹，不能搬运大型家电/家具，如：洗衣机/空调/冰箱/沙发/衣柜等"
				},
				{
					"color" : "#6cc88f",
					"title" : "小型<br/>平板车",
					"textTitle" : "适用于少量大件家具运输",
					"textMidle" : "空间：2m*1.6m*1.5m，可容纳适量包裹、少量较高的冰箱或大型家具"
				},
				{
					"color" : "#eda270",
					"title" : "依维柯",
					"textTitle" : "适用于运输各类包裹",
					"textMidle" : "空间：3.5m*2m*2.5m，可容纳20个左右的编织袋/软包裹+1台洗衣机，适量尺寸合适的家电/家具"
				},
				{
					"color" : "#a291d9",
					"title" : "中型<br/>厢货",
					"textTitle" : "适用于家庭搬家",
					"textMidle" : "空间：4.2m*1.8m*1.8m，可容纳各类包裹、洗衣机/书桌/衣柜/沙发/冰箱等大型家电与家具"
				},
				{
					"color" : "#64cac9",
					"title" : "金杯",
					"textTitle" : "包裹不多且有适量小家电",
					"textMidle" : "空间：2.7m*1.4m*1.2m，可容纳15个编织袋/软包裹+1台洗衣机，不能搬运大型家电/家具，如：空调/冰箱/沙发/衣柜等"
				},
				{
					"color" : "#c6be7b",
					"title" : "小型<br/>箱货",
					"textTitle" : "适用于普通货物运输",
					"textMidle" : "空间：2.7m*1.5m*1.7m；载重: 1.5吨；容量6.8m³；可搬运适量包裹；可搬运路演道具等"
				}
			]
		}
		
		var modelsData = dataObj.dataArr;
		
		$("#submitPage").hide();
		$("#previousPage").hide();
		
		for (var i = 0;i < modelsData.length;i++) {
			var ProblemChild = $("#modelsProblem").find("li").eq(i);
			ProblemChild.find(".Problem-title").css("background",modelsData[i].color).find("span").html(modelsData[i].title);
			
			if(modelsData[i].title.length < 4){
				ProblemChild.find(".Problem-title").find("span").css("line-height","32px");
			}
			
			ProblemChild.find(".Problem-text").find("span").css("color",modelsData[i].color).text(modelsData[i].textTitle);
			
			ProblemChild.find(".Problem-text").find("p").text(modelsData[i].textMidle);
			
			ProblemChild.find(".Problem-radio").find("span").attr("dataColor",modelsData[i].color).css("color",modelsData[i].color);
		}
		
		$("#modelsProblem").find("li").on("tap",function(){
			var child = $(this).find(".Problem-radio").find("span");
			var color = child.attr("dataColor");
			
			dataObj.modelsProblem = $(this).find(".Problem-title>span").text();
		
			$(".currentRadio").css("border-color","#eee").find(".Problem-radio").find("span.mui-icon").css("border-color","#eee").removeClass("mui-icon mui-icon-checkmarkempty");
			$(this).addClass("currentRadio");
			
			$(this).css("border-color",color);
			child.css("border-color",color);
			child.addClass("mui-icon mui-icon-checkmarkempty");
		});
	}



	// 用户的ID
	var loginUserId = sessionStorage.getItem("userId");
	
	if(loginUserId){
	}else{
		window.location.href= "../login.html";
	}
	
	
	
	// 获取数据
	function problemData(){
		dataObj.modelsProblem.Answer = $("#modelsProblem").find(".currentRadio").find(".Problem-title span").text();
		dataObj.artificialProblem.Answer = $("#artificialProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.onelevatorProblem.Answer = $("#onelevatorProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.toelevatorProblem.Answer = $("#toelevatorProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.timeProblem.Answer = $("#timeProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.addresetOutInput.Answer = $("#addressProblem").find(".currentProblem-input .setOutInput>input").val();
		dataObj.addreDestinationInput.Answer = $("#addressProblem").find(".currentProblem-input .DestinationInput>input").val();
		dataObj.phoneProblem.Answer = $("#phoneProblem").find(".currentProblem-input").find("input").val();



		dataObj.modelsProblem.problem = $("#modelsProblem").find(".currentTitle>p").text();
		dataObj.artificialProblem.problem = $("#artificialProblem").find(".currentTitle>p").text();
		dataObj.onelevatorProblem.problem = $("#onelevatorProblem").find(".currentTitle>p").text();
		dataObj.toelevatorProblem.problem = $("#toelevatorProblem").find(".currentTitle>p").text();
		dataObj.timeProblem.problem = $("#timeProblem").find(".currentTitle>p").text();
		dataObj.addresetOutInput.problem = "你的出发地的地址是哪里";
		dataObj.addreDestinationInput.problem = "你的目的地的地址是哪里";
		dataObj.phoneProblem.problem = $("#phoneProblem").find(".currentTitle>p").text();

		
		var jsonData = JSON.stringify(dataObj);
		// console.log(jsonData);
		var problemUserId = sessionStorage.getItem("userId");
		var startTme = new Date().getTime();
		startTme = startTme / 1000;
		var endtTme = startTme + 3600;
		
		// console.log(startTme,"####",endtTme);
		$.post('/8KM/8GongLiXiangMu/fun/newOrder.php',{ orderType : "个人搬家" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
				console.log(res);
			if(res==1){
				mui.toast("完成提交");
				setTimeout(function(){
					window.location.href = "../index.html";
				},400);
			}
			else if(res==0){
				mui.alert("发生位置错误","警告:");
			}
		});

		
	}
	
});