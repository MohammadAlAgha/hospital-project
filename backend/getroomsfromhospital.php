<?php

header('Access-Control-Allow-Origin: *');
include('connection.php');
$hospital=$_POST['hospital_id'];
$query=$mysqli->prepare('select rooms.id,is_vip,number_beds,room_number,cost_day_usd
from rooms 
left join departments on rooms.department_id = departments.id 
inner JOIN hospitals on departments.hospital_id = hospitals.id WHERE hospitals.id=?');
$query->bind_param('s',$hospital);
$query->execute();

$result=$query->get_result();

$data=[];
while($object=$result->fetch_assoc()){
    $data[]=$object;
}

$response['roomsdata']=$data;

echo json_encode($response);


?>