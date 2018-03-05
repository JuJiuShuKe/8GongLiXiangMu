<?php
    //用户换师傅
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];				 //订单id
    $newTime = $_POST["newTime"];       //当前时间
    $staffarr = $_POST["staffarr"];      //之前分配员工的id数组
    $staffstr = $_POST["staffstr"];     //之前分配员工的id字符串

    if($con){
    	$str = "SELECT id FROM stafftable WHERE state='true'";
        $con1 = mysqli_query($con,$str);
        if($con1){
            $arry = mysqli_fetch_all($con1);
            if($arry){
                if ($arry > 0) {
                    $trueArr = [];
                    foreach ($arry as $key => $value) {
                        for ($i=0; $i < count($staffarr); $i++) { 
                            if ($value[0] !=  $staffarr[$i]) {
                                array_push($trueArr, $value[0]);
                            }else{
                                break;
                            }
                        }
                    }
                    if($trueArr){
                        $staff = $trueArr[0];
                        $staffstr .= $trueArr[0];

                        $str1 = "UPDATE orderdata SET staffID='$staff',staffarr='$staffstr,',newtime='$newTime' WHERE id='$id'";
                        $con2 = mysqli_query($con,$str1);

                        $str = "UPDATE stafftable SET state='false' WHERE id='$staff'";
                        $con3 = mysqli_query($con,$str);

                        $oldStaffId = $staffarr[count($staffarr)-1];
                        $str = "UPDATE stafftable SET state='true' WHERE id='$oldStaffId'";
                        $con4 = mysqli_query($con,$str);

                        if($con2 && $con3 && $con4){
                            echo "1";
                        }else{
                            echo "0";
                        }
                    }else{
                        echo "2";
                    }
                }else{
                    echo "2";   // 暂时没有空闲员工
                }
            }else{
                echo "2";       //2表示没有员工能接此单，所以不换
            }
        }else{
            echo "0";
        }


    }else{
    	echo "链接数据库失败";
    }
?>