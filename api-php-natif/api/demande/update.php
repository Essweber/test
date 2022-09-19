<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
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

  // Set ID to update
  $event->id = $data->id;
  $event->fname = $data->fname;
  $event->lname = $data->lname;
  $event->email = $data->email;
  $event->password = $data->password;
   $event->tel = $data->tel;
 $event->type = $data->type;
  $event->created_at = "2022-09-11 01:05:25";
  $event->updated_at = "2022-09-11 01:05:25";

  // Update event
  if($event->update()) {
    echo json_encode(
      array('message' => 'event Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'event Not Updated')
    );
  }

