var line = document.createElement("p")
document.getElementById("inputList").appendChild(line)

function createInput(frontString,idString,value,backString){
	line.innerHTML += frontString + ": "
	
	var inputText = document.createElement("input")
	inputText.setAttribute("type","text")
	inputText.setAttribute("class","inputText")
	inputText.setAttribute("id",idString)
	inputText.setAttribute("value",value)
	line.appendChild(inputText)
	
	line.innerHTML += " " + backString + "<br>"
}

createInput("Height, between tangent lines","height",50,"m")
createInput("Diameter","diameter",2,"m")
createInput("Skirt support height","supportHeight",3,"m")
createInput("Number of plates","plateNumber",100,"")
createInput("Insulation thickness","insulationThickness",75,"mm")
createInput("Design temperature","desginTemperature",200,"°C")
createInput("Maximum allowable stress","maxStress",135,"N/mm<sup>2</sup>")
createInput("Operating pressure","operatingPressure",10,"bar (absolute)")
createInput("Joint efficiency","jointEfficiency",1,"")

createInput("<br>Fitting factor","fittingFactor",1.15,"")
createInput("Average thickness","avgThick",14,"mm")

createInput("<br>Insulation density","insulationDensity",130,"kg/m<sup>3</sup>")

createInput("<br>Dynamic wind pressure","windPress",1280,"N/m")

createInput("<br>Maximum thickness","maxThick",18,"mm")

var calcButton = document.createElement("button")
calcButton.innerHTML="Submit"
calcButton.setAttribute("onclick","calculateResult()")
document.getElementById("inputList").appendChild(calcButton)
