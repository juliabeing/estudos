<?php 

$idade = 15;
$responsavel="nao";

echo " você só pode entrar se tiver idade igual ou superior a 18 anos." . PHP_EOL;
if ($idade>=18){
    echo " você tem $idade anos, pode entrar!.";
}else{
  
echo $responsavel == "sim"? "você tem $idade anos, mas está com responsável pode entrar" : "você tem $idade anos e não está com responsável, não pode entrar!.";
}