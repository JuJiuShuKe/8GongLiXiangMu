<?php
    //查找员工名字

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $name = $_POST["name"];			// 查询的名字
    if($con){
    	$str = "SELECT * FROM stafftable WHERE name='$name'";
    	$con2 = mysqli_query($con,$str);
    	if($con2){
    		$arr = mysqli_fetch_all($con2);
    		if($arr){
    			echo json_encode($arr);
            }else{
            	echo "0";
            }
    	}
    }else{
    	echo "链接数据库失败";
    }
?>