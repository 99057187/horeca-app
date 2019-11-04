function rekenmachine(uitkomst){
	var aantal=prompt("hoeveel tafels wilt u")
		if (aantal > 10){
		aantal=10
		}
		if(isNaN(aantal)){
			alert("u dient een getal te typen")
		}
			for (var i = 1; i <= aantal; i++) {
				document.write(  '1*' + uitkomst + '=' +  1 * uitkomst + "<br>");
				document.write(  '2*' + uitkomst + '=' +  2 * uitkomst + "<br>");
				document.write(  '3*' + uitkomst + '=' +  3 * uitkomst + "<br>");
				document.write(  '4*' + uitkomst + '=' +  4 * uitkomst + "<br>");
				document.write(  '5*' + uitkomst + '=' +  5 * uitkomst + "<br>");
				document.write(  '6*' + uitkomst + '=' +  6 * uitkomst + "<br>");
				document.write(  '7*' + uitkomst + '=' +  7 * uitkomst + "<br>");
				document.write(  '8*' + uitkomst + '=' +  8 * uitkomst + "<br>");
				document.write(  '9*' + uitkomst + '=' +  9 * uitkomst + "<br>");
    			document.write( '10*' + uitkomst + '=' + 10 * uitkomst + "<br> <br>");
				uitkomst=uitkomst+1
		}
}

var uitkomst=(1)
rekenmachine(uitkomst)