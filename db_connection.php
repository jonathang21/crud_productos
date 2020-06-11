<?php
//$db_conn = mysqli_connect("localhost","root","","db_productos");

$db_conn = new mysqli("localhost", "root", "", "db_productos");
/* comprobar la conexión. */
if (mysqli_connect_errno()) {
    printf("Error de conexión: %s\n", mysqli_connect_error());
    exit();
}


?>