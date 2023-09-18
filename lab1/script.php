<?php
$timeStart = microtime(true);
$messageErr = '';
$res = '';
$R = 0;
$X = 0;
$Y = 0;
//$_POST['response'] = '432234';
function checkPoint($X, $Y, $R){
    global $res;
    //попадание
    if ((abs($X) <= $R && $Y <= $R && $Y >= 0 && $X <= 0) ||
        ($X * $X + $Y * $Y <= $R * $R && $X >= 0 && $Y >= 0) ||
        (abs($Y) + abs($X) <= $R && $X >= 0 && $Y <= 0)){
        $res = 'Попал;';
    }else {
        $res = 'Не попал;';
    }

}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $test = $_POST['coordX'];

    //валидация
    if ($test != '' && is_numeric($test)){
        if ($test >= -3 && $test <= 3){
            $R = $_POST['radiusR'];
            $X = $_POST['coordX'];
            $Y = $_POST['coordY'];
            checkPoint($X, $Y, $R);
        }else {
            $messageErr = 'Не соблюден диапазон';
        }
    }else {
        $messageErr = 'Не введена координата X или это не число';
    }

}

$res .= $R . ';';
$res .= $X . ';';
$res .= $Y . ';';
$res .= date('Y-m-d H:i:s') . ';';
$res .= microtime(true) - $timeStart . ';';
$res .= $messageErr;

echo $res;
