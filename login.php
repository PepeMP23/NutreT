<?php
session_start(); // start a new session

if (isset($_POST['submit'])) { // check if the form has been submitted

    // connect to the database
    $host = "localhost";
    $user = "username";
    $password = "password";
    $db_name = "database_name";
    $conn = new mysqli($host, $user, $password, $db_name);
    
    // get the username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // perform a query to check if the username and password match with the database
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
    
    if (mysqli_num_rows($result) == 1) { // if the query returns 1 row, the username and password match
        $_SESSION['username'] = $username; // store the username in the session
        header("Location: dashboard.php"); // redirect to the dashboard page
        exit();
    } else { // if the query does not return 1 row, the username and password do not match
        $error = "Invalid login credentials. Please try again.";
    }
}
?>
