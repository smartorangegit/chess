<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Home</title>
</head>
<body>
    <?php include_once('includes/header.php');?>
    <?php include_once('includes/svg-sprite.php');?>

    <section class="home-top">
    	<div class="home-slider-wrap">
    		<ul class="home-slider">
    			<li class="home-slider__item">
                    <a href="#" class="home-slider__link">
        				<img src="img/home/slider/img_1.jpg" alt="image" class="home-slider__image">
                        <div class="home-slider__mask"></div>
                    </a>
    			</li>
    			<li class="home-slider__item">
                    <a href="#" class="home-slider__link">
        				<img src="img/home/slider/img_2.jpg" alt="image" class="home-slider__image">
                        <div class="home-slider__mask"></div>
                    </a>
    			</li>
    			<li class="home-slider__item">
                    <a href="#" class="home-slider__link">
        				<img src="img/home/slider/img_3.jpg" alt="image" class="home-slider__image">
                        <div class="home-slider__mask"></div>
                    </a>
    			</li>
    			<li class="home-slider__item">
                    <a href="#" class="home-slider__link">
        				<img src="img/home/slider/img_4.jpg" alt="image" class="home-slider__image">
                        <div class="home-slider__mask"></div>
                    </a>
    			</li>
    			<li class="home-slider__item">
                    <a href="#" class="home-slider__link">
        				<img src="img/home/slider/img_5.jpg" alt="image" class="home-slider__image">
                        <div class="home-slider__mask"></div>
                    </a>
    			</li>
    		</ul>
            <button class="slider__button slider__button-prev home-slider__button-prev">
                <svg class="slider__button-icon"><use xlink:href="#left-arrow"></use></svg>
            </button>
            <button class="slider__button slider__button-next home-slider__button-next">
                <svg class="slider__button-icon slider__button-icon_revers"><use xlink:href="#left-arrow"></use></svg>
            </button>
            <ul class="slide-info-list">
                <li class="slide-info-list__item text-element-js">
                    <p class="slide-info-list__heading">ЖК 041.HOUSE</p>
                    <a href="#" class="slide-info-list__button">узнать больше</a>
                </li>
                <li class="slide-info-list__item text-element-js">
                    <p class="slide-info-list__heading">ЖК 042.HOUSE</p>
                    <a href="#" class="slide-info-list__button">узнать больше</a>
                </li>
                <li class="slide-info-list__item text-element-js">
                    <p class="slide-info-list__heading">ЖК 043.HOUSE</p>
                    <a href="#" class="slide-info-list__button">узнать больше</a>
                </li>
                <li class="slide-info-list__item text-element-js">
                    <p class="slide-info-list__heading">ЖК 044.HOUSE</p>
                    <a href="#" class="slide-info-list__button">узнать больше</a>
                </li>
                <li class="slide-info-list__item text-element-js">
                    <p class="slide-info-list__heading">ЖК 045.HOUSE</p>
                    <a href="#" class="slide-info-list__button">узнать больше</a>
                </li>
            </ul>
            <div class="home-top-info-wrap">
                <div class="home-top-info">
                    <p class="home-top-info__heading"><span class="home-top-info__heading_blue">VIME</span> – вільний метр</p>
                    <p class="home-top-info__text">Все <span class="home-top-info__text_medium">свободные квартиры</span> на одном ресурсе. <br> Моментальная <span class="home-top-info__text_medium">он-лайн бронь.</span></p>
                    <a href="#" class="button home-top-info__button">Подобрать на карте</a>
                </div>
            </div>
    	</div>

        <div class="home-top__container">
            <div class="home-filter">
                <div class="container">
                    <div class="home-filter__top">
                        <div class="home-filter__select-wrap">
                            <select id="id_select" class="home-filter__select">
                                <option value="">Город</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <!-- <svg class="home-filter__arrow"><use xlink:href="#left-arrow"></use></svg> -->
                        </div>
                        <div class="home-filter__select-wrap">
                            <select id="id_select" class="home-filter__select">
                                <option value="">Район</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                        <div class="home-filter__select-wrap">
                            <select id="id_select" class="home-filter__select">
                                <option value="">Состояние строительства</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                        <div class="home-filter__select-wrap">
                            <select id="id_select" class="home-filter__select">
                                <option value="">Застройщик</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                        <div class="home-filter-checkbox-wrap">
                            <span class="filter-checkbox__text">Количество комнат:</span>
                            <ul class="filter-checkbox-list">
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">1</span> 
                                    <input id="checkbox_1" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_1" class="filter-checkbox-list__label"></label>
                                </li>
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">2</span> 
                                    <input id="checkbox_2" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_2" class="filter-checkbox-list__label"></label>
                                </li>
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">3</span> 
                                    <input id="checkbox_3" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_3" class="filter-checkbox-list__label"></label>
                                </li>
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">4</span> 
                                    <input id="checkbox_4" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_4" class="filter-checkbox-list__label"></label>
                                </li>
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">5+</span> 
                                    <input id="checkbox_5" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_5" class="filter-checkbox-list__label"></label>
                                </li>
                                <li class="filter-checkbox-list__item">
                                    <span class="filter-checkbox__text">Св</span> 
                                    <input id="checkbox_6" type="checkbox" class="filter-checkbox">
                                    <label for="checkbox_6" class="filter-checkbox-list__label"></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="home-filter__bottom">
                        <div class="range__item js-filter__slider_ta">
                          <span class="filter_name">Цена за м<sup>2</sup>, от</span >
                          <!-- <div class="filter__texts">
                                <input class="filter__text js-filter__text_min" type="number"/>
                                <input class="filter__text js-filter__text_max" type="number"/>
                            </div> -->
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input type="range" min="5" max="100" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range filter__range_ta js-filter__range" id="square" type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item js-filter__slider_ta">
                          <span class="filter_name">К-во кв. м:</span >
                          <!-- <div class="filter__texts">
                                <input class="filter__text js-filter__text_min" type="number"/>
                                <input class="filter__text js-filter__text_max" type="number"/>
                            </div> -->
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input type="range" min="5" max="100" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range filter__range_ta js-filter__range" id="square" type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item js-filter__slider_ta">
                          <span class="filter_name">Общая стоимость</span >
                          <!-- <div class="filter__texts">
                                <input class="filter__text js-filter__text_min" type="number"/>
                                <input class="filter__text js-filter__text_max" type="number"/>
                            </div> -->
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input type="range" min="5" max="100" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range filter__range_ta js-filter__range" id="square" type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                    </div>
                    <div class="home-filter__button-wrap">
                        <button class="button home-filter__button home-filter__button_select-js">Выбрать</button>
                        <button class="button home-filter__button home-filter__button_clear-js">Сбросить</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home-residence">
        <div class="container">
            <ul class="residence-list">
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_1.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_2.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_3.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_1.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_2.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
                <li class="residence-list__item">
                    <a href="rybalsky.com.ua">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_3.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 12 000 грн. м<sup>2</sup></span>
                        </div>
                        <ul class="residence-list-info">
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#placeholder"></use></svg>
                                <p class="residence-list-info__text">м. Дружбы Народов <span class="residence-list-info__text_medium">ул. Рыбальская, 21</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon"><use xlink:href="#price"></use></svg>
                                <p class="residence-list-info__text">Минимальная стоимость квартиры – <span class="residence-list-info__text_medium">от 750 000 грн.</span></p>
                            </li>
                            <li class="residence-list-info__item">
                                <svg class="residence-list-info__icon residence-list-info__icon_rotate"><use xlink:href="#print"></use></svg>
                                <p class="residence-list-info__text">Помещений – <span class="residence-list-info__text_medium">1247</span></p>
                            </li>
                            <li class="residence-list-info__logo-wrap">
                                <img src="img/residence-logo/saga-logo.png" alt="logo" class="residence-list-info__logo">
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>

        <div class="pagination">
            <div class="container">
                <div class="pagination-content">
                    <div class="pagination-prev">
                        <a href="#" class="pagination__link">
                            <span class="pagination-prev__button pagination__button">
                                <svg class="pagination__icon"><use xlink:href="#left-arrow"></use></svg>
                            </span>
                            <span class="pagination__text">предыдущие <span class="pagination__text_medium">12</span></span>
                        </a>
                    </div>
                    <ul class="pagination-num-list">
                        <li class="pagination-num-list__item">
                            <a href="#" class="pagination-num-list__link pagination__button">1</a>
                        </li>
                        <li class="pagination-num-list__item">
                            <a href="#" class="pagination-num-list__link pagination__button">2</a>
                        </li>
                        <li class="pagination-num-list__item">
                            <a href="#" class="pagination-num-list__link pagination__button">3</a>
                        </li>
                    </ul>
                    <div class="pagination-next">
                        <a href="#" class="pagination__link">
                            <span class="pagination__text">следующие <span class="pagination__text_medium">12</span></span>
                            <span class="pagination__button pagination-next__button">
                                <svg class="pagination__icon pagination__icon_revers"><use xlink:href="#left-arrow"></use></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <?php include_once('includes/footer.php'); ?> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/common.min.js"></script>
<script src="js/home.min.js"></script>
</body>
</html>