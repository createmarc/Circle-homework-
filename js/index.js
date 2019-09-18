//document.getElementById('doSomething').onclick = something;

//function something() {
    //console.log("I am busy doing something.");
//}

//now do it with jQuery

$('#doSomething').click(disappear);
function disappear (){
	$('#circle').hide();

}

$('#doSomething').click(appear);
function appear (){
	$('#circle').show();
}


$('#circle').hover(fade);
function fade(){
	$('#circle').fadeOut().fadeIn();

}


