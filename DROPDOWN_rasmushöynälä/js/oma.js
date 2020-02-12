$(document).ready(function(){

    $(".pudota").click(function(){
        $(this).next().find(".panel").slideToggle("slow");
  });
});      