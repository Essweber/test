<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');
 header('Access-Control-Allow-Methods: POST');
 header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Access-Control-Allow-Origin,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';
// include_once '../../models/user.php';
include '../vendor/autoload.php';
$database = new Database();
$db = $database->connect();






require_once 'includes/config.php';
require_once 'classes/JWT.php';

// On crée le header
$header = [
    'typ' => 'JWT',
    'alg' => 'HS256'
];

// On crée le contenu (payload)
$data = json_decode(file_get_contents("php://input", true));
if($data)
{var_dump($data);
$email = htmlentities(strip_tags($data->email));
$password = htmlentities(strip_tags($data->password));



$query = 'SELECT * FROM users WHERE email = :email AND password = :password';

// Prepare statement
$stmt = $db->prepare($query);

$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->execute();

$data = $stmt->fetch(PDO::FETCH_ASSOC);

if($data){$payload = [
    'status' => 1,
    'message' => 'Login successfully'
    // 'data'=>[
    //     'id'=>$id,
    //     'fname'=>$fname,
    //     'lname'=>$lname,
    //     'email'=>$email,
    //     // 'password'=>$password,
    //     'tel'=>$tel,
    //     'type'=>$type,
    //     'created_at'=>$created_at,
    //     'updated_at'=>$updated_at,
    // ],
];

$jwt = new JWT();

$token = $jwt->generate($header, $payload, SECRET);

echo $token;}}else{
    echo 'sorry';
}

