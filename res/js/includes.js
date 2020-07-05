//Designed by Munish Inc. Not for distriution.

function includeHTML() {
	var xhttp;
	var z = document.getElementsByTagName("*");
	for (var i = 0; i < z.length; i++) {
		if (z[i].getAttribute("include")) {

			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {

				if (this.readyState == 4) {
					if (this.status == 200) {
						z[i].innerHTML += this.responseText;
					}
					if (this.status == 404) {
						z[i].innerHTML += "Unable to Load this content.";
					}
					z[i].removeAttribute("include");
					includeHTML();
				}
			}

			xhttp.open("GET", z[i].getAttribute("include"), true);
			xhttp.send();
			return;
		}
	}
}
window.onload = function () {
	includeHTML();
}