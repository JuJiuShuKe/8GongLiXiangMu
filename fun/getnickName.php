<?php
    //用户修改资料

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];                 //用户id

    if($con){
        $str1 = "SELECT `name` FROM usertable WHERE id='$id'";
        $con1 = mysqli_query($con,$str1);
        
        if($con1){
            $nickname = mysqli_fetch_all($con1);
            echo $nickname[0][0];
        }else{
            echo 0;
        }

    }else{
    	echo "链接数据库失败";
    }
?>