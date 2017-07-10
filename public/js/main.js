$(document).ready(function() {

	'use strict';

	var count = 0;

    var sequence = [];

    var buttons = ['#magenta', '#violet', '#pink', '#turquiose'];

    function nextMove() {
    	var random = Math.floor((Math.random() * 3) + 0);
    	sequence.push(buttons[random]);
    	execute();
    }

    function execute() {
    	sequence.forEach(function(element, index, array) {
    		$(element).css('opacity', .4);
    		setTimeout(function() {
    			$(element).css('opacity', 1);
    		}, 1000);
    	});
    	$('.button').toggleClass('active');
    }

    function playGame() {
    	var play = 0;

    	$('.active').click(function(e){
    		if (e.target.id == sequence[play]) {
    			++play;
    		}
    		else {
    			gameOver();
    		}
    	})
    }

    function gameOver() {
    	
    }

    $('#start').click(function(e) {
    	++ count;
    	$('#count').html(count);
    	nextMove();
    })

});