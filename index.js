// Global
const URL = 'http://localhost:3000/tattoos'
let tatObj 
// DOM Selectors

// Event listeners

// Event handlers

// Render
function renderTattoos(tatArray) {
    const tatGrid = document.createElement('grid')
    tatGrid.src = tatArray.img_url
}


// Fetch
function fetchTattoo() {
    let data = fetch('http://localhost:3000/tattoos')
          .then( res => res.json() )
          .then( console.log )  //render function
}
fetchTattoo()
