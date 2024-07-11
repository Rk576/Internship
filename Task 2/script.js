let gameOver = new Audio("mixkit-funny-fail-low-tone-2876.wav");
let gamewon= new Audio("mixkit-achievement-bell-600.wav")
let turn = "X";
let gameover = false;
//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
//function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true
            gamewon.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

        }
    })
}
const checkDraw = () => {
    let boxtexts = document.getElementsByClassName('box-text');
    for (let i = 0; i < boxtexts.length; i++) {
        if (boxtexts[i].innerText === "") {
            return false;
        }
    }
    return true;
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            checkWin();
            if (!gameover) {
                if (checkDraw()) {
                    document.getElementsByClassName("info")[0].innerText = "DRAW!";
                    gameover = true;
                    gameOver.play();
                } else {
                    turn = changeTurn();
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }
        }
    })
})


//reset button
reset.addEventListener('click', () => {
    let boxtextt = document.querySelectorAll('.box-text');
    Array.from(boxtextt).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})