<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/event.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog event object
  $event = new event($db);

  // Get raw event data
  $data = json_decode(file_get_contents("php://input"));
  
  
  $event->name = $data->name;
  $event->location = $data->location;

  $event->start_date = $data->start_date;
  $event->start_houre = $data->start_houre;
  $event->end_date = $data->end_date;
  $event->end_houre = $data->end_houre;

  $event->creator_id = $data->creator_id;
  $event->organisation_id = $data->organisation_id;
  $event->type = $data->type;

  $event->nature = $data->nature;
  $event->description = $data->description;
  // $event->created_at = "2022-09-11 01:05:25";
  // $event->updated_at = "2022-09-11 01:05:25";

  // Create event
  if($event->create()) {
    
    echo json_encode(
      array('message' => 'event Created')
    );
  } else {echo "sorry";
    echo json_encode(
      array('message' => 'event Not Created')
    );
  }

