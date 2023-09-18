<!doctype html>
<?php
include("path.php");

?>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Первая лаба по Вебу</title>
    <link rel="stylesheet" href="assets/main.css">
    <script src="lab1/draw.js" defer crossorigin="anonymous"></script>
    <script src="lab1/script.js" defer crossorigin="anonymous"></script>
</head>


<table>


    <?php include('logic/include/FooterHeader/header.php') ?>

    <tbody id="main">

        <tr id="main-tr">

            <td id="main-td1">начало 1</td>
            <td colspan="2">

                <canvas id="canvas" height="325" width="325">

            </td>

            <td id="main-td1">начало 4</td>
            <td id="main-td1">начало 5</td>

            <td colspan="4">
                <table class="result-table">
                    <thead>
                    <td>X</td>
                    <td>Y</td>
                    <td>R</td>
                    <td>RESULT</td>
                    <td>Current time</td>
                    <td>Computation time</td>
                    </thead>
                    <tbody id="table-out">

                    </tbody>
                </table>
            </td>



            <td id="main-td1">начало 10</td>
        </tr>


        <tr class="xyz" id="main-tr">

            <td id="main-td1">начало 1</td>

            <td id="main-td1" colspan="3" rowspan="2">
                <form method="post" id="form2">

                <label> выберите R
                    <select id="radiusR" name="radiusR">
                        <option name="R1" value="1">1
                        <option name="R1" value="2">2
                        <option name="R1" value="3">3
                        <option name="R1" value="4">4
                        <option name="R1" value="5">5
                    </select>
                </label>
                <br>
                <br>
                <label>
                    <input id="coordX" name="coordX" placeholder="введите координату X">
                </label>
                    <br>
                    <br>
                    Выберите координату Y
                    <br>
                    <input type="radio" name="coordY" value="-2" checked>-2
                    <input type="radio" name="coordY" value="-1.5">-1.5
                    <input type="radio" name="coordY" value="-1">-1
                    <input type="radio" name="coordY" value="-0.5">-0.5
                    <input type="radio" name="coordY" value="0">0
                    <input type="radio" name="coordY" value="0.5">0.5
                    <input type="radio" name="coordY" value="1">1
                    <input type="radio" name="coordY" value="1.5">1.5
                    <input type="radio" name="coordY" value="2">2

                </form>
            </td>

            <td id="main-td1">начало 5</td>
            <td id="main-td1">начало 6</td>
            <td id="main-td1">начало 7</td>
            <td id="main-td1">начало 8</td>
            <td id="main-td1">начало 9</td>
            <td id="main-td1">начало 10</td>
        </tr>

        <tr class="xyz" id="main-tr">

            <td id="main-td1">начало 1</td>
            <td id="main-td1">начало 5</td>
            <td id="main-td1">начало 6</td>
            <td id="main-td1">начало 7</td>
            <td id="main-td1">начало 8</td>
            <td id="main-td1">начало 9</td>
            <td id="main-td1">начало 10</td>
        </tr>


        <tr class="xyz" id="main-tr">

            <td id="main-td1">начало 1</td>


            <td id="main-td1" colspan="3">

                <button id="button" name="button-send" type="submit" form="form2">Отправить</button>

            </td>

            <td id="main-td1">начало 5</td>
            <td id="main-td1">начало 6</td>
            <td id="main-td1">начало 7</td>
            <td id="main-td1">начало 8</td>
            <td id="main-td1">начало 9</td>
            <td id="main-td1">начало 10</td>
        </tr>



    </tbody>

    <?php include('logic/include/FooterHeader/footer.php') ?>

</table>
