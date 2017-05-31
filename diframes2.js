window.onload = function(){
    
    var receiver1 = parent.document.getElementById("receiver").contentWindow;

    var sender = document.getElementById("send");
    
    var sendMes = function(e)
    {

        e.preventDefault();
        
        parent.postMessage("hi , from diff iFrames","http://localhost/iframes");
    }
    
    window.addEventListener('click',sendMes);
}