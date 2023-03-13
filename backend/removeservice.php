<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');

$id=$_GET['id'];
$query=$mysqli->prepare('delete from patient_services where id=?');
$query->bind_param('i',$id);

if($query->execute()){
    $response["service"]='Service is deleted';
}
else{
    $response["service"]='Service was NOT deleted';
}



echo json_encode($response);


?>