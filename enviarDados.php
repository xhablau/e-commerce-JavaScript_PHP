<?php
// Informações de conexão com o banco de dados
$servername = "localhost"; // nome do servidor MySQL
$username = "root"; // nome de usuário do MySQL
$password = ""; // senha do MySQL
$dbname = "db_php"; // nome do banco de dados que você deseja se conectar

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se a conexão foi bem-sucedida
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Recupera os dados enviados pelo JavaScript
$data = json_decode(file_get_contents('php://input'), true);
$dados = $data['dados'];

// Itera sobre os dados e insere cada linha na tabela
foreach ($dados as $linha) {
    $nome_cliente = $linha[0];
    $cpf_cliente = $linha[1];
    $supermercado_id = $linha[2];
    $produto_nome = $linha[3];
    $valor_produto = $linha[4];
    $quantidade = $linha[5];
    $valor_total = $linha[6];

    $sql = "INSERT INTO compras (nome_cliente, cpf_cliente, supermercado_id, produto_nome, valor_produto, quantidade, valor_total)
            VALUES ('$nome_cliente', '$cpf_cliente', '$supermercado_id', '$produto_nome', '$valor_produto', '$quantidade', '$valor_total')";

    if (mysqli_query($conn, $sql)) {
        echo "Dados inseridos com sucesso.";
    } else {
        echo "Erro ao inserir os dados: " . mysqli_error($conn);
    }
}

// Fecha a conexão com o banco de dados
mysqli_close($conn);
?>
