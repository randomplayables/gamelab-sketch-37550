const styles = `
  #game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  #game-container h1 {
    color: #333;
    margin-bottom: 20px;
  }
  #game-container p {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  #game-container button {
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 15px 30px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
  }
  #game-container button:hover {
    background-color: #1e40af;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const container = document.getElementById("game-container");
let score = 0;

if (container) {
  const title = document.createElement("h1");
  title.textContent = "Simple Clicker Game";
  const scoreDisplay = document.createElement("p");
  scoreDisplay.textContent = "Score: 0";
  const clickButton = document.createElement("button");
  clickButton.textContent = "Click Me!";

  container.appendChild(title);
  container.appendChild(scoreDisplay);
  container.appendChild(clickButton);

  clickButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    if (typeof window.sendDataToGameLab === "function") {
      window.sendDataToGameLab({
        event: "click",
        newScore: score,
        timestamp: new Date().toISOString()
      });
    }
  });
}