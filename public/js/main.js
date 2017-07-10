$(document).ready(function() {

	'use strict';

	var count = 0;

    var sequence = [];

    var buttons = ['#magenta', '#violet', '#pink', '#turquiose'];

    function nextMove() {
    	var random = Math.floor((Math.random() * 3) + 0);
    	sequence.push(buttons[random]);
    	console.log("in nextMove and sequence equals " + sequence);
    	execute();
    }

    function execute() {
    	sequence.forEach(function(element, index, array) {
    		$(element).css('opacity', .4);
    		setTimeout(function() {
    			$(element).css('opacity', 1);
    		}, 800);
    	});
    	$('.button').toggleClass('active');
    	playGame();
    }

    function playGame() {
    	var play = 0;

    	// while (play < sequence.length) {

	    	$('.active').click(function(event){
	    		var that = this;
	    		$('#' + $(this).attr('id')).css('opacity', .4);
    			setTimeout(function() {
    				$('#' + $(that).attr('id')).css('opacity', 1);
    			}, 300); 
    		
	    		if ('#' + $(this).attr('id') == sequence[play]) {
	    			++play;
	    			console.log('Game on and sequence equals ' + sequence.length + " and play equals " + play);
	    		}
	    		else {
	    			console.log($(this).attr('id'))
	    			gameOver();
	    		}

			    if (play == sequence.length) {
			    	console.log("play = " + play);
			    	$('.button').toggleClass('active');
			    	++ count;
		    		$('#count').html(count);
		    		nextMove();
		    	}
	    	});
	 		
	    // }

    }

    function gameOver() {
    	console.log("Game over");
    	return;
    }

    $('#start').click(function(e) {
    	++ count;
    	$('#count').html(count);
    	nextMove();
    })

});