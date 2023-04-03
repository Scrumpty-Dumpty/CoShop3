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
<html lang="en-us">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CoShop | Register</title>
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
          <h1 class="text-5xl font-black">Create an Account</h1>
          <p class="text-lg">Get started for free!</p>
          <?php
            if(isset($message)){
                foreach($message as $message){
                    echo '<div class = "message">'.$message.'</div>';
                }
            }
            ?>

          <img
            id="pic-preview"
            src="./assets/img/blank-profile.jpg"
            class="mx-auto aspect-square w-36 rounded-full object-cover"
          />
          <input
            id="profile-picture"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onchange="readURL(this);"
            class="hidden"
          />
          <label
            for="profile-picture"
            class="flex items-center justify-center gap-2 text-sm"
          >
            <i
              class="fa-solid fa-camera text-lg text-gray-500 hover:text-gray-600"
            ></i>
            <span class="text-gray-500 hover:text-gray-600"
              >Upload a profile picture</span
            >
          </label>

          <input
            class="border-b border-gray-200 py-2 pl-2"
            type="text"
            name="name"
            placeholder="Full Name"
            autocomplete="name"
            required
          />

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
            required
          />

          <input
            class="mt-1 border-b border-gray-200 py-2 pl-2"
            type="password"
            name="confpassword"
            placeholder="Confirm password"
            required
          />
          <button
            type="submit"
            class="mt-2 bg-yellow-500 py-2 font-bold text-white hover:bg-yellow-600"
          >
            Register
          </button>
          <a href="" class="text-right text-sm font-bold">Privacy Policy</a>
          <p class="mt-1">
            Already a member?
            <a href="login.php" class="font-bold">Login here</a>
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
          <div class="h-5/6 w-5/6 rounded-full bg-yellow-400"></div>
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


