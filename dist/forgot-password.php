<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>apparmens-plan</title>
</head>
    <body>
        <?php include_once('includes/header.php');?>
        <?php include_once('includes/svg-sprite.php');?>

        <h1 class="log__heading">СМЕНА ПАРОЛЯ</h1>
        <div class="log__descript">
            <p class="log__descript-text">Введите Ваши данные ниже:</p>
        </div>

        <div class="wrapper_centering">
            <div class="form-wrap">
                <form class="form">
                    <div class="form__input-wrap">
                        <label for="mail" class="form__label">Email:</label>
                        <input type="email" id="mail" class="form__input" placeholder="E-mail">
                    </div>
                    <button type="submit" class="form__button form__button_sign-in">
                        ПОЛУЧИТЬ НОВЫЙ ПАРОЛЬ
                    </button>
                </form>
            </div>
        </div>
        
        <?php include_once('includes/footer.php'); ?> 

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/common.min.js"></script>
        <script src="js/filter.min.js"></script>
    </body>
</html>