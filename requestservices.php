<?php

include("connection.php");

$patient=$_GET['patient_id'];
$employee=$_GET['employee_id'];
$descripition=$_GET['description'];
$service_id=$_GET['id'];
$department=$_GET['department_id'];

$query=$mysqli->prepare('insert into services(patient_id,employee_id,description,id,department_id)');
$query->bind_param('iissi',$patient,$employee,$descripition.$service_id,$department);
$query->execute();
$response['Status']='Service has been requested';

?>