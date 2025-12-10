<?php
// Antwort ist JSON
header('Content-Type: application/json; charset=utf-8');

// Nur POST erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// JSON-Body lesen (für fetch) – Fallback auf normales POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// reCAPTCHA prüfen
$recaptchaToken = trim($data['recaptcha'] ?? '');
if ($recaptchaToken === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Captcha missing.']);
    exit;
}

$secret = '6LcnVScsAAAAAFShFdOxNipw95m4RbwMet6MT9KN'; // von Google reCAPTCHA Admin

$verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
$params = http_build_query([
    'secret'   => $secret,
    'response' => $recaptchaToken,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? null
]);

$context = stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => $params,
        'timeout' => 5,
    ],
]);

$verifyResponse = file_get_contents($verifyUrl, false, $context);
$result = json_decode($verifyResponse, true);

if (empty($result['success'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Captcha verification failed.']);
    exit;
}


// Felder auslesen und trimmen
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');

// Minimale Validierung
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte eine gültige E-Mail-Adresse angeben.']);
    exit;
}

// === HIER deine Domain-Adressen anpassen ===
$to           = 'info@ouya-sphere.de';            // Ziel-Adresse
$fromAddress  = 'kontaktformular@ouya-sphere.de'; // techn. Absender (bei Strato anlegen!)
$subject = 'Neue Anfrage über ouya-sphere.de von ' . $name;

// Mailtext
$body = "Es ist eine neue Nachricht über das Kontaktformular eingegangen:\n\n"
      . "Name:    {$name}\n"
      . "E-Mail:  {$email}\n"
      . "Firma:   " . ($company !== '' ? $company : '-') . "\n\n"
      . "Nachricht:\n{$message}\n";

$headers   = [];
$headers[] = 'From: ' . $fromAddress;
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=utf-8';

$headersString = implode("\r\n", $headers);

// Wichtig bei STRATO: -f setzt den Return-Path auf eine gültige Domain-Adresse
if (@mail($to, $subject, $body, $headersString, '-f' . $fromAddress)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Versenden der E-Mail.']);
}
