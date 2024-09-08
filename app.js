function pesquisar(){
let section = document.getElementById("resultados-pesquisa");//Essa linha de código em JavaScript tem como objetivo selecionar um elemento HTML específico dentro de um documento e armazenar uma referência a ele em uma variável JavaScript.//
let campoPesquisa = document.getElementById("campo-pesquisa").value.toLocaleLowerCase()

//campoPesquisa = campoPesquisa.toLowerCase()


let resultados = "";
let titulo = "";
let tags = "";

if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte ou algo relacionado ao atleta.</p>"
    return
}

//Para cada dado dentro da lista de dados.
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa)||tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
            </p.
                <a href=${dado.link} target= "_black">Mais informações</a>   
        </div>    
`;
}
}

if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;
}
const inputBusca = document.getElementById("campo-pesquisa");
inputBusca.addEventListener('keypress', (event) =>{
    if (event.key === 'Enter'){
        pesquisar();
    }
});
