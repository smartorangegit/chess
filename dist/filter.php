<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Filter</title>
</head>
    <body>
        <?php include_once('includes/header.php');?>
        <?php include_once('includes/svg-sprite.php');?>

        <div class="location">
            <div class="container">
                <ul class="location-list">
                    <li class="location-list__item">
                        <a href="#" class="location-list__link">
                            <svg class="home-icon"><use xlink:href="#home"></use></svg>
                        </a>
                    </li>
                    <li class="location-list__item">
                        <a href="#" class="location-list__link">Квартал RYBALSKY</a>
                    </li>
                    <li class="location-list__item location-list__item_active">
                        <a href="#" class="location-list__link location-list__link_last">RYBALSKY - ДОМ 3</a>
                    </li>
                </ul>
            </div>
        </div>

        <section class="filter-wrap">
            <div class="container">
                <div class="filter-top">
                    <div class="building" data-house="1" data-id="1">
                        <div class="building-info">
                            <h1 class="building__heading">Rybalsky — Дом 3</h1>
                            <p class="building__location">Киевская область, Киев</p>
                            <ul class="building-info-list">
                                <li class="building-info-list__item">
                                    <span class="building-info-list__text">Этажность</span>
                                    <span class="building-info-list__text">7-10</span>
                                </li>
                                <li class="building-info-list__item">
                                    <span class="building-info-list__text">Количество квартир</span>
                                    <span class="building-info-list__text">174</span>
                                </li>
                                <li class="building-info-list__item">
                                    <span class="building-info-list__text">Площадь квартир</span>
                                    <span class="building-info-list__text">от 42 до 171 м2</span>
                                </li>
                                <li class="building-info-list__item">
                                    <span class="building-info-list__text">Срок сдачи</span>
                                    <span class="building-info-list__text">IV квартал 2018</span>
                                </li>
                            </ul>
                        </div>
                        <div class="building__image-wrap">
                            <img src="img/residence/res_1.jpg" alt="build-image" class="building__image">
                        </div>
                    </div>
                    <div class="filter-short">
                        <div class="filter-short-content">
                            <div class="filter-short-checkbox-wrap">
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
                                        <span class="filter-checkbox__text">Cв</span>
                                        <input id="checkbox_6" type="checkbox" class="filter-checkbox" value="0">
                                        <label for="checkbox_6" class="filter-checkbox-list__label"></label>
                                    </li>

                                </ul>
                            </div>
                            <div class="filter-top-range">
                                <div class="range__item range__item_long js-filter__slider_ta">
                                  <span class="filter_name">Площадь кв. м:</span >
                                    <div class="filter__ranges">
                                        <?php /*Place PHP values here*/?>
                                            <input name="all_room" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                        <?php /*Place PHP values here*/?>
                                        <input class="filter__range js-filter__range" type="text">
                                        <span class="range__text range__text_min js-filter__text_min">0</span>
                                        <span class="range__text range__text_max js-filter__text_max">100</span>
                                    </div>
                                </div>
                                <div class="range__item range__item_long">
                                  <span class="filter_name">Общая стоимость</span >
                                    <div class="filter__ranges filter__ranges_ta">
                                        <?php /*Place PHP values here*/?>
                                            <input name="price" type="range" min="10000" max="600000" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                        <?php /*Place PHP values here*/?>
                                        <input class="filter__range js-filter__range"  type="text">
                                        <span class="range__text range__text_min js-filter__text_min">0</span>
                                        <span class="range__text range__text_max js-filter__text_max">100</span>
                                    </div>
                                </div>
                                <div class="range__item range__item_long">
                                  <span class="filter_name">Этаж</span >
                                    <div class="filter__ranges filter__ranges_ta">
                                        <?php /*Place PHP values here*/?>
                                            <input name="floor" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                        <?php /*Place PHP values here*/?>
                                        <input class="filter__range js-filter__range"  type="text">
                                        <span class="range__text range__text_min js-filter__text_min">0</span>
                                        <span class="range__text range__text_max js-filter__text_max">100</span>
                                    </div>
                                </div>
                            </div>
                            <div class="filter-top__button-wrap">
                                <button class="filter-top__button_more">
                                    Расширенные фильтры
                                    <svg class="filter-top__button-icon"><use xlink:href="#left-arrow"></use></svg>
                                </button>
                                <button class="button border-gradient header__button filter__button filter__button_clear-js">
                                    Сбросить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="filter-full">
                <div class="container">
                    <div class="filter-full-range">
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                        <div class="range__item">
                          <span class="filter_name">Общая стоимость</span >
                            <div class="filter__ranges filter__ranges_ta">
                                <?php /*Place PHP values here*/?>
                                    <input name="common_cost" type="range" min="5" max="100" class="filter__hidden-values js-filter__hidden-values" style="display: none;">
                                <?php /*Place PHP values here*/?>
                                <input class="filter__range js-filter__range"  type="text">
                                <span class="range__text range__text_min js-filter__text_min">0</span>
                                <span class="range__text range__text_max js-filter__text_max">100</span>
                            </div>
                        </div>
                    </div>
                    <div class="filter-full__button-wrap">
                        <button class="button header__button filter__button border-gradient filter-full__button_apply filter__button-js">
                            Применить
                        </button>
                        <button class="button header__button filter__button border-gradient">
                            Сбросить
                        </button>
                        <button class="filter-full__button_more">
                            Настроить отображение фильтров
                            <svg class="filter-full__button-icon"><use xlink:href="#left-arrow"></use></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="filter-settings">
                <div class="container">
                    <div class="filter-settings-content">
                        <ul class="filter-settings-list">
                            <li class="filter-settings-list__item">
                                <input id="settings-check_1" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_1" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Жилая площадь, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_2" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_2" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Жилая площадь, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_3" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_3" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Жилая площадь, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_4" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_4" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Жилая площадь, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_5" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_5" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Жилая площадь, м<sup>2</sup>:</span> 
                            </li>

                            <li class="filter-settings-list__item">
                                <input id="settings-check_6" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_6" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Кухня, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_7" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_7" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Кухня, м<sup>2</sup>:</span> 
                            </li>
                            <li class="filter-settings-list__item">
                                <input id="settings-check_8" type="checkbox" class="filter-checkbox">
                                <label for="settings-check_8" class="filter-checkbox-list__label filter-settings-list__label"></label>
                                <span class="filter-settings-list__text">Кухня, м<sup>2</sup>:</span> 
                            </li>
                        </ul>
                        <button class="button header__button filter__button border-gradient">
                            Сбросить
                        </button>
                    </div> 
                </div>
            </div>

            <div class="result-short">
                <div class="container">
                    <div class="result-short-content">
                        <p class="result-short__text">
                            Найдено <span class="result-short__text_blue result-short_all-js">298</span> помещений. Из них свободно: <span class="result-short__text_blue result-short_free-js">172</span>
                        </p>
                        <ul class="result-short-list">
                            <li class="result-short-list__item">
                                <div class="color-box color-box_green"></div>
                                <span class="result-short__text">Свободные</span>
                            </li>
                             <li class="result-short-list__item">
                                <div class="color-box color-box_yellow"></div>
                                <span class="result-short__text">Забронированные</span>
                            </li>
                             <li class="result-short-list__item">
                                <div class="color-box color-box_dark-gray"></div>
                                <span class="result-short__text">Проданные</span>
                            </li>
                             <li class="result-short-list__item">
                                <div class="color-box color-box_gray"></div>
                                <span class="result-short__text">Недоступные</span>
                            </li>
                        </ul>
                        <div class="result-short-select">
                            <span class="result-short__text result-short__text_medium">ВИД</span>
                            <div class="result-short__select-wrap">
                                <svg class="result-short__select-icon"><use xlink:href="#menu-grid"></use></svg>
                                <!-- <select class="result-short__select">
                                    <option value="0">Планировки</option>
                                    <option value="1">Плитка</option>
                                    <option value="2">Список</option>
                                </select> -->
                                <p class="result-short__select">Плитка</p>
                                <ul class="view-list">
                                    <li class="view-list__item">
                                        <svg  id="labyrinth" class="view-list__icon"><use xlink:href="#labyrinth"></use></svg>
                                        <p class="view-list__text">Планировки</p>
                                    </li>
                                    <li class="view-list__item">
                                        <svg id="list" class="view-list__icon"><use xlink:href="#list"></use></svg>
                                        <p class="view-list__text">Список</p>
                                    </li>
                                    <li class="view-list__item">
                                        <svg id="menu-grid" class="view-list__icon"><use xlink:href="#menu-grid"></use></svg>
                                        <p class="view-list__text">Плитка</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="result-plan">
            <div class="container">
                <ul class="result-plan-list">
                    <li class="result-plan-list__item">
                        <a href="#" class="result-plan-list__image-link">
                            <img src="img/filter/plan/plan_1.png" alt="plan-image" class="result-plan-list__image">
                        </a>
                        <div class="result-plan-info">
                            <div class="result-plan-info__price">
                                <p class="result-plan-info__text">Бронь</p>
                                <p class="result-plan-info__text">83,5 м<sup>2</sup></p>
                                <div class="color-box result-plan__color-box color-box_yellow"></div>
                            </div>
                            <div class="result-plan-info__floor">
                                <p class="result-plan-info__text">9 этаж</p>
                                <p class="result-plan-info__text">№ 56</p>
                            </div>
                        </div>
                        <a href="#" class="rooms__link result-plan__rooms-link">2K</a>
                        <!-- <a href="#" class="button result-plan__button">Подробнее</a> -->
                        <p class="result-plan-info__text result-plan-info__text_center">Помещение недоступно для покупки</p>
                    </li>
                </ul>
            </div>
            <div class="pagination filter-pagination result-plan-pagination">
                <div class="container">
                    <div class="pagination-content">
                        <div class="pagination-prev">
                            <a href="#" class="pagination__link">
                                <span class="pagination-prev__button pagination__button">
                                    <svg class="pagination__icon"><use xlink:href="#left-arrow"></use></svg>
                                </span>
                            </a>
                        </div>
                        <ul class="pagination-num-list">
                            <!-- <li class="pagination-num-list__item">
                                <a href="#" class="pagination-num-list__link pagination__button">1</a>
                            </li> -->
                        </ul>
                        <div class="pagination-next">
                            <a href="#" class="pagination__link">
                                <span class="pagination__button pagination-next__button">
                                    <svg class="pagination__icon pagination__icon_revers"><use xlink:href="#left-arrow"></use></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="result-tile-wrap">
            <div class="container">
                <div class="result-tile">
                    <div class="floor-plan">
                        <a href="#" class="floor-plan__link">План этажа</a>
                    </div>
                    <span class="title-entrance">Подьезд</span>
                    <span class="title-floor">Этаж</span>
                    <ul class="entrance-floor">
                        <!-- <li class="entrance-floor__item">1</li> -->
                    </ul>
                    <div class="entrance-wrap">
                        <div class="entrance-tooltip">
                            <p class="entrance-tooltip__text">№ <span class="entrance-tooltip__num">0</span></p>
                            <p class="entrance-tooltip__text"><span class="entrance-tooltip__price">0</span> грн.</p>
                            <p class="entrance-tooltip__text"><span class="entrance-tooltip__square">0</span> м<sup>2</sup> – <span class="entrance-tooltip__price_meter">0</span> грн/м<sup>2</sup></p>
                            <img src="" alt="flat" class="entrance-tooltip__image">
                            <div data-color="green" class="color-box entrance-tooltip__color-box"><span class="entrance-tooltip__rooms">0</span> K</div>
                        </div>
                        <!-- <div class="entrance">
                            <p class="entrance__num">1</p>
                            <div class="entrance-flats-wrap">
                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green">1</div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul> 

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>

                                <ul class="entrance-flats">
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="dark-gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="green" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box color-box_green"></div>
                                    </li> 
                                    <li data-color="yellow" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                    <li data-color="gray" class="entrance-flats__item">
                                        <div class="entrance-flats__color-box"></div>
                                    </li> 
                                </ul>
                            </div>
                        </div> -->
                    </div>
                </div>    
            </div>
        </section>

        <section class="result-list">
            <div class="container">
                <div class="result-list-top">
                    <span class="result-list-top__text">Показать по:</span>
                    <select id="table_rows" class="result-list-top__select" onchange="selectHandler()">
                        <!-- <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option> -->
                    </select>
                </div>
                <div class="table_shadow">
                    <div class="table-container">
                        <table class="filter-table">
                            <thead class="filter-table__head">
                                <th class="filter-table__heading filter-table_no_padding">Этаж</th>
                                <th class="filter-table__heading">Статус</th>
                                <th class="filter-table__heading">Жилая площадь,м<sup>2</sup></th>
                                <th class="filter-table__heading">Прихожая,м<sup>2</sup></th>
                                <th class="filter-table__heading">Кухня,м<sup>2</sup></th>
                                <th class="filter-table__heading">Гостинная,м<sup>2</sup></th>
                                <th class="filter-table__heading">Лоджия,м<sup>2</sup></th>
                                <th class="filter-table__heading">Спальня,м<sup>2</sup></th>
                                <th class="filter-table__heading">Санузел,м<sup>2</sup></th>
                            </thead>    
                            <tbody class="filter-table__body">
                                <tr class="filter-table__row">
                                    <td class="filter-table__col">1</td>
                                    <td class="filter-table__col"><div data-color="gray" class="color-box filter-table__color-box"></div></td>
                                    <td class="filter-table__col">24</td>
                                    <td class="filter-table__col">1</td>
                                    <td class="filter-table__col">45</td>
                                    <td class="filter-table__col">24</td>
                                    <td class="filter-table__col">1</td>
                                    <td class="filter-table__col">45</td>
                                    <td class="filter-table__col">24</td>
                                    <td class="filter-table__col">24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>   
            <div class="pagination filter-pagination table-pagination">
                <div class="container">
                    <div class="pagination-content">
                        <div class="pagination-prev">
                            <a href="#" class="pagination__link">
                                <span class="pagination-prev__button pagination__button">
                                    <svg class="pagination__icon"><use xlink:href="#left-arrow"></use></svg>
                                </span>
                            </a>
                        </div>
                        <ul class="pagination-num-list">
                            <li class="pagination-num-list__item">
                                <a href="#" class="pagination-num-list__link pagination__button">1</a>
                            </li>
                        </ul>
                        <div class="pagination-next">
                            <a href="#" class="pagination__link">
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
        <script src="js/filter.min.js"></script>
    </body>
</html>