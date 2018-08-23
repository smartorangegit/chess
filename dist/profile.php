<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Profile</title>
</head>
    <body>
        <?php include_once('includes/header.php');?>
        <?php include_once('includes/svg-sprite.php');?>

        <div class="location">
            <div class="container">
                <ul class="location-list">
                    <li class="location-list__item profile-location-list__item">
                        <a href="home.php" class="location-list__link location-list__link_last">
                            <svg class="home-icon profile__home-icon"><use xlink:href="#home"></use></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <section class="profile-form-wrap">
            <h1 class="prifile__heading">ЛИЧНЫЙ КАБИНЕТ</h1>
            <div class="profile-form-container">
                <form class="form flat-form profile-form">
                    <div class="profile-form-block">
                        <div class="profile-form-top">
                            <div class="profile-form-top__block">
                                <p class="profile-form-top__email">sobko.alex@gmail.com</p>
                                <button class="button header__button profile-form-top__button">Выход</button>
                            </div>
                        </div>
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
                            <input type="text" id="phone" class="form__input form__phone" placeholder="+38 (0_ _) _ _ _  _ _  _ _">
                        </div>
                    </div>
                    <div class="profile-form-block">
                        <div class="profile-form-top">
                            <div class="profile-form-top__block">
                                <p class="profile-form-top__heading">Смена пароля</p>
                            </div>
                        </div>
                        <div class="form__input-wrap">
                            <label for="password" class="form__label">Старый пароль:</label>
                            <input type="password" id="password" class="form__input">
                        </div>
                        <div class="form__input-wrap">
                            <label for="password_new" class="form__label">Новый пароль:</label>
                            <input type="password" id="password_new" class="form__input">
                        </div>
                        <div class="form__input-wrap">
                            <label for="password_repeat_new" class="form__label">Повторить новый пароль:</label>
                            <input type="password" id="password_repeat_new" class="form__input">
                        </div>
                    </div>
                </form>
                <button class="profile-form__button">
                    Сохранить
                </button>
            </div>
            <h1 class="prifile__heading">КВАРТИРЫ ДЛЯ БРОНИ</h1>
        </section>

        <section class="profile-flat">
            <div class="container">
                <!-- <div class="profile-flat-container"> -->
                    <ul class="profile-flat-heading">
                        <li class="profile-flat-heading__item text-element-js">
                            <span class="profile-flat-heading__text profile-flat-heading__quarter">Квартал RYBALSKY</span>
                            <span class="profile-flat-heading__text profile-flat-heading__num">Квартира № 89</span>
                        </li>
                        <li class="profile-flat-heading__item text-element-js">
                            <span class="profile-flat-heading__text profile-flat-heading__quarter">Квартал RYBALSKY</span>
                            <span class="profile-flat-heading__text profile-flat-heading__num">Квартира № 90</span>
                        </li>
                    </ul>
                <!-- </div> -->
                <div class="profile-flat-container">
                    <div class="profile-flat-slider-wrap">
                        <ul class="profile-flat-slider">
                            <li class="profile-flat-slider__item">
                                <img src="img/residence/res_1.jpg" alt="image" class="profile-flat-slider__image">
                            </li>
                            <li class="profile-flat-slider__item">
                                <img src="img/residence/res_1.jpg" alt="image" class="profile-flat-slider__image">
                            </li>
                        </ul>
                        <button class="profile-flat-slider__button profile-flat-slider__button-prev">
                            <svg class="profile-flat-slider__button-icon profile-flat-slider__button-icon_1"><use xlink:href="#left-arrow"></use></svg>
                            <svg class="profile-flat-slider__button-icon profile-flat-slider__button-icon_2"><use xlink:href="#left-arrow"></use></svg>
                        </button>
                        <button class="profile-flat-slider__button profile-flat-slider__button-next">
                            <svg class="profile-flat-slider__button-icon profile-flat-slider__button-icon_revers_1"><use xlink:href="#left-arrow"></use></svg>
                            <svg class="profile-flat-slider__button-icon profile-flat-slider__button-icon_revers_2"><use xlink:href="#left-arrow"></use></svg>
                        </button>
                    </div>
                    <ul class="profile-flat-info">
                        <li class="profile-flat-info__item text-element-js">
                            <img src="img/flat/2s_2f_1_4.png" alt="flat" class="profile-flat-info__image">
                            <ul class="profile-flat-info-descript">
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_1"></use></svg>
                                    <p class="profile-flat-info-descript__text profile-flat-info-descript__text_first">
                                        <span class="profile-flat-info-descript_name">Этаж</span>
                                        <span class="profile-flat-info-descript_value">3</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_2"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Комнат</span>
                                        <span class="profile-flat-info-descript_value">1</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_3"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Площадь, м<sup>2</sup></span>
                                        <span class="profile-flat-info-descript_value">50,89</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#price"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Общая стоимость, грн</span>
                                        <span class="profile-flat-info-descript_value">1 277 872</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_4"></use></svg>
                                    <p class="profile-flat-info-descript__text profile-flat-info-descript__text_last">
                                        <span class="profile-flat-info-descript_name">Тип</span>
                                        <span class="profile-flat-info-descript_value">2B</span>
                                    </p>
                                </li>
                            </ul>
                            <p class="profile-flat__text">
                                Вы сможете забронировать квартиру, нажав на кнопку “Оплатить бронь” как только менеджер проверит статус квартиры. Если она свободна, кнопка оплаты станет активной.
                            </p>
                            <button class="profile-flat-pay__button">
                                Оплатить бронь
                            </button>
                        </li>
                        <li class="profile-flat-info__item text-element-js">
                            <img src="img/flat/2s_2f_1_4.png" alt="flat" class="profile-flat-info__image">
                            <ul class="profile-flat-info-descript">
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_1"></use></svg>
                                    <p class="profile-flat-info-descript__text profile-flat-info-descript__text_first">
                                        <span class="profile-flat-info-descript_name">Этаж</span>
                                        <span class="profile-flat-info-descript_value">2</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_2"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Комнат</span>
                                        <span class="profile-flat-info-descript_value">3</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_3"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Площадь, м<sup>2</sup></span>
                                        <span class="profile-flat-info-descript_value">70,5</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#price"></use></svg>
                                    <p class="profile-flat-info-descript__text">
                                        <span class="profile-flat-info-descript_name">Общая стоимость, грн</span>
                                        <span class="profile-flat-info-descript_value">2 277 872</span>
                                    </p>
                                </li>
                                <li class="profile-flat-info-descript__item">
                                    <svg class="profile-flat-info-descript__icon"><use xlink:href="#flat-icon_4"></use></svg>
                                    <p class="profile-flat-info-descript__text profile-flat-info-descript__text_last">
                                        <span class="profile-flat-info-descript_name">Тип</span>
                                        <span class="profile-flat-info-descript_value">2B</span>
                                    </p>
                                </li>
                            </ul>
                            <p class="profile-flat__text">
                                Вы сможете забронировать квартиру, нажав на кнопку “Оплатить бронь” как только менеджер проверит статус квартиры. Если она свободна, кнопка оплаты станет активной.
                            </p>
                            <button class="profile-flat-pay__button">
                                Оплатить бронь
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>        

        <?php include_once('includes/footer.php'); ?> 

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/common.min.js"></script>
        <script src="js/profile.min.js"></script>
    </body>
</html>