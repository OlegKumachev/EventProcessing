export default class Game {
  constructor() {
    this.score = 0;
    this.missedGoblinHits = 0;
    this.maxMissedGoblinHits = 5;
    this.scoreDisplay = document.getElementById('score-display');
    this.missedHitsDisplay = document.getElementById('missed-hits-display');
    this.init();
    console.log('start game');
  }

  init() {
    this.gameContainer = document.getElementById('game-container');
    this.gameContainer.addEventListener('click', this.cellClickHandler.bind(this));
    this.updateScore();
    this.updateMissedHits();

    setInterval(() => this.createGoblin(), 1000);
  }

  cellClickHandler(event) {
    const target = event.target;

    if (target.classList.contains('goblin')) {
      this.score++;
    } else {
      this.missedGoblinHits++;
    }

    this.updateScore();
    this.updateMissedHits();

    if (this.missedGoblinHits >= this.maxMissedGoblinHits) {
      this.endGame();
    }
  }

  createGoblin() {
    if (this.missedGoblinHits >= this.maxMissedGoblinHits) {
      this.endGame();
      return; 
    }
  
    const img = document.createElement("img");
    img.src = "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
    img.alt = "Goblin";
    img.classList.add("goblin");
  
    const field = document.querySelectorAll(".cellField");
    const newPosition = Math.floor(Math.random() * field.length);
    field.forEach(cell => cell.innerHTML = ''); 
    field[newPosition].appendChild(img);
  }

  updateScore() {
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `Ваши очки: ${this.score}`;
    }
  }

  updateMissedHits() {
    if (this.missedHitsDisplay) {
      this.missedHitsDisplay.textContent = `Промахи: ${this.missedGoblinHits}`; 
    }
  }

  endGame() {
    alert(`Ваш счет: ${this.score}`);
    this.score = 0;
    this.missedGoblinHits = 0;
    this.updateScore();
    this.updateMissedHits(); 
  };
}
