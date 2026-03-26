function multiplos() {
    let numero = parseInt(prompt("Digite um número:"))
    let resultado = ""

    for (let i = 1; i <= 50; i++) {
        if (i % numero === 0) {
            resultado += "MÚLTIPLO" + "<br/>"
        } else {
            resultado += i + "<br/>"
        }
    }

    document.write(resultado)
}
