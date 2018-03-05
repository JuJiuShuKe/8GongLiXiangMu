if(sessionStorage.getItem("landingSuccess") == 'true'){ 
}else{
    window.location.href="../../../login.html"
}


layui.config({
    base : "js/"
}).use(['form','layer','jquery','laypage'],function(){
    var form, layer, laypage, $;
    form = layui.form();
    layer = parent.layer === undefined ? layui.layer : parent.layer;
    laypage = layui.laypage;
    $ = layui.jquery;


//获取  id     
    var myId=sessionStorage.getItem("id");           //员工id


    $('.yes_a').on('click',function() {
        // layer.alert('接受')
        location.reload();
        $.ajax({
            url : '../../../../fun/orderYoN.php',
            type : "post",
            dataType : "json",
            data : {id: myId , YoN: 'Y'} ,
            success : function(data){
                 console.log(data)
            },
            error:function(){
                console.log('error');
            }
        });
    });

    $('.no_a').on('click',function(){
          // layer.alert('拒绝')
          location.reload();
          $.ajax({
            url : '../../../../fun/orderYoN.php',
            type : "post",
            dataType : "json",
            data : {id: myId , YoN: 'N'} ,
            success : function(data){
                 console.log(data)
            },
            error:function(){
                console.log('error');
            }
        });
      });

 

    //加载页面数据
    $.ajax({
        url : "../../../../fun/getThisOrder.php",
        type : "post",
        dataType : "json",
        data: {id:myId},
        success : function(data){
            if(data.length>0){
                 linksList(data);
            }else{
                $(".layui-table").html(' 当前暂无订单可接！ ');
            }
            
        }
    });


    function linksList(data){
        //渲染数据
        console.log(data);
       var dataJson = JSON.parse(data[0].orderjson);
         var innHtml = '<tr>'+
                            '<th>搬家类型</th>'+
                        '</tr>'+
                        '<tr class="layu_tr"><td>' + data[0].type + ' </td></tr>'+
                        '<tr>'+
                            '<th>顾客理想搬家时间</th>'+
                        '</tr>'+
                        '<tr class=" layu_tr"> <td>' + getLocalTime(data[0].oldtime) + '</td></tr>';
        for(var i in dataJson){
            innHtml +=  '<tr>'+
                            '<th>'+dataJson[i].problem+'</th>'+
                        '</tr>'+
                        '<tr class=" layu_tr"> <td>' + dataJson[i].Answer + '</td></tr>'
        }
        $(".layui-table").prepend(innHtml);
    }

    function getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
    } 
});
