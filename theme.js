let sun, moon;

function createSun() {
    let list = document.getElementById("footer_list");

    let new_list_item = document.createElement("li");
    list.appendChild(new_list_item);
    list.lastChild.innerHTML = "<svg id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-sun\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n" +
        "  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n" +
        "  <circle cx=\"12\" cy=\"12\" r=\"4\" />\n" +
        "  <path d=\"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7\" />\n" +
        "</svg>";

    sun = list.lastChild.firstChild;
}

function createMoon() {
    let list = document.getElementById("footer_list");

    let another_new_list_item = document.createElement("li");
    list.appendChild(another_new_list_item);
    list.lastChild.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-moon-stars\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n" +
        "  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n" +
        "  <path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\" />\n" +
        "  <path d=\"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2\" />\n" +
        "  <path d=\"M19 11h2m-1 -1v2\" />\n" +
        "</svg>";

    moon = list.lastChild.firstChild;
}

function toggleLight() {
    moon.parentNode.setAttribute("class", "invisible");
    sun.parentNode.setAttribute("class", "visible");

    let background = document.querySelector("body");
    background.className = "";

    let content = document.getElementById("content");
    content.setAttribute("class", "light_font");

    let dropdown = document.querySelectorAll("ul.dropdown_menu");
    for (let i = 0; i < dropdown.length; i ++)
    {
        dropdown[i].classList.add("light_font");
        dropdown[i].classList.remove("dark_font");
    }

    if (document.getElementById("contact_form")) {
        let contactForm = document.getElementById("contact_form");
        contactForm.setAttribute("class", "light_border")
    }

    localStorage.setItem("theme", "light");
}

function toggleDark() {
    sun.parentNode.setAttribute("class", "invisible");
    moon.parentNode.setAttribute("class", "visible");

    let background = document.querySelector("body");
    background.className = "dark_background";

    let content = document.getElementById("content");
    content.setAttribute("class", "dark_font")

    let dropdown = document.querySelectorAll("ul.dropdown_menu");
    for (let i = 0; i < dropdown.length; i ++)
    {
        dropdown[i].classList.add("dark_font");
        dropdown[i].classList.remove("light_font");
    }

    if (document.getElementById("contact_form")) {
        let contactForm = document.getElementById("contact_form");
        contactForm.setAttribute("class", "dark_border")
    }

    localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
    createSun()
    createMoon()
    toggleLight()
}

else {
    createSun()
    createMoon()
    toggleDark();
}

sun.addEventListener("click", toggleDark);
moon.addEventListener("click", toggleLight);