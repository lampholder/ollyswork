<?PHP
 header('Content-Type: application/json');
 
 if (!empty($_POST['firstName']) and !empty($_POST['lastName']) and !empty($_POST['DOB']) and !empty($_POST['email'])) {
     echo json_encode(["success" => True,
                       "message" => "Thanks for subscribing!"]);
  }
 else {
     echo json_encode(["success" => False,
                       "error" => "Insufficient data submitted."]);
}
 
?>