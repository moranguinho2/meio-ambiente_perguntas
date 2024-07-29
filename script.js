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
                afirmacao:  [
                "Incrível!, separar o lixo produzido em casa é uma pratica essencial para a sustentabilidade ambiental, saiba que você etá ajudando muito o meio ambiente.", 
                "Fico muito feliz em saber disso, continue reciclando para ajudar o nosso planeta"
                ]
            },
            {
                texto:"Eu raramente ou nunca separo o lixo que produzo.",
                afirmacao: [
                "É importante que você separe o lixo que produz, pois isso contribui significativamente para a perservação do meio ambiente. Espero que você comece a fazer essa separação a partir de agora, pois cada pequena ação faz uma grande diferença.", 
                "Espero que este projeto sirva como um aviso para que você possa começar a reciclar o lixo que produz, a mudança começa por você"
                ]
            },
        ]
    },
    {
        enunciado: "Considerando os impactos ambientais, você acredita que é mais crucial reduzir o uso de plástico ou de papel em nosso dia a dia para ajudar a protger o meio amvbiente?",
        alternativas: [
            {
                texto:"O certo é reduzir o uso do plástico.",
                afirmacao: [
                 "Muito bem!, a redução do uso do plástico é essencial para minimizar os impactos ambientais negativos e promover a sustentabilidade.",
                 "É mais estratégico diminuir o uso do plástico para diminuir os impactos ambientais."
                ]
            },
            {
                texto:"Reduzir o uso do papel é mais importante.",
                afirmacao: [
                "Reduzir o uso de papel é uma iniciativa válida e benéfica, mas é importante destacar que a redução do uso de plástico é ainda mais essencial para a preservação do meio ambiente devido ao seu impacto duradouro e nocivo nos ecossistemas.",
                "Por mais que a redução de papel fosse ajudar a protejer o meio ambiente, diminuir o uso do plástico seria mais significativo para o meio ambiente"
                ]
            }
        ]
    },
    {
        enunciado: "Na sua opinião, a prática da reciclagem no seu país é realmente eficaz na redução de resíduos e conservação de recursos naturais, ou você acredita que ela é ineficaz e não traz tantos beneficios?",
        alternativas: [
            {
                texto:"Acredito que a reciclagem seja eficaz.",
                afirmacao:"Exatamente, a prática da reciclagem é realmente muito importante, pois contribui significativamente para a redução de resíduos, a conservação de recursos naturais e a proteção do meio ambiente."
            },
            {
                texto:"não acho que seja eficaz.",
                afirmacao: "Na verdade, a reclagem é muito eficaz e importante, pois ajuda a reduzir a quantidade de resíduos nos aterros, economiza recursos naturais e diminui a poluição ambiental."
            }
        ]
    },
    {
        enunciado: "Você considera o aquecimento global uma ameaça real e iminente ao nosso planeta, exigindo ações imediatas, ou acha que a gravidade da situação é frequentemente exagerada?",
        alternativas: [
            {
                texto:"Considero o aquecimento global uma ameaça real ao nosso planeta.",
                afirmacao:"Sim, o aquecimento global é uma ameaça real ao nosso planeta porque ele causa elevação do nível do mar, eventos climáticos extremos e perda de biodiversidade."
            },
            {
                texto:"Acho que a gravidade da situação é exagerada.",
                afirmacao:"Na verdade, o aquecimento global é muito preocupante, pois está acelerando eventos climáticos extremos e afetando ecossistemas vitais para a vida na terra."
            }
        ]
    },
    {
        enunciado: "Em termos de esforços de conservação, você acha que é mais importante focar na proteção das florestas ou dos oceanos para garantir um equilíbrio ecológico e a preservação das espécies?",
        alternativas: [
            {
                texto:"É mais importante focar na proteção dos oceanos.",
                afirmacao:"Ambos são igualmente importantes, pois os oceanos regulam o clima e produzem oxigênio, enquanto as florestas armazenam carbono e abrigam biodiversidade essencial."
            },
            {
                texto:"Melhor focas apenas nas florestas.",
                afirmacao:"Ambos são igualmente importantes, pois os oceanos regulam o clima e produzem oxigênio, enquanto as florestas armazenam carbono e abrigam biodiversidade essencial."
            }
            
            
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSeleconada){
    const afirmacoes = opcaoSeleconada.afirmacao;
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