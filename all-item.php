<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$query = "SELECT * FROM `productos`";
$allItem = $db_conn->query($query);
if($allItem != null){
    $allItem = mysqli_fetch_all($allItem,MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"items"=>$allItem]);
}
else{
    echo json_encode(["success"=>0]);
}
?>