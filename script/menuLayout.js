function exibirMenu() {
    const menu = document.getElementById('menu');

    if(menu.style.display == "none") {
        menu.style.display = "inline-block";
    }
    else {
        menu.style.display = "none";
    }
}