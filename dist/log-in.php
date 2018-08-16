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

        <h1 class="log__heading">РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ</h1>
        <div class="log__descript">
            <p class="log__descript-text">Введите Ваши данные ниже:</p>
            <p class="log__descript-text log__descript-text_light">Все поля обязательны для заполнения</p>
        </div>

        <div class="wrapper_centering">
            <div class="form-wrap">
                <form class="form">
                    <div class="form__input-wrap">
                        <label for="name" class="form__label">ФИО:</label>
                        <input type="text" id="name" class="form__input" placeholder="Фамилия Имя Отчество">
                    </div>
                    <div class="form__input-wrap">
                        <label for="mail" class="form__label">Email:</label>
                        <input type="email" id="mail" class="form__input" placeholder="E-mail">
                    </div>
                    <div class="form__input-wrap">
                        <label for="phone" class="form__label">Телефон:</label>
                        <input type="text" id="phone" class="form__input form__phone" placeholder="+38 (0__) ___-__-__">
                    </div>
                    <div class="form__input-wrap">
                        <label for="password" class="form__label">Пароль:</label>
                        <input type="password" id="password" class="form__input">
                    </div>
                    <div class="form__input-wrap">
                        <label for="password_repeat" class="form__label">Повторить пароль:</label>
                        <input type="password" id="password_repeat" class="form__input">
                    </div>
                    <button type="submit" class="form__button">
                        ЗАРЕГИСТРИРОВАТЬСЯ
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