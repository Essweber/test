<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/event.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog event object
  $event = new event($db);

  // Get ID
  $event->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get event
  $event->read_single();

  // Create array
  $event_arr = array(
    'id' => $event->id,
    'fname' => $event->fname,
    'lname' => $event->lname,
    'email' => $event->email,
    'password' => $event->password,
    'type' => $event->type,
    'tel' => $event->tel,
    'created_at' => $event->created_at,
    'updated_at' => $event->updated_at
  );

  // Make JSON
  print_r(json_encode($event_arr));