<?php
    //查找员工ID

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];			// 查询的id
    
    if($con){
    	$str = "SELECT * FROM stafftable WHERE id='$id'";
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