var width = ($(window).width());
var e, el = true;
var l = false; 
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
if(width <= 1080) {
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

$(function(){
	$('h1').click(function(){
			alert("Введите 'жюри' в строку кода");
	});
});

function code() {
    let str = document.forms["s"]["ss"].value;
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
	else if((str === 'Жюри') | (str === 'жюри')) {
		alert('Приветствую Вас, уважаемые жюри конкурса "Крит"');
		alert("Я представляю свой сайт, посвящённый 100 летию Республики Башкортстан");
		alert("Здесь есть: эффекты jqury, строка кода, адаптивный дизайни многое другое!");
	}
}

$(function(){
	$('p').click(function(){
		if(e){
			$('footer').append('<a id="aaa" href="game.html">Игра</a>');
			$(".proverca").css("display", "block");
		}
		else {
			$('a#aaa').remove();
			$(".proverca").css("display", "none");
		}
		e = !e;
	});
});

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
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

function check() {
	var result = "";
    var v1 = 0;
    var choice;
    let q1 = document.forms['quiz'].elements['q1'];
    let q2 = document.forms['quiz'].elements['q2'];
    let q3 = document.forms['quiz'].elements['q3'];
    let q4 = document.forms['quiz'].elements['q4'];
    let q5 = document.forms['quiz'].elements['q5'];
    let q6 = document.forms['quiz'].elements['q6'];
    let q7 = document.forms['quiz'].elements['q7'];
    let q8 = document.forms['quiz'].elements['q8'];
    let q9 = document.forms['quiz'].elements['q9'];
    let q10 = document.forms['quiz'].elements['q10'];
    if (q1[1].checked) {
        v1++;
    }
    if (q2[3].checked) {
        v1++;
    }
    if (q3[3].checked) {
        v1++;
    }
    if (q4[0].checked) {
        v1++;
    }
    if (q5[2].checked) {
        v1++;
    }
    if (q6[1].checked) {
        v1++;
    }
    if (q7[1].checked) {
        v1++;
    }
    if (q8[3].checked) {
        v1++;
    }
    if (q9[0].checked) {
        v1++;
    }
    if (q10[3].checked) {
        v1++;
    }
    v1 /= 2;
    if(v1.toFixed()<3) {
    	alert("Плохо знаете материал, оценка неудовлетворительная");
    }
    else {
    alert("Ваша оценка "+v1.toFixed());
	}
}

$(function(){
	$('.test').click(function(){
		if(e) {
			$('form.q').css('display', 'block');
		}
		else {
			$('form.q').css('display', 'none');
		}
		e = !e;
	});
});