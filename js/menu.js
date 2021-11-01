const abrir = document.querySelector('.abrir');
const fechar = document.querySelector('.fechar');

document.getElementById('check').onclick = function () {

    if (this.checked) {
        abrir.style.display = "none";
        fechar.style.display = "block";
    } else {
        abrir.style.display = "block";
        fechar.style.display = "none";
    }
};