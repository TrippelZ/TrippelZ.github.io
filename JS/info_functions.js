// Vi skaffer all info sendt med URLen
let URLParams = new URLSearchParams(document.location.search);
// Vi skaffer Abonnementet valgt.
let InfoType = URLParams.get("Abonnement");

// Vi oppdaterer relevant tekst til riktig abonnement, og sjuler sammenligning med valgte abonnement.
switch(InfoType){
	case 'Telenor':
		document.getElementById("SiteTitle").innerHTML = "Telenor Info";
		document.getElementById("MainTitle").innerHTML = "Telenor";
		document.getElementById("TelenorOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.telenor.no/mobilabonnement/");
		break;
	case 'Telia':
		document.getElementById("SiteTitle").innerHTML = "Telia Info";
		document.getElementById("MainTitle").innerHTML = "Telia";
		document.getElementById("TeliaOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.telia.no/mobilabonnement/");
		break;
	case 'OneCall':
		document.getElementById("SiteTitle").innerHTML = "OneCall Info";
		document.getElementById("MainTitle").innerHTML = "OneCall";
		document.getElementById("OneCallOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://onecall.no/mobilabonnement");
		break;
	case 'Talkmore':
		document.getElementById("SiteTitle").innerHTML = "Talkmore Info";
		document.getElementById("MainTitle").innerHTML = "Talkmore";
		document.getElementById("TalkmoreOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://talkmore.no/mobilabonnement");
		break;
	case 'Ice':
		document.getElementById("SiteTitle").innerHTML = "Ice Info";
		document.getElementById("MainTitle").innerHTML = "Ice";
		document.getElementById("IceOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.ice.no/mobilabonnement/");
		break;
	case 'Fjordkraft':
		document.getElementById("SiteTitle").innerHTML = "Fjordkraft Info";
		document.getElementById("MainTitle").innerHTML = "Fjordkraft";
		document.getElementById("IceOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.fjordkraft.no/mobilabonnement/");
		break;
	case 'VippsMobil':
		document.getElementById("SiteTitle").innerHTML = "Vipps Mobil Info";
		document.getElementById("MainTitle").innerHTML = "Vipps Mobil";
		document.getElementById("VippsMobilOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.vipps.no/vipps-mobil/");
		break;
	// Ikke noe å se her :)
	case 'Bananer':
		document.getElementById("SiteTitle").innerHTML = "Banan Info";
		document.getElementById("MainTitle").innerHTML = "Bananer";
		document.getElementById("BuyButton").setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
		break;
	// Ikke noe abonnement så setter vi standard til Telenor.
	default:
		InfoType = "Telenor";
		document.getElementById("SiteTitle").innerHTML = "Telenor Info";
		document.getElementById("MainTitle").innerHTML = "Telenor";
		document.getElementById("TelenorOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.telenor.no/mobilabonnement/");
}

// Funksjon påkalt når valgte element i valg boks endres.
function SelectChanged(){
	// Vi skaffer det valgte elementet.
	const Selected = document.getElementById("SelectBox").selectedIndex
	// Vi åpner sammenlgnings info for valgte abonnement.
	switch(Selected){
		case 1:
			OpenInfo("Telenor");
			break;
		case 2:
			OpenInfo("Telia");
			break;
		case 3:
			OpenInfo("OneCall");
			break;
		case 4:
			OpenInfo("Talkmore");
			break;
		case 5:
			OpenInfo("Ice");
			break;
		case 6:
			OpenInfo("Fjordkraft");
			break;
		case 7:
			OpenInfo("VippsMobil");
			break;
	}
	// Vi setter valgte element tilbake til standard.
	document.getElementById("SelectBox").selectedIndex = 0;
}

// Vi oppretter variablen tidlig så flere funksjoner kan bruke den.
let CompareAbonnement = "";

// Funksjon for å åpne info sammenligning.
function OpenInfo(Abonnement){
	// Vi sette abonnementet vi sammenligner med så vi vet lenken til knappen for å gå til den.
	CompareAbonnement = Abonnement;
	// Vi sjekker om det er Vipps som er valgte abonnement, så navnet blir riktig satt.
	if(InfoType == "VippsMobil"){
		document.getElementById("InfoTitleSelf").innerHTML = "Vipps Mobil";
	}else{
		document.getElementById("InfoTitleSelf").innerHTML = InfoType;
	}
	// Vi gjør det samme igjen for navnet på sammenlignende abonnement.
	if(Abonnement == "VippsMobil"){
		document.getElementById("InfoTitleOther").innerHTML = "Vipps Mobil";
	}else{
		document.getElementById("InfoTitleOther").innerHTML = Abonnement;
	}
	// Vi setter høyden til dropdown menyen, og aktiverer lukke knappen.
	document.getElementById("DropdownInfo").style.height = "100%";
	document.getElementById("CloseInfoButton").style.display = "inline-block";
	//console.log(Abonnement)
}
// Funksjon for å lukke info sammenligning.
function CloseInfo(){
	// Vi setter høyden til dropdown menyen, og deaktiverer lukke knappen.
	document.getElementById("DropdownInfo").style.height = "0";
	document.getElementById("CloseInfoButton").style.display = "none";
}

// Funskjon til å gå til det sammenlignende abonnementet.
function GotoCompared(){
	location.href = "info.html?Abonnement=" + CompareAbonnement;
}