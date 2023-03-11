<?php

include('connection.php');

$email=$_POST['email'];
$password=$_POST['password'];



$query=$mysqli->prepare('select id,name,email,password from users where email=? ');
$query->bind_param('s',$email);
$query->execute();
$query->store_result();
$email_exists = $query->num_rows();
// $num_rows = $query->num_rows();
$query->bind_result($id, $username, $email, $hashed_password);
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
        } else {
            $response["response"] = "Wrong credentials";
        }
    }
  


echo json_encode($response);

?>