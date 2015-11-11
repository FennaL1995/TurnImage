var angle = 0, img = document.getElementById('img');
        var turn = function(){
        console.log("click registered");
        img.style.transform += "rotate(90deg)"; 
        angle = (angle+90);
        };