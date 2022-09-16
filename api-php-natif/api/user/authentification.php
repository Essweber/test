
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
    print_r($data);
    // echo $data['id'];

if ($data) {
    

        $id=$data['id'];
        $fname=$data['fname'];
        $lname=$data['lname'];
        $email=$data['email'];
        // $password=$data['password'];
        $tel=$data['tel'];
        $type=$data['type'];
        $created_at=$data['created_at'];
        $updated_at=$data['updated_at'];
       
        $payload=[
            'iss'=>"localhost",
            'aud'=>"localhost",
            'audexp'=>time()+1000,
            'data'=>[
                'id'=>$id,
                'fname'=>$fname,
                'lname'=>$lname,
                'email'=>$email,
                // 'password'=>$password,
                'tel'=>$tel,
                'type'=>$type,
                'created_at'=>$created_at,
                'updated_at'=>$updated_at,
            ],
        ];
        $secret_key="Gilbert Aloua";
        $jwt=JWT::encode($payload,$secret_key,"HS256");
        echo json_encode([
            'status' => 1,
            'jwt' => $jwt,
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