const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')
 
 
btn1.addEventListener('click',()=>{
    const campousuario = document.querySelector('#filmeInput').value
 const itemLista = document.createElement('li')
listaFilmes.append(itemLista)
//add coisa na lista
itemLista.innerHTML = campousuario
//negrito: `<strong>Este filme é legal é o ${campoUsuario}</strong>` *so funciona com ``
itemLista.style.backgroundColor = 'yellow'
//add cor 
itemLista.classList.add('ativo')
//add class
itemLista.classList.toggie('ativo')
})

//window.onload - quando a pagina carregar, faça.....