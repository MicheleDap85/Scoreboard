let home = 0
let guest = 0

function onePointHome(){
    home +=1
    document.getElementById("home").innerText = home
    let sound = new Audio("1point.mp3");
        sound.play();
}

function twoPointHome(){
    home +=2
    document.getElementById("home").innerText = home
    let sound = new Audio("2point.mp3");
        sound.play();
}

function threePointHome(){
    home +=3
    document.getElementById("home").innerText = home
    let sound = new Audio("3point.mp3");
        sound.play();
}

function onePointGuest(){
    guest +=1
    document.getElementById("guest").innerText = guest
    let sound = new Audio("1point.mp3");
        sound.play();
}

function twoPointGuest(){
    guest +=2
    document.getElementById("guest").innerText = guest
    let sound = new Audio("2point.mp3");
        sound.play();
}

function threePointGuest(){
    guest +=3
    document.getElementById("guest").innerText = guest
    let sound = new Audio("3point.mp3");
        sound.play();
}

let totalSeconds = 12 * 60;   // 12 minuti in secondi
  let remaining = totalSeconds; // tempo che rimane
  let timerInterval = null;

  function updateDisplay() {
    let mm = String(Math.floor(remaining / 60)).padStart(2, '0');
    let ss = String(remaining % 60).padStart(2, '0');
    document.getElementById("timer").innerText = mm + ":" + ss;
  }

  function startTimer() {
    if (timerInterval) return; // se già avviato, non fare nulla
    timerInterval = setInterval(() => {
      if (remaining > 0) {
        remaining--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Tempo scaduto!");
      }
    }, 1000);
    let sound = new Audio("buzzer.mp3");
        sound.play();
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    let sound = new Audio("buzzer.mp3");
        sound.play();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remaining = totalSeconds;
    updateDisplay();
    let sound = new Audio("buzzer.mp3");
        sound.play();
  }

  updateDisplay();