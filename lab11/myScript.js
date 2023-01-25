var xmlhttp = createRequestObject();

function createRequestObject() {
    var ro;
    var browser = navigator.appName;
    if(browser == "Microsoft Internet Explorer"){
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        ro = new XMLHttpRequest();
    }
    return ro;
}
function ValidateForm(){
						document.getElementById("currentTemp").innerHTML="";
						document.getElementById("minTemp").innerHTML="";
						document.getElementById("maxTemp").innerHTML="";
						isValid=true;
						strErrors="";
						var x=document.getElementById("txtCity").value;
						if (x ==""){
							isValid=false;
							strErrors="You must enter a name of a city ";
							
						}
						
						document.getElementById("errors").innerHTML=strErrors;
						return isValid;
		
			}
function getWeather() {
	if(ValidateForm()){
	url="http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("txtCity").value+"&units=imperial&appid=1a919cb4aa1fc537d8b9080309f03151";
	
    xmlhttp.open("get",url,true);
    xmlhttp.onreadystatechange = handleResponse;
    xmlhttp.send(null);}
	
}
function handleResponse() {
    if(xmlhttp.readyState == 4){

	var response = eval('(' +xmlhttp.responseText+ ')');;
	var cityName=document.getElementById("txtCity").value;
	if(response.message=="city not found")
	{
		document.getElementById("currentTemp").innerHTML="Sorry, no weather information is available for " +cityName;
	}
	
	var currentTemp=response.main.temp;
	var minTemp=response.main.temp_min;
	var maxTemp=response.main.temp_max;
	 document.getElementById("currentTemp").innerHTML="The current temprature in "+cityName+" is "+currentTemp+"&#8457";
	 document.getElementById("minTemp").innerHTML="the low today is "+minTemp+"&#8457";
	 document.getElementById("maxTemp").innerHTML="and the high is "+maxTemp+"&#8457";
	 
	}
    
}