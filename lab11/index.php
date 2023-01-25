<!DOCTYPE html>


<html lang="en-US">
	<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Daily Weather Forcast</title>
			<link rel="stylesheet" type="text/css" href="main.css"/>
			<link rel="preconnect" href="https://fonts.gstatic.com">
			<link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet">
			<script src="myScript.js"></script>
			
	</head>
	<body>
		<header><h1>Daily Weather Forcast</h1></header>
		<section>
			
			<div id="content">
				
				<?php

					DisplayForm();
					
				?>

			
			</div>
			<div id="errors">
			</div>
		</section>
		<footer>&copy Muna Shabab </footer>
	</body>
</html>
<!-- a function that is used to display the form. It is better to have it as a function so it can be reused-->
<?php
	
	function DisplayForm(){

		
?>
		<form method="get" action="#">
			<label for="txtCity">Enter a city :</label>
			<input type="text" name="txtCity" id="txtCity">	
			
			<br/>
			
			<input type="button" name="btnSubmit" value="Daily Forcast" onclick="getWeather();"/>
			</br>
			<span id="currentTemp">	
			</span>
			</br>
			<span id="minTemp">	
			</span>
			</br>
			<span id="maxTemp">	
			</span>
			<noscript>You don't have JavaScript enabled</noscript>
		</form>
		


<?php

	}

?>