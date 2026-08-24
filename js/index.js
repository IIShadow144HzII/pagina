/* =====================================================
   CONFIGURACIÓN WHATSAPP
===================================================== */

const NUMERO_WHATSAPP = "34686606704";


/* =====================================================
   PRODUCTOS
===================================================== */

const categorias = [

    "ramos",
    "decoracion",
    "eventos"

];


/* =====================================================
   TIPOS DE RAMOS
===================================================== */

const tiposRamos = {

    1: "jarrones",
    2: "jarrones",
    3: "jarrones",

    4: "capazos",
    5: "capazos",
    6: "capazos",

    7: "ramos",
    8: "ramos",
    9: "ramos",
    10: "ramos",
    11: "ramos",
    12: "ramos",
    13: "ramos",
    14: "ramos",
    15: "ramos",
    16: "ramos",

    17: "jarrones",

    18: "ramos",
    19: "ramos",

    20: "capazos",

    21: "ramos",
    22: "ramos",

    23: "jarrones",

    24: "ramos",
    25: "ramos",

    26: "capazos",

    27: "ramos",
    28: "ramos",

    29: "jarrones",

    30: "ramos",
    31: "ramos",

    32: "capazos"

};


/* =====================================================
   NOMBRES Y FOTOS DE LOS PRODUCTOS
===================================================== */

const nombresProductos = [

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
    "Ramo Verano",
    "Decoración Floral Elegante",
    "Ramo Silvestre Especial",
    "Centro Floral Natural",
    "Ramo Romántico",
    "Composición Floral Premium",
    "Ramo Invierno Especial",
    "Centro Floral Exclusivo",
    "Ramo Primavera Especial",
    "Decoración Floral Premium",
    "Ramo Verano Especial",
    "Composición Natural",
    "Ramo Elegante",
    "Centro Floral Romántico",
    "Ramo Verano Premium",
    "Decoración Floral Especial",
    "Ramo Natural Premium",
    "Centro Floral Otoño"

];


const imagenesProductos = [

    "jarrones/12720740-7f2a-4d99-92c8-8fe3e6f0f42c.png",
    "jarrones/ca961ce3-bf7d-47e5-a21b-dff939145d45 (1).png",
    "jarrones/6c5b50ae-9bb9-442b-bff3-6648e44e5d23.png",

    "capazos/a8de9997-2b08-4d9e-a82a-6bc203d22d35.png",
    "capazos/ee274873-4e51-474b-b09c-4bda965f7a11.png",
    "capazos/42499836-87db-4c1c-a38d-9a0c2c825f36.png",

    "ramos/c3431b4c-b30d-477d-a718-3653415fdb8e.png",
    "ramos/acdf600c-d8b1-4efd-ae57-7c87451ef397.png",
    "ramos/0b1a97fc-3de8-4430-a930-cf52c33d4f0a.png",
    "fotos/producto10.png",
    "fotos/producto11.png",
    "fotos/producto12.png",
    "fotos/producto13.png",
    "fotos/producto14.png",
    "fotos/producto15.png",
    "fotos/producto16.png",
    "fotos/producto17.png",
    "fotos/producto18.png",
    "fotos/producto19.png",
    "fotos/producto20.png",
    "fotos/producto21.png",
    "fotos/producto22.png",
    "fotos/producto23.png",
    "fotos/producto24.png",
    "fotos/producto25.png",
    "fotos/producto26.png",
    "fotos/producto27.png",
    "fotos/producto28.png",
    "fotos/producto29.png",
    "fotos/producto30.png",
    "fotos/producto31.png",
    "fotos/producto32.png"

];


/* =====================================================
   CREAR PRODUCTOS
===================================================== */

const productos = [];


for (let numero = 1; numero <= 32; numero++) {

    let categoria;


    /*
       Distribución actual.
    */

    if (
        numero === 1 ||
        numero === 2
    ) {

        categoria = "ramos";

    }

    else if (
        numero % 3 === 0
    ) {

        categoria = "decoracion";

    }

    else if (
        numero % 3 === 1
    ) {

        categoria = "eventos";

    }

    else {

        categoria = "ramos";

    }


    /*
       Si el producto tiene un tipo de ramo,
       pertenece a la categoría Ramos.
    */

    if (
        tiposRamos[numero]
    ) {

        categoria = "ramos";

    }


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
            categoria

    };


    /*
       Añadimos el tipo únicamente
       a los productos de Ramos.
    */

    if (
        categoria === "ramos"
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
   CREAR ENLACE WHATSAPP
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


    /*
       Si no hay resultados
    */

    if (
        lista.length === 0
    ) {

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

    /*
       SI ES RAMOS
    */

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


        /*
           Al entrar en Ramos,
           seleccionamos Todos.
        */

        subfiltros.forEach(
            (boton) => {

                boton.classList.remove(
                    "activo"
                );

            }
        );


        const todosLosRamos =
            document.querySelector(
                '.subfiltro[data-tipo="todos"]'
            );


        if (todosLosRamos) {

            todosLosRamos.classList.add(
                "activo"
            );

        }


        return;

    }


    /*
       SI NO ES RAMOS
    */

    subfiltrosRamos.classList.remove(
        "visible"
    );

    subfiltrosRamos.setAttribute(
        "aria-hidden",
        "true"
    );


    subfiltros.forEach(
        (boton) => {

            boton.classList.remove(
                "activo"
            );

        }
    );


    const todosLosRamos =
        document.querySelector(
            '.subfiltro[data-tipo="todos"]'
        );


    if (todosLosRamos) {

        todosLosRamos.classList.add(
            "activo"
        );

    }

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
                   Filtrado normal.
                */

                const productosFiltrados =
                    productos.filter(
                        (producto) =>
                            producto.categoria ===
                            categoria
                    );


                mostrarProductos(
                    productosFiltrados
                );

            }
        );

    }
);


/* =====================================================
   SUBFILTROS DE RAMOS
===================================================== */

subfiltros.forEach(
    (subfiltro) => {

        subfiltro.addEventListener(
            "click",
            () => {

                subfiltros.forEach(
                    (boton) => {

                        boton.classList.remove(
                            "activo"
                        );

                    }
                );


                subfiltro.classList.add(
                    "activo"
                );


                const tipoRamo =
                    subfiltro.dataset.tipo;


                /*
                   TODOS
                */

                if (
                    tipoRamo === "todos"
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
                   RAMOS / JARRONES / CAPAZOS
                */

                const ramosFiltrados =
                    productos.filter(
                        (producto) =>
                            producto.categoria ===
                                "ramos" &&
                            producto.tipo ===
                                tipoRamo
                    );


                mostrarProductos(
                    ramosFiltrados
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


        document.documentElement.style.overscrollBehavior =
            "none";

        document.body.style.overscrollBehavior =
            "none";

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

        document.documentElement.style.overscrollBehavior =
            "";

        document.body.style.overscrollBehavior =
            "";

    }


    function alternarMenu() {

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


    botonMenu.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();

            alternarMenu();

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
                () => {

                    cerrarMenu();

                }
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


            const dentroMenu =
                menuDesplegable.contains(
                    evento.target
                );


            const dentroBoton =
                botonMenu.contains(
                    evento.target
                );


            if (
                !dentroMenu &&
                !dentroBoton
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

                botonMenu.focus();

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
   INICIALIZAR
===================================================== */

mostrarProductos(
    productos
);