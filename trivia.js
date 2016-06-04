$(document).ready(function(){
//document ready, main wrapper

var right = 0;
var wrong = 0;
var i = 30;

function timer() {
	i--;
	$('#timer').html(i);
	if(i===0){clearTimeout(counter);};
};

function reset(){
	clearTimeout(counter);
	i = 30;
};

function question1(){

	$('#content').html('Timer: <span id="timer"></span>');
	counter = setInterval(timer, 1000);
	$('#content').append('<br>Question: What element does Gray Fullbuster use from Fairy Tail?<br>');
	$('#content').append('<br><button id="answer">A: Ice</button><br>');
	$('#content').append('<br><button class="wrong">B: Fire</button><br>');
	$('#content').append('<br><button class="wrong">C: Lightning</button><br>');
	$('#content').append('<br><button class="wrong">D: Dark</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5914/fc8f631e1bc0a2ae223588a5c9c7052cfbc9f887_hq.gif">');
	setTimeout(question2, 3000);
	});
	
	
	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Ice.<br>');
	wrong +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5914/fc8f631e1bc0a2ae223588a5c9c7052cfbc9f887_hq.gif">');
	setTimeout(question2, 3000);
	});
	
	function timeout(){
	$('#content').html('Time is up! The correct answer is Ice.<br>');
	wrong +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5914/fc8f631e1bc0a2ae223588a5c9c7052cfbc9f887_hq.gif">');
	setTimeout(question2, 3000);
	};

	setTimeout(timeout, 30000);
};

function question2(){
	
	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question3, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question3, 3000);
	})

	function timeout2(){
	$('#content').html('Time is up! The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question3, 3000);
	};

	setTimeout(timeout2, 30000);
};

function question3(){
	
	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>Which anime is this opening theme song from?<br>');
	$('#content').append('<br><button class="wrong">A: Full Metal Alchemist</button><br>');
	$('#content').append('<br><button id="answer">B: One Piece</button><br>');
	$('#content').append('<br><button class="wrong">C: Bleach</button><br>');
	$('#content').append('<br><button class="wrong">D: Dragon Ball Z</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://1.bp.blogspot.com/-4VyvGrun1-o/UwU0kAzuvPI/AAAAAAAABzs/WPSxpTPSNpY/s1600/tumblr_lxlyra4EW11qcnhspo1_500.gif">');
	setTimeout(question4, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is One Piece.<br>');
	wrong +=1;
	$('#content').append('<img src="http://1.bp.blogspot.com/-4VyvGrun1-o/UwU0kAzuvPI/AAAAAAAABzs/WPSxpTPSNpY/s1600/tumblr_lxlyra4EW11qcnhspo1_500.gif">');
	setTimeout(question4, 3000);
	})

	function timeout3(){
	$('#content').html('Time is up! The correct answer is One Piece.<br>');
	wrong +=1;
	$('#content').append('<img src="http://1.bp.blogspot.com/-4VyvGrun1-o/UwU0kAzuvPI/AAAAAAAABzs/WPSxpTPSNpY/s1600/tumblr_lxlyra4EW11qcnhspo1_500.gif">');
	setTimeout(question4, 3000);
	};

	setTimeout(timeout3, 30000);
};

function question4(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>Which anime is the background image from?<br>');
	$('#content').append('<br><button class="wrong">A: Fate Stay Night</button><br>');
	$('#content').append('<br><button class="wrong">B: Tokyo Ghoul</button><br>');
	$('#content').append('<br><button class="wrong">C: Terraformers</button><br>');
	$('#content').append('<br><button id="answer">D: Fate Zero</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://k42.kn3.net/taringa/1/2/4/0/6/3/27/neox24ash/714.gif?8010">');
	setTimeout(question5, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Fate Zero.<br>');
	wrong +=1;
	$('#content').append('<img src="http://k42.kn3.net/taringa/1/2/4/0/6/3/27/neox24ash/714.gif?8010">');
	setTimeout(question5, 3000);
	})

	function timeout4(){
	$('#content').html('Time is up! The correct answer is Fate Zero.<br>');
	wrong +=1;
	$('#content').append('<img src="http://k42.kn3.net/taringa/1/2/4/0/6/3/27/neox24ash/714.gif?8010">');
	setTimeout(question5, 3000);
	};

	setTimeout(timeout4, 30000);
};

function question5(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>Who is one of the main protagonists from Magi?<br>');
	$('#content').append('<br><button class="wrong">A: Jafar</button><br>');
	$('#content').append('<br><button id="answer">B: Aladdin</button><br>');
	$('#content').append('<br><button class="wrong">C: Sinbad</button><br>');
	$('#content').append('<br><button class="wrong">D: Amon</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://images6.fanpop.com/image/photos/32700000/Morgiana-Aladdin-magi-the-labyrinth-of-magic-32767121-500-180.gif">');
	setTimeout(question6, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Aladdin.<br>');
	wrong +=1;
	$('#content').append('<img src="http://images6.fanpop.com/image/photos/32700000/Morgiana-Aladdin-magi-the-labyrinth-of-magic-32767121-500-180.gif">');
	setTimeout(question6, 3000);
	})

	function timeout5(){
	$('#content').html('Time is up! The correct answer is Aladdin.<br>');
	wrong +=1;
	$('#content').append('<img src="http://images6.fanpop.com/image/photos/32700000/Morgiana-Aladdin-magi-the-labyrinth-of-magic-32767121-500-180.gif">');
	setTimeout(question6, 3000);
	};

	setTimeout(timeout5, 30000);
};

function question6(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>From DeathNote: How does a person die if their name is written in the DeathNote?<br>');
	$('#content').append('<br><button class="wrong">A: Dehydration</button><br>');
	$('#content').append('<br><button class="wrong">B: Random accident</button><br>');
	$('#content').append('<br><button class="wrong">C: Suicide</button><br>');
	$('#content').append('<br><button id="answer">D: Heart Attack</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://media3.giphy.com/media/QNQicbzT2pFUk/giphy.gif">');
	setTimeout(question7, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Heart Attack.<br>');
	wrong +=1;
	$('#content').append('<img src="http://media3.giphy.com/media/QNQicbzT2pFUk/giphy.gif">');
	setTimeout(question7, 3000);
	})

	function timeout6(){
	$('#content').html('Time is up! The correct answer is Heart Attack.<br>');
	wrong +=1;
	$('#content').append('<img src="http://media3.giphy.com/media/QNQicbzT2pFUk/giphy.gif">');
	setTimeout(question7, 3000);
	};

	setTimeout(timeout6, 30000);
};

function question7(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>From Hellsing: What is Alucards weapon of choice?<br>');
	$('#content').append('<br><button id="answer">A: Pistols</button><br>');
	$('#content').append('<br><button class="wrong">B: Katanas</button><br>');
	$('#content').append('<br><button class="wrong">C: Claws</button><br>');
	$('#content').append('<br><button class="wrong">D: Magic</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="https://s-media-cache-ak0.pinimg.com/originals/15/57/d9/1557d94dc4564187363eeeb183b785f8.gif">');
	setTimeout(question8, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Pistols.<br>');
	wrong +=1;
	$('#content').append('<img src="https://s-media-cache-ak0.pinimg.com/originals/15/57/d9/1557d94dc4564187363eeeb183b785f8.gif">');
	setTimeout(question8, 3000);
	})

	function timeout7(){
	$('#content').html('Time is up! The correct answer is Pistols.<br>');
	wrong +=1;
	$('#content').append('<img src="https://s-media-cache-ak0.pinimg.com/originals/15/57/d9/1557d94dc4564187363eeeb183b785f8.gif">');
	setTimeout(question8, 3000);
	};

	setTimeout(timeout7, 30000);
};

function question8(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>From One Punch Man: Who is Saitamas pupil?<br>');
	$('#content').append('<br><button class="wrong">A: King</button><br>');
	$('#content').append('<br><button class="wrong">B: Speed of Sound Sonic</button><br>');
	$('#content').append('<br><button id="answer">C: Genos</button><br>');
	$('#content').append('<br><button class="wrong">D: Mumen Rider</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="https://67.media.tumblr.com/99f2067eb5d297d824da544a8a79404f/tumblr_nx5ehc1EWQ1qa94xto1_500.gif">');
	setTimeout(question9, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Genos.<br>');
	wrong +=1;
	$('#content').append('<img src="https://67.media.tumblr.com/99f2067eb5d297d824da544a8a79404f/tumblr_nx5ehc1EWQ1qa94xto1_500.gif">');
	setTimeout(question9, 3000);
	})

	function timeout8(){
	$('#content').html('Time is up! The correct answer is Genos.<br>');
	wrong +=1;
	$('#content').append('<img src="https://67.media.tumblr.com/99f2067eb5d297d824da544a8a79404f/tumblr_nx5ehc1EWQ1qa94xto1_500.gif">');
	setTimeout(question9, 3000);
	};

	setTimeout(timeout8, 30000);
};

function question9(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>From Tokyo Ghoul: What color does Kanekis hair turn?<br>');
	$('#content').append('<br><button class="wrong">A: Black</button><br>');
	$('#content').append('<br><button id="answer">B: White</button><br>');
	$('#content').append('<br><button class="wrong">C: Brown</button><br>');
	$('#content').append('<br><button class="wrong">D: Blonde</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="https://66.media.tumblr.com/e059b0bc89434d081dcc85e49ae7fac7/tumblr_nrst4rCRUk1u8bkdho1_500.gif">');
	setTimeout(question10, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is White.<br>');
	wrong +=1;
	$('#content').append('<img src="https://66.media.tumblr.com/e059b0bc89434d081dcc85e49ae7fac7/tumblr_nrst4rCRUk1u8bkdho1_500.gif">');
	setTimeout(question10, 3000);
	})

	function timeout9(){
	$('#content').html('Time is up! The correct answer is White.<br>');
	wrong +=1;
	$('#content').append('<img src="https://66.media.tumblr.com/e059b0bc89434d081dcc85e49ae7fac7/tumblr_nrst4rCRUk1u8bkdho1_500.gif">');
	setTimeout(question10, 3000);
	};

	setTimeout(timeout9, 30000);
};

function question10(){

	$('#content').html('Timer: <span id="timer"></span>');
	reset();
	counter = setInterval(timer, 1000);
	$('#content').append('<br>What is the main theme of the anime Shokugeki No Soma?<br>');
	$('#content').append('<br><button class="wrong">A: Martial Arts Fighting</button><br>');
	$('#content').append('<br><button class="wrong">B: Playing Card Competition</button><br>');
	$('#content').append('<br><button class="wrong">C: Romance</button><br>');
	$('#content').append('<br><button id="answer">D: Cooking</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5813/4580eb12cec91ed6a57b07febfee59fb96162890_hq.gif">');
	setTimeout(end, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Cooking.<br>');
	wrong +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5813/4580eb12cec91ed6a57b07febfee59fb96162890_hq.gif">');
	setTimeout(end, 3000);
	})

	function timeout10(){
	$('#content').html('Time is up! The correct answer is Cooking.<br>');
	wrong +=1;
	$('#content').append('<img src="http://pa1.narvii.com/5813/4580eb12cec91ed6a57b07febfee59fb96162890_hq.gif">');
	setTimeout(end, 3000);
	};

	setTimeout(timeout10, 30000);
};

function end(){
	$('#content').html('<br>All done, heres how you did!<br>');
	$('#content').append('<br>Correct Answers: ' + right + ' <br>');
	$('#content').append('<br>Incorrect Answers: ' + wrong + ' <br>');
	$('#content').append('<br><button id="reset">Start Over?</button>');

	$('#reset').on('click', function(){
		right = 0;
		wrong = 0;
		reset();
		question1();
	})
};

$('#start').on('click', function(){
	this.remove();
	question1();
});

});