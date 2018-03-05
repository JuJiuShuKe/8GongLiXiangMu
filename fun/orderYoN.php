<?php
    //员工接单或者不接单

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];                 //员工id
    $YoN = $_POST["YoN"];			//Y or  N
    if($con){
        if($YoN == "Y"){
            $str = "UPDATE orderdata SET state='进行中' WHERE staffID='$id' AND state='待接'";
            $con6 = mysqli_query($con,$str);
            if($con6){
                echo "1";
            }else{
                echo "0";
            }
        }else{
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
                    $str = "UPDATE orderdata SET staffID='$arr[$ran]',staffarr='$newArrStr' WHERE staffID='$id'";
                    $con2 = mysqli_query($con,$str);

                    $str = "UPDATE stafftable SET state='false' WHERE id='$arr[$ran]'";
                    $con3 = mysqli_query($con,$str);

                    $str = "UPDATE stafftable SET state='true' WHERE id='$id'";
                    $con4 = mysqli_query($con,$str);

                    if($con2 && $con3 && $con4){
                        echo 1;
                    }else{
                        echo 0;
                    }
                }else{
                    echo "2";
                }
            }else{
                echo "0";
            }
        }
    }else{
        echo "0";
    }

?>