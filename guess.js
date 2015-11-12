var angle = 0, img = document.getElementById('img');
imgor = 0;
imgo = "http://i01.i.aliimg.com/wsphoto/v0/810502873/diy-digitale-olieverfschilderij-diy-30-40-picasso-abstracte-muziek-schilderij-van-nummers-uniek-geschenk-voor-kind.jpg";
var urls = ["http://images.fineartamerica.com/images-medium-large/stripes-resin-elizabeth-langreiter.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/220px-Circle_-_black_simple.svg.png",
            "https://hearthunderground.files.wordpress.com/2013/03/windows-live-photo-gallery-wallpaper.jpg"];
var turnright = function(){
        if (angle ===  0) {
            console.log("1right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
        else if (angle ===  90) {
            console.log("2right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
        else if (angle ===  180) {
            console.log("3right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        } 
        else { 
            console.log("4right");
            angle = (angle+90)%360;
            console.log(angle);
            img.style.transform += "rotate(90deg)";
        }
};
var turnleft = function(){
        if (angle ===  0) {
            console.log("1left");
            angle = (angle+270)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
        else if (angle ===  270) {
            console.log("2left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
        else if (angle ===  180) {
            console.log("3left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        } 
        else { 
            console.log("4left");
            angle = (angle-90)%360;
            console.log(angle);
            img.style.transform += "rotate(270deg)";
        }
};
var guess = function(){
        if (angle ===  0) {
            alert("Good guess!");
        }
        else {
            alert("Wrong! Try again!")
        }
};
var nextimg = function(){
    var image = document.getElementById('img');
        if (imgor ===  0) {
            console.log("nextimg1");
            imgor = (imgor+1);
            image.src = "http://i01.i.aliimg.com/wsphoto/v0/810502873/diy-digitale-olieverfschilderij-diy-30-40-picasso-abstracte-muziek-schilderij-van-nummers-uniek-geschenk-voor-kind.jpg";
            angle = (angle+270)%360;
            img.style.transform += "rotate(270deg)";
        }
        else if (imgor ===  1) {
            console.log("nextimg2");
            imgor = (imgor+1);
            image.src = "http://images.fineartamerica.com/images-medium-large/stripes-resin-elizabeth-langreiter.jpg";
            img.style.transform += "rotate(180deg)";
            angle = (angle+180)%360;
        }
        else{
            image.src = "https://hearthunderground.files.wordpress.com/2013/03/windows-live-photo-gallery-wallpaper.jpg";
            imgor = 0;
        }
};