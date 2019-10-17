//Função para fazer botão de salvar piscar
function pisca(item){
    var ob = document.getElementById(item);
    if (ob.style.backgroundColor=="darkgray"){
    ob.style.backgroundColor="red";
    }else{
    ob.style.backgroundColor="darkgray";
    }   
}
//chamar função pisca
t = setInterval("pisca('salva')",500); 

//Função para salvar dados do editor automaticamente/sem reload
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
//chamar função save
$(document).ready(function() {
    ("save()", 60000);
})