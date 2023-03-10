<?php

include('connection.php');

$email=$_POST['email'];
$password=$_POST['password'];

$query=$mysqli->prepare('select id,name,email from users where email=?');
$query->bind_param('s',$email);
$query->execute();
$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data=$object;
}

$response['status']=$data;

echo json_encode($response);

?>