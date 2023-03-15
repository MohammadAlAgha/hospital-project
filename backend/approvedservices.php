<?php

include('connection.php');

$id=$_GET['id'];
$query=$mysqli->prepare('update patient_services set status=1 where id=?');
$query->bind_param('i',$id);

if($query->execute()){
    $response["service"]='Service is Approved';
}
else{
    $response["service"]='Service was NOT Approved';
}

echo json_encode($response);

?>