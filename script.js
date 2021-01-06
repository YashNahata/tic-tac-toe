let check=true;
let grid=[];
let win_check=0;
let count=0;
let player1=0,player2=0;
let first_move=true;
function listen(id){
	count++;
	let c=document.getElementById(id);
	if(c.innerHTML!=""||win_check==1||win_check==2)
		return;
	if(check==true){
		c.innerHTML='X';
		c.classList.add("x");
		document.getElementById('move-2').innerHTML="Your Move";
		document.getElementById('move-1').innerHTML="";
		grid[id-1]='X';
		check=false;
		winCheck();
		if(win_check==1){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Game Over X wins");
		}
		else if(win_check==2){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Game Over O wins");
		}
		else if(count==9&&win_check==0){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Draw");
		}
		else
			console.log("cont");
	}
	else{
		c.innerHTML='O';
		c.classList.add("o");
		document.getElementById('move-1').innerHTML="Your Move";
		document.getElementById('move-2').innerHTML="";
		grid[id-1]='O';
		check=true;
		winCheck();
		if(win_check==1){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Game Over");
		}
		else if(win_check==2){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Game Over O wins");
		}
		else if(count==9&&win_check==0){
			document.getElementById('move-1').innerHTML="";
			document.getElementById('move-2').innerHTML="";
			document.getElementById('score-1').innerHTML=player1;
			document.getElementById('score-2').innerHTML=player2;
			console.log("Draw");
		}
		else
			console.log("cont");
	}
}
function winCheck(){
		if(grid[0]=='X'&&grid[1]=='X'&&grid[2]=='X'){
			win_check=1;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('2').classList.add('change-color-win');
			document.getElementById('3').classList.add('change-color-win');
			player1++;
		}
		else if(grid[3]=='X'&&grid[4]=='X'&&grid[5]=='X'){
			win_check=1;
			document.getElementById('4').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('6').classList.add('change-color-win');
			player1++;
		}
		else if(grid[6]=='X'&&grid[7]=='X'&&grid[8]=='X'){
			win_check=1;
			document.getElementById('7').classList.add('change-color-win');
			document.getElementById('8').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player1++;
		}
		else if(grid[0]=='X'&&grid[3]=='X'&&grid[6]=='X'){
			win_check=1;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('4').classList.add('change-color-win');
			document.getElementById('7').classList.add('change-color-win');
			player1++;
		}
		else if(grid[1]=='X'&&grid[4]=='X'&&grid[7]=='X'){
			win_check=1;
			document.getElementById('2').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('8').classList.add('change-color-win');
			player1++;
		}
		else if(grid[2]=='X'&&grid[5]=='X'&&grid[8]=='X'){
			win_check=1;
			document.getElementById('3').classList.add('change-color-win');
			document.getElementById('6').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player1++;
		}
		else if(grid[0]=='X'&&grid[4]=='X'&&grid[8]=='X'){
			win_check=1;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player1++;
		}
		else if(grid[2]=='X'&&grid[4]=='X'&&grid[6]=='X'){
			win_check=1;
			document.getElementById('3').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('7').classList.add('change-color-win');
			player1++;
		}
		else if(grid[0]=='O'&&grid[1]=='O'&&grid[2]=='O'){
			win_check=2;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('2').classList.add('change-color-win');
			document.getElementById('3').classList.add('change-color-win');
			player2++;
		}
		else if(grid[3]=='O'&&grid[4]=='O'&&grid[5]=='O'){
			win_check=2;
			document.getElementById('4').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('6').classList.add('change-color-win');
			player2++;
		}
		else if(grid[6]=='O'&&grid[7]=='O'&&grid[8]=='O'){
			win_check=2;
			document.getElementById('7').classList.add('change-color-win');
			document.getElementById('8').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player2++;
		}
		else if(grid[0]=='O'&&grid[3]=='O'&&grid[6]=='O'){
			win_check=2;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('4').classList.add('change-color-win');
			document.getElementById('7').classList.add('change-color-win');
			player2++;
		}
		else if(grid[1]=='O'&&grid[4]=='O'&&grid[7]=='O'){
			win_check=2;
			document.getElementById('2').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('8').classList.add('change-color-win');
			player2++;
		}
		else if(grid[2]=='O'&&grid[5]=='O'&&grid[8]=='O'){
			win_check=2;
			document.getElementById('3').classList.add('change-color-win');
			document.getElementById('6').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player2++;
		}
		else if(grid[0]=='O'&&grid[4]=='O'&&grid[8]=='O'){
			win_check=2;
			document.getElementById('1').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('9').classList.add('change-color-win');
			player2++;
		}
		else if(grid[2]=='O'&&grid[4]=='O'&&grid[6]=='O'){
			win_check=2;
			document.getElementById('3').classList.add('change-color-win');
			document.getElementById('5').classList.add('change-color-win');
			document.getElementById('7').classList.add('change-color-win');
			player2++;
		}
		else
			win_check=0;
}
function newGame(){
	win_check=0;
	grid=[];
	count=0;
	check=!first_move;
	first_move=!first_move;
	document.getElementById('1').innerHTML="";
	document.getElementById('2').innerHTML="";
	document.getElementById('3').innerHTML="";
	document.getElementById('4').innerHTML="";
	document.getElementById('5').innerHTML="";
	document.getElementById('6').innerHTML="";
	document.getElementById('7').innerHTML="";
	document.getElementById('8').innerHTML="";
	document.getElementById('9').innerHTML="";
	document.getElementById('1').classList.remove('change-color-win');
	document.getElementById('2').classList.remove('change-color-win');
	document.getElementById('3').classList.remove('change-color-win');
	document.getElementById('4').classList.remove('change-color-win');
	document.getElementById('5').classList.remove('change-color-win');
	document.getElementById('6').classList.remove('change-color-win');
	document.getElementById('7').classList.remove('change-color-win');
	document.getElementById('8').classList.remove('change-color-win');
	document.getElementById('9').classList.remove('change-color-win');
	if(check==false){
		document.getElementById('move-2').innerHTML="Your Move";
		document.getElementById('move-1').innerHTML="";
	}
	else{
		document.getElementById('move-2').innerHTML="";
		document.getElementById('move-1').innerHTML="Your Move";
	}
}