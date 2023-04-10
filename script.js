var myButton = document.getElementById("submit");
myButton.addEventListener("click", function () {
    // Código a ser executado quando o botão for clicado
    buscar();
});

function buscar() {
    fetch('index.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta
        console.log(response)
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoArroz() {
    fetch('arroz.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta        
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testeArroz");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);



            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);



            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const botao = document.createElement('button');
            botao.textContent = 'Adicionar ao carrinho';
            botao.id = 'btnAdd'
            botao.addEventListener('click', () => {
                localStorage.setItem(data[i].nome + data[i].supermercado_id, JSON.stringify(data[i]));
                console.log("Adicionado ao carrinho!")
                alert("Adicionado ao carrinho!");
            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoFeijao() {
    fetch('feijão.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta        
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testeFeijão");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);



            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);

            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const botao = document.createElement('button');
            botao.id = 'btnAdd'
            botao.textContent = 'Adicionar ao carrinho';
            botao.addEventListener('click', () => {
                localStorage.setItem(data[i].nome + data[i].supermercado_id, JSON.stringify(data[i]));
                alert("Adicionado ao carrinho!");
                console.log("Adicionado ao carrinho!")
            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoBanana() {
    fetch('banana.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta        
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testeBanana");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);



            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);

            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const botao = document.createElement('button');
            botao.textContent = 'Adicionar ao carrinho';
            botao.id = 'btnAdd'
            botao.addEventListener('click', () => {
                localStorage.setItem(data[i].nome + data[i].supermercado_id, JSON.stringify(data[i]));
                console.log("Adicionado ao carrinho!")
                alert("Adicionado ao carrinho!");
            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoMaca() {
    fetch('maca.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta        
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testeMaca");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);



            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);

            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const botao = document.createElement('button');
            botao.textContent = 'Adicionar ao carrinho';
            botao.id = 'btnAdd'
            botao.addEventListener('click', () => {
                localStorage.setItem(data[i].nome + data[i].supermercado_id, JSON.stringify(data[i]));
                console.log("Adicionado ao carrinho!")
                alert("Adicionado ao carrinho!");
            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoPicanha() {
    fetch('picanha.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta        
        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testePicanha");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);



            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);

            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const botao = document.createElement('button');
            botao.textContent = 'Adicionar ao carrinho';
            botao.id = 'btnAdd'
            botao.addEventListener('click', () => {
                localStorage.setItem(data[i].nome + data[i].supermercado_id, JSON.stringify(data[i]));
                console.log("Adicionado ao carrinho!")
                alert("Adicionado ao carrinho!");
            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function minhaFuncaoBuscar() {
    fetch('research.php', {
        method: 'get',
    }).then(function (response) {
        // Extrair os dados JSON da resposta       

        return response.json();
    }).then(function (data) {
        // Acessando os valores do objeto JSON no JavaScript
        const produtos = document.getElementById("testeMudar");

        for (let i = 0; i < data.length; i++) {
            const produto = document.createElement('div');
            produto.classList.add('produto');

            const supermercadoId = document.createElement('div');
            supermercadoId.id = 'imgMercado'
            const mercado1 = 'img/mercados/mercado1.jpeg';
            const mercado2 = 'img/mercados/mercado2.jpeg';
            const mercado3 = 'img/mercados/mercado3.jpeg';
            const mercado4 = 'img/mercados/mercado4.jpeg';
            const mercado5 = 'img/mercados/mercado5.jpeg';
            if (data[i].supermercado_id === "1") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado1;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.id = 'ProdutoMudar'
                meuElemento.textContent = '1';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

                // const meuID = document.createElement('a');
                // meuID.id = 'IDProduto'
                // meuID.textContent = data[i].supermercado_id.toString();
                // meuID.hidden = true;
                // meuID.appendChild(meuID);


            } else if (data[i].supermercado_id === "2") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado2;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '2';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "3") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado3;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '3';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "4") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado4;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '4';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else if (data[i].supermercado_id === "5") {
                const minhaImagem = document.createElement('img');
                minhaImagem.src = mercado5;
                supermercadoId.appendChild(minhaImagem);

                const meuElemento = document.createElement('div');
                meuElemento.textContent = '5';
                meuElemento.hidden = true;
                supermercadoId.appendChild(meuElemento);

            } else {
                const minhaImagem = document.createElement('td');
                minhaImagem.textContent = produto.supermercado_id;
            }

            produto.appendChild(supermercadoId);

            const nome = document.createElement('h2');
            nome.textContent = JSON.stringify(data[i].nome);
            produto.appendChild(nome);

            const preco = document.createElement('p');
            preco.textContent = JSON.stringify('Preço: R$ ' + data[i].preco);
            produto.appendChild(preco);

            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'inputMudar' + data[i].id;
            input.className = "inputProduto"
            input.name = 'Mudar Preço Produto';
            input.placeholder = 'Novo preço';
            produto.appendChild(input)

            const botao = document.createElement('button');
            botao.textContent = 'Mudar preço';
            botao.id = 'btnAdd'
            botao.addEventListener('click', function () {
                const novo_preco = document.getElementById('inputMudar' + data[i].id).value
                const produto_id = data[i].id;

                // Cria uma nova solicitação HTTP POST
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'postNewPrice.php', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        console.log(xhr.responseText);
                        alert('Preço atualizado com sucesso!');
                        location.reload()
                    }
                }

                const params = 'produto_id=' + produto_id + '&novo_preco=' + novo_preco;
                xhr.send(params);


            });
            produto.appendChild(botao);

            produtos.appendChild(produto);

        }

    }).catch(function (error) {
        console.log(error);
    });
}

function carrinho() {
   
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        items[key] = value;
    }

    const arrayDeItems = [];


    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            const parsedItem = JSON.parse(items[key]); // analisa a string individualmente
            arrayDeItems.push(parsedItem);
        }
    }
    // for (let i = 0; i < items.length; i++) {
    //     if (items.hasOwnProperty(key)) {
    //         const parsedItem = JSON.parse(items[key]); // analisa a string individualmente
    //         arrayDeItems.push(parsedItem);
    //     }
    // }



    const tabela = document.querySelector('tbody');
    arrayDeItems.forEach((produto) => {
        // crie uma nova linha
        const linha = document.createElement('tr');
        linha.id = 'linhaProduto'

        // crie uma nova coluna para o id do mercado
        const supermercadoId = document.createElement('td');
        supermercadoId.id = 'imgMercado'
        const mercado1 = 'img/mercados/mercado1.jpeg';
        const mercado2 = 'img/mercados/mercado2.jpeg';
        const mercado3 = 'img/mercados/mercado3.jpeg';
        const mercado4 = 'img/mercados/mercado4.jpeg';
        const mercado5 = 'img/mercados/mercado5.jpeg';

        if (produto.supermercado_id === "1") {
            const minhaImagem = document.createElement('img');
            minhaImagem.src = mercado1;
            supermercadoId.appendChild(minhaImagem);

            const meuElemento = document.createElement('div');
            meuElemento.textContent = '1';
            meuElemento.hidden = true;
            supermercadoId.appendChild(meuElemento);

        } else if (produto.supermercado_id === "2") {
            const minhaImagem = document.createElement('img');
            minhaImagem.src = mercado2;
            supermercadoId.appendChild(minhaImagem);

            const meuElemento = document.createElement('div');
            meuElemento.textContent = '2';
            meuElemento.hidden = true;
            supermercadoId.appendChild(meuElemento);

        } else if (produto.supermercado_id === "3") {
            const minhaImagem = document.createElement('img');
            minhaImagem.src = mercado3;
            supermercadoId.appendChild(minhaImagem);

            const meuElemento = document.createElement('div');
            meuElemento.textContent = '3';
            meuElemento.hidden = true;
            supermercadoId.appendChild(meuElemento);

        } else if (produto.supermercado_id === "4") {
            const minhaImagem = document.createElement('img');
            minhaImagem.src = mercado4;
            supermercadoId.appendChild(minhaImagem);

            const meuElemento = document.createElement('div');
            meuElemento.textContent = '4';
            meuElemento.hidden = true;
            supermercadoId.appendChild(meuElemento);

        } else if (produto.supermercado_id === "5") {
            const minhaImagem = document.createElement('img');
            minhaImagem.src = mercado5;
            supermercadoId.appendChild(minhaImagem);

            const meuElemento = document.createElement('div');
            meuElemento.textContent = '5';
            meuElemento.hidden = true;
            supermercadoId.appendChild(meuElemento);

        } else {
            const minhaImagem = document.createElement('td');
            minhaImagem.textContent = produto.supermercado_id;
        }

        linha.appendChild(supermercadoId);


        // crie uma nova coluna para o nome do produto
        const colunaNome = document.createElement('td');
        colunaNome.id = 'idProduto'
        colunaNome.textContent = produto.nome;
        linha.appendChild(colunaNome);

        // crie uma nova coluna para o preço do produto
        const colunaPreco = document.createElement('td');
        colunaPreco.id = 'meuNovoId'
        colunaPreco.textContent = produto.preco;
        linha.appendChild(colunaPreco);

        // crie uma nova coluna para a quantidade do produto
        const colunaQuantidade = document.createElement('td');
        const inputQuantidade = document.createElement('input');
        inputQuantidade.type = 'number';
        inputQuantidade.size = '4';
        inputQuantidade.className = 'input-text qty text';
        inputQuantidade.title = 'Quantidade';
        inputQuantidade.id = 'meuInput'
        inputQuantidade.value = '1';
        inputQuantidade.min = '0';
        inputQuantidade.step = '1';
        inputQuantidade.addEventListener('change', () => {
            const quantidade = inputQuantidade.value;
            const subtotal = inputQuantidade.value * produto.preco;
            colunaSubtotal.textContent = subtotal.toFixed(2);

            // recalcule o total e atualize na página
            let total = 0;
            const elementos = document.querySelectorAll('#meuInput');
            elementos.forEach((elemento) => {
                total += parseFloat(elemento.value) * parseFloat(elemento.parentNode.previousSibling.textContent);
            });
            totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
        });
        colunaQuantidade.appendChild(inputQuantidade);
        linha.appendChild(colunaQuantidade);

        // crie uma nova coluna para o subtotal do produto
        const colunaSubtotal = document.createElement('td');
        colunaSubtotal.id = 'teste';
        colunaSubtotal.textContent = produto.preco;
        linha.appendChild(colunaSubtotal);


        // adicione a nova linha à tabela
        tabela.appendChild(linha);
    });

    // calcule o total inicialmente e atualize na página
    let total = 0;
    const elementos = document.querySelectorAll('#meuInput');
    elementos.forEach((elemento) => {
        total += parseFloat(elemento.value) * parseFloat(elemento.parentNode.previousSibling.textContent);
    });
    const totalElement = document.querySelector('#total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;




}

function apagarCache() {
    localStorage.clear();
    location.reload();
}

function enviarDados() {



    const tabela = document.getElementById("tabelaProduto");
    const linhas = tabela.getElementsByTagName("tr");
    const dados = [];

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    for (let i = 0; i < linhas.length; i++) {
        const colunas = linhas[i].getElementsByTagName("td");
        const linhaDados = [nome, cpf]; // Adiciona nome e cpf na linha

        for (let j = 0; j < colunas.length; j++) {
            let valor;
            const elemento = colunas[j].querySelector("input[type='number']");

            if (elemento) {
                valor = elemento.value;
            } else {
                valor = colunas[j].textContent;
            }

            linhaDados.push(valor)
        }

        dados.push(linhaDados);
    }

if (cpf.length  === 11) {
    if (dados.length > 1) {
        // Aqui você pode enviar os dados para o servidor, fazer validações, etc.

        const options = {
            method: 'POST',
            body: JSON.stringify({ dados: dados }), // Envia a matriz "dados" no corpo da requisição
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Envia a requisição fetch
        fetch('enviarDados.php', options)
            .then(response => response.json())
            .then(alert("Compra Finalizada!"))
            // .then(localStorage.clear())
            // .then(location.reload())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    } else {
        alert("Não existe produto!")
    }
} else {
    alert("CPF Invalido")
}
   

}