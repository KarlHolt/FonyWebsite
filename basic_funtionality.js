function select(fan){
	document.getElementById("selected").id = "";
	fan.id = "selected";

	main = document.getElementById("main");	
	main.src =  fan.innerHTML.replaceAll(" ", "")+'.html';
}
document.getElementById("main").src="helloworld.html";	

fucker = 2;
big_winow = false;
function resizing_header() {
	if(window.innerWidth < 760){
		document.getElementById("dropdown").style.display = "flex";
		document.getElementById("fans").style.display = "none";
		big_winow = false;
	} else {
		big_winow = true;
		delete_menu();
		document.getElementById("dropdown").style.display = "none";
		document.getElementById("fans").style.display = "flex";
	}
}

function dropdown_menu() {
	let the_menu = document.getElementById("fans");
	the_menu.style.display = "block";
	the_menu.style.position = "absolute";
	the_menu.style.top = 0;
	the_menu.style.right = 0;
	the_menu.style.backgroundColor = "#a8956c";

	the_menu.style.borderWidth = "2px";
	the_menu.style.borderLeft = "solid";
	the_menu.style.borderBottom = "solid";
	the_menu.style.borderImage = "radial-gradient(rgb(0, 0, 0), rgb(179, 180, 179)) 1";
	document.getElementById("header").insertBefore(the_menu, document.getElementById("header").childNodes[0]);
	fucker = 0

	window.focus();
	window.addEventListener('blur',function(){
			delete_menu();
	});
}

function delete_menu() {
	if(0 < fucker && !big_winow){
		let the_menu = document.getElementById("fans");
		the_menu.style.display = "none";
		the_menu.style.backgroundColor = "transparent";
		the_menu.style.border = "0";
	}
	fucker++;
}

window.addEventListener('resize', resizing_header, true);

resizing_header();