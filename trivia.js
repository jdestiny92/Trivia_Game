$(document).ready(function(){
//document ready, main wrapper

var right = 0;
var wrong = 0;
function question1(){

	$('#content').html('Timer: ');
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
	})

};

function question2(){
	$('#content').html('Timer: ');
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
};

function question3(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question4, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question4, 3000);
	})
};

function question4(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question5, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question5, 3000);
	})
};

function question5(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question6, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question6, 3000);
	})
};

function question6(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question7, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question7, 3000);
	})
};

function question7(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question8, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question8, 3000);
	})
};

function question8(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question9, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question9, 3000);
	})
};

function question9(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question10, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(question10, 3000);
	})
};

function question10(){
	$('#content').html('Timer: ');
	$('#content').append('<br>Who is the rival to the main protagonist from Naruto?<br>');
	$('#content').append('<br><button class="wrong">A: Rock Lee</button><br>');
	$('#content').append('<br><button class="wrong">B: Neji</button><br>');
	$('#content').append('<br><button id="answer">C: Sasuke</button><br>');
	$('#content').append('<br><button class="wrong">D: Kiba</button>');

	$('#answer').on('click', function(){
	$('#content').html('You are correct!<br>');
	right +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(end, 3000);
	});

	$('.wrong').on('click', function(){
	$('#content').html('Sorry that is incorrect. The correct answer is Sasuke.<br>');
	wrong +=1;
	$('#content').append('<img src="http://data.whicdn.com/images/21347852/original.gif">');
	setTimeout(end, 3000);
	})
};

function end(){
	$('#content').html('<br>All done, heres how you did!<br>');
	$('#content').append('<br>Correct Answers: ' + right + ' <br>');
	$('#content').append('<br>Incorrect Answers: ' + wrong + ' <br>');
	$('#content').append('<br><button id="reset">Start Over?</button>');

	$('#reset').on('click', function(){
		right = 0;
		wrong = 0;
		question1();
	})
};

$('#start').on('click', function(){
	this.remove();
	question1();
});

});