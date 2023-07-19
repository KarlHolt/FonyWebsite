function select(fan){
	document.getElementById("selected").id = "";
	fan.id = "selected";

	main = document.getElementById("main");
	
	main.src =  fan.innerHTML.replaceAll(" ", "")+'.html';
}