<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if(isset($data->nombre_producto) 
	&& isset($data->referencia) 
	&& !empty(trim($data->precio)) 
	&& !empty(trim($data->peso))
	&& !empty(trim($data->categoria))
	&& !empty(trim($data->stock))
	){
	$query = "INSERT INTO `productos`(
				`nombre_producto`,
				`referencia`,
				`precio`,
				`peso`,
				`categoria`,
				`stock`,
				`fecha_creacion`) VALUES('$data->nombre_producto',
									  '$data->referencia',
									  $data->precio,
									  $data->peso,
									  '$data->categoria',
									  $data->stock,
									  NOW())";
	$db_conn->query($query);
	echo json_encode(["success"=>1,"msg"=>"Producto guardado","id"=>$db_conn->insert_id,"fecha_creacion" => date('Y-m-d')]);
}
else{
    echo json_encode(["success"=>0,"msg"=>"Ingresar los campos obligatorios!"]);
}
?>