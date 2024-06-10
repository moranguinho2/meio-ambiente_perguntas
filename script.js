const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com que frequência você separa e recicla o lixo que produz em casa, considerando materiais como papel, plástico e vidro?",
        alternativas: [
            "Eu separo e reciclo o lixo que produzo em casa sempre que possível.",
            "Eu raramente ou nunca separo o lixo que produzo."
        ]
    },
    {
        enunciado: "Considerando os impactos ambientais, você acredita que é mais crucial reduzir o uso de plástico ou de papel em nosso dia a dia para ajudar a protger o meio amvbiente?",
        alternativas: [
            "O certo é reduzir o uso do plástico.",
            "Reduzir o uso do papel é mais importante."
        ]
    },
    {
        enunciado: "Na sua opinião, a prática da reciclagem no seu país é realmente eficaz na redução de resíduos e conservação de recursos naturais, ou você acredita que ela é ineficaz e não traz tantos beneficios?",
        alternativas: [
            "Acredito que a reciclagem seja eficaz.",
            "não acho que seja eficaz."
        ]
    },
    {
        enunciado: "Você considera o aquecimento global uma ameaça real e iminente ao nosso planeta, exigindo ações imediatas, ou acha que a gravidade da situação é frequentemente exagerada?",
        alternativas: [
            "Considero o aquecimento global uma ameaça real ao nosso planeta.",
            "Acho que a gravidade da situação é exagerada."
        ]
    },
    {
        enunciado: "Em termos de esforços de conservação, você acha que é mais importante focar na proteção das florestas ou dos oceanos para garantir um equilíbrio ecológico e a preservação das espécies?",
        alternativas: [
            "É mais importante focar na proteção dos oceanos.",
            "Melhor focas apenas nas florestas."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();