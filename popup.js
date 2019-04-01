let copy;
let on;
let highlighter = true;
document.addEventListener('DomContentLoaded', function() {
	on = document.getElementById("On");
	copy = document.getElementById("Copy");
	on.addEventListener('click', clickOn);
	copy.addEventListener('click', clickCopy);
}

function clickOn(e) {
	if(on == true){
		copy.disabled=true;
		highlighter = false;
	} else {
		copy.disabled = false;
		highlighter = true;
	}

		Console.log(copy);
		Console.log(highlighter);
	//set global on to On or Off
}	

function clickCopy(e) {
	
}
