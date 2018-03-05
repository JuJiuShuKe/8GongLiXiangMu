<?php
    //用户取消订单

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];         //订单id  or 师傅id
    $state = $_POST["state"];   //状态 1为待接  2为未分配 
    if($con){
        if($state == "1"){
            $str = "delete from orderdata where staffID='$id'";
            $con1 = mysqli_query($con,$str);

            $str = "UPDATE stafftable SET state='true' WHERE id='$id'";
            $con3 = mysqli_query($con,$str);
            if($con1 && $con3){
                echo "1";
            }else{
                echo "0";
            }
            
        }else{
            $str = "delete from orderdata where id='$id'";
            $con1 = mysqli_query($con,$str);

            if($con1){
                echo "1";
            }else{
                echo "0";
            }
        }
    }else{
        echo "链接数据库失败";
    }
?>