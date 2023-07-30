<?php
$host = "localhost";
$user = "rpeebles1";
$pass = "rpeebles1";
$dbname = "rpeebles1";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    echo "Could not connect to server\n";
    die("Connection failed: " . $conn->connect_error);
}



$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    passwords VARCHAR(255) NOT NULL
)";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_REQUEST["firstName"];
    $lastName = $_REQUEST["lastName"];
    $email = $_REQUEST["email"];
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Encrypt the password using password_hash function
if(!$firstName || !$lastName || !$email || !$username || !$password ){
    header("Location: ./index.html");
    exit;
}else{
    $sqlStr = "INSERT INTO users (first_name, last_name, email, username, passwords)
            VALUES (?, ?, ?, ?, ?)";
    $stmt=$conn->prepare($sqlStr);
    $stmt->bind_param("sssss", $firstName, $lastName, $email, $username, $hashedPassword);
    if ($stmt->execute()) {

        echo "User registration successful\n";
        // Redirect the user to the login page after successful registration
        header("Location: ./login.html");
        exit;
    } else {
       
        echo "Error registering user: " . $conn->error . "\n";
    }
}
}

$conn->close();
?>