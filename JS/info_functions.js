let URLParams = new URLSearchParams(document.location.search);

let InfoType = URLParams.get("Abonnement");

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
	case 'Bananer':
		document.getElementById("SiteTitle").innerHTML = "Banan Info";
		document.getElementById("MainTitle").innerHTML = "Bananer";
		document.getElementById("BuyButton").setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
		break;
	default:
		InfoType = "Telenor";
		document.getElementById("SiteTitle").innerHTML = "Telenor Info";
		document.getElementById("MainTitle").innerHTML = "Telenor";
		document.getElementById("TelenorOption").style.display = "none";
		document.getElementById("BuyButton").setAttribute("href", "https://www.telenor.no/mobilabonnement/");
}

function Buy(){
	
}

function SelectChanged(){
	const Selected = document.getElementById("SelectBox").selectedIndex
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
	document.getElementById("SelectBox").selectedIndex = 0;
}

let CompareAbonnement = "";

function OpenInfo(Abonnement){
	CompareAbonnement = Abonnement;
	if(InfoType == "VippsMobil"){
		document.getElementById("InfoTitleSelf").innerHTML = "Vipps Mobil";
	}else{
		document.getElementById("InfoTitleSelf").innerHTML = InfoType;
	}
	if(Abonnement == "VippsMobil"){
		document.getElementById("InfoTitleOther").innerHTML = "Vipps Mobil";
	}else{
		document.getElementById("InfoTitleOther").innerHTML = Abonnement;
	}
	document.getElementById("DropdownInfo").style.height = "100%";
	document.getElementById("CloseInfoButton").style.display = "inline-block";
	//console.log(Abonnement)
}
function CloseInfo(){
	document.getElementById("DropdownInfo").style.height = "0";
	document.getElementById("CloseInfoButton").style.display = "none";
}

function GotoCompared(){
	location.href = "info.html?Abonnement=" + CompareAbonnement;
}