
<?php


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
// include_once '../../models/user.php';
include '../../vendor/autoload.php';

use Firebase\JWT\JWT;


// Instantiate DB & connect
$database = new Database();
$db = $database->connect();


// $user = new user($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data=json_decode(file_get_contents("php://input", true));
    // var_dump($data);

    $email = htmlentities(strip_tags($data->email));
    $password = htmlentities(strip_tags($data->password));

   

    $query = 'SELECT * FROM users WHERE email = :email AND password = :password';
    // $query = 'SELECT * FROM users WHERE email = "aessotchossim@gmail.com"AND password = "boss"';

    // Prepare statement
    $stmt = $db->prepare($query);
    
          $stmt->bindParam(':email', $email);
          $stmt->bindParam(':password', $password);
    $stmt->execute();

    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($data);
    // echo $data['fname'];

if ($data) {
    

        echo json_encode([
            'status' => 1,
            'verified_id' => $data['id'],
            'message' => 'Login successfully',
        ]);
    }
    else {
        echo json_encode([
            'status' => 0,
            'message' => 'Ssssssory !!!',
        ]);
    }


}else{
    echo json_encode([
        'status' => 0,
        'message' => 'Access Denied',
    ]);
 }





?>