//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear()
const min = max - 10;

//eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos();
    llenarSelect();
})
//funcones
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, color, transmision, precio} = auto;

        const autoHtml = document.createElement('P')
        autoHtml.textContent = `
            ${marca} ${modelo} - ${year} ${puertas} puertas - Color: ${color} - Transmisión: ${transmision} - Precio: $${precio}
        `
        resultado.appendChild(autoHtml)
    })
}

function llenarSelect(){
    for(let i = max; i >= min; i--){

        const fecha = document.createElement('option');
        fecha.value = i;
        fecha.textContent = i;
        year.appendChild(fecha)
    }
}