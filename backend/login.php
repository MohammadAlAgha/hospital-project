<?php

include('connection.php');

$email=$_POST['email'];
$password=$_POST['password'];



$query=$mysqli->prepare('select id,name,email,password,usertype_id from users where email=? ');
$query->bind_param('s',$email);
$query->execute();
$query->store_result();
$email_exists = $query->num_rows();
$query->bind_result($id, $username, $email, $hashed_password,$type);
$query->fetch();
$response = [];

if ($email_exists == 0) {
    $response['status'] = "Wrong credentials";
} else {
        if (password_verify($password, $hashed_password)) {
            $response['response'] = "logged in";
            $response['user_id'] = $id;
            $response['username'] = $username;
            $response['email'] = $email;
            $response['type'] = $type;
        } else {
            $response["status"] = "Wrong credentials";
        }
    }
echo json_encode($response);

?>