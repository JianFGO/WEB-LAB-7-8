(function(){
    // start
document.getElementById('myHeading').innerHTML = "Jian lin";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

document
.querySelector('nav ul li a')
.setAttribute('href', 'http://www.google.co.uk');


let colourButtons = document.querySelectorAll(".colPicker")
for(let i=0; i < colourButtons.length; i++){
 colourButtons[i].addEventListener("click", chgColour)
}



document.querySelector(".red").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "redBack");
 })

let imageAr = [
    'images/view1.jpg', 
    'images/view2.jpg', 
    'images/view3.jpg',
    'images/view4.jpg', 
    'images/view5.jpg', 
    'images/view6.jpg'
];

    let imageCount = 0;
    setInterval(function() {
        document
        .getElementById("myImages")
        .setAttribute("src", imageAr[imageCount]);
        imageCount++;
    }, 1000);

    // end
   })();