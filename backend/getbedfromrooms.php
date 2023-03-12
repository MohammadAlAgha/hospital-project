<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');
$room=$_POST['id'];
$query=$mysqli->prepare('select number_beds from rooms where id=?');
$query->bind_param('i',$room);
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data=$object;
};

$response['roombeds']=$data;

echo json_encode($response);


?>