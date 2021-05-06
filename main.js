//DOM

let c1 = document.querySelector('#color1');
let c2 = document.querySelector('#color2');
let c3 = document.querySelector('#color3');
let c4 = document.querySelector('#color4');
let c5 = document.querySelector('#color5');

let cc1 = document.querySelector('#color1code');
let cc2 = document.querySelector('#color2code');
let cc3 = document.querySelector('#color3code');
let cc4 = document.querySelector('#color4code');
let cc5 = document.querySelector('#color5code');


let l1 = document.querySelector('#lock1');
let l2 = document.querySelector('#lock2');
let l3 = document.querySelector('#lock3');
let l4 = document.querySelector('#lock4');
let l5 = document.querySelector('#lock5');


let color1lock = false;
let color2lock = false;
let color3lock = false;
let color4lock = false;
let color5lock = false;



let c1name = document.querySelector('#color1name');
let c2name = document.querySelector('#color2name');
let c3name = document.querySelector('#color3name');
let c4name = document.querySelector('#color4name');
let c5name = document.querySelector('#color5name');

let addColor = document.querySelector('#addColor');
let gradient = document.querySelector('#gradient');
let vGradient = document.querySelector('#viewGradient');
let colors = document.querySelector('#colors');

gradient.style.display = 'none';
vGradient.onmouseover = ()=>{
    if(disableCheck() == 0){
        colors.style.display = 'none';
    gradient.style.display = 'block';
     gradient.style.background = `linear-gradient(90deg, ${cc1.innerHTML} 0%, ${cc2.innerHTML} 25%, ${cc3.innerHTML} 50%, ${cc4.innerHTML} 75%, ${cc5.innerHTML} 100%)`;
    }
}
vGradient.onmouseout = ()=>{
    gradient.style.display = 'none';
    colors.style.display = 'flex';
}

 

//FUNCTIONS

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;
const rgba2hexFetch = (rgba) => `${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;

function generateShades(color, el, code, name){
    el.querySelector('.shades').innerHTML = '';
    el.querySelector('.shades').style.display = "flex"
    el.querySelector('.icons').style.display = "none"
    el.querySelector('.codeName').style.display = "none"
    for(i = 50; i > 0; i-= 5){
        let shade = document.createElement('div');
        shade.classList.add('shade');
        let x = tinycolor(color).lighten(i).toString();
        shade.style.backgroundColor = x;
        shade.onclick = () =>{
            el.querySelector('.shades').style.display = "none";
            el.querySelector('.icons').style.display = "flex";
            el.querySelector('.codeName').style.display = "flex";
            el.style.backgroundColor = x;
            if (colorCheck(x)) {
                el.style.color = "black"
            } else {
                el.style.color = "white";
            }
            code.innerHTML = x;
            fetchColor(rgba2hexFetch(el.style.backgroundColor), name);
            
        }
        el.querySelector('.shades').appendChild(shade);
    }

    let shade = document.createElement('div');
    shade.onclick = () =>{
        el.querySelector('.shades').style.display = "none";
        el.querySelector('.icons').style.display = "flex";
        el.querySelector('.codeName').style.display = "flex";
        el.style.backgroundColor = x;
        if (colorCheck(x)) {
            el.style.color = "black"
        } else {
            el.style.color = "white";
        }
        code.innerHTML = x;
        fetchColor(rgba2hexFetch(el.style.backgroundColor), name);
    }
        shade.classList.add('shade');
        shade.style.backgroundColor = color;

    for(i = 0; i < 50; i+= 5){
        let shade = document.createElement('div');
        shade.classList.add('shade');
        let x = tinycolor(color).darken(i).toString();
        shade.style.backgroundColor = x;
        shade.onclick = () =>{
            el.querySelector('.shades').style.display = "none";
            el.querySelector('.icons').style.display = "flex";
            el.querySelector('.codeName').style.display = "flex";
            el.style.backgroundColor = x;
            if (colorCheck(x)) {
                el.style.color = "black"
            } else {
                el.style.color = "white";
            }
            code.innerHTML = x;
            fetchColor(rgba2hexFetch(el.style.backgroundColor), name);   
        }

        
        el.querySelector('.shades').appendChild(shade);
    }
    
}


l1.onclick = () => {
    if (l1.classList[1] == 'fa-lock') {
        l1.classList.remove('fa-lock');
        l1.classList.add('fa-unlock');
        color1lock = false;
        l1.style.visibility = "";
    } else {
        l1.classList.remove('fa-unlock');
        l1.classList.add('fa-lock');
        color1lock = true;
        l1.style.visibility = "visible";
    }
}

l3.onclick = () => {
    if (l3.classList[1] == 'fa-lock') {
        l3.classList.remove('fa-lock');
        l3.classList.add('fa-unlock');
        color3lock = false;
        l3.style.visibility = "";
    } else {
        l3.classList.remove('fa-unlock');
        l3.classList.add('fa-lock');
        color3lock = true;
        l3.style.visibility = "visible";
    }
}


l2.onclick = () => {
    if (l2.classList[1] == 'fa-lock') {
        l2.classList.remove('fa-lock');
        l2.classList.add('fa-unlock');
        color2lock = false;
        l2.style.visibility = "";
    } else {
        l2.classList.remove('fa-unlock');
        l2.classList.add('fa-lock');
        color2lock = true;
        l2.style.visibility = "visible";
    }
}

l4.onclick = () => {
    if (l4.classList[1] == 'fa-lock') {
        l4.classList.remove('fa-lock');
        l4.classList.add('fa-unlock');
        color4lock = false;
        l4.style.visibility = "";
    } else {
        l4.classList.remove('fa-unlock');
        l4.classList.add('fa-lock');
        color4lock = true;
        l4.style.visibility = "visible";
    }
}

l5.onclick = () => {
    if (l5.classList[1] == 'fa-lock') {
        l5.classList.remove('fa-lock');
        l5.classList.add('fa-unlock');
        color5lock = false;
        l5.style.visibility = "";
    } else {
        l5.classList.remove('fa-unlock');
        l5.classList.add('fa-lock');
        color5lock = true;
        l5.style.visibility = "visible";
    }
}


function colorAdd() {
    let disabled = 0;
    if (c1.style.display == "none") {
        disabled++;
        if (disabled > 1) {
            disabled--;
            return
        }
        c1.style.display = "";
    }
    if (c2.style.display == "none") {
        disabled++;
        if (disabled > 1) {
            disabled--;
            return
        }
        c2.style.display = "";
    }
    if (c3.style.display == "none") {
        disabled++;
        if (disabled > 1) {
            disabled--;
            return
        }
        c3.style.display = "";
    }
    if (c4.style.display == "none") {
        disabled++;
        if (disabled > 1) {
            disabled--;
            return
        }
        c4.style.display = "";
    }
    if (c5.style.display == "none") {
        disabled++;
        if (disabled > 1) {
            disabled--;
            return
        }
        c5.style.display = "";
    }
}

function fetchColor(color, el) {
    fetch(`https://www.thecolorapi.com/id?hex=${color}&format=json`).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        el.innerHTML = data.name.value;
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
}

addColor.onclick = () => {
    colorAdd();
}

function disableCheck() {
    let d = 0;
    if (c1.style.display == "none") {
        d++;
    }
    if (c2.style.display == "none") {
        d++;
    }
    if (c3.style.display == "none") {
        d++;
    }
    if (c4.style.display == "none") {
        d++;
    }
    if (c5.style.display == "none") {
        d++;
    }

    return d;

}


function getRandomColor() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return color;
}


function colorCheck(color) {
    return tinycolor(color).isLight();
}

function changeColor(el, code, name) {

    el.style.backgroundColor = getRandomColor();
    code.innerHTML = rgba2hex(el.style.backgroundColor).toUpperCase();
    if (colorCheck(code.innerHTML)) {
        el.style.color = "black"
    } else {
        el.style.color = "white";
    }

    fetchColor(rgba2hexFetch(el.style.backgroundColor), name);
}


function removeElement(color) {
    color.style.display = "none";
    if (disableCheck() > 3) {
        colorAdd();
    }
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }



document.onkeypress = () => {
    if (color1lock == false) {
        changeColor(c1, cc1, c1name);
        
    }
    if (color2lock == false) {
        changeColor(c2, cc2, c2name);
    }
    if (color3lock == false) {
        changeColor(c3, cc3, c3name);
    }
    if (color4lock == false) {
        changeColor(c4, cc4, c4name);
    }
    if (color5lock == false) {
        changeColor(c5, cc5, c5name);
    }
}





