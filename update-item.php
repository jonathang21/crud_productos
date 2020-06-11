<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id) 
	&& isset($data->nombre_producto) 
	&& isset($data->referencia) 
	&& is_numeric($data->id) 
	&& !empty(trim($data->nombre_producto)) 
	&& !empty(trim($data->referencia))
	&& !empty(trim($data->precio)) 
	&& !empty(trim($data->peso))
	&& !empty(trim($data->categoria))
	&& !empty(trim($data->stock))
	){
 
	$query = "UPDATE `productos` SET `nombre_producto`= '$data->nombre_producto', 
									  `referencia`= '$data->referencia',
									  `precio`= $data->precio, 
									  `peso`= $data->peso,
									  `categoria`= '$data->categoria', 
									  `stock`= $data->stock, 
									  WHERE `id`='$data->id'"; 
	$db_conn->query($query);

	echo json_encode(["success"=>1,"msg"=>"Producto Actualizado."]);
}
else{
    echo json_encode(["success"=>0,"msg"=>"Campos obligatorios requeridos!"]);
}
?>