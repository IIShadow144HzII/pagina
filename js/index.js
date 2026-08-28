/* =====================================================
   WHATSAPP
===================================================== */

const NUMERO_WHATSAPP = "34686606704";


/* =====================================================
   PRODUCTOS
===================================================== */

const productos = [

    /* =================================================
       RAMOS
    ================================================= */

    {
        id: "producto-01",
        nombre: "Jarrón Miramar",
        imagen: "jarrones/12720740-7f2a-4d99-92c8-8fe3e6f0f42c.png",
        categoria: "ramos",
        tipo: "jarrones",
        precio: 65 
    },

    {
        id: "producto-02",
        nombre: "Jarrón Bibury",
        descripcion: "Descripción del producto 2.",
        imagen: "jarrones/ca961ce3-bf7d-47e5-a21b-dff939145d45 (1).png",
        categoria: "ramos",
        tipo: "jarrones",
        precio: 59
    },

    {
        id: "producto-03",
        nombre: "Jarrón Versailles",
        descripcion: "Descripción del producto 3.",
        imagen: "jarrones/6c5b50ae-9bb9-442b-bff3-6648e44e5d23.png",
        categoria: "ramos",
        tipo: "jarrones",
        precio: 79
    },

    {
        id: "producto-04",
        nombre: "Capazo Sweet Song",
        descripcion: "Descripción del producto 4.",
        imagen: "capazos/a8de9997-2b08-4d9e-a82a-6bc203d22d35.png",
        categoria: "ramos",
        tipo: "capazos",
        precio: 59
    },

    {
        id: "producto-05",
        nombre: "Capazo Paradise",
        descripcion: "Descripción del producto 5.",
        imagen: "capazos/ee274873-4e51-474b-b09c-4bda965f7a11.png",
        categoria: "ramos",
        tipo: "capazos",
        precio: 95
    },

    {
        id: "producto-06",
        nombre: "Capazo Melody",
        descripcion: "Descripción del producto 6.",
        imagen: "capazos/42499836-87db-4c1c-a38d-9a0c2c825f36.png",
        categoria: "ramos",
        tipo: "capazos",
        precio: 65
    },

    {
        id: "producto-07",
        nombre: "Bouquet Neko",
        descripcion: "Descripción del producto 7.",
        imagen: "ramos/c3431b4c-b30d-477d-a718-3653415fdb8e.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 35
    },

    {
        id: "producto-08",
        nombre: "Bouquet Campiña",
        descripcion: "Descripción del producto 8.",
        imagen: "ramos/acdf600c-d8b1-4efd-ae57-7c87451ef397.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 39
    },

    {
        id: "producto-09",
        nombre: "Bouquet Sissí",
        descripcion: "Descripción del producto 9.",
        imagen: "ramos/0b1a97fc-3de8-4430-a930-cf52c33d4f0a.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 30
    },

    {
        id: "producto-10",
        nombre: "Bouquet Lavanda",
        descripcion: "Descripción del producto 10.",
        imagen: "ramos/350c6836-db7f-48c6-8c8a-2b75650422e7.jpg",
        categoria: "ramos",
        tipo: "buques",
        precio: 30
    },

    {
        id: "producto-11",
        nombre: "Bouquet Romantic",
        descripcion: "Descripción del producto 11.",
        imagen: "ramos/9ccbc9ea-ce49-45de-b1a0-f76477987fc2.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 49
    },

    {
        id: "producto-12",
        nombre: "Bouquet Viena",
        descripcion: "Descripción del producto 12.",
        imagen: "ramos/viena.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 39
    },

    {
        id: "producto-13",
        nombre: "Bouquet Borgoña",
        descripcion: "Descripción del producto 13.",
        imagen: "ramos/8f1ba69b-d37f-40d9-9b6a-417a098c2d5d.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 49
    },

    {
        id: "producto-14",
        nombre: "Bouquet Lyra",
        descripcion: "Descripción del producto 14.",
        imagen: "ramos/89153cee-be99-475d-bf65-2959fc721442.png",
        categoria: "ramos",
        tipo: "buques",
        precio: 27
    },


    /* =================================================
       BUQUÉS DE ROSAS
    ================================================= */

    {
        id: "producto-15",
        nombre: "Ramo Sinfonía Escarlata",
        descripcion: "Descripción del producto 15.",
        imagen: "buquesR/ChatGPT Image 24 ago 2026, 23_58_14.png",
        categoria: "buquesR",
        precio: 199
    },

    {
        id: "producto-16",
        nombre: "Bouquet Rubí Imperial",
        descripcion: "Descripción del producto 16.",
        imagen: "buquesR/53983f73-8293-4655-a271-99ff14534300.png",
        categoria: "buquesR",
        precio: 259
    },

    {
        id: "producto-17",
        nombre: "Bouquet Alba Imperial",
        descripcion: "Descripción del producto 17.",
        imagen: "buquesR/11855efe-da6f-4e31-a50d-f7ab4841e69a.png",
        categoria: "buquesR",
        precio: 225
    },

    {
        id: "producto-18",
        nombre: "Cesto 200 rosas Premium",
        descripcion: "Descripción del producto 18.",
        imagen: "buquesR/ChatGPT Image 25 ago 2026, 00_11_24.png",
        categoria: "buquesR",
        precio: 735
    },

    {
        id: "producto-19",
        nombre: "Bouquet 12 rosas Premium",
        descripcion: "Descripción del producto 19.",
        imagen: "buquesR/96d86412-f838-48c8-b051-64e8cfd24392.png",
        categoria: "buquesR",
        precio: 48
    },

    {
        id: "producto-20",
        nombre: "Dúo Mon Amour",
        descripcion: "Descripción del producto 20.",
        imagen: "buquesR/88d61d80-58c4-4a00-be09-9115fe4e9331.png",
        categoria: "buquesR",
        precio: 99
    },


    /* =================================================
       FLOR SECA / PRESERVADA
    ================================================= */

    {
        id: "producto-21",
        nombre: "Jarrón Nirvana",
        descripcion: "Descripción del producto 21.",
        imagen: "florSeca/0030198b-e793-449b-a18c-f6a501c7af14.png",
        categoria: "florSeca",
        precio: 49
    },

    {
        id: "producto-22",
        nombre: "Cesto Thanksgiving",
        descripcion: "Descripción del producto 22.",
        imagen: "florSeca/4e9d48e9-5159-4d34-903b-118f4a2bb5ed.png",
        categoria: "florSeca",
        precio: 49
    },

    {
        id: "producto-23",
        nombre: "Jarrón Sophie",
        descripcion: "Descripción del producto 23.",
        imagen: "florSeca/5abef82e-0260-47b3-b50e-82ad78135f8e.png",
        categoria: "florSeca",
        precio: 49
    },

    {
        id: "producto-24",
        nombre: "Ramo Velvet",
        descripcion: "Descripción del producto 24.",
        imagen: "florSeca/a8b55ccb-62d6-4506-a0f1-b7ff750c753d.png",
        categoria: "florSeca",
        precio: 29
    },

    {
        id: "producto-25",
        nombre: "Jarrón Cinque Terre",
        descripcion: "Descripción del producto 25.",
        imagen: "florSeca/2628f61d-8dd4-4cde-bc13-1aa28682db71.png",
        categoria: "florSeca",
        precio: 49
    },

    {
        id: "producto-26",
        nombre: "Jarrón Victoria",
        descripcion: "Descripción del producto 26.",
        imagen: "florSeca/d7402061-e60a-4f05-b389-5eba2e679c85.png",
        categoria: "florSeca",
        precio: 30
    },

    {
        id: "producto-27",
        nombre: "Jarrón Venezia",
        descripcion: "Descripción del producto 27.",
        imagen: "florSeca/0d6350fb-78d8-4274-a3e4-e0195f2ebc33.png",
        categoria: "florSeca",
        precio: 59
    },

    {
        id: "producto-28",
        nombre: "Capazo Atardecer",
        descripcion: "Descripción del producto 28.",
        imagen: "florSeca/285cdf90-e40c-4101-849d-3446fc974436.png",
        categoria: "florSeca",
        precio: 115
    },

    {
        id: "producto-29",
        nombre: "Capazo Carnaval",
        descripcion: "Descripción del producto 29.",
        imagen: "florSeca/d49d0753-4dd8-4c43-9bca-2e3cbabcfcaf.png",
        categoria: "florSeca",
        precio: 30
    },

    {
        id: "producto-30",
        nombre: "Centro Siena",
        descripcion: "Descripción del producto 30.",
        imagen: "florSeca/41167f49-90bb-4085-9b4c-dc1e1230387e.png",
        categoria: "florSeca",
        precio: 65
    },

    {
        id: "producto-31",
        nombre: "Jarrón Nostalgia",
        descripcion: "Descripción del producto 31.",
        imagen: "florSeca/b5d228c2-9bb7-494d-9682-b5923ef3a1c0.png",
        categoria: "florSeca",
        precio: 65
    },

    {
        id: "producto-32",
        nombre: "Jarrón Bretagne",
        descripcion: "Descripción del producto 32.",
        imagen: "florSeca/321cfe22-b9e9-4882-a6fc-a547d9a98810.png",
        categoria: "florSeca",
        precio: 45
    },

    {
        id: "producto-33",
        nombre: "Capazo Sorrento",
        descripcion: "Descripción del producto 33.",
        imagen: "florSeca/0e39b813-10be-4ba1-a423-f3553f2ca17b.png",
        categoria: "florSeca",
        precio: 55
    },

    {
        id: "producto-34",
        nombre: "Jarrón Aurora",
        descripcion: "Descripción del producto 34.",
        imagen: "florSeca/49a08bb2-eb83-49bc-853f-12e82542b3d8.png",
        categoria: "florSeca",
        precio: 59
    },

    {
        id: "producto-35",
        nombre: "Capazo Swetness",
        descripcion: "Descripción del producto 35.",
        imagen: "florSeca/6caa529e-2ecb-4b6c-af8a-2a3095e01269.png",
        categoria: "florSeca",
        precio: 65
    },


    /* =================================================
       CENTROS FLORALES
    ================================================= */

    {
        id: "producto-36",
        nombre: "Centro Elegance",
        descripcion: "Descripción del producto 36.",
        imagen: "centros-florales/80f57d45-59da-4cf8-adad-e1c49e8f36da.png",
        categoria: "centros-florales",
        precio: 149
    },

    {
        id: "producto-37",
        nombre: "Centro Armonía",
        descripcion: "Descripción del producto 37.",
        imagen: "centros-florales/c5d5f52a-d687-4f88-b931-60c52f806fa7.png",
        categoria: "centros-florales",
        precio: 149
    },

    {
        id: "producto-38",
        nombre: "Centro Sweet",
        descripcion: "Descripción del producto 38.",
        imagen: "centros-florales/c03df9d4-432c-4c92-a708-d099c5181a24.png",
        categoria: "centros-florales",
        precio: 55
    },

    {
        id: "producto-39",
        nombre: "Centro Moon",
        descripcion: "Descripción del producto 39.",
        imagen: "centros-florales/ec8675d3-8943-43bc-b5e4-176c33e0aa11.png",
        categoria: "centros-florales",
        precio: 99
    },

    {
        id: "producto-40",
        nombre: "Centro Memory",
        descripcion: "Descripción del producto 40.",
        imagen: "centros-florales/17002b9e-0730-46db-b831-35fba41c850d.png",
        categoria: "centros-florales",
        precio: 110
    },

    {
        id: "producto-41",
        nombre: "Centro Tropic",
        descripcion: "Descripción del producto 41.",
        imagen: "centros-florales/b1fb872e-cf60-44c9-8d2e-3dbae33b6eb1.png",
        categoria: "centros-florales",
        precio: 179
    },

    {
        id: "producto-42",
        nombre: "Centro Nieve y Terciopelo",
        descripcion: "Descripción del producto 42.",
        imagen: "centros-florales/22c7c252-95aa-4ed3-a1e1-ad0a12ca6a13.png",
        categoria: "centros-florales",
        precio: 149
    },

    {
        id: "producto-43",
        nombre: "Centro Essence",
        descripcion: "Descripción del producto 43.",
        imagen: "centros-florales/9ae6657a-e9d2-4439-8388-ffbaf2ac3278.png",
        categoria: "centros-florales",
        precio: 149
    },

    {
        id: "producto-44",
        nombre: "Centro Duende y Alma",
        descripcion: "Descripción del producto 44.",
        imagen: "centros-florales/ddce1a27-bae0-4dd2-a2ce-81a10b1ffbb1.png",
        categoria: "centros-florales",
        precio: 75
    },

    {
        id: "producto-45",
        nombre: "Centro Vals",
        descripcion: "Descripción del producto 45.",
        imagen: "centros-florales/9dcc46b7-c2ec-4764-9524-103e74e68436.png",
        categoria: "centros-florales",
        precio: 79
    },

    {
        id: "producto-46",
        nombre: "Centro Edelwise",
        descripcion: "Descripción del producto 46.",
        imagen: "centros-florales/31d87979-4a60-4610-aac3-3fcbc4588a00.png",
        categoria: "centros-florales",
        precio: 149
    },

    {
        id: "producto-47",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "centros-florales/4c2df6af-bcf4-4a9b-a592-d350c75f1a93.png",
        categoria: "centros-florales",
        precio: 129
    }

];


/* =====================================================
   ELEMENTOS DEL DOM
===================================================== */

const productosGrid =
    document.getElementById("productosGrid");

const filtros =
    document.querySelectorAll(".filtro");

const subfiltrosRamos =
    document.getElementById("subfiltrosRamos");

const subfiltros =
    document.querySelectorAll(".subfiltro");


/* =====================================================
   WHATSAPP
===================================================== */

function crearEnlaceWhatsApp(producto) {

    const mensaje =
        `¡Hola! 🌷 He descubierto el "${producto.nombre}" ` +
        `y me ha encantado. ¿Podríais informarme acerca ` +
        `de su disponibilidad? 😊`;

    return (
        `https://wa.me/${NUMERO_WHATSAPP}` +
        `?text=${encodeURIComponent(mensaje)}`
    );

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos(lista) {

    productosGrid.innerHTML = "";


    if (lista.length === 0) {

        productosGrid.innerHTML = `

            <div class="sin-productos">

                <p>
                    No hay composiciones disponibles
                    para esta selección.
                </p>

            </div>

        `;

        return;

    }


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

                <div class="producto-precio">
                    ${producto.precio} €
                </div>

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
   MOSTRAR / OCULTAR SUBFILTROS
===================================================== */

function actualizarSubfiltros(categoria) {

    if (categoria === "ramos") {

        subfiltrosRamos.classList.add("visible");

        subfiltrosRamos.setAttribute(
            "aria-hidden",
            "false"
        );


        subfiltros.forEach((boton) => {

            boton.classList.remove("activo");

        });


        const todos =
            document.querySelector(
                '.subfiltro[data-tipo="todos"]'
            );


        if (todos) {

            todos.classList.add("activo");

        }


        return;

    }


    subfiltrosRamos.classList.remove("visible");

    subfiltrosRamos.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =====================================================
   FILTROS PRINCIPALES
===================================================== */

filtros.forEach((filtro) => {

    filtro.addEventListener("click", () => {

        filtros.forEach((boton) => {

            boton.classList.remove("activo");

        });


        filtro.classList.add("activo");


        const categoria =
            filtro.dataset.categoria;

        actualizarFondoSeccion(categoria);
        actualizarSubfiltros(categoria);


        /* TODOS */

        if (categoria === "todos") {

            mostrarProductos(productos);

            return;

        }


        /*
           Filtrado exacto por categoría.
        */

        const filtrados =
            productos.filter(
                (producto) =>
                    producto.categoria === categoria
            );


        mostrarProductos(filtrados);

    });

});


subfiltros.forEach((boton) => {

    boton.addEventListener("click", (evento) => {

        evento.stopPropagation();

        subfiltros.forEach((b) => {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

        const tipo =
            boton.dataset.tipo;

        /* 
           Todos los subfiltros de Ramos
           utilizan el mismo fondo.
        */
        actualizarFondoSeccion("ramos");


        /* TODOS LOS RAMOS */

        if (tipo === "todos") {

            const todosLosRamos =
                productos.filter(
                    (producto) =>
                        producto.categoria === "ramos"
                );

            mostrarProductos(todosLosRamos);

            return;
        }


        /* SOLO EL TIPO SELECCIONADO */

        const filtrados =
            productos.filter(
                (producto) =>
                    producto.categoria === "ramos" &&
                    producto.tipo === tipo
            );

        mostrarProductos(filtrados);

    });

});

/* =====================================================
   MENÚ MÓVIL
===================================================== */

const botonMenu =
    document.getElementById("menuBtn");

const menuDesplegable =
    document.getElementById("menuDesplegable");


if (botonMenu && menuDesplegable) {


    function abrirMenu() {

        menuDesplegable.classList.add("abierto");

        botonMenu.setAttribute(
            "aria-expanded",
            "true"
        );

        botonMenu.setAttribute(
            "aria-label",
            "Cerrar menú"
        );

        botonMenu.innerHTML =
            '<i class="bi bi-x-lg"></i>';


        document.documentElement.style.overflow =
            "hidden";

        document.body.style.overflow =
            "hidden";

    }


    function cerrarMenu() {

        menuDesplegable.classList.remove("abierto");

        botonMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        botonMenu.setAttribute(
            "aria-label",
            "Abrir menú"
        );

        botonMenu.innerHTML =
            '<i class="bi bi-list"></i>';


        document.documentElement.style.overflow =
            "";

        document.body.style.overflow =
            "";

    }


    botonMenu.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();


            if (
                menuDesplegable.classList.contains(
                    "abierto"
                )
            ) {

                cerrarMenu();

            } else {

                abrirMenu();

            }

        }
    );


    const enlacesMenu =
        menuDesplegable.querySelectorAll("a");


    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener(
            "click",
            cerrarMenu
        );

    });


    document.addEventListener(
        "click",
        (evento) => {

            if (
                !menuDesplegable.classList.contains(
                    "abierto"
                )
            ) {

                return;

            }


            if (
                !menuDesplegable.contains(
                    evento.target
                ) &&
                !botonMenu.contains(
                    evento.target
                )
            ) {

                cerrarMenu();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Escape" &&
                menuDesplegable.classList.contains(
                    "abierto"
                )
            ) {

                cerrarMenu();

            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 768 &&
                menuDesplegable.classList.contains(
                    "abierto"
                )
            ) {

                cerrarMenu();

            }

        }
    );

}


/* =====================================================
   NAVBAR STICKY
===================================================== */

const navbar =
    document.querySelector("nav");


if (navbar) {

    function actualizarNavbar() {

        if (window.scrollY > 0) {

            navbar.classList.add(
                "navbar-scroll"
            );

        } else {

            navbar.classList.remove(
                "navbar-scroll"
            );

        }

    }


    window.addEventListener(
        "scroll",
        actualizarNavbar,
        {
            passive: true
        }
    );

}

/* =====================================================
   FONDO DINÁMICO SEGÚN CATEGORÍA
===================================================== */

const seccionProductos =
    document.querySelector(".productos");


function actualizarFondoSeccion(categoria) {

    if (!seccionProductos) {
        return;
    }

    seccionProductos.classList.remove(
        "fondo-todos",
        "fondo-ramos",
        "fondo-buquesR",
        "fondo-florSeca",
        "fondo-centros",
        "fondo-eventos"
    );


    switch (categoria) {

        case "ramos":

            seccionProductos.classList.add(
                "fondo-ramos"
            );

            break;


        case "buquesR":

            seccionProductos.classList.add(
                "fondo-buquesR"
            );

            break;


        case "florSeca":

            seccionProductos.classList.add(
                "fondo-florSeca"
            );

            break;


        case "centros-florales":

            seccionProductos.classList.add(
                "fondo-centros"
            );

            break;


        case "eventos":

            seccionProductos.classList.add(
                "fondo-eventos"
            );

            break;


        case "todos":
        default:

            seccionProductos.classList.add(
                "fondo-todos"
            );

            break;
    }
}


/* Fondo inicial */

actualizarFondoSeccion("todos");


/* =====================================================
   INICIAR
===================================================== */

mostrarProductos(productos);