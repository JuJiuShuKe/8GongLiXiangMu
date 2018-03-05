

/*
 * 空调移机
 */

$(window).ready(function(){
	
	var dataObj = {
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

	// 用户的ID
	var loginUserId = sessionStorage.getItem("userId");
	
	if(loginUserId){

	}else{
		window.location.href= "../login.html";
	}
	
	
	

	
	// 获取数据
	function problemData(){
		// 答案
		dataObj.typeProblem.Answer = $("#typeProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.onfloorProblem.Answer = $("#onfloorProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.tofloorProblem.Answer = $("#tofloorProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.ispersonalProblem.Answer = $("#ispersonalProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.additionalProblem.Answer = $("#additionalProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.horsesProblem.Answer = $("#horsesProblem").find(".currentProblem-list").find("input:checked").val();
		dataObj.timeProblem.Answer = $("#timeProblem").find(".currentProblem-list").find("input:checked").val();

		dataObj.addresetOutInput.Answer = $("#addressProblem").find(".currentProblem-input .setOutInput>input").val();
		dataObj.addreDestinationInput.Answer = $("#addressProblem").find(".currentProblem-input .DestinationInput>input").val();
		dataObj.phoneProblem.Answer = $("#phoneProblem").find(".currentProblem-input").find("input").val();



		// 问题
		dataObj.typeProblem.problem = $("#typeProblem").find(".currentTitle>p").text();
		dataObj.onfloorProblem.problem = $("#onfloorProblem").find(".currentTitle>p").text();
		dataObj.tofloorProblem.problem = $("#tofloorProblem").find(".currentTitle>p").text();
		dataObj.ispersonalProblem.problem = $("#ispersonalProblem").find(".currentTitle>p").text();
		dataObj.additionalProblem.problem = $("#additionalProblem").find(".currentTitle>p").text();
		dataObj.horsesProblem.problem = $("#horsesProblem").find(".currentTitle>p").text();
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
		$.post('/8KM/8GongLiXiangMu/fun/newOrder.php',{ orderType : "空调移机" , thisUser : problemUserId , orderData:jsonData , oldTime:startTme , newTime:endtTme},function(res){
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