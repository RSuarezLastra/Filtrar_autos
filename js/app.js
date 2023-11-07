//variables
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear()
const min = max - 10;

//guaardar datos de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}
//eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos();
    llenarSelect();
})

//event listenners formularios
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value
    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda)
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
// genera los datos del select
function llenarSelect(){
    for(let i = max; i >= min; i--){

        const fecha = document.createElement('option');
        fecha.value = i;
        fecha.textContent = i;
        year.appendChild(fecha)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarAÑo)
    console.log(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if( marca ){
        return auto.marca === marca
    }
    return auto
}
function filtrarAÑo(auto){
    const { year } = datosBusqueda;
    if( year ){
        return auto.year == year
    }
    return auto
}