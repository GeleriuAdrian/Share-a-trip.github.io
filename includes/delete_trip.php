<?php
$con = mysqli_connect('localhost', 'root', '', 'share a trip');

if(isset($_POST['trip_id']) && isset($_POST['trip_id_c'])){
    $trip_id = intval($_POST['trip_id']); // Get the trip_id from POST and ensure it's an integer
    $trip_id_c = $_POST['trip_id_c'];
    
    // Corrected DELETE query syntax
    $sql = "DELETE FROM user_trips WHERE trip_id = ?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, 'i', $trip_id); // 'i' indicates integer type
    mysqli_stmt_execute($stmt);

    // Corrected cookie deletion syntax
    setcookie($trip_id_c, '', time() - 3600, '/'); // Set the cookie value to an empty string and expire it

    header("Location: ../pages/profile.php");
}
mysqli_close($con);
?>