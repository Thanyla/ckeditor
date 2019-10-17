<?php
include("conecta.php");

if(isset($_GET['id']) == 1){
    insere($conexao);
}

function insere($conexao) {
  $editor_data = $_POST['editor1'];
  $query = "INSERT INTO `text` (`desc`) VALUES ('{$editor_data}');";
  return mysqli_query($conexao, $query);
}
  

function listaTodos($conexao){
  // cria a instrução SQL que vai selecionar os dados
  $query = sprintf("SELECT * FROM text");
  // executa a query
  $dados = mysqli_query($conexao, $query) or die(mysqli_error($conexao));
  // transforma os dados em um array
  $linha = mysqli_fetch_assoc( $dados);
  // calcula quantos dados retornaram
  $total = mysqli_num_rows($dados);

    // se o número de resultados for maior que zero, mostra os dados
    if($total > 0) {
        // inicia o loop que vai mostrar todos os dados
        do {

?>
          <p><?=$linha['desc']?> </p>
<?php
        // finaliza o loop que vai mostrar os dados
        }while($linha = mysqli_fetch_assoc($dados));
    // fim do if 
    }
}

?>