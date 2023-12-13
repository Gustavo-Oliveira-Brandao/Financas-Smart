console.log("Bem vindo!!!")

const saldo = document.querySelector("#saldo")
console.log(saldo)
const saldoValue = parseFloat(saldo.textContent)

const form = document.getElementById('formulario')
const origem = document.getElementById('origem')
const valor = document.getElementById('valor')
const data = document.getElementById('data')

function formulario(){
    const origemValue = origem.value
    const valorValue = parseFloat(valor.value)
    const dataValue = valor.data
    this.saldoValue += valorValue
    console.log(origemValue, saldo, dataValue)
    alterarSaldo();
}

function alterarSaldo(){

    saldoAtual.textContent = "R$ " + saldoValue
}