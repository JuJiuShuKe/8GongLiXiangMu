<?php
    //用户登录时
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $user = $_POST["user"];      //账号
    $pasw = $_POST["pasw"];      //密码

    if($con){
        $str = "SELECT id FROM usertable WHERE `user`='$user' AND pasw='$pasw';";
    	$con1 = mysqli_query($con,$str);
        if($con1){
            $arr = mysqli_fetch_all($con1);
            
            if($arr){
                echo $arr[0][0];
            }else{
                echo 0;
            }
        }
    	
    }else{
    	echo "链接数据库失败";
    }
?>