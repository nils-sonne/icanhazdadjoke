"use strict";

// Variables
var jokeEl = document.getElementById("joke");
var jokeBtn = document.getElementById('jokeBtn'); // Functions

jokeBtn.addEventListener('click', function changeJoke() {
  generateJoke();
});

function generateJoke() {
  var config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  fetch('https://icanhazdadjoke.com', config).then(function (response) {
    return response.json();
  }).then(function (data) {
    jokeEl.innerHTML = data.joke;
  });
}