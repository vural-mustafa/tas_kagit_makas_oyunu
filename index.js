const options = ["tas", "kagit", "makas"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       alert("Berabere!")
    } else if (
        (playerSelection === "tas" && computerSelection === "makas") ||
        (playerSelection === "kagit" && computerSelection === "tas") ||
        (playerSelection === "makas" && computerSelection === "kagit")
    ) {
        alert("Sen Kazandın!")
    } else {
     alert("Malesef kazamadınız!")
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        const resultDiv = document.querySelector(".result");
        resultDiv.textContent = `Sen Seçtin ${playerSelection}. Bilgisayar seçti ${computerSelection}. ${result}`;
    });
});
