const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que o futuro do marketing está na inovação digital ou nas estratégias tradicionais?",
        alternativas: [
            {
                texto: "Inovação digital.",
                afirmacao: "No iA inovação digital está remodelando o marketing, capacitando as empresas a se adaptarem às mudanças rápidas no comportamento do consumidor, aproveitando tecnologias emergentes para alcançar e engajar seu público de novas maneiras.nício ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Estratégias tradicionais.",
                afirmacao: " As estratégias tradicionais de marketing ainda têm seu lugar, oferecendo uma base sólida e confiável para alcançar certos segmentos do mercado e estabelecer uma presença consistente em mídias como televisão, rádio e impressos."
            }
        ]
    },
    {
        enunciado: "Qual você considera ser mais crucial para o futuro do marketing: a personalização ou a segmentação ampla?",
        alternativas: [
            {
                texto: "Personalização.",
                afirmacao: " A personalização é fundamental para o futuro do marketing, permitindo que as marcas se conectem individualmente com os consumidores, oferecendo experiências únicas e relevantes que impulsionam a fidelidade e a satisfação do cliente."
            },
            {
                texto: "Segmentação ampla.",
                afirmacao: "A segmentação ampla continua sendo importante para o marketing, permitindo que as marcas alcancem grandes audiências e aumentem a conscientização sobre seus produtos ou serviços em diversos mercados e plataformas."
            }
        ]
    },
    {
        enunciado: "Você vê mais potencial no marketing de influência ou no marketing de conteúdo?",
        alternativas: [
            {
                texto: "Marketing de influência.",
                afirmacao: " O marketing de influência oferece oportunidades únicas para as marcas se conectarem com seu público-alvo por meio de figuras influentes e autênticas, aumentando a credibilidade e a confiança na marca."
            },
            {
                texto: "Marketing de conteúdo.",
                afirmacao: "O marketing de conteúdo é essencial para o futuro do marketing, fornecendo valor agregado aos consumidores por meio de conteúdo relevante e envolvente, que educa, inspira e informa, construindo relacionamentos duradouros com a marca. "
            }
        ]
    },
    {
        enunciado: "O futuro do marketing será moldado mais pela análise de dados ou pela criatividade?",
        alternativas: [
            {
                texto: "Análise de dados.",
                afirmacao: "A análise de dados é crucial para o futuro do marketing, fornecendo insights valiosos sobre o comportamento do consumidor, orientando decisões estratégicas e garantindo um ROI mais eficaz para as campanhas de marketing."
            },
            {
                texto: "Criatividade.",
                afirmacao: "A criatividade continuará a desempenhar um papel fundamental no marketing, permitindo que as marcas se destaquem em um mercado saturado, gerando emoção e conexão com os consumidores por meio de campanhas inovadoras e memoráveis."
            }
        ]
    },
    {
        enunciado: "Você acredita que o futuro do marketing será dominado pela interação em tempo real ou pela automação de processos?",
        alternativas: [
            {
                texto: "Interação em tempo real.",
                afirmacao: " A interação em tempo real será uma parte essencial do futuro do marketing, permitindo que as marcas se envolvam instantaneamente com os consumidores, respondendo às suas necessidades e desejos de forma rápida e relevante.Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Automação de processos.",
                afirmacao: " A automação de processos está transformando o marketing, aumentando a eficiência e a escalabilidade das operações de marketing, permitindo que as marcas se concentrem em estratégias mais avançadas e na criação de conteúdo de alta qualidade."
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
