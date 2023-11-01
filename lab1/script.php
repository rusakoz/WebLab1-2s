<?php
$timeStart = microtime(true);
$result = [];

function checkHit($X, $Y, $R) : bool
{
    if ((abs($X) <= $R && $Y <= $R && $Y >= 0 && $X <= 0) ||
        ($X * $X + $Y * $Y <= $R * $R && $X >= 0 && $Y >= 0) ||
        (abs($Y) + abs($X) <= $R && $X >= 0 && $Y <= 0)){
        return true;
    }
    return false;
}

function validX($validX) : bool
{
    if (is_numeric($validX)){
        if ($validX >= -2 && $validX <= 3)
            return true;
    }
    return false;
}

function validY($validY) : bool
{
    if (is_numeric($validY)) {
        if ($validY == -2 || $validY == -1.5 || $validY == -1 || $validY == -0.5 || $validY == 0
            || $validY == 0.5 || $validY == 1 || $validY == 1.5 || $validY == 2)
            return true;
    }
    return false;
}

function validR($validR) : bool
{
    if (is_numeric($validR)) {
        if ($validR >= 1 && $validR <= 5)
            return true;
    }
    return false;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST'){

    $X = $_POST['coordX'];
    $Y = $_POST['coordY'];
    $R = $_POST['radiusR'];

    if ((validX($X) && validY($Y) && validR($R))){
        header('HTTP/1.1 400 Incorrect coordinates or it isn`t number', false, 400);
    }

    $result['state'] = checkHit($X, $Y, $R);
    $result['R'] = $R;
    $result['X'] = $X;
    $result['Y'] = $Y;
    $result['date'] = date('Y-m-d H:i:s');
    $result['time'] = microtime(true) - $timeStart;

    echo json_encode($result);

}
