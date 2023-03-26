<?php

include 'config.php';

if(isset($_POST['submit'])){

   $name = mysqli_real_escape_string($conn, $_POST['name']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = mysqli_real_escape_string($conn, md5($_POST['password']));
   $confpass = mysqli_real_escape_string($conn, md5($_POST['confpassword']));
   $image = $_FILES['image']['name'];
   $image_size = $_FILES['image']['size'];
   $image_tmp_name = $_FILES['image']['tmp_name'];
   $image_folder = 'uploaded_img/'.$image;

   $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE email = '$email' AND password = '$pass'") or die('Query failed!');
   
   if(mysqli_num_rows($select) > 0){
    $message[] = 'User already exists!'; 
    } else{
    if($pass != $confpass){
       $message[] = 'Passwords do not match!';
    }elseif($image_size > 2000000){
       $message[] = 'Image size is too large!';
    }else{
       $insert = mysqli_query($conn, "INSERT INTO `user_form`(name, email, password, image) VALUES('$name', '$email', '$pass', '$image')") or die('Query failed!');

       if($insert){
          move_uploaded_file($image_tmp_name, $image_folder);
          $message[] = 'Registered successfully!';
          header('location:login.php');
       }else{
          $message[] = 'Registration failed!';
       }
      }
   }
}
?>

<!DOCTYPE html>
<html lang = "en">
<head>
        <meta charset = "UTF-8">
        <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
        <meta name = "viewport" content = "width=deveice-width, intitial-scale=1.0">
        <title>Register</title>
        <!-- custom css file link -->
        <link rel = "stylesheet" href = "style.css">
</head>
<body>
    <div class = "form-container">
        <form action = "" method="post" enctype = "multipart/form-data">
            <h3>Register Now</h3>
            <?php
            if(isset($message)){
                foreach($message as $message){
                    echo '<div class = "message">'.$message.'</div>';
                }
            }
            ?>

            <input type = "name" name = "name" placeholder= "Enter username" class = "box" required>
            <input type = "email" name = "email" placeholder= "Enter email" class = "box" required>
            <input type = "password" name = "password" placeholder= "Enter password" class = "box" required>
            <input type = "password" name = "confpassword" placeholder= "Confirm password" class = "box" required>
            <input type = "file"  name = "image" class= "box" accept = "image/jpg, image/jpeg, image/png">
            <input type = "submit" name = "submit" value = "Register" class = "btn">
            <p>Already have an account? <a href = "login.php">Login here.</a></p>

</form>
</div>
</body>
</html>

