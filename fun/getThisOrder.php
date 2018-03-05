<?php
    //员工查看自己被分配的单子

	require "mysql.php";
    $con = mysqli_connect(server,user,pwd,database);
    mysqli_query($con,'set names utf8');

    $id = $_POST["id"];         //员工id
    if($con){
        $str = "SELECT * FROM orderdata WHERE staffID='$id' AND state='待接'";
        $con1 = mysqli_query($con,$str);
        if($con1){
            $arr1=[];
            while ($arr = mysqli_fetch_assoc($con1)) {
                array_push($arr1, $arr);
            }
            echo json_encode($arr1);
        }else{
            echo "0";
        }
    }else{
        echo "0";
    }
?>
