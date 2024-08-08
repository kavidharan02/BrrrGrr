// Initial price of the burger
var wholeWheatBun = 10;

// Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

// Add event listeners for each button to toggle the state and call renderAll
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

// Function to render the active class on buttons based on state
function renderButtons() {
  document.querySelector(".btn-patty").classList.toggle("active", state.Patty);
  document.querySelector(".btn-cheese").classList.toggle("active", state.Cheese);
  document.querySelector(".btn-tomatoes").classList.toggle("active", state.Tomatoes);
  document.querySelector(".btn-onions").classList.toggle("active", state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle("active", state.Lettuce);
}

// Function to render only the items selected in the ingredients board based on state
function renderIngredientsBoard() {
  let ingredientsBoard = document.querySelector(".menu-container");
  ingredientsBoard.innerHTML = "<h3>Ingredients</h3>";
  for (let ingredient in state) {
    if (state[ingredient]) {
      let listItem = document.createElement("p");
      listItem.classList.add("items");
      listItem.textContent = ingredient;
      ingredientsBoard.appendChild(listItem);
    }
  }
}

// Function to render the price based on the selected ingredients
function renderPrice() {
  let price = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      price += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = "INR " + price;
}

// Initial render
renderAll();