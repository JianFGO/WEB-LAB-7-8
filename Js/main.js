(function(){
document.getElementById('myHeading').innerHTML = "Jian lin";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

document.querySelector('nav ul li a').setAttribute('href', 
'http://www.google.co.uk');
})();
document.querySelector(".red").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "redBack");
 })
