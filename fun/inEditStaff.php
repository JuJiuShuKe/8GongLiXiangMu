<?php
    //点击编辑员工按钮时

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];				 //员工ID

    if($con){
    	$str = "SELECT * FROM stafftable WHERE id='$id'";
    	$con2 = mysqli_query($con,$str);
		$arr = mysqli_fetch_all($con2);	
		echo json_encode($arr);
		
    }else{
    	echo "链接数据库失败";
    }
?>