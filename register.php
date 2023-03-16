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
            <input type = "text" name = "name" placeholder= "Enter username" class = "box" required>
            <input type = "email" name = "email" placeholder= "Enter email" class = "box" required>
            <input type = "password" name = "password" placeholder= "Enter password" class = "box" required>
            <input type = "password" name = "confpassword" placeholder= "Confirm password" class = "box" required>
            <input type = "file" class= "box" accept = "image/jpg, image/jpeg, image/png">
            <input type = "submit" value = "Register" class = "btn">
            <p>Already have an account? <a href = "login,php">Login here.</a></p>

</form>
</div>
</body>
</html>

