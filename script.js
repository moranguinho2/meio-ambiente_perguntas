const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com que frequência você separa e recicla o lixo que produz em casa, considerando materiais como papel, plástico e vidro?",
        alternativas: [
            {
                texto:  "Eu separo e reciclo o lixo que produzo em casa sempre que possível.",
                afirmacao: "afirmacao"
            },
            {
                texto:"Eu raramente ou nunca separo o lixo que produzo.",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Considerando os impactos ambientais, você acredita que é mais crucial reduzir o uso de plástico ou de papel em nosso dia a dia para ajudar a protger o meio amvbiente?",
        alternativas: [
            {
                texto:"O certo é reduzir o uso do plástico.",
                afirmacao: "afirmacao"
            },
            {
                texto:"Reduzir o uso do papel é mais importante.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Na sua opinião, a prática da reciclagem no seu país é realmente eficaz na redução de resíduos e conservação de recursos naturais, ou você acredita que ela é ineficaz e não traz tantos beneficios?",
        alternativas: [
            {
                texto:"Acredito que a reciclagem seja eficaz.",
                afirmacao:"afirmacao"
            },
            {
                texto:"não acho que seja eficaz.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você considera o aquecimento global uma ameaça real e iminente ao nosso planeta, exigindo ações imediatas, ou acha que a gravidade da situação é frequentemente exagerada?",
        alternativas: [
            {
                texto:"Considero o aquecimento global uma ameaça real ao nosso planeta.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Acho que a gravidade da situação é exagerada.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Em termos de esforços de conservação, você acha que é mais importante focar na proteção das florestas ou dos oceanos para garantir um equilíbrio ecológico e a preservação das espécies?",
        alternativas: [
            {
                texto:"É mais importante focar na proteção dos oceanos.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Melhor focas apenas nas florestas.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSeleconada){
    const afirmacoes = opcaoSeleconada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();