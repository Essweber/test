<?php 
  class user {
    // DB stuff
    private $conn;
    private $table = 'users';

    // user Properties
    public $id;
    public $fname;
    public $lname;
    public $email;
    public $password;
    public $type_id;
    public $tel;
    public $created_at;
    public $updated_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get users
    public function read() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table ;
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single user
    public function read_single() {
          // Create query
          $query = 'SELECT * FROM ' . $this->table . ' WHERE
          ' . $this->table . '.id = ?
                                    LIMIT 0,1';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->lname = $row['lname'];
          $this->fname = $row['fname'];
          $this->email = $row['email'];
          $this->password = $row['password'];
          $this->type = $row['type'];
          $this->tel = $row['tel'];
          $this->created_at = $row['created_at'];
          $this->updated_at = $row['updated_at'];
    }


    // Create user
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET fname = :fname, lname = :lname, email = :email, password = :password, type = :type, tel = :tel';
          // , created_at = :created_at, updated_at = :updated_at

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->fname = htmlspecialchars(strip_tags($this->fname));
          $this->lname = htmlspecialchars(strip_tags($this->lname));
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->password = htmlspecialchars(strip_tags($this->password));
          $this->type = htmlspecialchars(strip_tags($this->type));
          $this->tel = htmlspecialchars(strip_tags($this->tel));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
          $stmt->bindParam(':fname', $this->fname);
          $stmt->bindParam(':lname', $this->lname);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':password', $this->password);
          $stmt->bindParam(':type', $this->type);
          $stmt->bindParam(':tel', $this->tel);
          // $stmt->bindParam(':created_at', $this->created_at);
          // $stmt->bindParam(':updated_at', $this->updated_at);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

    //   // Print error if something goes wrong
   printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update user
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET fname = :fname, lname = :lname, email = :email, password = :password, tel = :tel, type = :type
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));
          $this->fname = htmlspecialchars(strip_tags($this->fname));
          $this->lname = htmlspecialchars(strip_tags($this->lname));
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->password = htmlspecialchars(strip_tags($this->password));
          $this->tel = htmlspecialchars(strip_tags($this->tel));
          $this->type = htmlspecialchars(strip_tags($this->type));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
           $stmt-> bindParam(':id', $this->id);
          $stmt->bindParam(':fname', $this->fname);
          $stmt->bindParam(':lname', $this->lname);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':password', $this->password);
          $stmt->bindParam(':tel', $this->tel);
          $stmt->bindParam(':type', $this->type);
          // $stmt->bindParam(':created_at', $this->created_at);
          // $stmt->bindParam(':updated_at', $this->updated_at);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete user
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }