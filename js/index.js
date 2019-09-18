//document.getElementById('doSomething').onclick = something;

//function something() {
    //console.log("I am busy doing something.");
//}

//now do it with jQuery



$('#doSomething').click(function() {
  $('#circle').toggle();  
  //click once to fade in and again to fade out
});

$('#circle').hover(fade);
function fade(){
	$('#circle').fadeOut().fadeIn();

}


