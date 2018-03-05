<?php
    //员工登录时
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');


    $user = $_POST["user"];      //账号
    $pasw = $_POST["pasw"];      //密码

    //1 or 2；  1为员工 ； 2为管理员
    $type = $_POST["type"];  


    if($con){
        $str = "";
        if($type == 1){
            $str = "SELECT id FROM stafftable WHERE `user`='$user' AND pasw='$pasw';";
        }else if($type == 2){
            $str = "SELECT id FROM admintable WHERE `user`='$user' AND pasw='$pasw';";
        }


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