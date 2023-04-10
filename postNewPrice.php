<?php

// Informações de conexão com o banco de dados
$servername = "localhost"; // nome do servidor MySQL
$username = "root"; // nome de usuário do MySQL
$password = ""; // senha do MySQL
$dbname = "db_php"; // nome do banco de dados que você deseja se conectar

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtém os dados do formulário
  $produto_id = $_POST["produto_id"];
  $novo_preco = $_POST["novo_preco"];

  // Atualiza o preço do produto no banco de dados
  $sql = "UPDATE produtos SET preco=$novo_preco WHERE id=$produto_id";

  if ($conn->query($sql) === TRUE) {
    echo "Preço atualizado com sucesso!";
  } else {
    echo "Erro ao atualizar o preço: " . $conn->error;
  }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>