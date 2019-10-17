<?php
include("conecta.php");
include("banco.php");
 ?>
<html>
    <head>
    <title>Exemplo</title>

</head>
<body>
<div id="text">
<?php
    listaTodos($conexao);
?>
</div>

</body>
</html>
