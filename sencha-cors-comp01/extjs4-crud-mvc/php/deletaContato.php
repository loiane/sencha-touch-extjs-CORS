<?php

	include("enableCORS.php");
	enableCORS();
	
	//chama o arquivo de conexão com o bd
	include("connect.php");

	$info = $_POST['contacts'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;

	//consulta sql
	$query = sprintf("DELETE FROM contact WHERE id=%d",
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
?>