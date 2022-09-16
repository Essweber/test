<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/organisation.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog organisation object
  $organisation = new organisation($db);

  // Get ID
  $organisation->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get organisation
  $organisation->read_single();

  // Create array
  $organisation_arr = array(
    'id' => $organisation->id,
    'name' => $organisation->name,
    'activites' => $organisation->activites,
    'adresse' => $organisation->adresse,
    'creator_id' => $organisation->creator_id,
    'created_at' => $organisation->created_at,
    'updated_at' => $organisation->updated_at
  );

  // Make JSON
  print_r(json_encode($organisation_arr));