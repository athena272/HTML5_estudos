$(document).ready(function(){
    $("form").css("display","none");
});
$(document).ready(function(){
  $("#titulo").click(function(){
    $("form").toggle(1000);
  });
});
$(document).ready(function(){
  $("#botao").click(function(){
    alert('Botão Limpar foi clicado!');
  });
});
$(document).ready(function(){
  $("#titulo").hover(function(){
    $(this).css("cursor","pointer");
  }); 
});