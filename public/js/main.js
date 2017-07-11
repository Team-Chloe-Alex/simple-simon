$(document).ready(function() {

	'use strict';

	var count = 0;

    var sequence = [];

    var buttons = ['#magenta', '#violet', '#pink', '#turquiose'];

    var play = 0;

    var clicks = 0;

    function nextMove() {
    	var random = Math.floor((Math.random() * 3) + 0);
    	sequence.push(buttons[random]);
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
    	$('.button').toggleClass('active');
    	playGame();
    }

    function playGame() {
    	play = 0;
    	$('.active').off();
    	 
    	$('.active').click(function(event){
    		
    		var that = this;
    		$('#' + $(this).attr('id')).css('opacity', .4);
			setTimeout(function() {
				$('#' + $(that).attr('id')).css('opacity', 1);
			}, 300); 
			
    		if ('#' + $(this).attr('id') == sequence[play]) {
    			++play;
    		}
    		else {
    			gameOver();
    		}
    		if (play == sequence.length) {
		    	setTimeout(function(){
			    	play = 0;
			    	$('.button').toggleClass('active');
			    	++count;
		    		$('#count').html(count);
		    	}, 500, nextMove());
    		}


    	});

    }

    function gameOver() {
    	$('#countMinus').html(count-1);
    	$('#gameOver').show();
    	$('#gameOverText').show();
        document.getElementById('start').disabled = false;

    }

    $('#start').click(function(e) {
        count = 0;
        play = 0;
        sequence = [];
    	document.getElementById('start').disabled = true;
        $('#gameOver').hide();
        $('#gameOverText').hide();
    	++count;
    	$('#count').html(count);
    	nextMove();
    })

});