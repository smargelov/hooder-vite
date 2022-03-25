<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die();
}

if (empty($_POST)) {
    $_POST = json_decode(file_get_contents('php://input', true));
};

if (count($_POST) > 0) {
    foreach ($_POST as $key => $value) {
        $value = htmlspecialchars($value); //защита от xss атак
        $$key = trim($value);
    }
};

$arr = [
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Telegram: ' => $tg,
    'Сообщение: ' => $message,
    'Страница: ' => 'https://hooder.ru' . $page
];

$token = "TELEGRAM_TOKEN";
$chat_id = "CHAT_TG_ID";

$sitename = "HOODER";
$pagetitle = "Новый запрос с сайта \"$sitename\"";

//Сообщение для телеграма
$txt = $pagetitle . "%0A%0A";
foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b>" . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

echo json_encode(['ok' => true]);
