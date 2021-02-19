var width = ($(window).width());
var e = true;
if(width <= 1420) {
	$(function(){
		$(".history").css("display", "none");
		$(".kulture").css("display", "none");
		$(".area").css("display", "none");
		$(".numbers").css("display", "none");
		$(".menu-but").css("display", "block");
		$(document).keydown(function(b) {
			if( b.keyCode === 27 ) {
				if(e) {
					$('.menu').css('transform', 'translateX(0%)');
				}
				else {
					$('.menu').css('transform', 'translateX(100%)');
				}
				e = !e;
			}
		});
	});
}
if(width <= 700) {
	$(function(){
		$(".history").css("display", "none");
		$(".kulture").css("display", "none");
		$(".area").css("display", "none");
		$(".numbers").css("display", "none");
		$("img.minimized").css("width", "100%");
		$("img.minimized").css("height", "100%");
		$("img.minimized").css("marginLeft", "0");
		$("img.view").css("display", "none");
		$("blockquote").css("width", "55%");
		$("blockquote").css("margin", "auto");
		$("audio").css("width", "100%");
		$("audio").css("margin", "0");
	});
}

$(window).resize(function(){
window.setTimeout('location.reload()', 500);
});

$(function(){
	$('.menu-but').click(function(){
		if(e) {
			$('.menu').css('transform', 'translateX(0%)');
		}
		else {
			$('.menu').css('transform', 'translateX(100%)');
		}
		e = !e;
	});
});

function code() {
    let str = document.forms[0][0].value;
    if (str === "")
        alert("Введите 'помощь', чтобы узнать все команды сайта");
    else if ((str === "помощь") | (str === "Помощь")) 
        alert("Для развлечения введите следующие команды: 'рандомайзер', 'арифметика'");
	else if ((str === "рандомайзер") | (str === "Рандомайзер")) {
		let num = prompt("Загадано от 0 до 100, попробуйте угадать его(для выхода введите 0):");
		let ran = Math.ceil(Math.random() * 100);
		let i = 0; 
		let p = true;
		do {
			i++;
			if(num > ran) 
                num = prompt("Многовато, нужно меньше!!!(Для выхода введите 0):");
            else if(num < ran)
                num = prompt("Маловато, нужно больше!!! (Для выхода введите 0):");	
            if((num == ran) || (num === '0'))
                p = false;				
		}
		while(p);
		if(num == ran)
            alert("В точку! Количество попыток - " + i);
	}
	else if((str === 'арифметика') | (str === 'Арифметика')) {
		let n = 0;
		let h = 10;
		let t = confirm("Хотите лёгкую арифметику (ок), или профильную (cancel):");
		if (t == true) {
		    alert("Тебе предстоит решить 10 примеров (на каждый пример не больше 5 сек)! Вам будет поставлена оценка");
		    for(let i = 0; i<10; i++) {
			    let time = new Date();
			    let h = 10;
			    if(i>4)
				    h = 100;
			    else if(i>8)
				    h = 300;
			    let a = Math.ceil(Math.random() * h);
			    let b = Math.ceil(Math.random() * h);
		        let c = prompt(a + " + " + b);
			    let time2 = new Date();
			    if((time2 - time) > 5000)
				    continue;
			    if(c == (a + b))
				    n++;
		    }
		}
		else if (t == false) {
		    alert("Тебе предстоит решить 10 примеров (на каждый пример не больше 3 сек)! Вам будет поставлена оценка");
		    for(let i = 0; i<10; i++) {
			    let time = new Date();
			    let h = 20;
			    if(i>3)
				    h = 200;
			    else if(i>8)
				    h = 330;
			    let a = Math.ceil(Math.random() * h);
			    let b = Math.ceil(Math.random() * h);
		        let c = prompt(a + " + " + b);
			    let time2 = new Date();
			    if((time2 - time) > 3000)
				    continue;
			    if(c == (a + b))
				    n++;
		    }
		}
		alert("Твоя оценка " + Math.ceil(n/2));
	}
	else if((str === 'рисовалка') | (str === 'Рисовалка')) {
	}
}

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
