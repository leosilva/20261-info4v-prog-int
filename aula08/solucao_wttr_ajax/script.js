$(document).ready(function() {
    // Inicia a busca do clima quando o botão for clicado.
    $("#btnBuscar").on("click", function() {
        const cidade = $("#cidade").val();

        // Evita enviar a requisição caso o campo esteja vazio ou só com espaços.
        if (cidade.trim() === "") {
            $("#resultado").html(`
                <div class="alert alert-warning">
                    Digite o nome de uma cidade.
                </div>
            `);
            return false;
        }

        // Monta a URL da API usando a cidade informada pelo usuário.
        const url = `https://wttr.in/${cidade}?format=j2`;

        // Faz a requisição GET e processa a resposta quando os dados chegarem.
        $.get(url, function(dados) {
            // A API retorna uma string JSON, então ela é convertida para objeto JavaScript.
            dados = JSON.parse(dados)
            const climaAtual = dados.current_condition[0];

            // Separa apenas as informações que serão exibidas na interface.
            const temperatura = climaAtual.temp_C;
            const sensacao = climaAtual.FeelsLikeC;
            const condicao = climaAtual.lang_pt[0].value;
            const imagem = climaAtual.weatherIconUrl[0].value;

            // Atualiza a página com um cartão contendo o resumo do clima atual.
            $("#resultado").html(`
                <div class="card text-center mt-3">
                    <div class="card-body">
                        <h3 class="card-title">${cidade}</h3>

                        <img src="${imagem}" alt="${condicao}" class="mb-3">

                        <p class="fs-4">
                            Temperatura atual: <strong>${temperatura}°C</strong>
                        </p>

                        <p class="fs-5">
                            Sensação térmica: <strong>${sensacao}°C</strong>
                        </p>

                        <p class="fs-5">
                            Condição climática: <strong>${condicao}</strong>
                        </p>
                    </div>
                </div>
            `);

        }).fail(function() {
            // Exibe uma mensagem amigável caso a API falhe ou a cidade não seja encontrada.
            $("#resultado").html(`
                <div class="alert alert-danger">
                    Não foi possível buscar os dados da cidade informada.
                </div>
            `);
        });
    });

});
