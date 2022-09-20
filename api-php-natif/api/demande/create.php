<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/demande.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog demande object
  $demande = new demande($db);

  // Get raw demande data
  $data = json_decode(file_get_contents("php://input"));
  
  if(isset($_GET['event_id'])){
    $demande->event_id = $_GET['event_id'];
    var_dump($demande->event_id);
  }
  
  
  $demande->location_region = $data->location_region;

  $demande->location_prefecture = $data->location_prefecture;
  $demande->location_description = $data->location_description;
  $demande->place_nbre = $data->place_nbre;
  $demande->duration = $data->duration;

  $demande->actor_title = $data->actor_title;
  $demande->actor_description = $data->actor_description;
  $demande->materiel_type = $data->materiel_type;

  $demande->materiel_name = $data->materiel_name;
  $demande->materiel_description = $data->materiel_description;
  $demande->gust_name = $data->gust_name;
  $demande->gust_adresse = $data->gust_adresse;
  $demande->gust_contact = $data->gust_contact;
  $demande->other_description = $data->other_description;
  // $demande->created_at = "2022-09-11 01:05:25";
  // $demande->updated_at = "2022-09-11 01:05:25";

  // Create demande
  if($demande->create()) {
    
    echo json_encode(
      array('message' => 'demande Created')
    );
  } else {echo "sorry";
    echo json_encode(
      array('message' => 'demande Not Created')
    );
  }

