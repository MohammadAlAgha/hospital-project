<?php
include('connection.php');

$id=$_GET['patient_id'];
$query=$mysqli->prepare('SELECT * from patient_services
INNER JOIN services on patient_services.service_id=services.id
where patient_id=? AND status=1');
$query->bind_param('i',$id);
$query->execute();

$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
}

if(isset($data)){
    $response['approved']=$data;
}
else{
    $response['approved']="Your requested services haven't been approved yet";
}




echo json_encode($response);
?>