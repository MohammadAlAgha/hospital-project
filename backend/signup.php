<?php

include('connection.php');

$email=$_POST['email'];
$password=$_POST['password'];
$user_name=$_POST['user_name'];
$birth=$_POST['birthday'];
$type=2;

$check=$mysqli->prepare('select email from users where email=?');
$check->bind_param('s',$email);
$check->execute();
$check->store_result();
$rows=$check->num_rows();

$hashed=password_hash($password,PASSWORD_BCRYPT);

if($rows>0){
    $response['status']='Email already exist';
}
else{
    $response['status']='Sign up was successfull';
    $query=$mysqli->prepare('insert into users( email,password,name,dob,usertype_id) values(?,?,?,?,?)');
    $query->bind_param('ssssi',$email,$hashed,$user_name,$birth,$type);
    $query->execute();
    $query2=$mysqli->prepare('select id from users where email=?');
    $query2->bind_param('s',$email);
    $query2->execute();
    $query2->store_result();
    $query2->bind_result($id);
    $query2->fetch();
    $response['user_id'] = $id;
}
echo json_encode($response);
?>