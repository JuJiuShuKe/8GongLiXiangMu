<?php
    //员工或管理员查询订单时返回共有多少单

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    if($_POST){                      //员工查询时
        $id = $_POST["id"];         //员工id
        if($con){
            $str = "SELECT id FROM orderdata WHERE staffid='$id'";
            $con1 = mysqli_query($con,$str);
            if($con1){
                $arr = mysqli_fetch_all($con1);
                echo count($arr);
            }else{
                echo "0";
            }
        }else{
            echo "链接数据库失败";
        }
    }else{                      //管理员查询时
        if($con){
            $str = "SELECT id FROM orderdata";
            $con1 = mysqli_query($con,$str);
            if($con1){
                $arr = mysqli_fetch_all($con1);
                echo count($arr);
            }else{
                echo "0";
            }
        }else{
            echo "链接数据库失败";
        }
    }
?>