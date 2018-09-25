<header class="header header-home">
	<div class="container">
		<a href="home.php" class="logo__link">
			<img src="img/logo.svg" alt="" class="logo__image">
		</a>
		<nav class="nav header__nav">
			<ul class="nav-list">
				<li class="nav-list__item">
					<a href="#" class="nav-list__link">о проекте</a>
				</li>
				<li class="nav-list__item">
					<a href="#" class="nav-list__link">контакты</a>
				</li>
				<li class="nav-list__item">
					<a href="#" class="nav-list__link">как забронировать</a>
				</li>
				<li class="nav-list__item">
					<a href="#" class="nav-list__link">условия использования</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="header-content">
		<div class="container clearfix">
			<div class="header__button-wrap">
				<div class="favorites-button">
					<svg class="favorites-button__icon"><use xlink:href="#star"></use></svg>
					<p class="favorites-button__text">Избранное</p>
					<p class="favorites-button__count">1</p>
				</div>
				<button class="button header__button border-gradient">Регистрация</button>
				<!-- <button class="button header__button header__button_login">sobko.alex@gmail.com</button> -->
				<button class="button header__button border-gradient">Вход</button>
			</div>
		</div>
		<div class="favorites">
			<div class="favorites-container">
				<button class="favorites-close">
					ИЗБРАННОЕ
					<svg class="favorites-close__icon"><use xlink:href="#cancel"></use></svg>
				</button>
				<ul class="favorites-title-list">
					<li class="favorites-title-list__item favorites-title-list__item_active">Готовые обьекты</li>
					<li class="favorites-title-list__item">Строящиеся объекты</li>
					<li class="favorites-title-list__item">Коммерческая недвижимость</li>
				</ul>
				<ul class="favorites-table-list">
					<li class="favorites-table-list__item favorites-table-list__item_active">
						<table class="favorites-table">
							<thead class="favorites-table__head">
								<th class="favorites-table__heading">Объект</th>
								<th class="favorites-table__heading">Этаж</th>
								<th class="favorites-table__heading">Комнат</th>
								<th class="favorites-table__heading">Площадь, м<sup>2</sup></th>
								<th class="favorites-table__heading">Общая стоимость, грн</th>
								<th class="favorites-table__heading">Тип</th>
								<th class="favorites-table__heading">Забронировать</th>
							</thead>
							<tbody class="favorites-table__body">
								<tr class="favorites-table__row">
									<td class="favorites-table__col">Квартал RYBALSKY </td>
									<td class="favorites-table__col">3</td>
									<td class="favorites-table__col">2</td>
									<td class="favorites-table__col">63,9</td>
									<td class="favorites-table__col">1277856</td>
									<td class="favorites-table__col">2B</td>
									<td class="favorites-table__col">
										<a onclick="$(`#rez`).click();" class="button booking-button">
					                    	Забронировать
					                   </a>
									</td>
									<td class="favorites-table__col">
										<svg class="favorites-table__booking-icon favorites-table__booking-icon_smaller"><use xlink:href="#cancel"></use></svg>
									</td>
								</tr>
								<tr class="favorites-table__row">
									<td class="favorites-table__col">Квартал RYBALSKY </td>
									<td class="favorites-table__col">3</td>
									<td class="favorites-table__col">2</td>
									<td class="favorites-table__col">63,9</td>
									<td class="favorites-table__col">1277856</td>
									<td class="favorites-table__col">2B</td>
									<td class="favorites-table__col">
										<a onclick="$(`#rez`).click();" class="button booking-button">
					                    	Забронировать
					                    </a>
									</td>
									<td class="favorites-table__col">
										<svg class="favorites-table__booking-icon favorites-table__booking-icon_smaller"><use xlink:href="#cancel"></use></svg>
									</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li class="favorites-table-list__item">
						<table class="favorites-table">
							<thead class="favorites-table__head">
								<th class="favorites-table__heading">Объект</th>
								<th class="favorites-table__heading">Этаж</th>
								<th class="favorites-table__heading">Комнат</th>
								<th class="favorites-table__heading">Площадь, м<sup>2</sup></th>
								<th class="favorites-table__heading">Общая стоимость, грн</th>
								<th class="favorites-table__heading">Тип</th>
								<th class="favorites-table__heading">Забронировать</th>
							</thead>
							<tbody class="favorites-table__body">
								<tr class="favorites-table__row">
									<td class="favorites-table__col">RYBALSKY</td>
									<td class="favorites-table__col">3</td>
									<td class="favorites-table__col">2</td>
									<td class="favorites-table__col">63,9</td>
									<td class="favorites-table__col">1277856</td>
									<td class="favorites-table__col">2B</td>
									<td class="favorites-table__col">
										<a onclick="$(`#rez`).click();" class="button booking-button">
					                    	Забронировать
					                    </a>
									</td>
									<td class="favorites-table__col">
										<svg class="favorites-table__booking-icon favorites-table__booking-icon_smaller"><use xlink:href="#cancel"></use></svg>
									</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li class="favorites-table-list__item">3</li>
					<li class="favorites-table-list__item">4</li>
				</ul>
			</div>
		</div>
	</div>
</header>