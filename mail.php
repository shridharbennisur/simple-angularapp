<?php 
  if($_POST['email'] != '' && $_POST['subject'] != '' && $_POST['msg'] != '') {
  	echo "all fields required";
  }
  $email = $_POST['email'];
 
  $subject = $_POST['subject'];
  $message = $_POST['msg']; 
  $headers = "From: webmaster@example.com" . "\r\n" .
              "CC: somebodyelse@example.com";
$ss =   @mail($email,$subject,$msg,$headers);            
echo $ss;


 ?>