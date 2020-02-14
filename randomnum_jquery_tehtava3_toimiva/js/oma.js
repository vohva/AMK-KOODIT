$(document).ready(function() 
{
            
            
            $("#arvo").click(function()
            {
                $(".yksikortti").hide("blind", 10);
                $.fn.myFunction();
                $(".yksikortti").show("blind");
            });
    
        $.fn.myFunction = function()
        {
                var luku1;
                var luku2;
                var luku3;
                var luku4;
                
                do
                {
                    luku1=Math.floor(Math.random() * 4) + 1;
                    luku2=Math.floor(Math.random() * 4) + 1;
                    luku3=Math.floor(Math.random() * 4) + 1;
                    luku4=Math.floor(Math.random() * 4) + 1;
                
                    if (luku1!=luku2 && luku1!=luku3 && luku1!=luku4 && luku2!=luku3 && luku2!=luku4 && luku3!=luku4)
                {
                    break;
                }
                }
                while (luku1==luku2 || luku1==luku3 || luku1==luku4 || luku2==luku3 || luku2==luku4 || luku3==luku4)
                
                
            document.getElementById("yks").innerHTML = luku1;
            document.getElementById("kaks").innerHTML = luku2;
            document.getElementById("kolm").innerHTML = luku3;
            document.getElementById("nelj").innerHTML = luku4;
        }
        
        
            
				
});