<?php
$con = mysqli_connect('localhost', 'root', '', 'share a trip');

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel']) && isset($_POST['msg'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $msg = $_POST['msg'];

    // Prepare the SQL statement
    $stmt = $con->prepare("INSERT INTO contact (NAME, EMAIL, TEL, MSG) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $tel, $msg);

    // Execute the prepared statement
    $stmt->execute();
    
    // Redirect to the contact page
    header("Location: ../pages/contact.php");
    exit();
}

mysqli_close($con);
?>