<?php

if (isset($_POST['enviar'])) {

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);
$motivo = addslashes($_POST['motivo']);
$tel = addslashes($_POST['tel']);

require 'vendor/autoload.php';

$to = "vendas.bauru@multiarbauru.com.br";
$subejet = "Contato Cliente Multi-Ar";
$body = "Nome: ".$nome. "\r\n".
        "Telefone: ".$tel. "\r\n".
        "Email: ".$email. "\r\n".
        "Motivo: ".$motivo. "\r\n".
        "Mensagem: ".$mensagem;
        
$headers = "From: vendas.bauru@multiarbauru.com.br"."\r\n"
            ."Reply-To:".$email."\e\n"
            ."X=Mailer:PHP/".phpversion();
            
if(mail($to,$subejet,$body,$headers)){

    echo("Email enviado com sucesso!");

}else{
    echo("Email não pode ser enviado!");
}            
            
}
?>