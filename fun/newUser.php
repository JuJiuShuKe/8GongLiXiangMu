<?php
    //用户注册
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $thisUser = $_POST["thisUser"];    //用户账号
    $thisPasw = $_POST["thisPasw"];     //密码
    $thisName = $_POST["thisName"];     //称呼
    $thisPhone = $_POST["thisPhone"];     //手机号

    if($con){
        $str1 = "SELECT * FROM usertable WHERE user='$thisUser' OR phone='$thisPhone'";
        $con2 = mysqli_query($con,$str1);
        if($con2){
            $arr = mysqli_fetch_all($con2);
            if($arr){
                echo "用户名或手机号重复";
            }else{
                $str = "INSERT INTO usertable (user,pasw,name,phone) VALUES ('$thisUser','$thisPasw','$thisName','$thisPhone');";
                $con1 = mysqli_query($con,$str);
                if($con1){
                    echo 1;
                }else{
                    echo 0;
                }
            }
        }else{
            echo "链接数据库失败";
        }
    	    	
    }else{
    	echo "链接数据库失败";
    }
?>