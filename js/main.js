let video = document.querySelector(".pop");
video.addEventListener("click", function(event){
    var overlay = document.createElement('div');
    overlay.className="pop-over";
    document.body.appendChild(overlay);
    
    var mybutton = document.createElement('button');
    mybutton.className="my-button";
    var context = document.createTextNode('X');
    mybutton.appendChild(context);
    overlay.appendChild(mybutton); 

    var show = document.createElement("video");
    show.className="vid";
    show.setAttribute("controls" , true);
    show.setAttribute("autoplay" , true);
    show.setAttribute("loop" , true);
    show.src="vid-3.mp4";
    overlay.appendChild(show);


});

document.addEventListener('click' , function(event){
    if(event.target.className === "my-button"){
        document.querySelector(".pop-over").remove();
    }
    
})



