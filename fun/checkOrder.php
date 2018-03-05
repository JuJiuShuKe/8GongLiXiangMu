<?php
    //用户查看订单获取订单全部数据

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];
    if($con){
    	$str = "SELECT * FROM orderdata WHERE UserId='$id'";
    	$con1 = mysqli_query($con,$str);
    	if($con1){
            $arr1=[];
    		while ($arr = mysqli_fetch_assoc($con1)) {
                array_push($arr1, $arr);
            }
    		echo json_encode($arr1);
    	}
    }else{
    	echo "链接数据库失败";
    }
?>