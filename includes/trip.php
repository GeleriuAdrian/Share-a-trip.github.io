<?php
$con = mysqli_connect('localhost','root','','share a trip');
if(!$con){
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['trip_id'])){
    $trip_id = intval($_POST['trip_id']); // Get the trip_id from POST and ensure it's an integer
    $email = $_COOKIE['email'];
    
    $sql = "SELECT user_id FROM user WHERE EMAIL = ?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, 's', $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    
    if ($row) {
        $id = $row['user_id'];
        $sql = "INSERT INTO user_trips (user_id, trip_id) VALUES (?, ?)";
        $stmt = mysqli_prepare($con, $sql);
        mysqli_stmt_bind_param($stmt, 'ii', $id, $trip_id);
        mysqli_stmt_execute($stmt);
    }
    
    header("Location: ../pages/trips.php");
}
mysqli_close($con);
?>

