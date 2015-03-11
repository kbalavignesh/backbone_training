<?php

if($_SERVER['REQUEST_METHOD'] == 'GET') {
	$query = isset($_GET['query'])? $_GET['query']:null;
} elseif($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $modelData = file_get_contents("php://input");
    $modelData = json_decode($modelData);
    $query = 'save';
} elseif($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $todoId = $_GET['id'];
    $query = 'delete';
}


switch($query) {
	case 'getAll':
		$response = array(
			array('id'=>1, 'title'=>'Read JS Book', 'completed'=>false),
			array('id'=>2, 'title'=>'Read HTML Book', 'completed'=>false),
			array('id'=>3, 'title'=>'Read CSS Book', 'completed'=>false)
		);
		break;
	case 'save':
		$response = array('message'=>$modelData->title . ' todo saved successfully'
							,'status'=>0);
		break;
	case 'delete':
		$response = array('message'=>$todoId . ' todo deleted successfully'
							,'status'=>0);
		break;
	default:
		$response = array('message'=>'error','status'=>1);
		break;
}


header('Content-Type: application/json');
echo json_encode($response);


?>