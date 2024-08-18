
function rollDice(){

    const numOfDice = document.getElementById("nDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0 ; i < numOfDice ; i++){
        const value = Math.floor(Math.random() *6 ) +1;
        values.push(value);
        images.push(`<img src="Dice/${value}.png" height="100" width="100">`);
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}
