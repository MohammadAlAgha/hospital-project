<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');

$room=$_GET['id'];
$query=$mysqli->prepare('select * from hospitals where id=?');
$query->bind_param('i',$room);
$query->execute();

$result=$query->get_result();


while($object=$result->fetch_assoc()){
    $data=$object;
}

$response['room']=$data;

echo json_encode($response);


?>