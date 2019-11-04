function coffeeBar(aantalFris,aantalBier,aantalWijn,aantalballen,aantalschaaltjes){

	alert("wat wilt u bestellen? Drankjes, snacks?");
	var bestelling = prompt("kies uw bestelling.");
	if(bestelling == "drankjes"){
		alert("wat voor drankje wilt u bestellen? fris, bier of wijn? ");
		var Drankjes = prompt("kies uw Drankje");
		if (Drankjes == "fris"){
			var aantalFris = prompt("Hoeveel fris-drankjes wilt u toevoegen aan uw bestelling?");
		}
		else if (Drankjes == "bier"){
			var aantalBier = prompt("Hoeveel flesjes bier wilt u toevoegen aan uw bestelling?");
		}
		else if (Drankjes == "wijn"){
			var aantalWijn = prompt("Hoeveel glaasjes wijn wilt u toevoegen aan uw bestelling?");		
		}
		else {
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}
	}
	else if(bestelling == "snacks"){
		alert("hoeveel bitterballen wilt u?");
		var aantalballen = prompt("8 of 16 stuks?");
		if (aantalballen == "16"){
		}
		else if (aantalballen != "8"){
		 	alert("U kunt alleen een keuze maken tussen 8 of 16, De snacks zijn niet toegevoegd aan de bestelling.");
		 	coffeeBar(aantalFris,aantalBier,aantalWijn,aantalballen,aantalschaaltjes);
		 }
		var aantalschaaltjes = prompt("hoeveel schaaltjes van " + aantalballen + " bitterballen wilt u bestellen?");
		if (aantalballen == "16"){
		 	aantalschaaltjes = aantalschaaltjes * 2;
		}
		 
	}
	else {
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
	}
	const FRIS = 2.75;
	const BIER = 5;
	const WIJN = 13.50;
	const BALLEN = 7;
	var prijsFris = aantalFris * FRIS;
	var prijsBier = aantalBier * BIER;
	var prijsWijn = aantalWijn * WIJN;
	var prijsballen = aantalschaaltjes * BALLEN;
	var totaal = prijsFris + prijsBier + prijsWijn + prijsballen;
	if (aantalballen == "16"){
		aantalschaaltjes = aantalschaaltjes / 2;
	}
    var confirm = prompt("Wilt u nog wat toevoegen aan uw bestelling?");
    if (confirm == "ja"){
    	coffeeBar(aantalFris,aantalBier,aantalWijn,aantalballen,aantalschaaltjes);
    }
    else if (confirm == "nee"){
    	alert("uw totale prijs is " +totaal+ " euro.");
    	function bonloop(){
    		var bon = prompt("wilt u een bon.");
    		if (bon == "ja" ){
    			alert("u heeft " + aantalFris + " fris-drankjes, " + aantalBier + " bier-drankjes, " + aantalWijn + " wijn-drankjes en " + aantalschaaltjes + " schaaltjes van " + aantalballen + " bitterballen bestelt." );
    			alert("eet smakelijk.");
    		}
    		else if (bon == "nee"){
    			alert("ok, eet smakelijk.");
    		}
    		else{
    			alert("u dient ja of nee in te voeren.");
    			bonloop();
    		}
    	}
    	bonloop();
    }

}
	var aantalFris = 0;
	var aantalBier = 0;
	var aantalWijn = 0;
	var aantalballen = 0;
	var aantalschaaltjes = 0;