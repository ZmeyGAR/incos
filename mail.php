<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// incos.mebel@bk.ru
// T4ATPp^oopp5

// DFbZu3XL7G4F5d2gBUNQ

const Host = 'smtp.mail.ru';
const Username = 'incos.mebel@bk.ru';
const Password = 'DFbZu3XL7G4F5d2gBUNQ';
const Port = 465;





if ($_POST['type'] === 'form-callback') {
    $message = [
        'type'          => $_POST['type'],
        'clientName'    => $_POST['name'],
        'clientTel'     => $_POST['tel'],

        'subject'       => 'НОВАЯ ЗАЯВКА НА САЙТЕ',
        'body'          => "Клиент <b>{$_POST['name']}</b> просит связаться с ним по телефону <b>{$_POST['tel']}</b> !",
        'altBody'       => "Клиент {$_POST['name']} просит связаться с ним по телефону {$_POST['tel']} !",
        'onSuccess'     => [
            'success'   => true,
            'message'   => 'Ваше сообщение было отправлено!'
        ],
        'onError'       => [
            'error'     => true,
            'message'   => ''
        ]
    ];
    sendMessage($message);
}
$json = json_decode(file_get_contents("php://input"), true);


if ($json && $json['type'] === 'quiz') {
    $QUIZ = $json;

    $productInfo = [];
    $budget = 'от %MIN% р. до %MAX% р.';
    foreach ($QUIZ['answers'] as $answer) {
        if ($answer['name'] === 'range') {
            $budget = str_replace(['%MIN%', '%MAX%'], [$answer['value']['min'], $answer['value']['max']], $budget);
            continue;
        }
        $productInfo[$answer['name']] = $answer['text'];
    }


    $message = [
        'type'              => $QUIZ['type'],
        'client_name'       => $QUIZ['clientInfo']['name'],
        'client_tel'        => $QUIZ['clientInfo']['phone'],
        'client_email'      => isset($QUIZ['clientInfo']['email']) ? $QUIZ['clientInfo']['email'] : '',

        'subject'           => "[КВИЗ] : КЛИЕНТ {$QUIZ['clientInfo']['name']} просит прислать расчет стоимости для {$productInfo['type']}",
        'body'              => renderMessage($QUIZ, 'body', $productInfo, $budget),
        'altBody'           => renderMessage($QUIZ, 'altBody', $productInfo, $budget),
        'onSuccess'         => [
            'success'       => true,
            'message'       => 'Ваше сообщение было отправлено!'
        ],
        'onError'           => [
            'error'         => true,
            'message'       => ''
        ]
    ];
    sendMessage($message);
}



function sendMessage($message)
{
    try {
        $mail = new PHPMailer();
        //Server settings
        $mail->SMTPDebug = 0;                               //Enable verbose debug output
        $mail->isSMTP();                                    //Send using SMTP
        $mail->Host = Host;                                 //Set the SMTP server to send through
        $mail->SMTPAuth = true;                             //Enable SMTP authentication
        $mail->Username = Username;                         //SMTP username
        $mail->Password = Password;                         //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;    //Enable implicit TLS encryption
        $mail->Port = Port;                                  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->SMTPDebug = 0;
        $mail->Debugoutput = 'html';

        //Recipients
        $mail->setFrom(Username, 'InCOS-home', false);
        $mail->addAddress('sales@incos-home.ru', 'InCOS-home');   //Add a recipient
        // $mail->addAddress('lagutin1991@gmail.com', 'InCOS-home');   //Add a recipient

        //Content
        $mail->isHTML(true);
        $mail->Subject  = $message['subject'];
        $mail->Body     = $message['body'];
        $mail->AltBody  = $message['altBody'];

        $mail->send();

        $response = $message['onSuccess'];
        unset($message['onSuccess'], $message['onError']);
        $message['status'] = 'success';
        logMessage($message);
        response($response);
    } catch (Exception $e) {
        $response = $message['onSuccess'];
        unset($message['onSuccess'], $message['onError']);
        $message['status'] = 'error';
        logMessage($message);
        response([...$message['onError'], 'message' => $mail->ErrorInfo]);
    }
}

function logMessage($message)
{
    $message['date'] = date('Y-m-d H:i:s');
    file_put_contents($_SERVER["DOCUMENT_ROOT"] . '/' . $message['type'] . '.log.txt', json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), FILE_APPEND);
}

function response($json)
{
    die(json_encode($json, JSON_UNESCAPED_UNICODE));
}



/**
 * support functions
 */

function renderMessage($QUIZ, $type = 'altBody', $productInfo, $budget)
{

    $contacts = array_reduce($QUIZ['to'], function ($_str, $contact) {
        if ($contact === 'to_email') $_str .= "%BR%на этот e-mail %EMAIL_ADR%";
        if ($contact === 'to_whatsapp') $_str .= "%BR%в whatsapp %WHATSAPP_ADR%";
        if ($contact === 'to_telegram') $_str .= "%BR%в telegram %TELEGRAM_ADR%";
        return $_str;
    }, '');


    if ($type === 'body') {
        $contactsParse = str_replace(
            [
                '%BR%',
                '%EMAIL_ADR%',
                '%WHATSAPP_ADR%',
                '%TELEGRAM_ADR%'
            ],
            [
                '<br>',
                $QUIZ['clientInfo']['email'],
                $QUIZ['clientInfo']['phone'],
                $QUIZ['clientInfo']['phone']
            ],
            $contacts
        );

        return "
            <h1>Добрый день</h1>
            <h2>Меня зовут {$QUIZ['clientInfo']['name']}</h2>
            <p>Я хочу получить расчет стоимости для продукта {$productInfo['type']}</p>
            <ul>
                <li>Продукт : {$productInfo['type']}</li>
                <li>Стиль :  {$productInfo['style']}</li>"
            .  (isset($productInfo['form_divan'])    ? "<li>Форма : {$productInfo['form_divan']}</li>"               : "")
            .   (isset($productInfo['bunk'])          ? "<li>Наличие спального места : {$productInfo['bunk']}</li>"   : "")
            .   (isset($productInfo['casebox'])       ? "<li>Короб для хранения : {$productInfo['casebox']}</li>"     : "")
            . "
            </ul>
            <p>Планируемый бюджет :  {$budget}</p>

            <hr>"
            . ((isset($QUIZ['to']) and !empty($QUIZ['to'])) ? "<p>Расчет можно прислать : {$contactsParse}</p>" : "") . "
            
            <p>Связаться со мной можно по телефону: {$QUIZ['clientInfo']['phone']}</p>
            <p>или написать мне на e-mail: {$QUIZ['clientInfo']['email']}</p>
            ";
    }
    if ($type === 'altBody') {
        $br = '\n';
        $body = "Добрый день!" . $br;
        $body .= "Меня зовут {$QUIZ['clientInfo']['name']}" . $br;
        $body .= "Я хочу получить расчет стоимости для продукта {$productInfo['type']}" . $br  . $br;
        $body .= "Стиль :  {$productInfo['style']}" . $br;
        if (isset($productInfo['form_divan'])) $body .= "Форма :  {$productInfo['form_divan']}" . $br;
        if (isset($productInfo['bunk'])) $body .= "Наличие спального места :  {$productInfo['bunk']}" . $br;
        if (isset($productInfo['casebox'])) $body .= "Короб для хранения :  {$productInfo['casebox']}" . $br;
        $body .= "Планируемый бюджет :  {$budget}" . $br;
        if (isset($QUIZ['to']) && !empty($QUIZ['to'])) $body .= "Расчет можно прислать : "  . str_replace(['%BR%', '%EMAIL_ADR%', '%WHATSAPP_ADR%', '%TELEGRAM_ADR%'], [$br, $QUIZ['clientInfo']['email'], $QUIZ['clientInfo']['phone'], $QUIZ['clientInfo']['phone']], $contacts) . $br;
        $body .= "Связаться со мной можно по телефону : {$QUIZ['clientInfo']['phone']}" . $br;
        if (isset($QUIZ['clientInfo']['email'])) $body .= "или письмом по этому e-mail адресу: {$QUIZ['clientInfo']['email']}";

        return $body;
    }
}
