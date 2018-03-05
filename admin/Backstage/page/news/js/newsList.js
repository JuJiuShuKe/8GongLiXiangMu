if(sessionStorage.getItem("landingSuccess") == 'true'){	
}else{
	window.location.href="../../../login.html"
}



function Dis_D(){
	$('.Dis').css('dispaly','none');
	var num=0;
	function chuan(num){
		$.post('../../../../fun/getStaffTab.php',{num:num},function(res){
		    res=eval(res);
		    if(res){
		        var str='';
		        for(var i=0;i<res.length;i++){
		            str+='<tr>'+
		            		'<td>'+res[i][0]+'</td>'+
		                    '<td style="text-align:left;" data_id="'+res[i][0]+'">'+res[i][1]+'</td>'+
		                    '<td>'+res[i][3]+'</td>'+
		                    '<td>'+res[i][4]+'</td>';
		                    if(res[i][5]=='true'){
		                        str+='<td>能接单</td>';
		                    }else{
		                        str+='<td>不能接单</td>';
		                    }
		                    str+='<td>'+
		                    '<a class="layui-btn layui-btn-mini news_edit editor"><i class="iconfont icon-edit"></i> 编辑</a>'+
		                    '<a class="layui-btn layui-btn-danger layui-btn-mini news_del Delect"><i class="layui-icon">&#xe640;</i> 删除</a>'+
		                    '</td>'+
		            '</tr>'
		        }
		
		
		        $('.news_content').append(str);
		
				//点击删除按钮
				$(document).on("click",".Delect",function(){
					var data_id=$($(this).parent().parent().children()[1]).attr('data_id');
		        	$.post('../../../../fun/delStaff.php',{id:data_id},function(res){
		        		if(res =='1'){
		        			layer.msg('删除成功');
		        		}else{
		        			layer.msg('删除失败');
		        		}
		        	})
		            $(this).parent().parent().remove();
				})
		        
		        //点击编辑按钮
		        $(document).on("click",".editor",function(){
		        	var data_id=$($(this).parent().parent().children()[1]).attr('data_id');
		        	window.location.href='newsEdit.html?id='+data_id;
		        })
		    }else{
		        layer.msg("失败");
		    }
		})
	}
	chuan(num);
	
	//点击加载更多
	$('#jiazai').click(function(){
		num++;
		chuan(num);
	});
	
	
	//点击查询名字按钮
	$('#Query').click(function(){
		$('#Return').css('display','block')
		$('.news_content').css('display','none');
		$('.Dis').html("");
		$('.Dis').css('display','table-row-group');
		var lookUp=$('#lookUp').val();//获取需要查找输入的值
		$.post('../../../../fun/findStaffName.php',{name:lookUp},function(res){
			res=eval(res);
			if(res){
				var str='';
				for(var i=0;i<res.length;i++){
					str+='<tr>'+
							'<td>'+res[i][0]+'</td>'+
		                    '<td style="text-align:left;" data_id="'+res[i][0]+'">'+res[i][1]+'</td>'+
		                    '<td>'+res[i][3]+'</td>'+
		                    '<td>'+res[i][4]+'</td>';
		                    if(res[i][5]=='true'){
		                        str+='<td>能接单</td>';
		                    }else{
		                        str+='<td>不能接单</td>';
		                    }
		                    str+='<td>'+
		                    '<a class="layui-btn layui-btn-mini news_edit editor" ><i class="iconfont icon-edit"></i> 编辑</a>'+
		                    '<a class="layui-btn layui-btn-danger layui-btn-mini news_del Delect"><i class="layui-icon">&#xe640;</i> 删除</a>'+
		                    '</td>'+
		            '</tr>'
				}
				$('.Dis').append(str);
			}else{
				layer.msg("失败");
			};
			
		});
		//点击返回按钮
		$('#Return').click(function(){
			$('.news_content').css('display','table-row-group');
			$('.Dis').css('display','none');
			$('#Return').css('display','none');
		});
		
		
		
		
	});
	
	
	
	//查询id按钮
	$('#SeId').click(function(){
		$('#Return').css('display','block')
		$('.news_content').css('display','none');
		$('.Dis').html("");
		$('.Dis').css('display','table-row-group');
		var lookUp=$('#lookdown').val();//获取需要查找输入的值
		$.post('../../../../fun/findStaffId.php',{id:lookUp},function(res){
			res=eval(res);
			if(res){
				var str='';
				for(var i=0;i<res.length;i++){
					str+='<tr>'+
							'<td>'+res[i][0]+'</td>'+
		                    '<td style="text-align:left;" data_id="'+res[i][0]+'">'+res[i][1]+'</td>'+
		                    '<td>'+res[i][3]+'</td>'+
		                    '<td>'+res[i][4]+'</td>';
		                    if(res[i][5]=='true'){
		                        str+='<td>能接单</td>';
		                    }else{
		                        str+='<td>不能接单</td>';
		                    }
		                    str+='<td>'+
		                    '<a class="layui-btn layui-btn-mini news_edit editor"><i class="iconfont icon-edit"></i> 编辑</a>'+
		                    '<a class="layui-btn layui-btn-danger layui-btn-mini news_del Delect"><i class="layui-icon">&#xe640;</i> 删除</a>'+
		                    '</td>'+
		            '</tr>'
				}
				$('.Dis').append(str);
			}else{
				layer.msg("失败");
			};
			
		});
		//点击返回按钮
		$('#Return').click(function(){
			$('.news_content').css('display','table-row-group');
			$('.Dis').css('display','none');
			$('#Return').css('display','none');
		});
	});
	
	
	//点击添加文章，跳转页面
	$('#Add_atricle').click(function(){
		window.location.href="newsAdd.html";
	})
}

Dis_D();


