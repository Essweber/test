<?php 
  class user {
    // DB stuff
    private $conn;
    private $table = 'users';

    // user Properties
    public $id;
    public $user_fname;
    public $user_lname;
    public $user_email;
    public $user_password;
    public $user_type_id;
    public $user_tel;
    public $user_created_at;
    public $user_updated_at;

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
    // public function read_single() {
    //       // Create query
    //       $query = 'SELECT c.name as category_name, p.id, p.category_id, p.title, p.body, p.author, p.created_at
    //                                 FROM ' . $this->table . ' p
    //                                 LEFT JOIN
    //                                   categories c ON p.category_id = c.id
    //                                 WHERE
    //                                   p.id = ?
    //                                 LIMIT 0,1';

    //       // Prepare statement
    //       $stmt = $this->conn->prepare($query);

    //       // Bind ID
    //       $stmt->bindParam(1, $this->id);

    //       // Execute query
    //       $stmt->execute();

    //       $row = $stmt->fetch(PDO::FETCH_ASSOC);

    //       // Set properties
    //       $this->title = $row['title'];
    //       $this->body = $row['body'];
    //       $this->author = $row['author'];
    //       $this->category_id = $row['category_id'];
    //       $this->category_name = $row['category_name'];
    // }

    // Create user
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET user_fname = :user_fname, user_lname = :user_lname, user_email = :user_email, category_id = :user_password, user_type_id = :user_type_id, user_tel = :user_tel, user_created_at = :user_created_at';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->user_fname = htmlspecialchars(strip_tags($this->user_fname));
          $this->user_lname = htmlspecialchars(strip_tags($this->user_lname));
          $this->user_email = htmlspecialchars(strip_tags($this->user_email));
          $this->user_password = htmlspecialchars(strip_tags($this->user_password));
          $this->user_type_id = htmlspecialchars(strip_tags($this->user_type_id));
          $this->user_tel = htmlspecialchars(strip_tags($this->user_tel));
          $this->user_created_at = htmlspecialchars(strip_tags($this->user_created_at));
          $this->user_updated_at = htmlspecialchars(strip_tags($this->user_updated_at));

          // Bind data
          $stmt->bindParam(':user_fname', $this->user_fname);
          $stmt->bindParam(':user_lname', $this->user_lname);
          $stmt->bindParam(':user_email', $this->user_email);
          $stmt->bindParam(':user_password', $this->user_password);
          $stmt->bindParam(':user_type_id', $this->user_type_id);
          $stmt->bindParam(':user_tel', $this->user_tel);
          $stmt->bindParam(':user_created_at', $this->user_created_at);
          $stmt->bindParam(':user_updated_at', $this->user_updated_at);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

    //   // Print error if something goes wrong
   printf("Error: %s.\n", $stmt->error);

    //   return false;
    // }

    // // Update user
    // public function update() {
    //       // Create query
    //       $query = 'UPDATE ' . $this->table . '
    //                             SET title = :title, body = :body, author = :author, category_id = :category_id
    //                             WHERE id = :id';

    //       // Prepare statement
    //       $stmt = $this->conn->prepare($query);

    //       // Clean data
    //       $this->title = htmlspecialchars(strip_tags($this->title));
    //       $this->body = htmlspecialchars(strip_tags($this->body));
    //       $this->author = htmlspecialchars(strip_tags($this->author));
    //       $this->category_id = htmlspecialchars(strip_tags($this->category_id));
    //       $this->id = htmlspecialchars(strip_tags($this->id));

    //       // Bind data
    //       $stmt->bindParam(':title', $this->title);
    //       $stmt->bindParam(':body', $this->body);
    //       $stmt->bindParam(':author', $this->author);
    //       $stmt->bindParam(':category_id', $this->category_id);
    //       $stmt->bindParam(':id', $this->id);

    //       // Execute query
    //       if($stmt->execute()) {
    //         return true;
    //       }

    //       // Print error if something goes wrong
    //       printf("Error: %s.\n", $stmt->error);

    //       return false;
    // }

    // // Delete user
    // public function delete() {
    //       // Create query
    //       $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

    //       // Prepare statement
    //       $stmt = $this->conn->prepare($query);

    //       // Clean data
    //       $this->id = htmlspecialchars(strip_tags($this->id));

    //       // Bind data
    //       $stmt->bindParam(':id', $this->id);

    //       // Execute query
    //       if($stmt->execute()) {
    //         return true;
    //       }

    //       // Print error if something goes wrong
    //       printf("Error: %s.\n", $stmt->error);

    //       return false;
    }
    
  }