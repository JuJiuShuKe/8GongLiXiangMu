if(sessionStorage.getItem("landingSuccess") == 'true'){	
}else{
	window.location.href="../../../login.html"
}



layui.config({
	base : "js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;


//获取  id   number  
    var myNum=sessionStorage.getItem("number");     //是否是管理员 2管理员
    var myId=sessionStorage.getItem("id");           //员工id

    var pageCount=0;        //页面数

    if(myNum == 2){
        //页面总数   管理员
        $.ajax({
            url : '../../../../fun/allOrderLen.php',
            type : "post",
            dataType : "json",
            success : function(data){
                pageCount = parseInt( data )
                console.log('gly',pageCount)
            },
            error:function(){
                console.log('error');
            }
        });
        myId = 0 ;
    }else{
        //页面总数   员工
        $.ajax({
            url : '../../../../fun/allOrderLen.php',
            type : "post",
            data : {id : myId} ,
            dataType : "json",
            success : function(data){
                pageCount = parseInt( data )
                console.log('yg',pageCount)
            },
            error:function(){
                console.log('error');
            }
        });
    }





//加载页面数据
    var linksData = '';
	$.post('../../../../fun/getOrderTab.php',{id : myId , num:0 },function(res){
		res = eval(res);
		// console.log('data',res);
			linksData = res;
			if(window.sessionStorage.getItem("addLinks")){
				var addLinks = window.sessionStorage.getItem("addLinks");
				linksData = JSON.parse(addLinks).concat(linksData);
			}
			//执行加载数据的方法
			 linksList()   ;
	})



	// $('layui-layer-btn').css('textAlign','center')
	//查看详情
	$("body").on("click",".details",function(){   
		var nowId = parseInt(  $(this).parents('tr').find('td:first').text() )  ;
		for (var i = 0 ; i < linksData.length ; i++) {
			 if(linksData[i].id == nowId ){   
			 	var dataJson = JSON.parse(linksData[i].orderjson);
				layui.use('layer', function(){
					var layer = layui.layer;
					var innHtml = ''
					for (var i in dataJson){  
						innHtml += '<p class="box_p">  '+ dataJson[i].problem   +' ——<span title=" '+ dataJson[i].Answer +'">'+ dataJson[i].Answer +'</span></p>'
					
				}
					layer.open({
					  type: 1,
					  title: false,
					  closeBtn: 0,
					  shadeClose: true,
					  skin: 'yourclass',
					  content: innHtml,
					  btn: ['关闭'],
					  closeBtn : 0
					});
				}); 

			 }
	
		}
		

	});


	

	function linksList(that){
		setTimeout(function(){    
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';


			if(linksData.length != 0){
				for(var i=0;i<linksData.length;i++){
					var dataJson = JSON.parse(linksData[i].orderjson);
					dataHtml += '<tr>'
			    	+'<td align="left">'+linksData[i].id+'</td>'
			    	+'<td>'+linksData[i].type+'</a></td>'
			    	+'<td>'+dataJson.timeProblem.Answer+'</a></td>'
			    	+'<td>'+ dataJson.addresetOutInput.Answer +'</td>'
			    	+'<td>'+ dataJson.addreDestinationInput.Answer +'</td>'
			    	// +'<td>'+ 22 +'</td>'
			    	// +'<td>'+ 11 +'</td>'
			    	+'<td><span class="layui-btn layui-btn-normal details">查看详情</span></td>';
			    	if(linksData[i].state == '待接'){
			    		dataHtml += '<td class="layui-bg-cyan" style="color:#ffffff">'+linksData[i].state+'</td>'
			    				 +'</tr>';
			    	}else if(linksData[i].state == '未分配'){
			    		dataHtml += '<td class="layui-bg-black" style="color:#ffffff">'+linksData[i].state+'</td>'
			    				 +'</tr>';
			    	}else if(linksData[i].state == '进行中'){
			    		dataHtml += '<td class="layui-bg-orange" style="color:#ffffff">'+linksData[i].state+'</td>'
			    				 +'</tr>';
			    	}else if(linksData[i].state == '完成'){
			    		dataHtml += '<td class="layui-bg-green" style="color:#ffffff">'+linksData[i].state+'</td>'
			    				 +'</tr>';
			    	}

			    	
				}
			}else{
				dataHtml = '<tr><td colspan="7">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

        //分页
		var nums = 20 ; //每页出现的数据量
		if(that){
			linksData = that;
		}
		laypage({
			cont : "page",
			pages : Math.ceil(pageCount/nums),
			curr: 1 ,
			jump : function(obj){
				$(".links_content").html(renderDate(linksData,obj.curr));
		    	form.render();
		    	var page = obj.curr -1

	    		$.post('../../../../fun/getOrderTab.php',{id : myId , num:page },function(res){
					res = eval(res);
						linksData = res;
						sdfgsdghg();
						$(".links_content").html('')
						$(".links_content").html(renderDate(linksData,obj.curr));
				    	form.render();
				})

			}
		});
	},100) ;

	function sdfgsdghg(){

		var dataHtml = '';
			if(linksData.length != 0){
			for(var i=0;i<linksData.length;i++){
				var dataJson = JSON.parse(linksData[i].orderjson);
				dataHtml += '<tr>'
		    	+'<td align="left">'+linksData[i].id+'</td>'
		    	+'<td>'+linksData[i].type+'</a></td>'
		    	+'<td>'+dataJson.timeProblem.Answer+'</a></td>'
		    	+'<td>'+ dataJson.addresetOutInput.Answer +'</td>'
		    	+'<td>'+ dataJson.addreDestinationInput.Answer +'</td>'
		    	// +'<td>'+ 22 +'</td>'
		    	// +'<td>'+ 11 +'</td>'
		    	+'<td><span class="layui-btn layui-btn-normal details">查看详情</span></td>';
		    	if(linksData[i].state == '待接'){
		    		dataHtml += '<td class="layui-bg-cyan" style="color:#ffffff">'+linksData[i].state+'</td>'
		    				 +'</tr>';
		    	}else if(linksData[i].state == '未分配'){
		    		dataHtml += '<td class="layui-bg-black" style="color:#ffffff">'+linksData[i].state+'</td>'
		    				 +'</tr>';
		    	}else if(linksData[i].state == '进行中'){
		    		dataHtml += '<td class="layui-bg-orange" style="color:#ffffff">'+linksData[i].state+'</td>'
		    				 +'</tr>';
		    	}else if(linksData[i].state == '完成'){
		    		dataHtml += '<td class="layui-bg-green" style="color:#ffffff">'+linksData[i].state+'</td>'
		    				 +'</tr>';
		    	}

		    	
			}
		}else{
			dataHtml = '<tr><td colspan="7">暂无数据</td></tr>';
		}
	};

    }
});
