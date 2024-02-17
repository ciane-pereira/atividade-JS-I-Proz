//criar elemento para título
let titulo = document.createElement("h1");

//manipular elemento
titulo.id = "titulo"
titulo.innerText = "Doces";

//elemento pai e adicionar elemento no DOM
let main = document.querySelector("main");
main.appendChild(titulo);

//criar elemento para produto, manipular e adicionar 
let produto = document.createElement("div");
produto.innerHTML = `
<div>
<h2>Brigadeiro Gourmet</h2>
<img src="https://t3.ftcdn.net/jpg/03/01/55/56/240_F_301555615_PuTf9kLR9GqVKDMs8kVdwyUB4yjOjNIz.jpg ">
<h3>Brigadeiro ao leite feito com cacau 100%</h3>
<p>Preço R$ 5,00</p>
</div>
`;

main.appendChild(produto)
