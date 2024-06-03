let i = 0;
let txt = "Hey, nice to meet you! Let's create amazing websites together! ✨"; 
let speed = 60; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("twtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
    typeWriter();
  };

  function toggleDiv(divId) {
    var div = document.getElementById(divId);
    div.classList.toggle('hidden');
}