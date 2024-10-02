<?php
	$con = mysqli_connect('localhost','root','','share a trip');
	
	if(isset($_POST['email']) && isset($_POST['pwd'])){
		$email = $_POST['email'];
		$pwd = $_POST['pwd'];
		
		$sql = "SELECT * FROM user WHERE EMAIL = '$email' AND PASSWORD = '$pwd';";
		$result = mysqli_query($con, $sql);

		$row = mysqli_fetch_assoc($result);
		if($result && mysqli_num_rows($result) > 0){
			setcookie('id',$row['user_id'], time() + (86400 * 30), "/");
			setcookie('username',urlencode($row['NAME']), time() + (86400 * 30), "/");
			setcookie('email',$row['EMAIL'], time() + (86400 * 30), "/");
			setcookie('password',$row['PASSWORD'], time() + (86400 * 30), "/");
			header("Location: ../pages/trips.php");
		} else {
            echo "<div class='error'>Wrong username or password.</div>";
        }
	}
	mysqli_close($con);
?>
<!DOCTYPE html>
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
</html>