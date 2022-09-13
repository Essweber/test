<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/user.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog user object
  $user = new user($db);

  // Get raw user data
  $data = json_decode(file_get_contents("php://input"));
var_dump($data);
  $user->user_fname = $data->user_fname;
  $user->user_lname = $data->user_lname;
  $user->user_email = $data->user_email;
  $user->user_password = $data->user_password;
  $user->user_type_id = $data->user_type_id;
  $user->user_tel = $data->user_tel;
  $user->user_created_at = $data->user_created_at;
  $user->user_updated_at = $data->user_updated_at;

  // Create user
  if($user->create()) {
    
    echo json_encode(
      array('message' => 'user Created')
    );
  } else {echo "sorry";
    echo json_encode(
      array('message' => 'user Not Created')
    );
  }

