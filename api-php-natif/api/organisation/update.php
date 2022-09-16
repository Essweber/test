<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
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

  // Set ID to update
  $organisation->id = $data->id;

  $organisation->name = $data->name;
  $organisation->activites = $data->activites;
  $organisation->adresse = $data->adresse;
  $organisation->creator_id = $data->creator_id;

  // Update organisation
  if($organisation->update()) {
    echo json_encode(
      array('message' => 'organisation Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'organisation Not Updated')
    );
  }

