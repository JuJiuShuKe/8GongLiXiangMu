<?php
    //用户忘记密码
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $user = $_POST["user"];				 //账户
    $phone = $_POST["phone"];			//手机号
    $newPasw = $_POST["newPasw"];		//new密码

    if($con){
    	$str = "SELECT * FROM usertable WHERE `user`='$user' AND phone='$phone'";
    	$con2 = mysqli_query($con,$str);
    	if($con2){
    		$arr = mysqli_fetch_all($con2);
    		if($arr){
    			$str1 = "UPDATE usertable SET pasw='$newPasw' WHERE `user`='$user' AND phone='$phone'";
    			$con3 = mysqli_query($con,$str1);
    			if($con3){
    				echo 1;
    			}else{
    				echo 0;
    			}
            }else{
            	echo "账户或手机号不存在";
            }
    	}else{
    		echo "链接数据库失败";
    	}
    }else{
    	echo "链接数据库失败";
    }
?>