$(document).ready(function() {

	'use strict';

	var count = 0;

    var sequence = [];

    var buttons = ['#magenta', '#violet', '#pink', '#turquiose'];

    var play = 0;

    function nextMove() {
    	var random = Math.floor((Math.random() * 3) + 0);
    	sequence.push(buttons[random]);
    	console.log("in nextMove and sequence equals " + sequence);
    	setTimeout(function(){
    		execute();	
    	}, 500);
    }

    function execute() {
    	for (var i = 0; i < sequence.length; ++i) {
    		(function(i){
    			setTimeout(function(){
			    	$(sequence[i]).css('opacity', .4);
			    	setTimeout(function() {
			    		$(sequence[i]).css('opacity', 1);
			    	}, 500);
			    }, 800 * i);
	    	}(i));
	    }
    	console.log('in execute and sequence equals ' + sequence);
    	$('.button').toggleClass('active');
    	playGame();
    }

    function playGame() {
    	play = 0;

    	$('.active').click(function(event){
    		var that = this;
    		$('#' + $(this).attr('id')).css('opacity', .4);
			setTimeout(function() {
				$('#' + $(that).attr('id')).css('opacity', 1);
			}, 300); 
		
    		if ('#' + $(this).attr('id') == sequence[play]) {
    			++play;
    			console.log('adding 1 to play, play equals ' + play);
    		}
    		else {
    			console.log($(this).attr('id'))
    			gameOver();
    		}

    		if (play == sequence.length) {
		    	setTimeout(function(){
			    	console.log("play = sequence? ... play = " + play + " and sequence = " + sequence.length);
			    	play = 0;
			    	$('.button').toggleClass('active');
			    	++count;
		    		$('#count').html(count);
		    	}, 500, nextMove());
    		}

    	});

    }

    function gameOver() {
    	console.log("Game over");
    	$('.button').toggleClass('active');
    	return false;
    }

    $('#start').click(function(e) {
    	document.getElementById('start').disabled = true;
    	++count;
    	$('#count').html(count);
    	nextMove();
    })

});