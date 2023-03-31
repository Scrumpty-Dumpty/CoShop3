<?php
include 'config.php';
session_start();

if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = mysqli_real_escape_string($conn, md5($_POST['password']));

    $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE email = '$email' AND password = '$pass'") or die('Query failed!');

    if (mysqli_num_rows($select) > 0) {
        $row = mysqli_fetch_assoc($select);
        $_SESSION['user_id'] = $row['id'];
        header('location:index.html');
    } else {
        $message[] = 'Incorrect email or password!';
    }
}
?>

<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Login</title>
    <link rel="icon" href="./assets/logo.svg" type="image/svg+xml" />
    <link href="./assets/styles/output.css" rel="stylesheet" />
    <!-- remember that I removed amna's styling file path -->
  </head>

  <body>
  <main>
    <div class="form-container">
        <form action="" method="post" enctype="multipart/form-data">
            <h3>Login Here</h3>

            <?php
            if (isset($message)) {
                foreach ($message as $message) {
                    echo '<div class="message">' . $message . '</div>';
                }
            }
            ?>
            <input type="email" name="email" placeholder="Enter your email" class="box" required>
            <input type="password" name="password" placeholder="Enter your password" class="box"
                required>
            <input type="submit" name="submit" value="Login now" class="btn">
            <p>Don't have an account? <a href="./register.php">Register here</a></p>
        </form>
      </div>
    </main>
  </body>
</html>