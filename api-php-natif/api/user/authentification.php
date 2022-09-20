
<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
// include_once '../../models/user.php';
include '../../vendor/autoload.php';
require_once 'includes/config.php';
require_once 'classes/JWT.php';
// use Firebase\JWT\JWT;

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();


// $user = new user($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input", true));
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


        $header = [
            'typ' => 'JWT',
            'alg' => 'HS256'
        ];

        $id = $data['id'];
        $fname = $data['fname'];
        $lname = $data['lname'];
        $email = $data['email'];
        // $password=$data['password'];
        $tel = $data['tel'];
        $type = $data['type'];
        $created_at = $data['created_at'];
        $updated_at = $data['updated_at'];
        // On crée le contenu (payload)
        $payload = [

            'user' => [
                'id' => $id,
                'fname' => $fname,
                'lname' => $lname,
                'email' => $email,
                // 'password'=>$password,
                'tel' => $tel,
                'type' => $type,
                'created_at' => $created_at,
                'updated_at' => $updated_at,
            ]
        ];

        $jwt = new JWT();

        $token = $jwt->generate($header, $payload, SECRET);

        echo json_encode([
            'status' => 1,
             'message' => 'Login successfully',

            'id' => $id,
            'fname' => $fname,
            'lname' => $lname,
            'email' => $email,
            // 'password'=>$password,
            'tel' => $tel,
            'type' => $type,
            'created_at' => $created_at,
            'updated_at' => $updated_at,

            'token' => $token,
        ]);
        // echo $token;








        // echo json_encode([
        //     'status' => 1,
        //     'verified_id' => $data['id'],
        //     'message' => 'Login successfully',
        // ]);
    } else {
        echo json_encode([
            'status' => 0,
            'message' => 'Ssssssory !!!',
        ]);
    }
} else {
    echo json_encode([
        'status' => 0,
        'message' => 'Access Denied',
    ]);
}





?>