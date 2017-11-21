<?php

if(!empty($_POST['first_name']) and !empty($_POST['email']) and !empty($_POST['message'])) {

$email_to = "jerling1989@gmail.com";

$email_subject = "Customer Message";

$sender = $_POST['name']; // required

$email_from = $_POST['email']; // required

$sender_phone = $_POST['phone'];

$sender_company = $_POST['company'];

$comments = $_POST['message']; // required

$email_message = "Form Details:\n\n";



function clean_string($string) {

  $bad = array("content-type","bcc:","to:","cc:","href");

  return str_replace($bad,"",$string);

}



$email_message .= "Name: ".clean_string($sender)."\n";

$email_message .= "Email: ".clean_string($email_from)."\n";

$email_message .= "Phone: ".clean_string($sender_phone)."\n";

$email_message .= "Company: ".clean_string($sender_company)."\n";

$email_message .= "Message: ".clean_string($comments)."\n";

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();



?>