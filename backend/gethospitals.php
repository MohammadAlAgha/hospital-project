<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');

$query=$mysqli->prepare('select name from hospitals');
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['hospitals']=$data;

echo json_encode($response);


?>