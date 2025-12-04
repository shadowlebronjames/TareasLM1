function writeOnHTML(txt) {
	console.log(txt);
	var CurTxt = document.getElementById("txtArea").innerText;
	document.getElementById("txtArea").innerHTML = CurTxt+" "+txt;
}