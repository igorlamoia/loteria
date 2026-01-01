const GAMES = [
  // Folha 1
  [1, 8, 15, 33, 35, 40],
  [4, 10, 11, 27, 42, 59],
  [3, 6, 13, 35, 37, 41],
  [13, 18, 32, 37, 54, 58],
  [3, 19, 25, 27, 45, 48],
  [2, 9, 23, 37, 42, 59],
  [4, 9, 24, 36, 39, 55],
  [1, 14, 18, 24, 38, 56],
  [3, 11, 25, 44, 52, 58],
  [12, 17, 28, 34, 40, 46],
  [13, 19, 21, 36, 40, 53],
  [5, 17, 20, 33, 41, 56],
  [4, 7, 25, 26, 38, 39],
  [7, 9, 13, 27, 32, 36],
  [1, 7, 21, 26, 34, 48],
  [8, 11, 29, 31, 37, 59],
  [3, 28, 31, 34, 35, 57],
  [20, 26, 33, 46, 54, 60],

  // Folha 2
  [5, 13, 15, 26, 36, 60],
  [10, 12, 24, 31, 44, 56],
  [5, 9, 16, 30, 35, 56],
  [1, 11, 23, 33, 44, 55],
  [3, 14, 25, 26, 37, 47],
  [1, 3, 4, 26, 44, 56],
  [2, 10, 11, 13, 27, 28],
  [7, 14, 23, 32, 41, 56],
  [5, 10, 24, 47, 51, 52],
  [1, 4, 5, 15, 23, 24],
  [1, 4, 16, 24, 37, 38],
  [4, 5, 15, 25, 26, 38],
  [3, 14, 21, 30, 35, 57],
  [9, 18, 25, 33, 42, 56],
  [7, 17, 28, 32, 33, 45],
  [3, 19, 27, 42, 46, 49],
  [4, 8, 11, 33, 39, 45],
  [9, 12, 25, 28, 30, 58],

  // Folha 3
  [5, 17, 30, 48, 50, 51],
  [4, 16, 21, 22, 24, 36],
  [8, 17, 19, 36, 44, 57],
  [7, 13, 25, 28, 33, 47],
  [7, 9, 13, 17, 43, 54],
  [7, 13, 21, 27, 33, 46],
  [5, 10, 34, 37, 38, 53],
  [4, 10, 27, 30, 32, 33],
  [8, 16, 23, 35, 42, 54],
  [2, 18, 20, 30, 51, 58],
  [7, 14, 23, 31, 42, 58],
  [9, 16, 23, 51, 55, 60],
  [12, 18, 27, 36, 48, 54],
  [13, 17, 21, 36, 48, 54],
  [5, 18, 23, 40, 45, 54],
  [7, 14, 23, 38, 42, 59],
  [5, 18, 27, 31, 46, 53],
  [9, 16, 24, 35, 48, 57],

  // Folha 4
  [1, 4, 12, 37, 47, 54],
  [3, 16, 17, 25, 47, 53],
  [22, 33, 45, 48, 51, 57],
  [4, 7, 14, 29, 52, 59],
  [4, 13, 26, 27, 33, 55],
  [3, 7, 29, 33, 42, 58],
  [9, 11, 14, 38, 44, 57],
  [18, 22, 37, 45, 51, 59],
  [6, 13, 15, 28, 42, 45],
  [4, 13, 15, 22, 27, 28],
  [1, 13, 32, 35, 47, 52],
  [3, 5, 10, 25, 39, 40],
  [2, 6, 10, 19, 25, 44],
  [4, 14, 24, 26, 33, 49],
  [3, 4, 7, 14, 20, 27],
  [10, 13, 28, 45, 51, 59],

  // Jogos da imagem enviada agora
  [6, 27, 32, 36, 54, 60],
  [2, 5, 15, 28, 33, 40],
  [12, 18, 24, 31, 37, 44],
  [17, 18, 31, 37, 47, 56],
  [3, 13, 19, 20, 40, 52],
  [14, 19, 22, 25, 45, 46],
  [7, 14, 23, 31, 42, 56],
  [5, 12, 28, 37, 44, 59],
  [3, 19, 26, 38, 47, 60],
  [7, 14, 22, 25, 49, 50],
  [10, 14, 20, 22, 49, 50],
  [12, 20, 25, 26, 31, 50],
];

function getHits(numbers) {
  const results = [];
  for (let i = 0; i < GAMES.length; i++) {
    const game = GAMES[i];
    let hits = 0;
    for (let j = 0; j < game.length; j++) if (numbers.includes(game[j])) hits++;
    results.push({ game: i + 1, hits });
  }
  return results;
}

function separeteByHits(results) {
  const separated = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };
  for (const result of results) separated[result.hits].push(result.game);

  return separated;
}

function wins(numbers) {
  const hits = getHits(numbers);
  const GAMES = separeteByHits(hits);
  return GAMES;
}

const wePlayed = document.querySelector(".we-played");
const resultsContainer = document.getElementById("results-container");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numbers = [];
  const inputNames = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
  };
  for (let i = 1; i <= 6; i++) {
    const input = document.getElementById(inputNames[i]);
    const value = parseInt(input.value, 10);
    if (isNaN(value) || value < 1 || value > 60) {
      alert(`Por favor, insira um número válido entre 1 e 60 no campo ${i}.`);
      return;
    }
    numbers.push(value);
  }
  if (new Set(numbers).size !== numbers.length) {
    alert("Por favor, insira números únicos.");
  }

  const gamesResult = wins(numbers);

  if (gamesResult[6].length) {
    resultsContainer.innerHTML = `<h3>Parabéns! GANHAMU PQP AAEEEEEEEEEEEEEEEEE: ${gamesResult[6].join(
      ", "
    )}</h3>`;
  } else {
    resultsContainer.innerHTML = `<h3>PERDEMO! Fomos jogar no vasco novamente. PQ DEUS ODEIA O VASCO?</h3>`;
  }
  resultsContainer.innerHTML += `
  <p>Jogos com 6 acertos: ${gamesResult[6].length} Jogos: (${gamesResult[6].join(
    ", "
  )})</p>
  <p>Jogos com 5 acertos: ${gamesResult[5].length} Jogos: (${gamesResult[5].join(
    ", "
  )})</p>
  <p>Jogos com 4 acertos: ${gamesResult[4].length} Jogos: (${gamesResult[4].join(
    ", "
  )})</p>
  <p>Jogos com 3 acertos: ${gamesResult[3].length} Jogos: (${gamesResult[3].join(
    ", "
  )})</p>
  <p>Jogos com 2 acertos: ${gamesResult[2].length} Jogos: (${gamesResult[2].join(
    ", "
  )})</p>
    <p>Jogos com 1 acerto: ${gamesResult[1].length} Jogos: (${gamesResult[1].join(
    ", "
  )})</p>
  `;
  // rolar pra baixo
  resultsContainer.scrollIntoView({ behavior: "smooth" });

});
