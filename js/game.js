// alert("Óla mundo");

window.onload = initPlayerOne();

var playerOneOpt = "";
var playerTwoOpt = "";
var versusComputer = false;

function initPlayerOne(){
		var playerOne = document.querySelectorAll('.section_playerOne img');
		var playerTwo = document.querySelectorAll('.section_playerTwo img');

		for (var i = 0; i < playerOne.length; i++) {
			playerOne[i].addEventListener('click',clickOne);
			if(!versusComputer){
				playerTwo[i].addEventListener('click',clickTwo);
			}
		}

		document.querySelector('.turn').addEventListener('click',versusCumputerOption);
}

function resetClickOne(){
		playerOneOpt = "";
		var playerOne = document.querySelectorAll('.section_playerOne img');
		for (var i = 0; i < playerOne.length; i++) {
			playerOne[i].style.opacity = "0.3";
		}	
}

function resetClickTwo(){
		playerTwoOpt = "";
		var playerTwo = document.querySelectorAll('.section_playerTwo img');
		for (var i = 0; i < playerTwo.length; i++) {
			playerTwo[i].style.opacity = "0.3";
		}	
}
function clickOne(element){
		resetClickOne();
		element.target.style.opacity = "1";
		playerOneOpt = element.target.getAttribute('opt');
		if(versusComputer){
			clickTwoComputer();
		}
		comparateGo();
}

function clickTwo(element){
		resetClickTwo();
		element.target.style.opacity = "1";
		playerTwoOpt = element.target.getAttribute('opt');
		comparateGo();
}

function clickTwoComputer(element){
		resetClickTwo();
		let playerComputer = document.querySelectorAll('.section_playerTwo img');
		let optionComputer = Math.floor(Math.random()*3);
		for (var i = 0; i < playerComputer.length; i++) {
			if(optionComputer == i){
				playerComputer[i].style.opacity = "1";
				playerTwoOpt = playerComputer[i].getAttribute('opt');
			}
		}
}

function versusCumputerOption(){
	if(versusComputer){
		versusComputer = false;
	}else{
		versusComputer = true;
	}
}

function comparateGo(){
	if(playerOneOpt != "" && playerTwoOpt != ""){
		console.log(playerOneOpt);
		console.log(playerTwoOpt);

		if(playerOneOpt == "pedra"){
			if(playerTwoOpt == "papel"){
				document.querySelector('.texto_resultado').innerHTML = "Player 2 Ganhou";
			}else if(playerTwoOpt == "pedra"){
				document.querySelector('.texto_resultado').innerHTML = "Playes empataram";
			}else{
				document.querySelector('.texto_resultado').innerHTML = "Player 1 Ganhou";
			}
		}

		if(playerOneOpt == "papel"){
			if(playerTwoOpt == "papel"){
				document.querySelector('.texto_resultado').innerHTML = "Playes empataram";
			}else if(playerTwoOpt == "pedra"){
				document.querySelector('.texto_resultado').innerHTML = "Player 1 Ganhou";
			}else{
				document.querySelector('.texto_resultado').innerHTML = "Player 2 Ganhou";
			}
		}

		if(playerOneOpt == "tesoura"){
			if(playerTwoOpt == "papel"){
				document.querySelector('.texto_resultado').innerHTML = "Player 1 Ganhou";
			}else if(playerTwoOpt == "pedra"){
				document.querySelector('.texto_resultado').innerHTML = "Player 2 Ganhou";
			}else{
				document.querySelector('.texto_resultado').innerHTML = "Playes empataram";
			}
		}
		document.querySelector('.text').style.opacity = "1";
		playerOneOpt = "";
		playerTwoOpt = "";
		setTimeout(()=>{
			resetClickOne();
			resetClickTwo();
			document.querySelector('.text').style.opacity = "0";
		}, 2000);
	}
}

