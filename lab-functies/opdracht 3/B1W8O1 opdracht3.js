

function infinity(){
	var naam =prompt("uw naam");
    var leeftijd =prompt("uw leeftijd");
    	if (naam !="stop"){
    		document.write("uw naam is ")
    		document.write(naam)
    		document.write("<br>")
        		if (leeftijd !="stop"){
        			document.write("uw leeftijd is ")
    				document.write(leeftijd)
    				document.write("<br>")
    				infinity();
    			}
    			else if (leeftijd =="stop"){
					document.write( "u bent gestopt <br>")
				}
    	} 
    	else if(naam =="stop"){
    			document.write("u bent gestopt <br>")
    	}	
}

infinity();
