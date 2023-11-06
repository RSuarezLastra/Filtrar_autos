//variables
const resultado = document.querySelector('#resultado')

//eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos()
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