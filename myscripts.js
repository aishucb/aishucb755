const pos = new Array("FREELANCE FULL STACK DEVELOPER", "PROFESSIONAL HOST FOR STAGED EVENTS", "JAVASCRIPT DEVELOPER", "C DEVELOPER");
const imag = new Array("images/galnew/pic (2).jpg", "images/galnew/pic (1).jpg", "images/galnew/pic (1).jpeg","images/galnew/pic (3).jpg");
const word = new Array('"The moment I decided to become a full stack developer was at Brototype Brocode  challenge. Prior to that, I could only write simple C programming. The course introduces me to individuals who were really brilliant, and I learned from them."','"My experience in college gave me the strength to face any challenge. Whether you are happy or unhappy, this moment will pass."','"My project TRADCURE, which has been chosen for IIT AVSAR 2023, started as a result of Vishnu Sirs IIT PETRICHOR class on AI."','"My confidence to address a group increased after anchoring. To succeed in life, you must have faith in yourself."');
var i = 0;
function sixfunc() {

    setInterval(change, 1000);
}
function changewidth() 
{
    if (screen.width < 991) {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "none";
        document.getElementById("navbar").style.textAlign = "left";
        document.getElementById("aboutname").style.left="0%";
        document.getElementById("aboutname").style.bottom="0%";
        document.getElementById("galimg").style.width=screen.width;
        document.getElementById("galimg").style.height="auto";
    
    }
    
    else
    {
        document.getElementById("two").style.display = "inline";
        document.getElementById("three").style.display = "inline";
        document.getElementById("navbar").style.display = "inline-block";
        document.getElementById("aboutname").style.left="125%";
        document.getElementById("aboutname").style.bottom="30%";
        document.getElementById("galimg").style.width="auto";
        document.getElementById("galimg").style.height="400px";
        document.getElementById("navbar").style.textAlign = "right";
    }
}

function change() {
    if (i > 3) {
        i = 0;
    }
    document.getElementById("six").innerHTML = pos[i];
    i++;
}
var j = 0;
function changepic() {

    document.getElementById("galimg").src = imag[(j + 1) % 4];
    document.getElementById("desc").innerHTML = word[(j + 1) % 4];
    j++;
}
