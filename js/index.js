// Variables
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById('jokeBtn');

// Functions
jokeBtn.addEventListener('click', function changeJoke() {
    generateJoke();
})


function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    });
}