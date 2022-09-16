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

  // Blog organisation query
  $result = $organisation->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any organisations
  if($num > 0) {
    // organisation array
    $organisations_arr = array();
    // $organisations_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $organisation_item = array(
        'id' => $id,
        'name' => $name,
        'activites' => $activites,
        'adresse' => $adresse,
        'creator_id' => $creator_id
      );

      // Push to "data"
      array_push($organisations_arr, $organisation_item);
      // array_push($organisations_arr['data'], $organisation_item);
    }

    // Turn to JSON & output
    echo json_encode($organisations_arr);

  } else {
    // No organisations
    echo json_encode(
      array('message' => 'No organisations Found')
    );
  }
