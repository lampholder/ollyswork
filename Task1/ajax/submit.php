<?php
$dateCheck = date(d-m-Y);

$date2 = DateTime(12-08-1996);

$check = $dateCheck->diff($date2);

$myage = $check->y;

if ($myage>16){
	echo '<script language="javascript">';
	echo 'alert("ayy lmao")';
	echo '</script>;'
}



if( isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['DOB'] && isset($_POST['email']) ){
	$firstName = $_POST['firstName']; // HINT: use preg_replace() to filter the data
	$lastName = $_POST['lastName'];
	$DOB = $_POST['DOB'];
	$email = ($_POST['email']);
	//sending the data they enter to my email
	$to = "w4t55@students.keele.ac.uk";	
	$from = $email;
	$subject = 'Contact Form Message';
	$message = '<b>First Name:</b> '.$firstName.' <br><b>Last Name:</b> '.$lastName.' <br><b>DOB:</b> '.$DOB.' <br><b>Email:</b> '.$email.';
	$headers = "From: $from\firstName";
	$headers .= "MIME-Version: 1.0\firstName";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
