import readlineSync from 'readline-sync';

const greetUser = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
};

export default greetUser;
