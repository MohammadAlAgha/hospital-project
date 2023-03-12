<?php
include("connection.php");

$ourDate= date("Y/m/d");
$active='True';
$left="";
$user=$_GET['user_id'];
$hospital=$_GET['hospital_id'];

$check=$mysqli->prepare('select * from hospital_users where user_id=?');
$check->bind_param('i',$user);
$check->execute();

$check->store_result();
$result=$check->num_rows();

if($result>0){
    $response['status']='User found in another hospital';
}
else{
    $query=$mysqli->prepare('insert into hospital_users(hospital_id,user_id,is_active,date_joined,date_left) values(?,?,?,?,?)');
    $query->bind_param('iisss',$hospital,$user,$active,$ourDate,$left);
    $query->execute();
    $response['status']='User is assigned';
}

echo json_encode($response);


?>