const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir mensagens no console em JavaScript?",
      respostas: [
        "logMessage()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados, sem coerção",
        "Compara apenas valores, sem levar em consideração o tipo",
        "Compara valores e tipos de dados, com coerção",
      ],
      correta: 1
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "def minhaFuncao() {}",
        "const minhaFuncao = () => {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Remover um elemento do DOM",
        "Adicionar um evento a um elemento",
        "Alterar o estilo de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'closure' em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Um tipo de condição",
        "Uma função que tem acesso a variáveis externas",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toInteger()",
        "convertToInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a principal diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença",
        "let é usado para variáveis mutáveis, const para variáveis imutáveis",
        "const é usado para variáveis mutáveis, let para variáveis imutáveis",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento de Orientação de Métodos",
        "Data Object Model",
        "Document Object Model",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta    
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
   
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }