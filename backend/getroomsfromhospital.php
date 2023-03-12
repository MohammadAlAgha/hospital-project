<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');
$hospital=$_POST['hospital_id'];
$query=$mysqli->prepare('select *
from rooms 
inner join departments on rooms.department_id = departments.id
INNER JOIN hospitals on departments.hospital_id = hospitals.id WHERE hospitals.id=?');
$query->bind_param('i',$hospital);
$query->execute();

$result=$query->get_result();

$data=[];
while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['roomsdata']=$data;

echo json_encode($response);


?>