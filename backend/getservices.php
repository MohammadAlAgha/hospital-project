<?php

include('connection.php');

$query=$mysqli->prepare('select description from services');
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['services']=$data;

echo json_encode($response);


?>