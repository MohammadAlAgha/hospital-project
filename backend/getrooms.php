<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');

$query=$mysqli->prepare('select room_number,is_vip,cost_day_usd from rooms');
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['rooms']=$data;

echo json_encode($response);


?>