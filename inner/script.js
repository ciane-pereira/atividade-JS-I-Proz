//innerText interpeta a tag do html como um texto 
let titulo = document.querySelector("#titulo");
titulo.innerText = "<h1>Testando o innerText</h1>"

let proz = document.getElementById("proz");
proz.innerText = "<h2>Estou estudando com a Proz</h2>";

//innerHTML interpreta a tag como uma tag do html
let listaNaoOrdenada = document.querySelector("ul");
listaNaoOrdenada.innerHTML = `
<li>Elemnento teste 1</li>
<li>Elemnento teste 2</li>
<li>Elemnento teste 3</li> 
`;

let listaOrdenadaLink = document.getElementById("lista-ordenada");
listaOrdenadaLink.innerHTML = `
<a href="https://www.google.com">Acessar Google</a> <br>
<a href="https://prozeducacao.com.br">Acessar Proz</a> <br>
<a href="https://www.w3schools.com/">Acessar W3schools</a>
`;
