<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$query_c = "SELECT * FROM `productos` WHERE `nombre_producto` = 'prueba' `referencia` = 'prueba'";
$allItem = $db_conn->query($query_c);
printf ($allItem);

$fecha = date('Y-m-d');
		$query = "INSERT INTO `productos` (`nombre_producto`, `referencia`, `precio`, `peso`, `categoria`, `stock`, `fecha_creacion`) VALUES ('prueba', 'prueba', '1500', '1', 'prueba', '1', NOW())";
$db_conn->query($query);

printf ("Nuevo registro con el id %d.\n", $db_conn->insert_id);
 
?>