<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./pics/favicon-32x32.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Connexion</title>
    <style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'cinzel', serif;
    text-decoration: none;
    scroll-behavior: smooth;
    }
    body{
    background-color: #D7DCE2;
    color: #111111;
    }
    #inscription{
        justify-content: center;
        margin: 4%;
    }
    .signup-box{
        width: 460px;
        height: 520px;
        margin: auto;
        background-color: #fff;
        border: 2px solid #c8815f;
    }
    h1{
        text-align: center;
        font-size: 30px;
        text-transform: uppercase;
        padding-top: 15px;
        padding-bottom: 30px;
    }
    form{
        width: 400px;
        margin-left: 20px;
    }
    form label{
        display: flex;
        margin-top: 20px;
        font-size: 18px;
    }
    form input{
        width: 100%;
        padding: 7px;
        border: none;
        border-bottom: 2px solid #c8815f;
        outline: none;
    }
    input[type="button"]{
        width: 420px;
        height: 35px;
        margin-top: 25px;
        border: 3px solid #c8815f;
        background-color: #c8815f;
        color: #fff;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        cursor: pointer;
        overflow: hidden;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    p{
        text-align: center;
        padding-top: 50px;
        font-size: 15px;
    }
    .para-2{
        text-align: center;
        color: #999999;
        font-size: 15px;
        margin-top: -10px;
    }
    .para-2 a{
        color: #111111;
    }
    </style>
</head>
<body>
    <section id="inscription">
    <div class="signup-box">
        <h1>Sign up</h1>
        <form action="">
            <label>Name</label>
            <input type="text" placeholder="" />
            <label>Username</label>
            <input type="text" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label>Confirm password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit">
        </form>
        <p class="para-2">
            Already have an account? <a href="login.html">Login here</a>
        </p>
    </div>
    </section>
</body>
</html>