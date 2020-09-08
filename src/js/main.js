const links = document.getElementsByTagName("a");

[...links].forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        alert();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

