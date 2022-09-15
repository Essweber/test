<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/user.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog user object
  $user = new user($db);

  // Blog user query
  $result = $user->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any users
  if($num > 0) {
    // user array
    $users_arr = array();
    // $users_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $user_item = array(
        'id' => $id,
        'user_fname' => $user_fname,
        'user_lname' => $user_lname,
        'user_email' => $user_email,
        'user_password' => $user_password,
        'user_type_id' => $user_type_id,
        'user_tel' => $user_tel,
        'user_created_at' => $user_created_at,
        'user_updated_at' => $user_updated_at
      );

      // Push to "data"
      array_push($users_arr, $user_item);
      // array_push($users_arr['data'], $user_item);
    }

    // Turn to JSON & output
    echo json_encode($users_arr);

  } else {
    // No users
    echo json_encode(
      array('message' => 'No users Found')
    );
  }
