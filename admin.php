<?php
    $servername = "localhost";
    $username = "tecno";
    $password = "administration";
    $conn = new mysqli($servername, $username, $password);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    echo "Connected successfully";
?>