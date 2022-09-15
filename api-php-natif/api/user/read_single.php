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

  // Get ID
  $user->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get user
  $user->read_single();

  // Create array
  $user_arr = array(
    'id' => $user->id,
    'fname' => $user->fname,
    'lname' => $user->lname,
    'email' => $user->email,
    'password' => $user->password,
    'type' => $user->type,
    'tel' => $user->tel,
    'created_at' => $user->created_at,
    'updated_at' => $user->updated_at
  );

  // Make JSON
  print_r(json_encode($user_arr));