<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>map-search</title>
</head>
    <body>
        <?php include_once('includes/header.php');?>
        <?php include_once('includes/svg-sprite.php');?>

        <div class="location map__location">
            <div class="container location-container">
                <ul class="location-list">
                    <li class="location-list__item">
                        <a href="home.php" class="location-list__link">
                            <svg class="home-icon"><use xlink:href="#home"></use></svg>
                        </a>
                    </li>
                    <li class="location-list__item location-list__item_active">
                        <a href="#" class="location-list__link location-list__link_last">ПОИСК ПО КАРТЕ</a>
                    </li>
                </ul>
                <div class="map-search">
                    <svg class="map-search__icon"><use xlink:href="#search"></use></svg>
                    <input type="text" class="map-search__input">
                </div>
            </div>
        </div>
        <div class="home-top__container">
            <div class="home-filter">
                <div class="container">
                    <form action="" class="filter__form">
                        <div class="home-filter__top">
                            <div class="home-filter__select-wrap custom-select">
                                <select id="project_city" class="home-filter__select" onchange="citySelect()">
                                    <option class="city" value="">Город</option>
                                    <option class="city" value="1">Киев</option>
                                    <option class="city" value="2">Львов</option>
                                    <option class="city" value="3">Днепр</option>
                                    <option class="city" value="4">Киев</option>
                                    <option class="city" value="5">Львов</option>
                                    <option class="city" value="6">Днепр</option>
                                </select>
                                <!-- <svg class="home-filter__arrow"><use xlink:href="#left-arrow"></use></svg> -->
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="project_region" class="home-filter__select" onchange="districtSelect()">
                                    <option class="district" value="">Район</option>
                                    <option class="district" value="1">1</option>
                                    <option class="district" value="2">2</option>
                                    <option class="district" value="3">3</option>
                                </select>
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="state" class="home-filter__select" onchange="stateSelect()">
                                    <option class="state" value="">Состояние строительства</option>
                                    <option class="state" value="1">1</option>
                                    <option class="state" value="2">2</option>
                                    <option class="state" value="3">3</option>
                                </select>
                            </div>
                            <div class="home-filter__select-wrap">
                                <select id="development_id" class="home-filter__select" onchange="developerSelect()">
                                    <option class="developer" value="">Застройщик</option>
                                    <option class="developer" value="1">1</option>
                                    <option class="developer" value="2">2</option>
                                    <option class="developer" value="3">3</option>
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
                                        <input name="project_price" type="range" min="5" max="50000" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
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
                                        <input name="all_room" type="range" min="0" max="200" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
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
                                        <input name="price" type="range" min="0" max="1500000" class="filter__hidden-values filter__hidden-values_ta js-filter__hidden-values" style="display: none;">
                                    <?php /*Place PHP values here*/?>
                                    <input class="filter__range filter__range_ta js-filter__range" type="text">
                                    <span class="range__text range__text_min js-filter__text_min">0</span>
                                    <span class="range__text range__text_max js-filter__text_max">100</span>
                                </div>
                            </div>
                        </div>
                        <div class="home-filter__button-wrap">
                            <button class="button home-filter__button filter__button-js">Выбрать</button>
                            <button class="button home-filter__button filter__button_clear-js">Сбросить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div id="map" class="map-page__map"></div>

        <?php include_once('includes/footer.php'); ?> 

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkkNgvCFDLDhP_qSDZhMRyzOG8bZ3hJYs"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/common.min.js"></script>
        <!-- <script src="js/home.min.js"></script> -->
        <script src="js/map.min.js"></script>
    </body>
</html>