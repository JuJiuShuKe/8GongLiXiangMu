<?php
    //删除员工

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];
    
    if($con){
    	$str = "delete from stafftable where id='$id'";
    	$con1 = mysqli_query($con,$str);
    	if($con1){
    		echo "1";
    	}else{
    		echo "0";
    	}
    }else{
    	echo "链接数据库失败";
    }
?>