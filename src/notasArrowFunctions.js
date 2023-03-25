const notas = [7.5, 8.0, 9.5, 10.0]; // Exemplo de conjunto de notas

const calcularMedia = notas => notas.reduce((a, b) => a + b) / notas.length;

const media = calcularMedia(notas);

media > 8 ? console.log("Aluno aprovado!") : console.log("Aluno reprovado!");
