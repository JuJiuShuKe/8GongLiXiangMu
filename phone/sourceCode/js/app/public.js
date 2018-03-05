

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
	
	ini();
	
	function ini(){
		$("#submitPage").hide();
		$("#previousPage").hide();
		$(".currentProblem-list").find("input").on("change",function(){
			if($(this).is(":checked")){
				$(this).parents("li").siblings().css("background-color","#fff");
				$(this).parents("li").css("background-color","#FFF9F2");
			}else{
				$(this).parents("li").css("background-color","#fff");
			}
		})
	}
	
		
	// 上一页
	$("#previousPage").on("touchstart",function(){
		// 上一页的索引
		var problemIndex = $(".mui-control-content.mui-active").index()-2;
		console.log(problemIndex);
		if(problemIndex >= 0){
			$(".mui-control-content.mui-active").removeClass("mui-active");
			$(".mui-content>.mui-control-content").eq(problemIndex).addClass("mui-active");
			
			if(problemIndex == $(".mui-control-content").length-2){
				$("#nextPage").show();
				$("#submitPage").hide();
			}
			
			if(problemIndex == 0){
				$("#previousPage").hide();
			}
		}else{
//			mui.alert("已经是第一页了","警告：");
			mui.toast('已经是第一页了');
		}
	});
	
	
	// 下一页
	$("#nextPage").on("touchstart",function(){
		// 下一页的索引
		var problemIndex = $(".mui-control-content.mui-active").index();
		console.log(problemIndex)
		
		if(problemIndex < $(".mui-control-content").length){
			if((problemIndex == 1 && $("#modelsProblem").find(".currentRadio").length>0) || ($(".mui-control-content.mui-active").find("input:checked").length>0) || ($("#addressProblem .currentProblem-input").find(".setOutInput input").val() && $("#addressProblem .currentProblem-input").find(".setOutInput input").val()) ){
				$(".mui-control-content.mui-active").removeClass("mui-active");
				$(".mui-content>.mui-control-content").eq(problemIndex).addClass("mui-active");
				
				if(problemIndex == $(".mui-control-content").length-1){
					$("#nextPage").hide();
					$("#submitPage").show();
				}
				
				if(problemIndex == 1){
					$("#previousPage").show();
				}
			}else{
				
				if($(".mui-control-content.mui-active").find(".currentProblem-input>.mui-input-row").length > 1){
				mui.alert("请输入出发地或目的地","警告：");
				}else{
					mui.toast('请选择');
				}
			}
		}else{
			mui.toast('已经是最后一页了');
		}
	});
});
	
	