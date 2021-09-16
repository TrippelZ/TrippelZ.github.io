<!DOCTYPE html>
<html lang="en">

	<head>
		<link rel="icon" type="image/png" href="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fcookies-png-cookie-png-1372.png&f=1&nofb=1">
		<meta charset="utf-8">
		<title>Cookie Clicker</title>
	</head>
	<body>
		<h1>Cookie Clicker</h1>
		<p>Click the cookie bellow to get points!</p>
		<button onclick="Click()" id="Button" style="background: none; border: none; padding: 0;"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fcookies-png-cookie-png-1372.png&f=1&nofb=1" alt="Cookie" width="250" id="CookieButton"></button>
		<p id="CookieAmount">Current cookies: 0</p>
		<p><b>Upgrades!</b></p>
		<p>Small Upgrade!</p>
		<p id="Upgrade1Text">
			Upgraded 0 times!	Price: 10
		</p>
		<button onclick="Upgrade1Click()" id="Upgrade1">UPGRADE</button>
		
		<script>
			<!-- Setting variables -->
			var Points = 0	<!-- The points the player has -->
			var Multiplier = 1	<!-- How much the adding points get multiplied, increases with each upgraded -->
			var Upgrade1Times = 0	<!-- How many times upgraded -->
			var Upgrade1Price = 10	<!-- The price of the upgrade -->
			
			var Button = document.getElementById("Button");	<!-- Defines the main button pressed to gain points -->
			var Upgrade1Button = document.getElementById("Upgrade1");	<!-- Defines the upgrade button -->
			var Upgrade1Text = document.getElementById("Upgrade1Text");	<!-- Defines the text stuff for the upgrade -->
			
			var CookieButton = document.getElementById("CookieButton");	<!-- Defines the cookie image in the main button -->
			
			var CookieAmount = document.getElementById("CookieAmount"); <!-- Get the text where it displays your cookies -->
			
			
			<!-- Function executed when the main button to gain points is pressed -->
			function Click() {
				var AddPoints = 1 * Multiplier
				Points = Points + AddPoints
				CookieAmount.innerHTML = "Current cookies: " + Points
				CookieButton.width = "255"
				setTimeout(() => {CookieButton.width = "250";}, 100);
			}
			
			<!-- Function executed when player press the upgrade button -->
			function Upgrade1Click() {
				if (Points >= Upgrade1Price) {
					Multiplier = Multiplier + 1
					Upgrade1Times = Upgrade1Times + 1
					Points = Points - Upgrade1Price
					Upgrade1Price = Upgrade1Price + 15
					Upgrade1Text.innerHTML = "Upgraded " + Upgrade1Times + " times!	Price: " + Upgrade1Price
					CookieAmount.innerHTML = "Current cookies: " + Points
				}
			}
		</script>
	</body>

</html>
