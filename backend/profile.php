<?php

include('connection.php');

$email=$_POST['email'];
$password=$_POST['password'];
$hashed=password_hash($password,PASSWORD_BCRYPT);
$user_name=$_POST['user_name'];
$birth=$_POST['birthday'];


$query=$mysqli->prepare('update users set email=?,password=?,name=?,dob=? where id=?');
$query->bind_param('ssssi',$email,$hashed,$user_name,$birth,$id);
$query->execute();

$result=$query->get_result();

if($result){
    $response['state']="Wrong Credantials";
}
else{
    $response['state']="Profile wad updated successfully";
}



echo json_encode($response);
?>