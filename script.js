$(document).ready(function(){
	// tworzenie szkicownika
	szkicownik();

	// rysownanie
	$(".box").on("mouseenter", function(){
		$(this).addClass('hoovered');
	});
	// czyszczenie szkicownika za pomoca buttona
	$(".container").on('click', '.clear', function(){
		console.log("słucha clear")
		$('.hoovered').removeClass('hoovered');
	});
	$(".container").on('click', '.new', function(){
		console.log("słucha new");
		location.reload();
	});
	$(".container").on('click', '.save', function(){
		print($('.sketch'));
	});

});

var clearSzkic = function(){
	$('.box').remove();
}

var szkicownik = function(){
	var liczba = prompt("Please setup box dimensions. Please give a number from 1 to 50");	
	var liczba_pol = liczba * liczba;
	var wymiary = 200 + (liczba * 10) + 'px';
	console.log(wymiary)
	$('.container').css({'width': wymiary, 'height': wymiary});
	while(liczba_pol > 0){
		$('.sketch').append('<div class="box"</div>');
		liczba_pol -= 1;
	}
}