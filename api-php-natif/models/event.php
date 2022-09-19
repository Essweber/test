<?php 
  class event {
    // DB stuff
    private $conn;
    private $table = 'events';

    // event Properties
    public $id;
    public $name;
    public $location;
    public $start_date;
    public $start_houre;
    public $end_date;
    public $end_houre;
    public $creator_id;
    public $type;
    public $nature;
    public $organisation_id;
    public $description;
    public $created_at;
    public $updated_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get event
    public function read() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table ;
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single event
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
          $this->name = $row['name'];
          $this->location = $row['location'];
          $this->start_date = $row['start_date'];
          $this->start_date = $row['start_houre'];
          $this->end_date = $row['end_date'];
          $this->end_date = $row['end_houre'];
          $this->type = $row['type'];
          $this->nature = $row['nature'];
          $this->creator_id = $row['creator_id'];
          $this->organisation_id = $row['organisation_id'];
          $this->description = $row['description'];
          $this->created_at = $row['created_at'];
          $this->updated_at = $row['updated_at'];
    }


    // Create event
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET name = :name, location = :location, start_date = :start_date, start_houre = :start_houre, end_date = :end_date, end_houre = :end_houre, type = :type, nature = :nature, creator_id = :creator_id, organisation_id = :organisation_id, description = :description';
          // , created_at = :created_at, updated_at = :updated_at

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->name= htmlspecialchars(strip_tags($this->name));
          $this->location = htmlspecialchars(strip_tags($this->location));
          $this->start_date = htmlspecialchars(strip_tags($this->start_date));
          $this->start_houre = htmlspecialchars(strip_tags($this->start_houre));
          $this->end_date = htmlspecialchars(strip_tags($this->end_date));
          $this->end_houre = htmlspecialchars(strip_tags($this->end_houre));
          $this->type = htmlspecialchars(strip_tags($this->type));
          $this->nature = htmlspecialchars(strip_tags($this->nature));
          $this->creator_id = htmlspecialchars(strip_tags($this->creator_id));
          $this->organisation_id = htmlspecialchars(strip_tags($this->organisation_id));
          $this->description = htmlspecialchars(strip_tags($this->description));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':location', $this->location);
          $stmt->bindParam(':start_date', $this->start_date);
          $stmt->bindParam(':start_houre', $this->start_houre);
          $stmt->bindParam(':end_date', $this->end_date);
          $stmt->bindParam(':end_houre', $this->end_houre);
          $stmt->bindParam(':type', $this->type);
          $stmt->bindParam(':nature', $this->nature);
          $stmt->bindParam(':creator_id', $this->creator_id);
          $stmt->bindParam(':organisation_id', $this->organisation_id);
          $stmt->bindParam(':description', $this->description);
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

    // Update event
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET name = :name, location = :location, start_date = :start_date, start_houre = :start_houre, end_date = :end_date, end_houre = :end_houre, type = :type, nature = :nature, creator_id = :creator_id, organisation_id = :organisation_id, description = :description
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));
          $this->name = htmlspecialchars(strip_tags($this->name));
          $this->location = htmlspecialchars(strip_tags($this->location));
          $this->start_date = htmlspecialchars(strip_tags($this->start_date));
          $this->start_houre = htmlspecialchars(strip_tags($this->start_houre));
          $this->end_date = htmlspecialchars(strip_tags($this->end_date));
          $this->end_houre = htmlspecialchars(strip_tags($this->end_houre));
          $this->type = htmlspecialchars(strip_tags($this->type));
          $this->nature = htmlspecialchars(strip_tags($this->nature));
          $this->creator_id = htmlspecialchars(strip_tags($this->creator_id));
          $this->organisation_id = htmlspecialchars(strip_tags($this->organisation_id));
          $this->description = htmlspecialchars(strip_tags($this->description));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
           $stmt-> bindParam(':id', $this->id);
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':location', $this->location);
          $stmt->bindParam(':start_date', $this->start_date);
          $stmt->bindParam(':end_date', $this->end_date);
          $stmt->bindParam(':type', $this->type);
          $stmt->bindParam(':nature', $this->nature);
          $stmt->bindParam(':creator_id', $this->creator_id);
          $stmt->bindParam(':organisation_id', $this->organisation_id);
          $stmt->bindParam(':description', $this->description);
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

    // Delete event
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