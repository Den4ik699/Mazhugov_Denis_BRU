const x = document.querySelector("#myTopnav"),
    menu = document.querySelector("#menu");

x.classList.remove("responsive");
menu.addEventListener("click", (item) => {
    item.preventDefault();
    if (x.className === "nav") {
        x.classList.add("responsive");
    } else {
        x.classList.toggle("responsive");
    }
});