<?php
session_start();
//include na conexão para pegar a instancia que foi criada em conexao.php
include('conexao.php');
//verificação se algo foi digitado e se não volta para index.php
if(empty($_POST['usuario'])||(empty($_POST['senha']))){
    header('Location: index.php');
    exit();
}
//criação de 2 variaveis e utilização de uma função e passa por paramento a conexao e os campos que serao recebidos pelo usuarios
$nome= mysqli_real_escape_string($conexao, trim($_POST['nome']));
$usuario= mysqli_real_escape_string($conexao, trim($_POST['usuario']));
$senha= mysqli_real_escape_string($conexao,trim($_POST['senha']));

$sql= "select count (*) as total from usuario where usuario = '$usuario'";

//execuçao da query
$result = mysqli_query($conexao,$sql);
//quantidade de linhas que a query retornou
 $row= mysqli_fetch_assoc($result);


if($row['total']==1){
    $_SESSION['usuario_existe'] = true;
    header('location: cadastro.php');
    exit();
}

$sql= "INSERT INTO usuario(nome, usuario,senha,data_cadastro) VALUES ('$nome', '$usuario','$senha',NOW())";

if($conexao->query($sql)=== TRUE){
    $_SESSION['status_cadastro']= true;
}

$conexao->close();
 
header('location: cadastro.php');
exit;
?>