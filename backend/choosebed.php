<?php
include('connection.php');

$room=$_GET['room'];
$user=$_GET['user'];

$query=$mysqli->prepare('select bed_id from user_rooms where room_id=? and active="True"');
$query->bind_param('i',$room);
$query->execute();

$query->get_result();

while($object=$result->fetch_assoc()){
    $data=$object;
}

$response['beds']=$data;

echo json_encode($response);







?>