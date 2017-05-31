window.onload = function (){

    //var receiver1 = document.getElementById("receiver").contentWindow;
    
   // var btn = document.getElementById("send");
    
    
    
    var sendMessage = function(e){

    
    e.preventDefault();
    
    receiver1.postMessage("hello bro!!" , "G:\iframes");
    }
btn.addEventListener('click',sendMessage);
}