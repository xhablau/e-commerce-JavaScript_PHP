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

$sql = "SELECT * FROM produtos";

$result = mysqli_query($conn, $sql);
$data = array(); // array vazio para armazenar os dados

if (mysqli_num_rows($result) > 0) {
  // Saída de dados de cada linha
  $i = 0;
  while ($row = mysqli_fetch_assoc($result)) {
    // Armazena os dados em um novo índice do array associativo
    $data[$i]['id'] = $row['id'];
    $data[$i]['nome'] = $row['nome'];
    $data[$i]['preco'] = $row['preco'];
    $data[$i]['supermercado_id'] = $row['supermercado_id'];
    $i++;
  }
} else {
  $data[0]['nome'] = '';
}

// Converte os dados em formato JSON
$json_data = json_encode($data);

// Define o tipo de conteúdo da resposta HTTP como JSON
header('Content-Type: application/json');

// Envia os dados em formato JSON como resposta HTTP
echo $json_data;






// Codifica a matriz como dados JSON
// $json_data = json_encode($data);

// Envia os dados JSON para a página HTML
// echo "<script>var dados = $json_data;</script>";
// // Fechar a conexão com o banco de dados
// $conn->close();
