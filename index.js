const timeInput = document.getElementById("timeInput");
const letterInput = document.getElementById("letterInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const outputLetter = document.getElementById("outputLetter");

function timeDiff(t1) {
    const today = new Date().toISOString().split("T")[0];

    const d1 = new Date(`${today}T${t1}Z`);
    const nowGMT = new Date(new Date().toISOString());

    const diffMs = nowGMT - d1;
    return diffMs / 60000;
}

function calcAtisLetter(diff, letterInput){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const waves = Math.floor(diff / 30);
    const index = chars.indexOf(letterInput.value.toUpperCase());

    return chars[(index + waves) % chars.length]; 
}

submitBtn.onclick = function() {
    const difference = timeDiff(timeInput.value);
    const atisLetter = calcAtisLetter(difference, letterInput);
    output.textContent = `The current ATIS letter is: `;
    outputLetter.textContent = atisLetter;
};