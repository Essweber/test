<?php 
  class organisation {
    // DB stuff
    private $conn;
    private $table = 'organisations';

    // organisation Properties
    public $id;
    public $used;
    public $name;
    public $activites;
    public $adresse;
    public $creator_id;
    public $creator_fname;
    public $creator_lname;
    public $creator_email;
    public $creator_tel;
    public $created_at;
    public $updated_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    public function read() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table ;
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single organisation
    public function read_single() {
          // Create query
          if($this->used === "organisation"){
             $query = 'SELECT users.fname, users.lname, users.email, creator_id, users.tel, organisations.id, organisations.name, organisations.activites, organisations.adresse FROM ' . $this->table . ' JOIN `users` ON (organisations.creator_id = users.id) WHERE
          ' . $this->table . '.id = ?
                                    LIMIT 0,1';

                                    $stmt = $this->conn->prepare($query);

                                    // Bind ID
                                    $stmt->bindParam(1, $this->id);
          }
          if($this->used === "user"){

 $query = 'SELECT users.fname, users.lname, users.email, creator_id, users.tel, organisations.id, organisations.name, organisations.activites, organisations.adresse FROM ' . $this->table . ' JOIN `users` ON (organisations.creator_id = users.id) WHERE
          ' . $this->table . '.creator_id = ?
                                    LIMIT 0,1';
                                    
                                    // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->creator_id);
          }
         

         
          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->name = $row['name'];
          $this->activites = $row['activites'];
          $this->adresse = $row['adresse'];
          $this->creator_id = $row['creator_id'];
          $this->creator_fname = $row['fname'];
          $this->creator_lname = $row['lname'];
          $this->creator_email = $row['email'];
          $this->creator_tel = $row['tel'];
    }

    // Create organisation
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET name = :name, activites = :activites, adresse = :adresse, creator_id = :creator_id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->name = htmlspecialchars(strip_tags($this->name));
          $this->activites = htmlspecialchars(strip_tags($this->activites));
          $this->adresse = htmlspecialchars(strip_tags($this->adresse));
          $this->creator_id = htmlspecialchars(strip_tags($this->creator_id));
        

          // Bind data
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':activites', $this->activites);
          $stmt->bindParam(':adresse', $this->adresse);
          $stmt->bindParam(':creator_id', $this->creator_id);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

    //   // Print error if something goes wrong
   printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update organisation
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET name = :name, activites = :activites, adresse = :adresse, creator_id = :creator_id
                                 WHERE id = :id';
                                

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));
          $this->name = htmlspecialchars(strip_tags($this->name));
          $this->activites = htmlspecialchars(strip_tags($this->activites));
          $this->adresse = htmlspecialchars(strip_tags($this->adresse));
          $this->creator_id = htmlspecialchars(strip_tags($this->creator_id));

          // Bind data
          $stmt-> bindParam(':id', $this->id);
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':activites', $this->activites);
          $stmt->bindParam(':adresse', $this->adresse);
          $stmt->bindParam(':creator_id', $this->creator_id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete organisation
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