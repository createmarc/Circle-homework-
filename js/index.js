//document.getElementById('doSomething').onclick = something;

//function something() {
    //console.log("I am busy doing something.");
//}

//now do it with jQuery



$('#doSomething').click(function() {
  $('#circle').toggle();  
  $('#circle').css('backgroundColor', 'blue')
  
  //click once to hide and again to show
});

$('#circle').hover(fade);
function fade(){
	$('#circle').fadeOut(3000).fadeIn(3000);
	$('#circle').css('backgroundColor', 'red')

}


