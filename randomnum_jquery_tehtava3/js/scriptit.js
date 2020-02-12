$(document).ready(function() {

    
    
    $("#flex-container1 .luku").each(function()
    {
    $(this).text(arvoLuku());
    })
  
        function arvoLuku() 
        {
            var numero = Math.floor((Math.random()*4)+1);
            return numero;
        }  
    
    $("#reset").click(function() 
    {
        location.reload();
    });
    
});     

