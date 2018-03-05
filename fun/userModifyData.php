<?php
    //用户修改资料

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];                 //用户id
    // $phone = $_POST["phone"];			//手机号
    // $name = $_POST["name"];             //称呼

    $inputType = $_POST["type"];        //传输的类型 => 手机 昵称
    $inputVal = $_POST["val"];          //传输的值

    if($con){
    	// $str1 = "UPDATE usertable SET name='$name',phone='$phone' WHERE id='$id'";
        $str1 = "";
        if ($inputType == "昵称") {
            $str1 = "UPDATE usertable SET name='$inputVal' WHERE id='$id'";
        }else{
            $str1 = "UPDATE usertable SET phone='$inputVal' WHERE id='$id'";
        }
        $con3 = mysqli_query($con,$str1);
        
        if($con3){
            echo 1;
        }else{
            echo 0;
        }

    }else{
    	echo "链接数据库失败";
    }
?>