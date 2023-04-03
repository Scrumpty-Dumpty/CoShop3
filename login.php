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
    <title>CoShop | Login</title>
    <link rel="icon" href="./assets/logo.svg" type="image/svg+xml" />
    <link href="./assets/styles/output.css" rel="stylesheet" />
  </head>
  <body>
    <div class="absolute top-4 left-4">
      <div class="flex items-center">
        <img src="./assets/logo.svg" alt="logo" class="h-10" />
        <p class="text-lg">
          <span class="font-bold">Co</span><span>Shop</span>
        </p>
      </div>
    </div>
    <main class="grid min-h-screen grid-cols-2">
      <div
        class="col-span-2 flex items-center justify-center text-center lg:col-span-1"
      >
        <form
          class="grid gap-2"
          action=""
          method="post"
          enctype="multipart/form-data"
        >
          <h1 class="mb-2 text-5xl font-black">Welcome Back!</h1>
          <?php
            if (isset($message)) {
                foreach ($message as $message) {
                    echo '<div class="message">' . $message . '</div>';
                }
            }
            ?>
          <input
            class="border-b border-gray-200 py-2 pl-2"
            type="email"
            name="email"
            placeholder="Email"
            autocomplete="email"
            required
          />

          <input
            class="mt-1 border-b border-gray-200 py-2 pl-2"
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
          <button
            type="submit"
            class="mt-2 bg-blue-400 py-2 font-bold text-white hover:bg-blue-500"
          >            
          <a href="./index.html">Login</a> 
          </button>
          <div class="flex w-full items-center justify-between">
            <p><input type="checkbox" class="mr-1" /> Remember Me</p>
            <a href="" class="text-sm font-bold">Forgot Password?</a>
          </div>
          <p class="mt-1">
            Don't have an account?
            <a href="./register.php" class="font-bold">Sign up for free</a>
          </p>
        </form>
      </div>
      <div class="hidden lg:grid">
        <div
          class="flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <div class="h-5/6 w-5/6 rounded-full bg-blue-400"></div>
          <img
            src="./assets/img/app-window.png"
            alt=""
            class="absolute h-2/4 rounded-lg"
          />
        </div>
      </div>
    </main>
    <script src="./assets/scripts/scripts.js" defer></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  </body>
</html>
