window.onload = function(){

    var div1 = document.getElementById("message1");
    
    function receiverMessage(f)
    {
        
//        if(e.origin != diframes.html)
//            return;
        
        div1.innerHTML = "Message Received " + f.data;
            
        
        
    
    }
    
    
    window.addEventListener("message",receiverMessage);
    
    
    


}