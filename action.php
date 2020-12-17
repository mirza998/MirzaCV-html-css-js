<?php 
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="From: $name $surname \n Message: $message";
$recipient = "haris.rasidagic1@gmail.com";
$subject = "CV Contact from $name $surname";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>