var _retval = "";
var _Product = job.getVariableAsString('[Metadata.Text:Path="/Auftragpostionen_/datensatz[@Tag=\'AR_Preps_Produktcode_KEY\']/@Value",Dataset="Auftragpostionen_",Model="XML"]');
var _NumberOfPages = job.getVariableAsString('[Stats.NumberOfPages]');

//vars für Toolboxprofil
var rotatePage = "0";
var rotationValue = "0";
var landToPortOdd = "0";
var landToPortEven = "0";
var portToLandEven = "0";
var portToLandOdd = "0";

var portToLand = "0";
var landToPort = "0";
var GeneralOverprint = "0";
var Overprint = "Overprint";
//var Overprint = "Knockout";
var createBleed = "0";
var bleedAmount = "0";

//Setzt die Mediabox auf Trimbox + bleedAmount (mm)
var SetMediaBoxToBleed = "0";
var createWhitePartial = "0";
var createWhite = "0";
var createVarnishPartial = "0";
var createVarnish = "0";
var ScalePages = "0";
var scaleShortSide = "0";
var scaleLongSide = "0";
var insertBlankPage = "0";
var removeHalftoneInformation = "0";
var SetPageLabelTo1 = "0";

//here goes the Product Logic
switch (_Product){
	
    case "L01":
        ScalePages = "1";
        scaleShortSide = "105";
        scaleLongSide = "148";
        landToPortOdd = "1";
        landToPortEven = "1";
    break;
        
    case "L02":
        ScalePages = "1";
        scaleShortSide = "148";
        scaleLongSide = "210";
        landToPortOdd = "1";
        landToPortEven = "1";
    break;
        
    case "L03":
    case "L04":
        landToPortOdd = "1";
        landToPortEven = "1";
    break;

    case "L05":
        ScalePages = "1";
        scaleShortSide = "100";
        scaleLongSide = "210";
        landToPortOdd = "1";
        landToPortEven = "1";
    break;

    case "P05":
    case "P02":
    case "P15":
    case "P22":
    case "P03":
    case "P04":
    case "P14":
        landToPortOdd = "1";
        landToPortEven = "1";
    break;

    case "VK01":
    case "VK05":
        bleedAmount = "2";
        SetMediaBoxToBleed = "1";
    break;

    case "F01":
    case "F03":
    case "F06":
    case "F04":
    case "F23":
    case "F24":
    case "F48":
    case "F50":
    case "F66":
    case "F67":
        if(_NumberOfPages == "1"){
            insertBlankPage = "1"
        }
        portToLandOdd = "1";
        portToLandEven = "1";
    break;
}	

//Toolbox Var Ausgabe
_retval += "rotatePage:" + rotatePage + "\n";
_retval += "rotationValue:" + rotationValue + "\n";
_retval += "landToPortOdd:" + landToPortOdd + "\n";
_retval += "landToPortEven:" + landToPortEven + "\n";
_retval += "portToLandEven:" + portToLandEven + "\n";
_retval += "portToLandOdd:" + portToLandOdd + "\n";
_retval += "portToLand:" + portToLand + "\n";
_retval += "landToPort:" + landToPort + "\n";
_retval += "GeneralOverprint:" + GeneralOverprint + "\n";
_retval += "Overprint:" + Overprint + "\n";
_retval += "createBleed:" + createBleed + "\n";
_retval += "bleedAmount:" + bleedAmount + "\n";
_retval += "SetMediaBoxToBleed:" + SetMediaBoxToBleed + "\n";
_retval += "createWhitePartial:" + createWhitePartial + "\n";
_retval += "createWhite:" + createWhite + "\n";
_retval += "createVarnishPartial:" + createVarnishPartial + "\n";
_retval += "createVarnish:" + createVarnish + "\n";
_retval += "ScalePages:" + ScalePages + "\n";
_retval += "scaleShortSide:" + scaleShortSide + "\n";
_retval += "scaleLongSide:" + scaleLongSide + "\n";
_retval += "insertBlankPage:" + insertBlankPage + "\n";
_retval += "removeHalftoneInformation:" + removeHalftoneInformation + "\n";
_retval += "SetPageLabelTo1" + SetPageLabelTo1;

job.log(-1, "Master Toolbox Output: " + _retval);
_retval;