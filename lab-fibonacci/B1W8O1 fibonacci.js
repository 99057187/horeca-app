function fibonacci(number1,number2,number3){
	document.write( number2 + "<br>");
	document.write( number1 + "<br>");
	var loops =(1)
	while (loops <=3 ){
		number2 = number1 + number3
		document.write(number2 + "<br>");
		number3 = number2 + number1
		document.write(number3 + "<br>");
		number1 = number3 + number2
		document.write(number1 + "<br>");
		number2 = number1 + number3
		document.write(number2 + "<br>");
		number3 = number2 + number1
		document.write(number3 + "<br>");
		number1 = number3 + number2
		document.write(number1 + "<br>");
		var loops = loops + 1
    }

}
var number1 =(1)
var number2 =(0)
var number3 =(0)
fibonacci(number1,number2,number3);