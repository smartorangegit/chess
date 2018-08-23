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
            <div class="container home-slider-container">
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
                        <a href="#" class="button home-top-info__button border-gradient">Подобрать на карте</a>
                    </div>
                </div>
            </div>
    	</div>

        <div class="home-top__container">
            <div class="home-filter">
                <div class="container">
                    <form action="" class="filter__form">
                        <div class="home-filter__top">
                            <div class="home-filter__select-wrap">
                                <select id="project_city" class="home-filter__select" onchange="citySelect()">
                                    <option class="city" value="">Город</option>
                                    <option class="city" value="kiev">Киев</option>
                                    <option class="city" value="lviv">Львов</option>
                                    <option class="city" value="dnipro">Днепр</option>
                                </select>
                                <!-- <svg class="home-filter__arrow"><use xlink:href="#left-arrow"></use></svg> -->
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="project_region" class="home-filter__select" onchange="districtSelect()">
                                    <option class="district" value="">Район</option>
                                    <option class="district" value="podil">1</option>
                                    <option class="district" value="sheva">2</option>
                                    <option class="district" value="soloma">3</option>
                                </select>
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="state" class="home-filter__select" onchange="stateSelect()">
                                    <option class="state" value="">Состояние строительства</option>
                                    <option class="state" value="first">1</option>
                                    <option class="state" value="second">2</option>
                                    <option class="state" value="third">3</option>
                                </select>
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="development_id" class="home-filter__select" onchange="developerSelect()">
                                    <option class="developer" value="">Застройщик</option>
                                    <option class="developer" value="first">1</option>
                                    <option class="developer" value="second">2</option>
                                    <option class="developer" value="third">3</option>
                                </select>
                            </div>
                            <div class="home-filter-checkbox-wrap">
                                <span class="filter-checkbox__text">Количество комнат:</span>
                                <ul class="filter-checkbox-list">
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">1</span> 
                                        <input id="checkbox_1" type="checkbox" class="filter-checkbox" value="1">
                                        <label for="checkbox_1" class="filter-checkbox-list__label"></label>
                                    </li>
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">2</span> 
                                        <input id="checkbox_2" type="checkbox" class="filter-checkbox" value="2">
                                        <label for="checkbox_2" class="filter-checkbox-list__label"></label>
                                    </li>
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">3</span> 
                                        <input id="checkbox_3" type="checkbox" class="filter-checkbox" value="3">
                                        <label for="checkbox_3" class="filter-checkbox-list__label"></label>
                                    </li>
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">4</span> 
                                        <input id="checkbox_4" type="checkbox" class="filter-checkbox" value="4">
                                        <label for="checkbox_4" class="filter-checkbox-list__label"></label>
                                    </li>
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">5+</span> 
                                        <input id="checkbox_5" type="checkbox" class="filter-checkbox" value="5">
                                        <label for="checkbox_5" class="filter-checkbox-list__label"></label>
                                    </li>
                                    <li class="filter-checkbox-list__item">
                                        <span class="filter-checkbox__text">Св</span> 
                                        <input id="checkbox_6" type="checkbox" class="filter-checkbox" value="0">
                                        <label for="checkbox_6" class="filter-checkbox-list__label"></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="home-filter__bottom">
                            <div class="range__item">
                              <span class="filter_name">Цена за м<sup>2</sup>, от</span >
                                <div class="filter__ranges">
                                    <?php /*Place PHP values here*/?>
                                        <input name="project_price" type="range" min="5" max="100" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                    <?php /*Place PHP values here*/?>
                                    <input class="filter__range js-filter__range" type="text">
                                    <span class="range__text range__text_min js-filter__text_min">0</span>
                                    <span class="range__text range__text_max js-filter__text_max">100</span>
                                </div>
                            </div>
                            <div class="range__item">
                              <span class="filter_name">К-во кв. м:</span >
                                <div class="filter__ranges">
                                    <?php /*Place PHP values here*/?>
                                        <input name="all_room" type="range" min="0" max="20000" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                    <?php /*Place PHP values here*/?>
                                    <input class="filter__range filter__range_ta js-filter__range" type="text">
                                    <span class="range__text range__text_min js-filter__text_min">0</span>
                                    <span class="range__text range__text_max js-filter__text_max">100</span>
                                </div>
                            </div>
                            <div class="range__item">
                              <span class="filter_name">Общая стоимость</span >
                                <div class="filter__ranges">
                                    <?php /*Place PHP values here*/?>
                                        <input name="price" type="range" min="0" max="1000000" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                    <?php /*Place PHP values here*/?>
                                    <input class="filter__range filter__range_ta js-filter__range" type="text">
                                    <span class="range__text range__text_min js-filter__text_min">0</span>
                                    <span class="range__text range__text_max js-filter__text_max">100</span>
                                </div>
                            </div>
                        </div>
                        <div class="home-filter__button-wrap">
                            <button type="submit" class="button home-filter__button border-gradient filter__button-js">Выбрать</button>
                            <button class="button home-filter__button  border-gradient filter__button_clear-js">Сбросить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="home-residence">
        <div class="container">
            <ul class="residence-list">
                <li class="residence-list__item">
                    <a href="residence.php">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_1.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 10 000 грн. м<sup>2</sup></span>
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
                    <a href="residence.php">
                        <h4 class="residence-list__heading">Квартал <br> RYBALSKY</h4>
                        <p class="residence-list__link">rybalsky.com.ua</p>
                        <div class="residence-list__image-wrap">
                            <img src="img/residence/res_1.jpg" alt="image" class="residence-list__image">
                            <span class="residence-list__price">от 11 000 грн. м<sup>2</sup></span>
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
                    <a href="residence.php">
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
            </ul>
        </div>

        <div class="pagination home-pagination">
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
                        <!-- <li class="pagination-num-list__item">
                            <a href="#" class="pagination-num-list__link pagination__button">1</a>
                        </li>
                        <li class="pagination-num-list__item">
                            <a href="#" class="pagination-num-list__link pagination__button">1</a>
                        </li> -->
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

   <!--  <div class="home-popup-wrap">
        <div class="container">
            <div class="home-popup">
                <div class="home-popup__heading-wrap">
                    <h1 class="home-popup__heading"><span class="home-popup__heading_medium">vi.me.</span> – вільний метр. Как это работает?</h1>
                    <svg class="home-popup__heading-icon"><use xlink:href="#cancel"></use></svg>
                </div>
                <div class="home-popup-content">
                    <div class="home-popup__video-wrap video_wrapper video_wrapper_full js-videoWrapper">
                        <iframe src="https://www.youtube.com/embed/C4bU0Pj4Rs4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="home-popup__video"></iframe>
                    </div>
                    <div class="home-popup__text-wrap">
                        <p class="home-popup__text">
                            Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.
                        </p>
                        <img src="img/home/qwe.png" alt="" class="home-popup__text-image">
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <?php include_once('includes/footer.php'); ?> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/common.min.js"></script>
<script src="js/home.min.js"></script>
</body>
</html>