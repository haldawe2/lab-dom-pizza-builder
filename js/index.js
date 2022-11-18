// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

//NOTE: Used different selector for practise purposes
function renderMushrooms() {
  const mushArr = document.getElementsByClassName('mushroom');
  for (let i = 0; i < mushArr.length; i++) {
    if (state.mushrooms) {
      mushArr[i].style.visibility = 'visible';
    } else {
      mushArr[i].style.visibility = 'hidden';
    }
  }
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceItem = document.querySelector('.sauce');
  if (state.whiteSauce && !sauceItem.classList.contains('sauce-white')) {
    sauceItem.classList.toggle('sauce-white');
  }
  if (!state.whiteSauce && sauceItem.classList.contains('sauce-white')) {
    sauceItem.classList.toggle('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustItem = document.querySelector('.crust');
  if (
    state.glutenFreeCrust &&
    !crustItem.classList.contains('crust-gluten-free')
  ) {
    crustItem.classList.toggle('crust-gluten-free');
  }
  if (
    !state.glutenFreeCrust &&
    crustItem.classList.contains('crust-gluten-free')
  ) {
    crustItem.classList.toggle('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (
    state.pepperoni &&
    !document.querySelector('.btn-pepperoni').classList.contains('active')
  ) {
    document.querySelector('.btn-pepperoni').classList.toggle('active');
  }
  if (
    !state.pepperoni &&
    document.querySelector('.btn-pepperoni').classList.contains('active')
  ) {
    document.querySelector('.btn-pepperoni').classList.toggle('active');
  }
  if (
    state.mushrooms &&
    !document.querySelector('.btn-mushrooms').classList.contains('active')
  ) {
    document.querySelector('.btn-mushrooms').classList.toggle('active');
  }
  if (
    !state.mushrooms &&
    document.querySelector('.btn-mushrooms').classList.contains('active')
  ) {
    document.querySelector('.btn-mushrooms').classList.toggle('active');
  }
  if (
    state.greenPeppers &&
    !document.querySelector('.btn-green-peppers').classList.contains('active')
  ) {
    document.querySelector('.btn-green-peppers').classList.toggle('active');
  }
  if (
    !state.greenPeppers &&
    document.querySelector('.btn-green-peppers').classList.contains('active')
  ) {
    document.querySelector('.btn-green-peppers').classList.toggle('active');
  }
  if (
    state.whiteSauce &&
    !document.querySelector('.btn-sauce').classList.contains('active')
  ) {
    document.querySelector('.btn-sauce').classList.toggle('active');
  }
  if (
    !state.whiteSauce &&
    document.querySelector('.btn-sauce').classList.contains('active')
  ) {
    document.querySelector('.btn-sauce').classList.toggle('active');
  }
  if (
    state.glutenFreeCrust &&
    !document.querySelector('.btn-crust').classList.contains('active')
  ) {
    document.querySelector('.btn-crust').classList.toggle('active');
  }
  if (
    !state.glutenFreeCrust &&
    document.querySelector('.btn-crust').classList.contains('active')
  ) {
    document.querySelector('.btn-crust').classList.toggle('active');
  }
}

function renderPrice() {
  let valuePrice = 10;
  let arrList = document.querySelector('.price').getElementsByTagName('li');
  if (state.pepperoni) {
    arrList[0].style.display = 'block';
    valuePrice += 1;
  } else {
    arrList[0].style.display = 'none';
  }
  if (state.mushrooms) {
    arrList[1].style.display = 'block';
    valuePrice += 1;
  } else {
    arrList[1].style.display = 'none';
  }
  if (state.greenPeppers) {
    arrList[2].style.display = 'block';
    valuePrice += 1;
  } else {
    arrList[2].style.display = 'none';
  }
  if (state.whiteSauce) {
    arrList[3].style.display = 'block';
    valuePrice += 3;
  } else {
    arrList[3].style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    arrList[4].style.display = 'block';
    valuePrice += 5;
  } else {
    arrList[4].style.display = 'none';
  }
  document.getElementsByTagName('strong')[0].innerHTML = `$${valuePrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

//NOTE: Used different selector for practise purposes
document
  .getElementsByClassName('btn-mushrooms')[0]
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
