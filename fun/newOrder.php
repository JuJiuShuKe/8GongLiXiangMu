<?php
    //用户新建订单

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $orderType = $_POST["orderType"];    //订单类型
    $orderData = $_POST["orderData"];     //数据      字符串类型
    $thisUser = $_POST["thisUser"];     //用户id
    $oldTime = $_POST["oldTime"];       //下订单时间
    $newTime = $_POST["newTime"];       //一小时后的时间

    if($con){

        $str = "SELECT id FROM stafftable WHERE state='true'";
        $con1 = mysqli_query($con,$str);
        if($con1){
            //所有能接单员工id 数组
            $arry = mysqli_fetch_all($con1);
            if($arry){
                $arr = [];
                for ($i=0; $i < count($arry); $i++) {
                    array_push($arr,$arry[$i][0]);
                };

                //随机出来的员工id;
                $lent = count($arr)-1;
                $ran = rand(0,$lent);

                //分配任务后新的员工id 数组
                $newArrStr = $arr[$ran].",";


                //运行sql语句
                $str = "INSERT INTO orderdata (type,orderjson,userid,staffid,staffarr,state,oldtime,newtime) VALUES ('$orderType','$orderData','$thisUser','$arr[$ran]','$newArrStr','待接','$oldTime','$newTime');";
                $con2 = mysqli_query($con,$str);

                $str = "UPDATE stafftable SET state='false' WHERE id='$arr[$ran]'";
                $con3 = mysqli_query($con,$str);

                if($con2){
                    echo 1;
                }else{
                    echo 0;
                }
            }else{
                //运行sql语句
                $str = "INSERT INTO orderdata (type,orderjson,userid,staffid,staffarr,state,oldtime,newtime) VALUES ('$orderType','$orderData','$thisUser','','','未分配','$oldTime','$newTime');";
                $con2 = mysqli_query($con,$str);
                if($con2){
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