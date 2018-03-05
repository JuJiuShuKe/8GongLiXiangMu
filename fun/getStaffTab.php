<?php
    //分页获取所有员工
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $num = $_POST["num"]*40;        //初始值为0

    if($con){
    	$str = "SELECT * FROM stafftable  ORDER BY id DESC LIMIT $num,40";
    	$con1 = mysqli_query($con,$str);
    	if($con1){
    		$arr = mysqli_fetch_all($con1);
    		echo json_encode($arr);
    	}else{
    		echo "0";
    	}
    }else{
    	echo "链接数据库失败";
    }
?>