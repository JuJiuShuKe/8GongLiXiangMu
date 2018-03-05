<?php
    //用户确认订单完成按钮

    require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];                 //订单ID
    $staffId = $_POST["staffId"];           //师傅id
    $newTime = $_POST["newTime"];            //完成订单时间


    if($con){
        $str = "UPDATE orderdata SET state='完成',newtime='$newTime' WHERE id='$id'";
        $con1 = mysqli_query($con,$str);
        if($con1){
            $str = "UPDATE stafftable SET state='true' WHERE id='$staffId'";
            $con2 = mysqli_query($con,$str);
            if($con2){
                $str = "SELECT id FROM orderdata WHERE state='未分配'";
                $con3 = mysqli_query($con,$str);
                $orderArr = mysqli_fetch_all($con3);
                if($orderArr){
                    $orderId = $orderArr[0][0];
                    $str = "UPDATE orderdata SET state='待接',staffID='$staffId',staffarr='$staffId,' WHERE id='$orderId'";
                    $con4 = mysqli_query($con,$str);

                    $str = "UPDATE stafftable SET state='false' WHERE id='$staffId'";
                    $con5 = mysqli_query($con,$str);

                    if($con5 && $con4){
                        echo "1";
                    }else{
                        echo "0";
                    }
                }else{
                    echo "1";
                }
            }else{
                echo "0";
            }
        }else{
            echo "0";
        }
    }else{
        echo "链接数据库失败";
    }
?>