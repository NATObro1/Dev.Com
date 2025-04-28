
function HtmtoCss() {
    const html = document.getElementById ("ht");
    const back = document.getElementById("bod");
    const p = document.getElementById("c");
    const f = document.getElementById("f");
    const d = document.getElementById("de");
    const what = document.getElementById("What");
    const Struc = document.getElementById("Structure");
    const Com = document.getElementById("common");
    const why = document.getElementById("Why");
    const whats = document.getElementById("whats");
    const Strucs = document.getElementById("struc");
    const Coms = document.getElementById("commons");
    const whys = document.getElementById("whys");

    html.addEventListener("click", function() {
        if (true) {
            d.style.color = "#663399"
            f.style.color = "#333333"
            p.style.color = "#663399"
            back.style.backgroundColor = "#E6E6FA"
            html.style.color = "#663399";
            html.innerHTML = ("CSS");
            what.innerHTML = ("CSS stands for Cascading Style Sheets. It controls how HTML elements look on a page, like their colors, sizes, spacing, and positions. CSS helps make websites beautiful and easy to use.")
            Struc.innerHTML = ("CSS styles are applied by targeting HTML elements using selectors. You can write CSS inside a style tag, link an external stylesheet with link, or even use inline styles. CSS rules are made up of selectors and declarations.")
            Com.innerHTML = ("Some popular CSS properties include color, font-size, margin, padding, background-color, and border. These properties allow you to customize the appearance and layout of any webpage.")
            why.innerHTML = ("CSS separates the design from the structure of a site. This makes it easier to maintain, update, and create consistent styles across pages. Without CSS, all websites would look plain and boring!")
            whats.innerHTML = ("What is CSS?")
            Strucs.innerHTML = ("How CSS Works")
            Coms.innerHTML = ("Common CSS Properties")
            whys.innerHTML = ("Why is CSS Important?")
            console.log("Button was clicked and condition is true!");
        }
    });
}
