/* =====================================================
   WHATSAPP
===================================================== */

const NUMERO_WHATSAPP = "34686606704";


/* =====================================================
   CATEGORÍA DE CADA PRODUCTO
===================================================== */

const categoriasProductos = {

    /* RAMOS */

    1: "ramos",
    2: "ramos",
    3: "ramos",
    4: "ramos",
    5: "ramos",
    6: "ramos",
    7: "ramos",
    8: "ramos",
    9: "ramos",
    10: "ramos",
    11: "ramos",
    12: "ramos",
    13: "ramos",
    14: "ramos",


    /* BUQUÉS DE ROSAS */

    15: "buquesR",
    16: "buquesR",
    17: "buquesR",
    18: "buquesR",
    19: "buquesR",
    20: "buquesR",


    /* FLOR SECA */

    21: "florSeca",
    22: "florSeca",
    23: "florSeca",
    24: "florSeca",
    25: "florSeca",
    26: "florSeca",
    27: "florSeca",
    28: "florSeca",
    29: "florSeca",
    30: "florSeca",
    31: "florSeca",
    32: "florSeca",
    33: "florSeca",
    34: "florSeca",
    35: "florSeca",


    /* BUQUÉS DE ROSAS */

};


/* =====================================================
   TIPO DE CADA PRODUCTO DE RAMOS
===================================================== */

/*
   Solo los productos de Ramos necesitan tipo.

   Tipos disponibles:

   "buques"
   "jarrones"
   "capazos"
*/

const tiposRamos = {

    1: "jarrones",
    2: "jarrones",
    3: "jarrones",

    4: "capazos",
    5: "capazos",
    6: "capazos",

    7: "buques",
    8: "buques",
    9: "buques",
    10: "buques",
    11: "buques",
    12: "buques",
    13: "buques",
    14: "buques"

};


/* =====================================================
   NOMBRES DE PRODUCTOS
===================================================== */

const nombresProductos = [

    /* RAMOS */

    "Jarrón Miramar",
    "Jarrón Bibury",
    "Jarrón Versailles",

    "Capazo Sweet Song",
    "Capazo Paradise",
    "Capazo Melody",

    "Bouquet Neko",
    "Bouquet Campiña",
    "Bouquet Sissí",
    "Bouquet Lavanda",
    "Bouquet Romantic",
    "Bouquet Viena",
    "Bouquet Borgoña",
    "Bouquet Lyra",


    /* BUQUÉS DE ROSAS */

    "Ramo Sinfonía Escarlata",
    "Bouquet Rubí Imperial",
    "Bouquet Alba Imperial",
    "Cesto 200 rosas Premium",
    "Bouquet 12 rosas Premium",
    "Dúo Mon Amour",


    /* FLOR SECA */

    "Jarrón Nirvana",
    "Cesto Thanksgiving",
    "Jarrón Sophie",
    "Ramo Velvet",
    "Jarrón Cinque Terre",
    "Jarrón Victoria ( Seco/preservado)",
    "Jarrón Venezia",
    "Capazo Atardecer",
    "Capazo Carnaval",
    "Centro Siena",
    "Jarrón Preservado Nostalgia",
    "Jarrón Bretagne",
    "Capazo Sorrento",
    "Centro flor seca/preservada",
    "Capazo Swetness",


    /* BUQUÉS DE ROSAS */

];


/* =====================================================
   FOTOS DE PRODUCTOS
===================================================== */

const imagenesProductos = [

    /* RAMOS */

    "jarrones/12720740-7f2a-4d99-92c8-8fe3e6f0f42c.png",
    "jarrones/ca961ce3-bf7d-47e5-a21b-dff939145d45 (1).png",
    "jarrones/6c5b50ae-9bb9-442b-bff3-6648e44e5d23.png",

    "capazos/a8de9997-2b08-4d9e-a82a-6bc203d22d35.png",
    "capazos/ee274873-4e51-474b-b09c-4bda965f7a11.png",
    "capazos/42499836-87db-4c1c-a38d-9a0c2c825f36.png",

    "ramos/c3431b4c-b30d-477d-a718-3653415fdb8e.png",
    "ramos/acdf600c-d8b1-4efd-ae57-7c87451ef397.png",
    "ramos/0b1a97fc-3de8-4430-a930-cf52c33d4f0a.png",
    "ramos/350c6836-db7f-48c6-8c8a-2b75650422e7.jpg",
    "ramos/9ccbc9ea-ce49-45de-b1a0-f76477987fc2.png",
    "ramos/viena.png",
    "ramos/8f1ba69b-d37f-40d9-9b6a-417a098c2d5d.png",
    "ramos/89153cee-be99-475d-bf65-2959fc721442.png",


    /* BUQUÉS DE ROSAS */

    "buquesR/ChatGPT Image 24 ago 2026, 23_58_14.png",
    "buquesR/53983f73-8293-4655-a271-99ff14534300.png",
    "buquesR/11855efe-da6f-4e31-a50d-f7ab4841e69a.png",
    "buquesR/ChatGPT Image 25 ago 2026, 00_11_24.png",
    "buquesR/96d86412-f838-48c8-b051-64e8cfd24392.png",
    "buquesR/88d61d80-58c4-4a00-be09-9115fe4e9331.png",


    /* FLOR SECA */

    "florSeca/0030198b-e793-449b-a18c-f6a501c7af14.png",
    "florSeca/4e9d48e9-5159-4d34-903b-118f4a2bb5ed.png",
    "florSeca/5abef82e-0260-47b3-b50e-82ad78135f8e.png",
    "florSeca/a8b55ccb-62d6-4506-a0f1-b7ff750c753d.png",
    "florSeca/2628f61d-8dd4-4cde-bc13-1aa28682db71.png",
    "florSeca/d7402061-e60a-4f05-b389-5eba2e679c85.png",
    "florSeca/0d6350fb-78d8-4274-a3e4-e0195f2ebc33.png",
    "florSeca/285cdf90-e40c-4101-849d-3446fc974436.png",
    "florSeca/d49d0753-4dd8-4c43-9bca-2e3cbabcfcaf.png",
    "florSeca/41167f49-90bb-4085-9b4c-dc1e1230387e.png",
    "florSeca/b5d228c2-9bb7-494d-9682-b5923ef3a1c0.png",
    "florSeca/321cfe22-b9e9-4882-a6fc-a547d9a98810.png",
    "florSeca/0e39b813-10be-4ba1-a423-f3553f2ca17b.png",
    "florSeca/49a08bb2-eb83-49bc-853f-12e82542b3d8.png",
    "florSeca/6caa529e-2ecb-4b6c-af8a-2a3095e01269.png",


    /* BUQUÉS DE ROSAS */

    "buques-rosas/buque-rosas-01.png",
    "buques-rosas/buque-rosas-02.png",
    "buques-rosas/buque-rosas-03.png",
    "buques-rosas/buque-rosas-04.png",
    "buques-rosas/buque-rosas-05.png",
    "buques-rosas/buque-rosas-06.png"

];


/* =====================================================
   CREAR PRODUCTOS
===================================================== */

const productos = [];


for (let numero = 1; numero <= 41; numero++) {

    const producto = {

        id:
            `producto-${String(numero).padStart(2, "0")}`,

        nombre:
            nombresProductos[numero - 1],

        descripcion:
            `Descripción del producto ${numero}.`,

        imagen:
            imagenesProductos[numero - 1],

        categoria:
            categoriasProductos[numero]

    };


    /*
       Si pertenece a Ramos,
       añadimos su tipo.
    */

    if (
        producto.categoria === "ramos"
    ) {

        producto.tipo =
            tiposRamos[numero];

    }


    productos.push(producto);

}


/* =====================================================
   ELEMENTOS DEL DOM
===================================================== */

const productosGrid =
    document.getElementById(
        "productosGrid"
    );

const filtros =
    document.querySelectorAll(
        ".filtro"
    );

const subfiltrosRamos =
    document.getElementById(
        "subfiltrosRamos"
    );

const subfiltros =
    document.querySelectorAll(
        ".subfiltro"
    );


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
            document.createElement(
                "article"
            );

        tarjeta.classList.add(
            "producto"
        );


        const enlaceWhatsApp =
            crearEnlaceWhatsApp(
                producto
            );


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


        productosGrid.appendChild(
            tarjeta
        );

    });

}


/* =====================================================
   MOSTRAR / OCULTAR SUBFILTROS
===================================================== */

function actualizarSubfiltros(
    categoria
) {

    if (
        categoria === "ramos"
    ) {

        subfiltrosRamos.classList.add(
            "visible"
        );

        subfiltrosRamos.setAttribute(
            "aria-hidden",
            "false"
        );


        subfiltros.forEach(
            (boton) => {

                boton.classList.remove(
                    "activo"
                );

            }
        );


        const todos =
            document.querySelector(
                '.subfiltro[data-tipo="todos"]'
            );


        if (todos) {

            todos.classList.add(
                "activo"
            );

        }


        return;

    }


    subfiltrosRamos.classList.remove(
        "visible"
    );

    subfiltrosRamos.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =====================================================
   FILTROS PRINCIPALES
===================================================== */

filtros.forEach(
    (filtro) => {

        filtro.addEventListener(
            "click",
            () => {

                filtros.forEach(
                    (boton) => {

                        boton.classList.remove(
                            "activo"
                        );

                    }
                );


                filtro.classList.add(
                    "activo"
                );


                const categoria =
                    filtro.dataset.categoria;


                actualizarSubfiltros(
                    categoria
                );


                /*
                   TODOS
                */

                if (
                    categoria === "todos"
                ) {

                    mostrarProductos(
                        productos
                    );

                    return;

                }


                /*
                   Filtrar por categoría.
                */

                const filtrados =
                    productos.filter(
                        (producto) =>
                            producto.categoria ===
                            categoria
                    );


                mostrarProductos(
                    filtrados
                );

            }
        );

    }
);


/* =====================================================
   SUBFILTROS DE RAMOS
===================================================== */

subfiltros.forEach(
    (boton) => {

        boton.addEventListener(
            "click",
            (evento) => {

                /*
                   Evita que el clic active
                   también el botón Ramos.
                */

                evento.stopPropagation();


                subfiltros.forEach(
                    (b) => {

                        b.classList.remove(
                            "activo"
                        );

                    }
                );


                boton.classList.add(
                    "activo"
                );


                const tipo =
                    boton.dataset.tipo;


                /*
                   TODOS LOS RAMOS
                */

                if (
                    tipo === "todos"
                ) {

                    const todosLosRamos =
                        productos.filter(
                            (producto) =>
                                producto.categoria ===
                                "ramos"
                        );


                    mostrarProductos(
                        todosLosRamos
                    );

                    return;

                }


                /*
                   BUQUÉS / JARRONES / CAPAZOS
                */

                const filtrados =
                    productos.filter(
                        (producto) =>
                            producto.categoria ===
                                "ramos" &&
                            producto.tipo ===
                                tipo
                    );


                mostrarProductos(
                    filtrados
                );

            }
        );

    }
);


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const botonMenu =
    document.getElementById(
        "menuBtn"
    );

const menuDesplegable =
    document.getElementById(
        "menuDesplegable"
    );


if (
    botonMenu &&
    menuDesplegable
) {


    function abrirMenu() {

        menuDesplegable.classList.add(
            "abierto"
        );

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

        menuDesplegable.classList.remove(
            "abierto"
        );

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

            }

            else {

                abrirMenu();

            }

        }
    );


    const enlacesMenu =
        menuDesplegable.querySelectorAll(
            "a"
        );


    enlacesMenu.forEach(
        (enlace) => {

            enlace.addEventListener(
                "click",
                cerrarMenu
            );

        }
    );


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
    document.querySelector(
        "nav"
    );


if (navbar) {

    function actualizarNavbar() {

        if (
            window.scrollY > 0
        ) {

            navbar.classList.add(
                "navbar-scroll"
            );

        }

        else {

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
   INICIAR
===================================================== */

mostrarProductos(
    productos
);