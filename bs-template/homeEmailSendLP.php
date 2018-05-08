<?php

$recepient = "andrij.dejak@gmail.com";
$sitename = "https://bearsqueeze.co";

$name = trim($_POST["fname"]);
$email = trim($_POST["email"]);
$textMessage = trim($_POST["textMessage"]);
$message = "Name: $name \nEmail: $email \nClient Message: $textMessage";


$headers = 'From:'. $email ;

$pagetitle = "New request from website: \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers );

?>
