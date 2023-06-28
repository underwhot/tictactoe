(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const html = document.querySelector("html");
    const boxes = document.querySelectorAll(".field__box");
    const restartBtn = document.querySelector(".field__button");
    const playerEl = document.querySelector(".field__player");
    const field = document.querySelector(".field__body");
    const boxesArr = Array.from(boxes);
    let resultArr = [];
    let move = 0;
    function start() {
        html.setAttribute("player", "one");
    }
    start();
    restartBtn.addEventListener("click", restart);
    function restart() {
        start();
        boxes.forEach((function(box) {
            box.textContent = "";
            box.classList.remove("active");
            restartBtn.classList.remove("active");
            field.classList.remove("inactive");
            resultArr = [];
            move = 0;
            playerEl.textContent = "Player One (X)";
        }));
    }
    field.addEventListener("click", (function(e) {
        if (e.target.classList.contains("field__box")) {
            if (html.getAttribute("player") === "one" && e.target.textContent === "") {
                e.target.classList.add("active");
                e.target.textContent = "X";
                html.setAttribute("player", "two");
                playerEl.textContent = "Player Two (O)";
                resultArr[boxesArr.indexOf(e.target)] = "X";
                move += 1;
            }
            if (html.getAttribute("player") === "two" && e.target.textContent === "") {
                e.target.classList.add("active");
                e.target.textContent = "O";
                html.setAttribute("player", "one");
                playerEl.textContent = "Player One (X)";
                resultArr[boxesArr.indexOf(e.target)] = "O";
                move += 1;
            }
            if (move > 8) draw();
            if (resultArr[0] === "X" && resultArr[1] === "X" && resultArr[2] === "X" || resultArr[3] === "X" && resultArr[4] === "X" && resultArr[5] === "X" || resultArr[6] === "X" && resultArr[7] === "X" && resultArr[8] === "X" || resultArr[0] === "X" && resultArr[3] === "X" && resultArr[6] === "X" || resultArr[1] === "X" && resultArr[4] === "X" && resultArr[7] === "X" || resultArr[2] === "X" && resultArr[5] === "X" && resultArr[8] === "X" || resultArr[0] === "X" && resultArr[4] === "X" && resultArr[8] === "X" || resultArr[2] === "X" && resultArr[4] === "X" && resultArr[6] === "X") winPlayerOne();
            if (resultArr[0] === "O" && resultArr[1] === "O" && resultArr[2] === "O" || resultArr[3] === "O" && resultArr[4] === "O" && resultArr[5] === "O" || resultArr[6] === "O" && resultArr[7] === "O" && resultArr[8] === "O" || resultArr[0] === "O" && resultArr[3] === "O" && resultArr[6] === "O" || resultArr[1] === "O" && resultArr[4] === "O" && resultArr[7] === "O" || resultArr[2] === "O" && resultArr[5] === "O" && resultArr[8] === "O" || resultArr[0] === "O" && resultArr[4] === "O" && resultArr[8] === "O" || resultArr[2] === "O" && resultArr[4] === "O" && resultArr[6] === "O") winPlayerTwo();
        }
    }));
    function winPlayerOne() {
        playerEl.textContent = "Player One WIN 🐱‍🐉";
        restartBtn.classList.add("active");
        field.classList.add("inactive");
    }
    function winPlayerTwo() {
        playerEl.textContent = "Player Two WIN 🐱‍👓";
        restartBtn.classList.add("active");
        field.classList.add("inactive");
    }
    function draw() {
        playerEl.textContent = "DRAW 🤷‍♂️";
        restartBtn.classList.add("active");
        field.classList.add("inactive");
    }
    window["FLS"] = false;
})();