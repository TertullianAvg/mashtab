<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];


$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);


$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$text = urldecode($text);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$text = trim($text);


if (mail("wotpvii@gmail.com",
"новое письмо с сайта",
"Имя: ".$name."\n".
"Телефон: ".$phone."\n".
"Email: ".$email."\n".
"Текст: ".$text,
"From: no-reaply@mydomain.ru \r \n".))

{
    echo ('Письмо отправлено успешно');
}

else {
    echo ('Ecть ошибка, проверьте данные');
}

?>