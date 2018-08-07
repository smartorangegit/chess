<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Flat-free</title>
</head>
    <body>
        <?php include_once('includes/header.php');?>
        <?php include_once('includes/svg-sprite.php');?>

        <div class="location">
            <div class="container">
                <ul class="location-list">
                    <li class="location-list__item">
                        <a href="home.php" class="location-list__link">
                            <svg class="home-icon"><use xlink:href="#home"></use></svg>
                        </a>
                    </li>
                    <li class="location-list__item">
                        <a href="#" class="location-list__link">Квартал RYBALSKY</a>
                    </li>
                    <li class="location-list__item">
                        <a href="#" class="location-list__link">RYBALSKY - ДОМ 3</a>
                    </li>
                    <li class="location-list__item location-list__item_active">
                        <a href="#" class="location-list__link location-list__link_last">Квартира № 89</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container">
            <section class="flat">
                <div class="flat-container">
                    <h1 class="flat__heading">КВАРТИРА № 89 (2К)</h1>
                    <div class="flat-top">
                        <div class="flat-top-list-wrap">
                            <ul class="flat-top-list flat-top-list__free">
                                <li class="flat-top-list__item">
                                    <p class="flat-top-list__name">Подъезд</p>
                                    <p class="flat-top-list__value">1</p>
                                </li>
                                <li class="flat-top-list__item">
                                    <p class="flat-top-list__name">Этаж</p>
                                    <p class="flat-top-list__value">9</p>
                                </li>
                                <li class="flat-top-list__item">
                                    <p class="flat-top-list__name">№</p>
                                    <p class="flat-top-list__value">56</p>
                                </li>
                                <li class="flat-top-list__item">
                                    <p class="flat-top-list__name">Комнат</p>
                                    <p class="flat-top-list__value flat-top-list__value_no_margin">2K</p>
                                </li>
                            </ul>
                            <a href="#" class="button booking-button">
                                 <svg class="booking-button__icon"><use xlink:href="#home-security"></use></svg>
                                Забронировать
                            </a>
                        </div>
                        <img src="img/flat/2s_2f_1_4.png" alt="flat" class="flat-top__image">
                    </div>
                    <ul class="flat-info">
                        <li class="flat-info-list__item">
                            <p class="flat-info__name">Цена за м<sup>2</sup>, грн.</p>
                            <p class="flat-info__value">18 888 </p>
                        </li>
                        <li class="flat-info-list__item">
                            <p class="flat-info__name">Цена, грн.</p>
                            <p class="flat-info__value">2 550 000</p>
                        </li>
                        <li class="flat-info-list__item">
                            <p class="flat-info__name">Сдача дома</p>
                            <p class="flat-info__value">IV квартал 2018</p>
                        </li>
                        <li class="flat-info-list__item">
                            <p class="flat-info__name">Статус</p>
                            <div class="flat-info__value-wrap">
                                <div class="color-box color-box_green flat-info__color-box"></div>
                                <p class="flat-info__value">Свободная</p>
                            </div>
                        </li>
                    </ul>
                    <ul class="flat-meter-list">
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Общая площадь, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">62</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Балкон, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">7</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Спальня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">6.25</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Кухня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">23.08</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Кухня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">23</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Общая площадь, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">62</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Балкон, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">7</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Спальня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">6.25</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Кухня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">23</p>
                        </li>
                        <li class="flat-meter-list__item">
                            <p class="flat-meter-list__name">Кухня, м<sup>2</sup></p>
                            <p class="flat-meter-list__value">23</p>
                        </li>
                    </ul>
                    
                    <ul class="flat-buttons">
                        <li class="flat-buttons__item">
                            <svg class="flat-buttons__icon"><use xlink:href="#back-button"></use></svg>
                            <a href="#" class="button flat-buttons__button">К описанию комплекса</a>
                        </li>
                        <li class="flat-buttons__item">
                            <svg class="flat-buttons__icon"><use xlink:href="#back-button"></use></svg>
                            <a href="#" class="button flat-buttons__button">К выбору квартиры</a>
                        </li>
                        <li class="flat-buttons__item">
                            <svg class="flat-buttons__icon"><use xlink:href="#star"></use></svg>
                            <a href="#" class="button flat-buttons__button">Добавить в избранное</a>
                        </li>
                    </ul>
                    <a href="#" class="button booking-button booking-button_big booking-button_margin_top booking-button_margin_bottom">
                         <svg class="booking-button__icon booking-button__icon_big"><use xlink:href="#home-security"></use></svg>
                        Забронировать
                    </a>

                    <div class="flat-form-wrap">
                        <a href="#" class="flat-form__link">Войдите в свой аккаунт</a>
                        <p class="flat-form__text">или заполните форму ниже:</p>
                        <p class="flat-form__text flat-form__text_light">все поля обязательны для заполнения</p>
                        <form class="form flat-form">
                            <div class="form__input-wrap flat-form__input-wrap">
                                <label for="name" class="form__label">ФИО:</label>
                                <input type="text" id="name" class="form__input" placeholder="Фамилия Имя Отчество">
                            </div>
                            <div class="form__input-wrap flat-form__input-wrap">
                                <label for="password" class="form__label">Пароль:</label>
                                <input type="password" id="password" class="form__input">
                            </div>
                            <div class="form__input-wrap flat-form__input-wrap">
                                <label for="mail" class="form__label">Email:</label>
                                <input type="email" id="mail" class="form__input" placeholder="E-mail">
                            </div>
                            <div class="form__input-wrap flat-form__input-wrap">
                                <label for="password_repeat" class="form__label">Повторить пароль:</label>
                                <input type="password" id="password_repeat" class="form__input">
                            </div>
                            <div class="form__input-wrap flat-form__input-wrap">
                                <label for="phone" class="form__label">Телефон:</label>
                                <input type="text" id="phone" class="form__input form__phone" placeholder="+38 (0_ _) _ _ _  _ _  _ _">
                            </div>
                            <div class="flat-form__button-wrap">
                                <span class="flat-form__warning">Заполните пустые поля.</span>
                                <button type="submit" class="form__button flat-form__button">
                                    Забронировать
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

        <?php include_once('includes/footer.php'); ?> 

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/common.min.js"></script>
    </body>
</html>