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
  // category_id = isset($_GET['user_id']) ? $_GET['user_id'] : die();
if(isset($_GET['user_id'])){
  $organisation->creator_id = $_GET['user_id'];
  $organisation->used = "user";
}
if(isset($_GET['id'])){
  $organisation->id = $_GET['id'];
  $organisation->used = "organisation";
}
  // $organisation->creator_id = isset($_GET['user_id']) ? $_GET['user_id'] : die();

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
    'creator_fname' => $organisation->creator_fname,
    'creator_lname' => $organisation->creator_lname,
    'creator_email' => $organisation->creator_email,
    'creator_tel' => $organisation->creator_tel
  );

  // Make JSON
  print_r(json_encode($organisation_arr));