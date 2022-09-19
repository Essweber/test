<?php 
  class demande {
    // DB stuff
    private $conn;
    private $table = 'demandes';

    // demande Properties
    public $id;
    public $event_id;
    public $location_region;
    public $location_prefecture;
    public $location_description;
    public $place_nbre;
    public $duration;
    public $actor_title;
    public $actor_description;    
    public $materiel_type;    
    public $materiel_name;    
    public $materiel_description;    
    public $gust_name;    
    public $gust_adresse;    
    public $gust_contact;    
    public $other_description;    
    public $created_at;
    public $updated_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get demande
    public function read() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table ;
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single demande
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
          $this->event_id = $row['event_id'];
          $this->location_region = $row['location_region'];
          $this->location_prefecture = $row['location_prefecture'];
          $this->location_description = $row['location_description'];
          $this->place_nbre = $row['place_nbre'];
          $this->duration = $row['duration'];
          $this->actor_title = $row['actor_title'];
          $this->actor_description = $row['actor_description'];
          $this->materiel_type = $row['materiel_type'];
          $this->materiel_name = $row['materiel_name'];
          $this->materiel_description = $row['materiel_description'];
          $this->gust_name = $row['gust_name'];
          $this->gust_adresse = $row['gust_adresse'];
          $this->gust_contact = $row['gust_contact'];
          $this->other_description = $row['other_description'];
          $this->created_at = $row['created_at'];
          $this->updated_at = $row['updated_at'];
    }


    // Create demande
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . '   SET event_id = :event_id, location_region = :location_region, location_prefecture = :location_prefecture, location_description = :location_description, place_nbre = :place_nbre, duration = :duration, actor_title = :actor_title, actor_description = :actor_description, materiel_type = :materiel_type, materiel_name = :materiel_name, materiel_description = :materiel_description, gust_name = :gust_name, gust_adresse = :gust_adresse, gust_contact = :gust_contact, other_description = :other_description';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->event_id= htmlspecialchars(strip_tags($this->event_id));
          $this->location_region = htmlspecialchars(strip_tags($this->location_region));
          $this->location_prefecture = htmlspecialchars(strip_tags($this->location_prefecture));
          $this->location_description = htmlspecialchars(strip_tags($this->location_description));
          $this->place_nbre = htmlspecialchars(strip_tags($this->place_nbre));
          $this->duration = htmlspecialchars(strip_tags($this->duration));
          $this->actor_title = htmlspecialchars(strip_tags($this->actor_title));
          $this->actor_description = htmlspecialchars(strip_tags($this->actor_description));
          $this->materiel_type = htmlspecialchars(strip_tags($this->materiel_type));
          $this->materiel_name = htmlspecialchars(strip_tags($this->materiel_name));
          $this->materiel_description = htmlspecialchars(strip_tags($this->materiel_description));
          $this->gust_name = htmlspecialchars(strip_tags($this->gust_name));
          $this->gust_adresse = htmlspecialchars(strip_tags($this->gust_adresse));
          $this->gust_contact = htmlspecialchars(strip_tags($this->gust_contact));
          $this->other_description = htmlspecialchars(strip_tags($this->other_description));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
          $stmt->bindParam(':event_id', $this->event_id);
          $stmt->bindParam(':location_region', $this->location_region);
          $stmt->bindParam(':location_prefecture', $this->location_prefecture);
          $stmt->bindParam(':location_description', $this->location_description);
          $stmt->bindParam(':place_nbre', $this->place_nbre);
          $stmt->bindParam(':duration', $this->duration);
          $stmt->bindParam(':actor_title', $this->actor_title);
          $stmt->bindParam(':actor_description', $this->actor_description);
          $stmt->bindParam(':materiel_type', $this->materiel_type);
          $stmt->bindParam(':materiel_name', $this->materiel_name);
          $stmt->bindParam(':materiel_description', $this->materiel_description);
          $stmt->bindParam(':gust_name', $this->gust_name);
          $stmt->bindParam(':gust_adresse', $this->gust_adresse);
          $stmt->bindParam(':gust_contact', $this->gust_contact);
          $stmt->bindParam(':other_description', $this->other_description);
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

    // Update demande
    public function update() {
          // Create query
          $query = 'UPDATE ' . $this->table . '
                                SET event_id = :event_id, location_region = :location_region, location_prefecture = :location_prefecture, location_description = :location_description, place_nbre = :place_nbre, duration = :duration, actor_title = :actor_title, actor_description = :actor_description, materiel_type = :materiel_type, materiel_name = :materiel_name, materiel_description = :materiel_description, gust_name = :gust_name, gust_adresse = :gust_adresse, gust_contact = :gust_contact, other_description = :other_description
                                WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->event_id= htmlspecialchars(strip_tags($this->event_id));
          $this->location_region = htmlspecialchars(strip_tags($this->location_region));
          $this->location_prefecture = htmlspecialchars(strip_tags($this->location_prefecture));
          $this->location_description = htmlspecialchars(strip_tags($this->location_description));
          $this->place_nbre = htmlspecialchars(strip_tags($this->place_nbre));
          $this->duration = htmlspecialchars(strip_tags($this->duration));
          $this->actor_title = htmlspecialchars(strip_tags($this->actor_title));
          $this->actor_description = htmlspecialchars(strip_tags($this->actor_description));
          $this->materiel_type = htmlspecialchars(strip_tags($this->materiel_type));
          $this->materiel_name = htmlspecialchars(strip_tags($this->materiel_name));
          $this->materiel_description = htmlspecialchars(strip_tags($this->materiel_description));
          $this->gust_name = htmlspecialchars(strip_tags($this->gust_name));
          $this->gust_adresse = htmlspecialchars(strip_tags($this->gust_adresse));
          $this->gust_contact = htmlspecialchars(strip_tags($this->gust_contact));
          $this->other_description = htmlspecialchars(strip_tags($this->other_description));
          // $this->created_at = htmlspecialchars(strip_tags($this->created_at));
          // $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

          // Bind data
          $stmt->bindParam(':event_id', $this->event_id);
          $stmt->bindParam(':location_region', $this->location_region);
          $stmt->bindParam(':location_prefecture', $this->location_prefecture);
          $stmt->bindParam(':location_description', $this->location_description);
          $stmt->bindParam(':place_nbre', $this->place_nbre);
          $stmt->bindParam(':duration', $this->duration);
          $stmt->bindParam(':actor_title', $this->actor_title);
          $stmt->bindParam(':actor_description', $this->actor_description);
          $stmt->bindParam(':materiel_type', $this->materiel_type);
          $stmt->bindParam(':materiel_name', $this->materiel_name);
          $stmt->bindParam(':materiel_description', $this->materiel_description);
          $stmt->bindParam(':gust_name', $this->gust_name);
          $stmt->bindParam(':gust_adresse', $this->gust_adresse);
          $stmt->bindParam(':gust_contact', $this->gust_contact);
          $stmt->bindParam(':other_description', $this->other_description);
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

    // Delete demande
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