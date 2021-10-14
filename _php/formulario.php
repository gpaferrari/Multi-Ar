<?php

if(isset($_POST['nome']) && !empty($_POST['email'])){


$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);
$motivo = addslashes($_POST['motivo']);
$tel = addslashes($_POST['tel']);

$to = "email";
$subejet = "Contato Cliente Multi-Ar";
$body = "Nome: ".$nome. "\r\n".
        "Telefone: ".$tel. "\r\n".
        "Email: ".$email. "\r\n".
        "Motivo: ".$motivo. "\r\n".
        "Mensagem: ".$mensagem;
        
$header = "From: gpaferrari@hotmail.com"."\r\n"
            ."Reply-To:".$email."\e\n"
            ."X=Mailer:PHP/".phpversion();
            
if(mail($to,$subejet,$body,$header)){

    echo("Email enviado com sucesso!");

}else{
    echo("Email não pode ser enviado!");
}            
            
}
?>