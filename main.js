const knmore = document.getElementById("knmore");
const knmore2 = document.getElementById("knmore2");
const definition = document.getElementById("definition");
const prevention = document.getElementById("prevention");
const statistics = document.getElementById("statistics");
const pagename = document.getElementById("pagename");


const items = [knmore, knmore2, definition, prevention, statistics, pagename];

items.forEach(item => {
    item.addEventListener('click', scrollToDivOnClick);
});

function scrollToDivOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: section - 100,
        behavior: "smooth",
    });
}


