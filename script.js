const words = [
    "mango", "grape", "table", "chair", "horse", "bread", "plant", "drink", "snake", "cloud",
    "zebra", "mouse", "rings", "stone", "flame", "space", "sugar", "wheat", "light", "tiger",
    "ocean", "piano", "gravy", "block", "frost", "smile", "crown", "heart", "flute", "trace",
    "flock", "brisk", "glove", "charm", "shark", "vices", "twist", "crisp", "plain", "blaze",
    "sting", "dough", "float", "storm", "crane", "broke", "daisy", "noble", "grand", "swift",
    "fresh", "frown", "swept", "torch", "scarf", "climb", "glaze", "shout", "draft", "pouch",
    "brick", "trunk", "swore", "chase", "brace", "drape", "stark", "cabin", "flair", "flick",
    "sworn", "scout", "drain", "grasp", "pouch", "mirth", "close", "straw", "snout", "chime",
    "froze", "gleam", "spine", "quilt", "pluck", "wrack", "slant", "trove", "prank", "crash",
    "kings", "latch", "vault", "brave", "slick", "draft", "faint", "wrist", "crisp", "jacks",
    "blink", "grasp", "quack", "plume", "sting", "throb", "swarm", "piano", "spout", "blunt"
];

const gamecolumn = ["A", "B", "C", "D", "E"];
let selectedword;
let gamerow = 1;
let health = 5;

function GameStart() {
    selectedword = words[Math.floor(Math.random() * words.length)];
}

function ShowGuess(row, guess) {
    document.getElementById(`row${row}A`).innerText = guess[0].toUpperCase();
    document.getElementById(`row${row}B`).innerText = guess[1].toUpperCase();
    document.getElementById(`row${row}C`).innerText = guess[2].toUpperCase();
    document.getElementById(`row${row}D`).innerText = guess[3].toUpperCase();
    document.getElementById(`row${row}E`).innerText = guess[4].toUpperCase();
}

function Checker(index, guess) {
    let inputlocation = `row${gamerow}${gamecolumn[index]}`; 
    let input = document.getElementById(inputlocation);

    if (guess[index] === selectedword[index]) {
        input.id = "correct"; 
    } else if ((guess[index] === selectedword[0] && index !== 0) || (guess[index] === selectedword[1] && index !== 1) || (guess[index] === selectedword[2] && index !== 2) || (guess[index] === selectedword[3] && index !== 3) || (guess[index] === selectedword[4] && index !== 4))    
     {
        input.id = "misplaced"; 
    } else {
        input.id = "nowhere"; 
    }
}

function LetsSee() {
    let input = prompt('Guess The Word');

    if (input == null){
        return;
    }
    if (input.length !== 5) {
        alert('Guess must be 5 letters!');
        return;
    }
    if (input[0] == input [1] || input[0]== input[2]||input[0]==input[3]||input[0]==input[4]||input[1]==input[2]||input[1]==input[3]||input[1]==input[4]||input[2]==input[3]||input[2]==input[4]||input[3]==input[4]){
        alert('Word must not contain two letters!');
        return;
    }
    if (input[0] == " " || input[1] == " " || input [2] == " " || input [3] == " " || input [4] == " "){
        alert('Word must not contain spaces');
        return;
    }

    input.toUpperCase();

    ShowGuess(gamerow, input);

    Checker(0, input);
    Checker(1, input);
    Checker(2, input);
    Checker(3, input);
    Checker(4, input);


    if (input === selectedword) {
        alert('Congrats! You guessed the word!');
        return;
    }

    gamerow++;
    health --;

    if (health < 1) {
        alert(`Game Over! The word was: ${selectedword}`);
    }
}
