$(document).ready(function(){
    
    $(".flex-container1").hide();
    
    $("#show").click(function(){
        $(".flex-container1 ").fadeIn();
    });
    
    $("#show").click(function(){
        $(".kuva1,.kuva2,.kuva3,.flex-container1").fadeIn();
    });
    
    $("#hide").click(function(){
        $(".kuva1,.kuva2,.kuva3,.flex-container1").fadeOut();
    });  
    
    $(".kuva1").click(function(){
        $(".kuva1").fadeOut();
    }); 
    
     $(".kuva2").click(function(){
        $(".kuva2").fadeOut();
    }); 
    
     $(".kuva3").click(function(){
        $(".kuva3").fadeOut();
    }); 
    
    $("#refresh").click(function() {
    location.reload();
});
    


});