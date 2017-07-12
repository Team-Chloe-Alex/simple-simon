$(document).ready(function() {

	'use strict';

	//DECLARE VARIABLES
	//GAME LOGIC STARTS AT BOTTOM OF FILE

	var count = 0;

    var sequence = [];

    var buttons = ['#magenta', '#violet', '#pink', '#turquiose'];

    var play = 0;

    var clicks = 0;

    //RANDOMLY SELECT FROM BUTTONS[] AND PUSH TO SEQUENCE[]
    //CALL EXECUTE FUNCTION

    function nextMove() {
    	var random = Math.floor((Math.random() * 4) + 0);
    	sequence.push(buttons[random]);
    	setTimeout(function(){
    		execute();	
    	}, 500);
    }

    //ITERATE THROUGH SEQUENCE[] AND HIGHLIGHT EACH BUTTON
    //CALL PLAYGAME FUNCTION

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

    //ADD LISTENER TO BUTTONS, CHECK CLICK EVENT AGAINST SEQUENCE[]
    //IF CLICK AND SEQUENCE MATCH, CALL NEXTMOVE FUNCTION
    //ELSE CALL GAMEOVER FUNCTION

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

    //SHOW GAMEOVER GRAPHICS, ENABLE START GAME BUTTON

    function gameOver() {
    	$('#countMinus').html(count-1);
    	$('#gameOver').show();
    	$('#gameOverText').show();
        document.getElementById('start').disabled = false;
        $('#start').css('opacity', 1);

    }

    //LISTENER FOR THE START GAME BUTTON
    //INITIALIZE VARIABLES AND CALL NEXTMOVE FUNCTION

    $('#start').click(function(e) {
        count = 0;
        play = 0;
        sequence = [];
    	document.getElementById('start').disabled = true;
    	$('#start').css('opacity', .6);
        $('#gameOver').hide();
        $('#gameOverText').hide();
    	++count;
    	$('#count').html(count);
    	nextMove();
    })

});