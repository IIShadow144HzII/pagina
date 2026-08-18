/* =====================================================
   CONFIGURACIÓN WHATSAPP
===================================================== */

const NUMERO_WHATSAPP = "34686606704";


/* =====================================================
   PRODUCTOS
===================================================== */

const productos = [

    {
        id: "producto-01",
        nombre: "Producto 1",
        descripcion: "Descripción del producto 1.",
        imagen: "fotos/producto01.png",
        categoria: "ramos"
    },

    {
        id: "producto-02",
        nombre: "Producto 2",
        descripcion: "Descripción del producto 2.",
        imagen: "fotos/producto02.png",
        categoria: "ramos"
    },

    {
        id: "producto-03",
        nombre: "Producto 3",
        descripcion: "Descripción del producto 3.",
        imagen: "fotos/producto03.png",
        categoria: "decoracion"
    },

    {
        id: "producto-04",
        nombre: "Producto 4",
        descripcion: "Descripción del producto 4.",
        imagen: "fotos/producto04.png",
        categoria: "eventos"
    },

    {
        id: "producto-05",
        nombre: "Producto 5",
        descripcion: "Descripción del producto 5.",
        imagen: "fotos/producto05.png",
        categoria: "ramos"
    },

    {
        id: "producto-06",
        nombre: "Producto 6",
        descripcion: "Descripción del producto 6.",
        imagen: "fotos/producto06.png",
        categoria: "decoracion"
    },

    {
        id: "producto-07",
        nombre: "Producto 7",
        descripcion: "Descripción del producto 7.",
        imagen: "fotos/producto07.png",
        categoria: "eventos"
    },

    {
        id: "producto-08",
        nombre: "Producto 8",
        descripcion: "Descripción del producto 8.",
        imagen: "fotos/producto08.png",
        categoria: "ramos"
    },

    {
        id: "producto-09",
        nombre: "Producto 9",
        descripcion: "Descripción del producto 9.",
        imagen: "fotos/producto09.png",
        categoria: "decoracion"
    },

    {
        id: "producto-10",
        nombre: "Producto 10",
        descripcion: "Descripción del producto 10.",
        imagen: "fotos/producto10.png",
        categoria: "eventos"
    },

    {
        id: "producto-11",
        nombre: "Producto 11",
        descripcion: "Descripción del producto 11.",
        imagen: "fotos/producto11.png",
        categoria: "ramos"
    },

    {
        id: "producto-12",
        nombre: "Producto 12",
        descripcion: "Descripción del producto 12.",
        imagen: "fotos/producto12.png",
        categoria: "decoracion"
    },

    {
        id: "producto-13",
        nombre: "Producto 13",
        descripcion: "Descripción del producto 13.",
        imagen: "fotos/producto13.png",
        categoria: "eventos"
    },

    {
        id: "producto-14",
        nombre: "Producto 14",
        descripcion: "Descripción del producto 14.",
        imagen: "fotos/producto14.png",
        categoria: "ramos"
    },

    {
        id: "producto-15",
        nombre: "Producto 15",
        descripcion: "Descripción del producto 15.",
        imagen: "fotos/producto15.png",
        categoria: "decoracion"
    },

    {
        id: "producto-16",
        nombre: "Producto 16",
        descripcion: "Descripción del producto 16.",
        imagen: "fotos/producto16.png",
        categoria: "eventos"
    },

    {
        id: "producto-17",
        nombre: "Producto 17",
        descripcion: "Descripción del producto 17.",
        imagen: "fotos/producto17.png",
        categoria: "ramos"
    },

    {
        id: "producto-18",
        nombre: "Producto 18",
        descripcion: "Descripción del producto 18.",
        imagen: "fotos/producto18.png",
        categoria: "decoracion"
    },

    {
        id: "producto-19",
        nombre: "Producto 19",
        descripcion: "Descripción del producto 19.",
        imagen: "fotos/producto19.png",
        categoria: "eventos"
    },

    {
        id: "producto-20",
        nombre: "Producto 20",
        descripcion: "Descripción del producto 20.",
        imagen: "fotos/producto20.png",
        categoria: "ramos"
    },

    {
        id: "producto-21",
        nombre: "Producto 21",
        descripcion: "Descripción del producto 21.",
        imagen: "fotos/producto21.png",
        categoria: "decoracion"
    },

    {
        id: "producto-22",
        nombre: "Producto 22",
        descripcion: "Descripción del producto 22.",
        imagen: "fotos/producto22.png",
        categoria: "eventos"
    },

    {
        id: "producto-23",
        nombre: "Producto 23",
        descripcion: "Descripción del producto 23.",
        imagen: "fotos/producto23.png",
        categoria: "ramos"
    },

    {
        id: "producto-24",
        nombre: "Producto 24",
        descripcion: "Descripción del producto 24.",
        imagen: "fotos/producto24.png",
        categoria: "decoracion"
    },

    {
        id: "producto-25",
        nombre: "Producto 25",
        descripcion: "Descripción del producto 25.",
        imagen: "fotos/producto25.png",
        categoria: "eventos"
    },

    {
        id: "producto-26",
        nombre: "Producto 26",
        descripcion: "Descripción del producto 26.",
        imagen: "fotos/producto26.png",
        categoria: "ramos"
    },

    {
        id: "producto-27",
        nombre: "Producto 27",
        descripcion: "Descripción del producto 27.",
        imagen: "fotos/producto27.png",
        categoria: "decoracion"
    },

    {
        id: "producto-28",
        nombre: "Producto 28",
        descripcion: "Descripción del producto 28.",
        imagen: "fotos/producto28.png",
        categoria: "eventos"
    },

    {
        id: "producto-29",
        nombre: "Producto 29",
        descripcion: "Descripción del producto 29.",
        imagen: "fotos/producto29.png",
        categoria: "ramos"
    },

    {
        id: "producto-30",
        nombre: "Producto 30",
        descripcion: "Descripción del producto 30.",
        imagen: "fotos/producto30.png",
        categoria: "decoracion"
    },

    {
        id: "producto-31",
        nombre: "Producto 31",
        descripcion: "Descripción del producto 31.",
        imagen: "fotos/producto31.png",
        categoria: "eventos"
    },

    {
        id: "producto-32",
        nombre: "Producto 32",
        descripcion: "Descripción del producto 32.",
        imagen: "fotos/producto32.png",
        categoria: "ramos"
    }

];


/* =====================================================
   ELEMENTOS
===================================================== */

const productosGrid =
    document.getElementById("productosGrid");

const filtros =
    document.querySelectorAll(".filtro");


/* =====================================================
   CREAR ENLACE WHATSAPP
===================================================== */

function crearEnlaceWhatsApp(producto) {

    const mensaje =
        `¡Hola! 🌷 He descubierto el "${producto.nombre}" ` +
        `y me ha encantado. ¿Podríais informarme acerca ` +
        `de su disponibilidad? 😊`;


    return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos(lista) {

    productosGrid.innerHTML = "";


    lista.forEach((producto) => {

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add("producto");


        const enlaceWhatsApp =
            crearEnlaceWhatsApp(producto);


        tarjeta.innerHTML = `

            <div class="producto-imagen">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="producto-info">

                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    ${producto.descripcion}
                </p>


                <a
                    class="contactar-whatsapp"
                    href="${enlaceWhatsApp}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <i class="bi bi-whatsapp"></i>

                    Me interesa

                </a>

            </div>

        `;


        productosGrid.appendChild(tarjeta);

    });

}


/* =====================================================
   FILTROS
===================================================== */

filtros.forEach((filtro) => {

    filtro.addEventListener(
        "click",
        () => {


            filtros.forEach((boton) => {

                boton.classList.remove("activo");

            });


            filtro.classList.add("activo");


            const categoria =
                filtro.dataset.categoria;


            if (categoria === "todos") {

                mostrarProductos(productos);

                return;

            }


            const productosFiltrados =
                productos.filter(
                    producto =>
                        producto.categoria === categoria
                );


            mostrarProductos(productosFiltrados);

        }
    );

});


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const botonMenu =
    document.getElementById("menuBtn");

const menuDesplegable =
    document.getElementById("menuDesplegable");


botonMenu.addEventListener(
    "click",
    () => {

        const abierto =
            menuDesplegable.classList.toggle("abierto");


        botonMenu.setAttribute(
            "aria-expanded",
            abierto
        );


        if (abierto) {

            botonMenu.innerHTML =
                '<i class="bi bi-x-lg"></i>';

        } else {

            botonMenu.innerHTML =
                '<i class="bi bi-list"></i>';

        }

    }
);


/* =====================================================
   CERRAR MENÚ AL PULSAR ENLACE
===================================================== */

const enlacesMenu =
    document.querySelectorAll(".menu-d a");


enlacesMenu.forEach((enlace) => {

    enlace.addEventListener(
        "click",
        () => {

            menuDesplegable.classList.remove(
                "abierto"
            );


            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );


            botonMenu.innerHTML =
                '<i class="bi bi-list"></i>';

        }
    );

});


/* =====================================================
   INICIALIZAR
===================================================== */

mostrarProductos(productos);