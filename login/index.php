<html>
<?php 
$mail = "g191210016@gmail.com";
$password = "g191210016";
$temp_mail = $_POST['mail'];
$temp_password = $_POST['password'];

if ($temp_mail == $mail && $temp_password == $password){
  alert("Başarıyla Giriş Yaptınız, Alper Çelik.");
  header('refresh: 0; url=../index.html');

}
elseif ($temp_mail != $mail){
  alert("Girdiğiniz Mail Hatalı !");
  header('refresh: 0; url=index.html');


}elseif ($temp_password != $password){
  alert("Girdiğiniz Şifre Hatalı !");
  header('refresh: 0; url=index.html');
}

function alert($msg) {
  echo "<script type='text/javascript'>alert('$msg');</script>";
}
?>