// 1. Fetch
// 2. getting the data / For each
// 3. Event Listener to for each catagories & DOM Elements
// 4. appending the data

// Global
const URL = 'http://localhost:3000/tattoos'
var tatObj 

// DOM Selectors
const traditional = document.querySelector("#traditional")

// Fetch
function fetchTattoo() {
    let data = fetch('http://localhost:3000/tattoos')
          .then( res => res.json() )
          .then( data => {
            tatObj=data
            console.log(tatObj)} )  //render function | data => tatObj
}
fetchTattoo()

function renderTattoos(tatArray) { 
    tatArray.forEach(tatPic => {
    var tatImg = document.createElement('img')
    tatImg.src = tatPic.image
    document.getElementById('grid-container').appendChild(tatImg)
    tatImg.addEventListener("click" , () => {

    })
    console.log(tatPic)
})
}

// event listeners
traditional.addEventListener('click', () => { renderTattoos(tatObj.traditional) })


