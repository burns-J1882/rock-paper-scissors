//player clicks button - info is stored
//event listener, calls playRound w/ correct play selection
//computer selects random choice
//compare the two (return win loss or draw)
//output the users choice to the DOM
//output computers random choice to the DOM
//return the winner to the DOM
//essentially turn the console.log/s to DOM methods

const choices = [ 'rock', 'paper', 'scissors' ];
let win = 0;
let loss = 0;
let draw = 0;


function computerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}
const buttons = document.querySelectorAll('button'); //this makes the node list of all buttons
//forEach method iterates the function to be applied over each button
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let user = button.id;
		let computer = computerChoice();
        let round = (win+loss+draw);//the counter intializes at 0
		if (user == computer && round < 5) {
			draw++;
			result = `its a tie, the score is W:${win}, D:${draw}, L:${loss}`;
			const output = document.createElement('p');
			output.classList.add('results');
			output.textContent = result;
			container.appendChild(output);
            console.log(round);
		} else if (
			(user == 'rock' && computer == 'scissors' && round < 5) ||
			(user == 'paper' && computer == 'rock' && round < 5) ||
			(user == 'scissors' && computer == 'rock' && round < 5)
		) {
			win++;
			result = `${user} beats ${computer}, the score is W:${win}, D:${draw}, L:${loss}`;
			const output = document.createElement('p');
			output.classList.add('results');
			output.textContent = result;
			container.appendChild(output);
            console.log(round);
			//console.log(`${user} beats ${computer} you win!`);
		} else if (round < 5){
			loss++;
            result = `${computer} beats ${user},the score is W:${win}, D:${draw}, L:${loss}`;
            const output = document.createElement('p');
			output.classList.add('results');
			output.textContent = result;
			container.appendChild(output);
            console.log(round);
			//console.log(`${computer} beats ${user}, You lose!`);
		} else {
            console.log('GAME OVER')
            const endGame = document.createElement('p');
            endGame.classList.add('fs');
            endGame.textContent = `GAME OVER - Your final scores are W:${win}, D:${draw}, L:${loss}`;
            container.appendChild(endGame);
        }
	});
});

const container = document.querySelector('.container');


/* example of a DOM adjustment
result = 'its a tie';
const output = document.createElement('p');
output.classList.add('results');
output.textContent = result;
container.appendChild(output);
*/
