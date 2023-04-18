const myTXA = document.getElementById('myTXA');
const myDiv = document.getElementById('myDiv');
const myD = document.querySelector('.myD');
const title = document.createElement('div');
title.className = 'title_2';
title.innerHTML = 'УУУУуууу'

  myTXA.addEventListener(
    "focus",
    (event) => {
        myDiv.style.setProperty("opacity", "1");
        myD.appendChild(title);
    },
    true
  );
  
  myTXA.addEventListener(
    "blur",
    (event) => {
        myDiv.style.setProperty("opacity", "0");
        myD.lastChild.remove()
    },
    true
  );





