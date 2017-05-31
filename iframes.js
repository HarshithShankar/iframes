document.getElementsByClassName('load').onload = function() {

var videoRef = document.getElementsByClassName("video");

var win = videoRef.contentWindow;

            

    
var doc = videoRef.contentDocument ? videoRef.contentDocument : videoRef.contentWindow.document;

var skillfinityRef = document.getElementsByClassName("skillfinity");
    
    skillfinityRef.innerHTML = 'yo';

var winskil = skillfinityRef.contentWindow;

var docskil = skillfinityRef.contentDocument ? skillfinityRef.contentDocument : skillfinityRef.contentWindow.document;

var form = doc.getElementsByClassName("press");

var formskil = docskil.getElementsByClassName("welcome");

    form.onclick = function()
    {
        videoRef.print("coming");
        
        var ifra2 = parent.document.getElementsByClassName("skillfinity");
        
        var win2skil = ifra2.contentWindow;
        
        var doc2skil = ifra2.contentDocument ? ifra2.contentDocument : ifra2.contentWindow.document;
        
        var color1 = doc2skil.getElementsByClassName("welcome");
        
        color1.style.background = 'blue';
        
    }
}