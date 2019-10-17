<!DOCTYPE html>
<?php
include("conecta.php");
include("banco.php");
?>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CKEditor</title>
    <script src="ckeditor/jquery-3.4.1.js"></script>
    <script src="ckeditor/ckeditor.js"></script>
	<script src="ckeditor/samples/js/sample.js"></script>
	<link rel="stylesheet" type="text/css" href="ckeditor/contents.css">
    <script type="text/javascript" src="ckeditor/js/jquery-1.11.3.min.js"></script>
</head>

<body id="body">
<input id="input1"/>
  
    <form id="form" action="adicionar.php" method="POST">
    <textarea name="editor1" id="editor1" rows="10" cols="80"></textarea>
    
    <div id="versao"></div>
    <script>
      var editor = CKEDITOR.replace('editor1');

            $(document).ready(function() {
                //("save()", 60000); //Chamada de método a cada 1 minuto
            })
            
            function save(){
                // requisição ajax
                $.post("ajax.php", getAndFormatCKEditor(), function(data, status) {
                    console.log(status)
                    console.log(data)
                })
                
                // capturando dados do editor
                function getAndFormatCKEditor(){
                    data = CKEDITOR.instances.editor1.getData()
                    data = data.replace(/"/gm, "'")
                    return { html: data }
                }
            }
    </script>
    <button id="salva" type="submit">Enviar</button>
    </form>
</body>
</html>