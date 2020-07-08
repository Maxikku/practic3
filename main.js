
// змінює колір тексту елемнту з ід main_header на будь-який інший

let header = document.getElementById('main_header');

header.style.color = 'red';




//pобить ширину елементу ul 400 пікселів


let ulWid = document.getElementsByTagName('ul');

for (let i = 0; i < ulWid.length; i++) {
    ulWid[i].style.width = '400px';
    
}

//pобить шириниу всіх елементів з класом linkList шириною 50%

let widCl = document.getElementsByClassName('linkList');

for (let i = 0; i < widCl.length; i++) {
    widCl[i].style.width = '50%';
    
}

// отримує текст який зберігається в елементі з класом listElement2

let textList = document.getElementsByClassName('listElement2');



for (let i = 0; i < textList.length; i++) {
    console.log(textList[i].innerText);
    
}

//отримує всі елементи li та змінює ім колір фону на сірий

let bgColLi = document.getElementsByTagName('li');

for (let i = 0; i < bgColLi.length; i++) {
    bgColLi[i].style.backgroundColor = 'silver';    
}

// отримує всі елементи 'a' та додає їм клас anchor

let addClass = document.getElementsByTagName('a');

for (let i = 0; i < addClass.length; i++) {
    addClass[i].classList.add('anchor');    
}


//отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let linkSize = document.getElementsByTagName('a');

for (let i = 0; i < linkSize.length; i++) {
    if (linkSize[i].innerHTML === 'link3') {
        linkSize[i].style.fontSize = '40px'
    }    
}


//отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let addClassA = document.getElementsByTagName('a');

for (let i = 0; i < addClassA.length; i++) {
    addClassA[i].classList.add('element');
    addClassA[i].innerHTML = 'xxx';    
}

//отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let elements = document.getElementsByClassName('sub-header');
let color = prompt('your background');


for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = color;
}


//отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let elementsSub = document.getElementsByClassName('sub-header');
let colorSub = prompt('font color');

for (let i = 0; i < elementsSub.length; i++) {
    if (elementsSub[i].innerHTML === 'content 2 segment') {
        elementsSub[i].style.color = colorSub;
    }    
}

//отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


let elementsContent = document.getElementsByClassName('content_1');
let elementsText = prompt('you text');

for (let i = 0; i < elementsContent.length; i++) {
    elementsContent[i].innerHTML = elementsText;    
}

//отримати елементи p та змінити їм paddin на довільне значення

let elementsPad = document.getElementsByTagName('p');

for (let i = 0; i < elementsPad.length; i++) {
    elementsPad[i].style.padding = '10px 12px 15px 20px';    
}

//отримати елементи з класом text2 та змінити їм текст на довільне значення

let changeText = document.getElementsByClassName('text2');

for (let i = 0; i < changeText.length; i++) {
    changeText[i].innerHTML = '123123123123';    
}




