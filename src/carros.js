let carros = [
    {
        id: 1,
        marca: 'Ford',
        modelo: 'Ka',
        ano: 2019,
        cor: 'Prata',
        preco: 40000,
        km: 10000,
        combustivel: 'Flex',
        portas: 4,
        cambio: 'Manual',
    },
    {
        id: 2,
        marca: 'Volkswagen',
        modelo: 'Gol',
        ano: 2018,
        cor: 'Preto',
        preco: 50000,
        km: 35000,
        combustivel: 'Flex',
        portas: 2,
        cambio: 'Manual',
    },

]

let carrosFord = carros.filter(carro => carro.marca === 'Ford');

console.log(carrosFord);