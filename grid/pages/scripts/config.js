
const clicou = document.getElementById('click')
function action() {
	let nome = prompt('Whats Your Name?')
	alert(`Welcome	  ${nome}   it's wonderful to have you here`)
}

clicou.addEventListener('click', action)