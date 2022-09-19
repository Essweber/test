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

  // Blog event query
  $result = $event->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any event
  if($num > 0) {
    // event array
    $events_arr = array();
    // $events_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $event_item = array(
        'id' => $id,
        'fname' => $fname,
        'lname' => $lname,
        'email' => $email,
        'password' => $password,
        'type' => $type,
        'tel' => $tel,
        'created_at' => $created_at,
        'updated_at' => $updated_at
      );

      // Push to "data"
      array_push($events_arr, $event_item);
      // array_push($events_arr['data'], $event_item);
    }

    // Turn to JSON & output
    echo json_encode($events_arr);

  } else {
    // No events
    echo json_encode(
      array('message' => 'No events Found')
    );
  }
