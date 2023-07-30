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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $loginUsername = $_REQUEST['loginUsername'];
    $loginPassword = $_REQUEST['loginPassword'];

    // Perform login form validation
    if (!empty($loginUsername) && !empty($loginPassword)) {
        $sql = "SELECT * FROM users WHERE username = '$loginUsername' LIMIT 1";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();
            if (password_verify($loginPassword, $user['passwords'])) {
                echo "Login successful\n";
                // Redirect the user to their dashboard or a success page after successful login
                header("Location: buyerDashboard.html");
                exit;
            }
        
     else{ 
        if($_SERVER['HTTP_REFERER']== "login.html"){
            
            header("Location: ./login.html");
        }
        else{
            
            header("Location: ./index.html");
        }
        exit;
    }
}
}   else {
    if($_SERVER['HTTP_REFERER']== "login.html"){
        header("Location: ./login.html");
    }
    else{
        header("Location: ./index.html");
    }
        exit;
    }
}


$conn->close();
?>
