// tagged template literals 
// shift()  shodo matro 1st value ta dhore niye ashe

function modifier (strings, ...values){
	const m = strings.reduce((prevValue, CurrentValue) => {	
		return prevValue + CurrentValue + (values.length ? 'Mr.' + values.shift() : '')
	}, "")
	return m
}

const player1 = 'Sakib';
const player2 = 'Tamim';

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);

