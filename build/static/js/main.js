const links = document.querySelectorAll('a[href^="#"]');

[...links].forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

const products = document.getElementsByClassName('product');

function removeActive(nodes, className){
    [...nodes].forEach(node => node.classList.remove(`${className}`));
}

[...products].forEach(product => {
    product.addEventListener('click',function(e){
        e.preventDefault();
        removeActive(products, 'active-link');
        this.classList.add('active-link');
    });
});