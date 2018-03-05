<?php
    //编辑员工确定按钮被点击时，修改数据

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];                 //员工id
    $phone = $_POST["phone"];			//手机号
    $Pasw = $_POST["Pasw"];		       //密码
    $name = $_POST["name"];             //员工姓名

    if($con){
        $str1 = "UPDATE stafftable SET phone='$phone',Pasw='$Pasw',name='$name' WHERE id='$id'";
        $con3 = mysqli_query($con,$str1);
        
        if($con3){
            echo 1;
        }else{
            echo 0;
        }
    }else{
    	echo "0";
    }
?>