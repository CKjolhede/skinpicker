// 1. Fetch
// 2. getting the data / For each
// 3. Event Listener to for each catagories & DOM Elements
// 4. appending the data

// Global
const URL = 'http://localhost:3000/tattoos'
var tatObj 

// DOM Selectors
const traditional = document.querySelector("#traditional")
const realism = document.querySelector("#realism")
const japanese = document.querySelector("#japanese")


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
	var grid = document.getElementById('grid-container')
	grid.replaceChildren()
    tatArray.forEach(tatPic => {
    var tatImg = document.createElement('img')
			tatImg.src = tatPic.image
    document.getElementById('grid-container').appendChild(tatImg)
    tatImg.addEventListener("click" , () => { renderSelected(tatPic) 

    })
			//console.log(tatPic)
})
}
function renderSelected(selected) {
	var selectedImg = document.createElement('img')
	selectedImg.src = selected.image
	var selectedName = document.createElement('p')
	selectedName.innerText = `${selected.name}`
	var selectedEmail = document.createElement('p')
	selectedEmail.innerText = `${selected.artist}`
	console.log(selected)
	var grid = document.getElementById('grid-container')
	grid.replaceChildren()
	document.getElementById('grid-container').appendChild(selectedImg)
	document.getElementById('grid-container').appendChild(selectedName)
	document.getElementById('grid-container').appendChild(selectedEmail)
	// console.log()
}

// event listeners
traditional.addEventListener('click', () => { renderTattoos(tatObj.traditional) })
realism.addEventListener('click', () => { renderTattoos(tatObj.realism) })
japanese.addEventListener('click', () => { renderTattoos(tatObj.japanese) })


