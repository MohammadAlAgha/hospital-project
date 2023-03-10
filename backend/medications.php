<?php

include('connection.php');
$medication=$_GET['medication'];
$query=$mysqli->prepare('select * from medications where id=?');
$query->bind_param('i',$medication);
$query->execute();

$query->get_result();

while($object=$result->fetch_assoc()){
    $data=$object;
}

$response['medications']=$data;

echo json_encode($response);




?>