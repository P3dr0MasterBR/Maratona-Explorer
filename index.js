const elementoResposta = document.querySelector('#resposta')
const perguntaFeita = document.querySelector("#perguntaFeita")
const botaoPerguntar = document.querySelector("#botaoPerguntar")

const resposta =[
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]


function fazerPergunta(){
    if(perguntaFeita.value == ""){
        alert("Digite sua pergunta, por favor")
        return
    }
  
    botaoPerguntar.setAttribute("disabled", true)
    const pergunta = "<div>" + perguntaFeita.value + "</div>"

    const totalRespostas = resposta.length
    const respostaAleatoria = Math.floor(Math.random() * totalRespostas)
    elementoResposta.innerHTML= pergunta + resposta[respostaAleatoria]
    elementoResposta.style.opacity= 1;
setTimeout(function(){
    elementoResposta.style.opacity= 0;
    botaoPerguntar.removeAttribute("disabled")
    perguntaFeita.value = "" 
}, 3000)
}