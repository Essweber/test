<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/organisation.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog organisation object
  $organisation = new organisation($db);

  // Get raw organisation data
  $data = json_decode(file_get_contents("php://input"));
var_dump($data);
  $data->creator_id = $_GET['creator_id'];
  $organisation->name = $data->name;
  $organisation->activites = $data->activites;
  $organisation->adresse = $data->adresse;
  $organisation->creator_id = $data->creator_id;

  // Create organisation
  if($organisation->create()) {
    
    echo json_encode(
      array('message' => 'organisation Created')
    );
  } else {echo "sorry";
    echo json_encode(
      array('message' => 'organisation Not Created')
    );
  }

