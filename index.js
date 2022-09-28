const div = document.getElementById("div");

let Acciones = [
    {
        id: 1,
        nombre: "BROOTA SPA",
        precio: 2400,
        logo: "https://broota.s3.amazonaws.com/solicitudes/15/logo/logo_bipKZXb58Z0oPCXc67LHkjghgMxP8C_200_200.png"
    },
    {
        id: 2,
        nombre: "FARMALOOP",
        precio: 1300,
        logo: "https://broota.s3.amazonaws.com/solicitudes/588/logo/logo_SxXV3GNHnbwZc4IbQdK5IhzCMfzgCF_200_200.png"
    },
    {
        id: 3,
        nombre: "ENVIRON",
        precio: 900,
        logo: "https://broota.s3.amazonaws.com/solicitudes/454/logo/logo_oVfu7RH2Vun4AJlbIuTIFQUECgQh94_200_200.png"
    },
]

Acciones.forEach(empresa => {
    let cardRenderizada = document.createElement("div")
    cardRenderizada.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${empresa.logo}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${empresa.nombre}</h4>
                <h6 class="card-text">Precio: $${empresa.precio}</h6>
            </div>
            <button id=${empresa.id}> COMPRAR </button>
        </div>
    `
    div.append(cardRenderizada)

})