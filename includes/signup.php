<?php
// $con = mysqli_connect('localhost', 'root', '', 'share a trip');

// if (isset($_POST['email']) && isset($_POST['pwd']) && isset($_POST['name'])) {
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $pwd = $_POST['pwd'];
    
//     // Check if the email already exists
//     $checkEmailQuery = "SELECT * FROM user WHERE EMAIL = '$email'";
//     $emailResult = mysqli_query($con, $checkEmailQuery);
    
//     if (mysqli_num_rows($emailResult) > 0) {
//         // Email already exists, handle the error
//         echo "<div class='error'>Email already exists. Please use a different email address.</div>";
//     } else {
//         // Email does not exist, proceed with the insertion
//         $insertQuery = "INSERT INTO user (NAME, EMAIL, PASSWORD) VALUES ('$name', '$email', '$pwd')";
//         mysqli_query($con, $insertQuery);

//         // Fetch the newly created user's ID
//         $getUserQuery = "SELECT * FROM user WHERE EMAIL = '$email'";
//         $userResult = mysqli_query($con, $getUserQuery);
//         $row = mysqli_fetch_assoc($userResult);

//         // Set cookies
//         setcookie('id', $row['user_id'], time() + (86400 * 30), "/"); // 86400 = 1 day
//         setcookie('email', $email, time() + (86400 * 30), "/");
//         setcookie('password', $pwd, time() + (86400 * 30), "/");
//         setcookie('username', urlencode($row['NAME']), time() + (86400 * 30), "/");

//         // Redirect to the trips page
//         header("Location: ../pages/trips.html");
//         exit();
//     }
// }

// mysqli_close($con);
?>
<!-- <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style.css">
        <title>Document</title>
    </head>
    <body>
        <div class="error-container"></div>
    </body>
</html> -->