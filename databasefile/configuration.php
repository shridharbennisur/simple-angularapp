<?php 
    ini_set('display_errors','on');
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $database = "todo";
    $conn = mysqli_connect($servername, $username, $password,$database);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>