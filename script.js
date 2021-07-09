import { disney } from './database/disney.js';
import { tv } from './database/tvSeries.js';

const categories = document.querySelectorAll(".category")
const categorySelect = document.querySelector(".category-select");
const mainGameBoard = document.querySelector(".main");

const btn = document.querySelectorAll(".game-btn")
const title = document.querySelector(".title")
const movie = document.querySelector(".movie")
const playAgain = document.querySelector(".again")
const resetBtn = document.querySelector(".reset-btn")

// Category select, game initialize
let activeCategory = "";
let data = "";

function chooseCategory(){
    activeCategory = this.dataset.id;
    if (activeCategory === "disney"){
        data = disney;
    } else if (activeCategory === "kids"){
        data = tv;
    }
    
    categorySelect.classList.add("display");
    mainGameBoard.classList.remove("display");

    console.log(data);
    console.log(categorySelect);
    console.log(mainGameBoard);
    console.log(data[3].title);
    drowSong();

}


// Game
let playerScore = 0
let rounds = 5
let answer = "empty";

function drowSong(){
    const database = data
    let index = Math.floor(Math.random() * database.length)

    title.textContent = database[index].title;
    movie.textContent = database[index].movie;

    answer = this.dataset.answer;
    console.log(answer);
    rounds--
    if (answer == "correct"){
        playerScore++;
    }
    
    if (rounds == 0) {
        title.textContent = `Your result: ${playerScore}/5`;
        movie.textContent = "Game over";
        resetBtn.classList.remove("display");
    } else if (rounds < 0) {
        title.textContent = "";
        movie.textContent = `Click "play again button"`;
    }


    
    console.log(playerScore);
    console.log(rounds);
};

function reset(){
    playerScore = 0
    rounds = 5
    answer = "empty";
    resetBtn.classList.add("display");
    drowSong();
}



btn.forEach(el => el.addEventListener('click', drowSong));
categories.forEach(el => el.addEventListener('click', chooseCategory));
playAgain.addEventListener('click', reset);




