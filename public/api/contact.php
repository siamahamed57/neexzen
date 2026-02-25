<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit();
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name    = isset($data['name'])    ? trim($data['name'])    : '';
$email   = isset($data['email'])   ? trim($data['email'])   : '';
$phone   = isset($data['phone'])   ? trim($data['phone'])   : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$service = isset($data['service']) ? trim($data['service']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (!$name || !$email || !$phone || !$service || !$message) {
    http_response_code(400);
    echo json_encode(['message' => 'Please fill in all required fields.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address.']);
    exit();
}

$serviceLabels = [
    'web'        => 'Web Development',
    'ai'         => 'AI & Machine Learning',
    'design'     => 'UI/UX Design',
    'mobile'     => 'Mobile Development',
    'consulting' => 'Technical Consulting',
    'other'      => 'Other',
];
$serviceLabel = isset($serviceLabels[$service]) ? $serviceLabels[$service] : $service;

/* ── SMTP CONFIG ── */
$smtpHost = 'smtp.hostinger.com';
$smtpPort = 587;
$smtpUser = 'info@neexzen.com';
$smtpPass = 'Info45087@';
$fromName = 'Neexzen Contact Form';
$fromAddr = 'info@neexzen.com';
$recipients = ['siamahamedab@gmail.com', 'atiksafinmd1@gmail.com'];

/* ── Build branded HTML email ── */
$msgHtml = nl2br(htmlspecialchars($message));
$safeName    = htmlspecialchars($name);
$safeEmail   = htmlspecialchars($email);
$safePhone   = htmlspecialchars($phone);
$safeCompany = htmlspecialchars($company ?: 'N/A');
$safeService = htmlspecialchars($serviceLabel);

$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0e0e1a;border-radius:16px;overflow:hidden;border:1px solid rgba(167,139,250,0.2);">
        <tr><td style="background:linear-gradient(135deg,#1a0a2e,#0e0e1a);padding:32px 40px;border-bottom:2px solid rgba(167,139,250,0.3);">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#a78bfa;font-weight:800;">New Inquiry</p>
          <h1 style="margin:0;font-size:24px;color:#fff;font-weight:800;">Contact Form Submission</h1>
          <p style="margin:8px 0 0;font-size:13px;color:#6b7280;">via neexzen.com</p>
        </td></tr>
        <tr><td style="padding:28px 40px 0;">
          <span style="display:inline-block;background:rgba(167,139,250,0.12);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);border-radius:100px;padding:4px 14px;font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">$safeService</span>
        </td></tr>
        <tr><td style="padding:24px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#a78bfa;font-weight:800;">Name</p>
              <p style="margin:0;font-size:15px;color:#e5e7eb;">$safeName</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#38bdf8;font-weight:800;">Email</p>
              <p style="margin:0;font-size:15px;color:#e5e7eb;">$safeEmail</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#34d399;font-weight:800;">Phone</p>
              <p style="margin:0;font-size:15px;color:#e5e7eb;">$safePhone</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0 0 2px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#fb923c;font-weight:800;">Company</p>
              <p style="margin:0;font-size:15px;color:#e5e7eb;">$safeCompany</p>
            </td></tr>
            <tr><td style="padding:20px 0 0;">
              <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#f472b6;font-weight:800;">Message</p>
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;">
                <p style="margin:0;font-size:14px;color:#d1d5db;line-height:1.7;">$msgHtml</p>
              </div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 40px 32px;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="margin:0;font-size:12px;color:#4b5563;">Sent from <a href="https://neexzen.com" style="color:#a78bfa;text-decoration:none;">neexzen.com</a>. Reply to respond to $safeName.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

$plainText = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: " . ($company ?: 'N/A') . "\nService: $serviceLabel\n\nMessage:\n$message";

/* ── Low-level SMTP send ── */
function smtpSend($host, $port, $user, $pass, $fromAddr, $fromName, $toAddr, $replyTo, $subject, $html, $plain) {
    $sock = @fsockopen($host, $port, $errno, $errstr, 10);
    if (!$sock) return false;

    $boundary = md5(uniqid(rand(), true));

    $read = function() use ($sock) {
        $data = '';
        while ($line = fgets($sock, 515)) {
            $data .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $data;
    };

    $send = function($cmd) use ($sock, $read) {
        fputs($sock, "$cmd\r\n");
        return $read();
    };

    $read(); // banner
    $send("EHLO " . gethostname());
    $send("STARTTLS");

    // upgrade to TLS
    stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

    $send("EHLO " . gethostname());
    $send("AUTH LOGIN");
    $send(base64_encode($user));
    $send(base64_encode($pass));
    $send("MAIL FROM:<$fromAddr>");
    $send("RCPT TO:<$toAddr>");
    $send("DATA");

    $encodedFrom = "=?UTF-8?B?" . base64_encode("$fromName") . "?=";
    $headers  = "From: $encodedFrom <$fromAddr>\r\n";
    $headers .= "To: $toAddr\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

    $body  = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= $plain . "\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $body .= $html . "\r\n";
    $body .= "--$boundary--\r\n";

    $response = $send($headers . "\r\n" . $body . "\r\n.");

    $send("QUIT");
    fclose($sock);

    return (int) substr(trim($response), 0, 3) === 250;
}

$subject  = "New Enquiry: $serviceLabel — $name";
$anyOk = false;

foreach ($recipients as $to) {
    $ok = smtpSend($smtpHost, $smtpPort, $smtpUser, $smtpPass, $fromAddr, $fromName, $to, $email, $subject, $html, $plainText);
    if ($ok) $anyOk = true;
}

if ($anyOk) {
    http_response_code(200);
    echo json_encode(['message' => 'Email sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Email sending failed. Please try again later.']);
}
