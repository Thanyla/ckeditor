<?php
$dados = ($_POST['html']);
saveDados($dados);

function saveDados($dados){
    $link = mysqli_connect("localhost", "root", "", "ckeditor");
    $sql = 'INSERT INTO text (`desc`) VALUES ("' . $dados . '")';

    if(mysqli_query($link, $sql)){
        echo "Dados salvos";
    }else{
        echo "Dados não foram salvos: " . mysqli_error($link);
    }

    mysqli_close($link);
    return;
}
?>