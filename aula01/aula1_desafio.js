function trocarLampada() {
	var imgLampada = document.getElementById("lampada");
	if (imgLampada.src == "http://www.w3schools.com/js/pic_bulboff.gif") {
		imgLampada.src = "http://www.w3schools.com/js/pic_bulbon.gif"
	} else {
		imgLampada.src = "http://www.w3schools.com/js/pic_bulboff.gif"
	}
}