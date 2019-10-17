$(function(){
  comeca();
});
var timerI = null;
var timerR = false;
          
function para(){
    if(timerR)
    clearTimeout(timerI)
    timerR = false;
}
function comeca(){
    para();
    lista();
}
function lista(){
    $.ajax({
       url:"adicionar.php",
       data:CKEDITOR.instances.editor1.getData(),
        success: function (textStatus){
            //$('#qtdSim').html(textStatus); //mostrando resultado
           alert("salvamento automatico");
        }
    })
    timerI = setTimeout("lista()", 6000);//tempo de espera (segundos)
    timerR = true;
}