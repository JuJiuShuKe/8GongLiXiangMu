<?php
    //分页获取所有任务
    
	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];         //员工id
    $num = $_POST["num"]*20;       //页数，从0开始

    if($id){
        if($con){
            $str = "SELECT * FROM orderdata WHERE staffID='$id' ORDER BY id DESC LIMIT $num,20";
            $con1 = mysqli_query($con,$str);
            if($con1){
                $array = [];
                while ($arr = mysqli_fetch_assoc($con1)) {
                    array_push($array,$arr);
                }
                echo json_encode($array);
            }else{
                echo "0";
            }
        }else{
            echo "链接数据库失败";
        }
    }else{
        if($con){
            $str = "SELECT * FROM orderdata  ORDER BY id DESC LIMIT $num,20";
            $con1 = mysqli_query($con,$str);
            if($con1){
                $array = [];
                while ($arr = mysqli_fetch_assoc($con1)) {
                    array_push($array,$arr);
                }
                echo json_encode($array);
            }else{
                echo "0";
            }
        }else{
            echo "链接数据库失败";
        }
    }

    
    
?>




    
    

