function openGame(url) {
  document.getElementById("screen").src = url;
}

// BUSCADOR
function filterGames() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let c of cards) {
    c.style.display = c.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  }
}

// CATEGORÍAS
function showCategory(cat) {
  let cards = document.getElementsByClassName("card");

  for (let c of cards) {
    if (cat === "all") {
      c.style.display = "block";
    } else {
      c.style.display = c.classList.contains(cat) ? "block" : "none";
    }
  }
}
