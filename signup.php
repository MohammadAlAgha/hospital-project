<?php

$email=$_POST['email'];
$password=$_POST['password'];
$user_name=$_POST['user_name'];
$birth=$_POST['birthday'];

$check=$mysqli->prepare('select email from users where email=?');
$check->bind_param('s',$email);
$check->execute();
$check->store_results();
$rows=$email->num_rows();

$hashed=password_hash($password,PASSWORD_BCRYPT);

if($rows>0){
    $response['status']='Email already exist';
}
else{
    $response['status']='Login was successfull';
    $query=$mysqli->prepare('insert into users( email,password,user_name,birthday) values(?,?,?,?)');
    $query->bind_param('ssss',$email,$hashed,$user_name,$birth);
    $query->execute();
}

echo json_encode($response)

?>