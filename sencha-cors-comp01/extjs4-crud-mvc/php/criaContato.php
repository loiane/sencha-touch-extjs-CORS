<?php

	include("enableCORS.php");
	enableCORS();
	
	//chama o arquivo de conexão com o bd
	include("connect.php");

	$info = $_POST['contacts'];

	$data = json_decode(stripslashes($info));

	$nome = $data->name;
	$email = $data->email;
	$phone = $data->phone;

	//consulta sql
	$query = sprintf("INSERT INTO contact (name, email, phone) values ('%s', '%s', '%s')",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email),
		mysql_real_escape_string($phone));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"contacts" => array(
			"id" => mysql_insert_id(),
			"nome" => $nome,
			"email" => $email,
			"phone" => $phone
		)
	));
?>