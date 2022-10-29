<html>
	<head>
		<title>Векторы</title>
		<meta charset="utf-8">	
		<link rel="stylesheet" href="vector.css"/>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet">
		<link rel="shortcut icon" href="index.webp"/>
	</head>
	<body>
	<h1 class="title">Действия с векторами</h1> <br><br>
	<p class="text">На этом сайте вы можете провести расчёты по <b>векторам</b></p>
	<p class="text" style="font-size: 15px"><em>По мере получения информации страница будет обновлятся...</em></p>
	<br>
		<p class="text-field__label1"><b>Координаты и длина вектора</b></p>
		<style>
			table.text  {
			 width:  40%; /* Ширина таблицы */
			 border-spacing: 0; /* Расстояние между ячейками */
			}
			table.textik  {
				width:  15%; /* Ширина таблицы */
				cellspacing: 2px; /* Расстояние между ячейками */
			   }
			td.2te { /* Правая ячейка */ 
			 text-align: calc(center*50%); /* Выравнивание по правому краю */
			}
			td.1te { /* левая ячейка */ 
			 text-align: calc(left * 50%); 
			}
			td.2tet { /* Правая ячейка */ 
				text-align: calc(center*70%); /* Выравнивание по правому краю */
			   }
			   td.1tet { /* левая ячейка */ 
				text-align: calc(left *30%); 
			   }
		   </style>
		<table class="text" align="center"> 
			<tr>
			<td class="1te" style="text-align:left; font-family: 'Comfortaa', cursive; width=50%">
			Координаты начальной точки: 
			<input class="text-field__input" type="text" name="razmer" id="razmer" placeholder="x">
			<input class="text-field__input" type="text" name="razmer" id="razmer" placeholder="y">
			</td>
			<td class="2te" style="text-align:left; font-family: 'Comfortaa', cursive; width=50%">
			Координаты конечной точки:
			<input class="text-field__input" type="text" name="razmer" id="razmer" placeholder="x">
			<input class="text-field__input" type="text" name="razmer" id="razmer" placeholder="y">
			</td>
			</tr>
	</table>  
	
	<br><br>
 <button class="btn1">Расчитать</button> 
 <br>
 <h2 class="title">Ответ:</h2>
 
 <div class="answers">
 <div class="out1"></div>
 </div>
 <br>
<script src="main.js"></script>
	<hr>
	<ul>
		<li class="vk"><a href="https://vk.com/whoamin">ВК</a> разработчика</li>

	</ul>  
	</body>
