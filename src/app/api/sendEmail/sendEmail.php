<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'odhadyvachuska@gmail.com';
    $mail->Password = 'orhq eyeg cwlc nvrw'; // App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('odhadyvachuska@gmail.com', 'Tvé jméno');
    $mail->addAddress('prijemce@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Test';
    $mail->Body    = 'Ahoj, toto je test!';

    $mail->send();
    echo 'E-mail byl úspěšně odeslán!';
} catch (Exception $e) {
    echo "Chyba: {$mail->ErrorInfo}";
}
?>
