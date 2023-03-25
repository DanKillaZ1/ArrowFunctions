class Movimentacao {
    constructor (banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco
        this.nome = nome
        this.saldo = saldo
    }
}

class Registro{
    constructor (dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.movimentacoes = []
    }
    novaMovimentacao(...movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp ('x', 'gi')  // regex para substituir o x pelo nome do banco
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(regex, 'Y')
            valorAtualizado += lancamento.saldo
            tipo += lancamento.nome + ' '
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Banco do Brasil', 'salario', 10000)
const m02 = new Movimentacao('Banco do Brasil', 'comisao', 30000)
const m03 = new Movimentacao('Banco do Brasil', 'imposto', -5000)

const r01 = new Registro(1, 1, 2020)
r01.novaMovimentacao(m01, m02, m03)
console.log('O saldo da operação foi: ' + r01.resumo())

const movimentacoesGerais = [m01, m02, m03]

movimentacoesGerais.map( elemento => {
    console.log(elemento.banco.length)
})