

/*
 * 货运服务
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
	
	
	ModelsPage();
	
	
	// 问题一  需要的车型
	function ModelsPage(){
		var problemObj = {
			"dataArr" : [
				{
					"color" : "#7ab6e9",
					"title" : "小型<br/>面包车",
					"textTitle" : "适用于少量小件货物运输",
					"textMidle" : "空间：1.8m*1.3m*1.1m；载重: 500公斤；容量2.5m³；可6-9个包裹"
				},
				{
					"color" : "#6cc88f",
					"title" : "中型<br/>面包车",
					"textTitle" : "适用于小店铺的日常补货",
					"textMidle" : "空间：2.7m*1.4m*1.2m；载重: 1吨；容量4.5m³；可容纳10-20个包裹"
				},
				{
					"color" : "#eda270",
					"title" : "小型<br/>厢货",
					"textTitle" : "适用于普通货物运输",
					"textMidle" : "空间：2.7m*1.5m*1.7m；载重: 1.5吨；容量6.8m³；可搬运适量包裹；可搬运路演道具等"
				},
				{
					"color" : "#a291d9",
					"title" : "中型<br/>厢货",
					"textTitle" : "适用于适量建筑材料/农副产品运输",
					"textMidle" : "空间：4.2m*1.8m*1.8m；载重: 1.8吨；容量13m³；冰箱、洗衣机等家电；拆卸打包好的双人床；30个包裹左右"
				},
				{
					"color" : "#64cac9",
					"title" : "小型<br/>平板",
					"textTitle" : "适用于少量大件货物运输",
					"textMidle" : "空间：2m*1.6m*1.5m；载重: 1.5吨；容量5m³；"
				},
				{
					"color" : "#c6be7b",
					"title" : "中型<br/>平板",
					"textTitle" : "适用于工业/制造业的货物运输",
					"textMidle" : "空间：4.2m*1.8m*1.8m；载重: 1.8吨；容量13m³；工业制造业的货物运输"
				},
				{
					"color" : "#d38a98",
					"title" : "依维柯",
					"textTitle" : "适用于运输各类包裹",
					"textMidle" : "3.5m*2m*2.5m；载重1.6吨；容量8m³"
				}
			]
		}
		
		var modelsData = problemObj.dataArr;
		
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
		dataObj.timeProblem.Answer = $("#timeProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.addresetOutInput.Answer = $("#addressProblem").find(".currentProblem-input .setOutInput>input").val();
		dataObj.addreDestinationInput.Answer = $("#addressProblem").find(".currentProblem-input .DestinationInput>input").val();
		dataObj.phoneProblem.Answer = $("#phoneProblem").find(".currentProblem-input").find("input").val();



		dataObj.modelsProblem.problem = $("#modelsProblem").find(".currentTitle>p").text();
		dataObj.artificialProblem.problem = $("#artificialProblem").find(".currentTitle>p").text();
		dataObj.timeProblem.problem = $("#timeProblem").find(".currentTitle>p").text();
		dataObj.addresetOutInput.problem = "你的出发地的地址是哪里";
		dataObj.addreDestinationInput.problem = "你的目的地的地址是哪里";
		dataObj.phoneProblem.problem = $("#phoneProblem").find(".currentTitle>p").text();


		
		var jsonData = JSON.stringify(dataObj);
		console.log(jsonData);
		var problemUserId = sessionStorage.getItem("userId");
		var startTme = new Date().getTime();
		startTme = startTme / 1000;
		var endtTme = startTme + 3600;
		
//		console.log(startTme,"####",endtTme);
		$.post('/8KM/8GongLiXiangMu/fun/newOrder.php',{ orderType : "货运服务" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
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
	
});