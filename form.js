let inputsText = document.querySelectorAll("input.text");
let textAreas = document.getElementsByTagName("textarea");

function saveToSessionStorage(e){
    let target = e.target;
    sessionStorage.setItem(target.getAttribute("name"), target.value);
}

for (let i = 0; i < inputsText.length; i ++)
{
    inputsText[i].value = sessionStorage.getItem(inputsText[i].getAttribute("name"))
    inputsText[i].addEventListener("input", saveToSessionStorage);
}

for (let i = 0; i < textAreas.length; i ++)
{
    textAreas[i].value = sessionStorage.getItem(textAreas[i].getAttribute("name"))
    textAreas[i].addEventListener("input", saveToSessionStorage);
}

