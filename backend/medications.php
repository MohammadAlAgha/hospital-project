<?php

include('connection.php');
$medication=$_GET['medication'];
$query=$mysqli->prepare('select * from medications where id=?');
$query->bind_param('i',$medication);
$query->execute();
$result=$query->get_result();


while($object=$result->fetch_assoc()){
    $data=$object;
}

$response['medication']=$data;

echo json_encode($response);




?>