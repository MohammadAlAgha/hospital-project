<?php
include('connection.php');

$service=$_GET['service_id'];
$patient=$_GET['patient_id'];
$status="Pending";
$query=$mysqli->prepare('insert into patient_services(service_id,patient_id,status) values(?,?,?)');
$query->bind_param('iis',$service,$patient,$status);

if($query->execute()){
    $response["state"]='Service is sent';
}
else{
    $response["state"]='Service was NOT sent';
}

echo json_encode($response);


?>