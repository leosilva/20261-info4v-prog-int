function limparTabela() {
	var divTabela = document.querySelector("#divTabela");
	divTabela.innerHTML = "";
}

function iniciarCriacaoTabela() {
	limparTabela();
	var nLinhas = parseInt(document.querySelector("#inputLinhas").value);
	var nColunas = parseInt(document.querySelector("#inputColunas").value);
	var table = criarTabela(nLinhas, nColunas);
	var divTabela = document.querySelector("#divTabela");
	divTabela.appendChild(table);
}

function criarTabela(nLinhas,nColunas) {
	var table = document.createElement("table");
	table.setAttribute("border", "1");
	table = criarLinhas(table, nLinhas, nColunas);
	return table;
}

function criarLinhas(table, nLinhas, nColunas) {
	for (var i = 0; i < nLinhas; i++) {
		var tr = document.createElement("tr");
		tr = criarColunas(tr, nColunas);
		table.appendChild(tr);
	}
	return table;
}

function criarColunas(tr, nColunas) {
	for (var i = 0; i < nColunas; i++) {
		var td = document.createElement("td");
		if (i == (nColunas - 1)) {
			var button = document.createElement("button");
			button.setAttribute("onclick", "apagarLinha(this);");
			button.innerHTML = "Remover";
			td.appendChild(button);
		} else {
			td.innerHTML = "<b>Texto</b>";
		}
		tr.appendChild(td);
	}
	return tr;
}

function apagarLinha(elemento) {
	elemento.parentElement.parentElement.remove();
}