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


/*
   Estaciones asignadas a los ramos.

   Los ramos son:

   01 → invierno
   02 → primavera
   05 → verano
   08 → otono
   11 → invierno
   14 → primavera
   17 → verano
   20 → otono
   23 → invierno
   26 → primavera
   29 → verano
   32 → otono
*/

const estacionesRamos = {

    1: "invierno",
    2: "primavera",
    5: "verano",
    8: "otono",
    11: "invierno",
    14: "primavera",
    17: "verano",
    20: "otono",
    23: "invierno",
    26: "primavera",
    29: "verano",
    32: "otono"

};


/* =====================================================
   CREAR PRODUCTOS
===================================================== */

const productos = [];


for (let numero = 1; numero <= 32; numero++) {

    let categoria;


    /*
       Distribución actual:

       1  → ramos
       2  → ramos
       3  → decoracion
       4  → eventos
       5  → ramos
       etc.
    */

    if (numero === 1 || numero === 2) {

        categoria = "ramos";

    } else if (numero % 3 === 0) {

        categoria = "decoracion";

    } else if (numero % 3 === 1) {

        categoria = "eventos";

    } else {

        categoria = "ramos";

    }


    /*
       Los productos 1, 2, 5, 8, 11...
       son los ramos.
    */

    if (estacionesRamos[numero]) {

        categoria = "ramos";
    }


    const producto = {

        id:
            `producto-${String(numero).padStart(2, "0")}`,

        nombre:
            `Producto ${numero}`,

        descripcion:
            `Descripción del producto ${numero}.`,

        imagen:
            `fotos/producto${String(numero).padStart(2, "0")}.png`,

        categoria:
            categoria

    };


    /*
       Añadimos estación únicamente
       a los productos de Ramos.
    */

    if (categoria === "ramos") {

        producto.estacion =
            estacionesRamos[numero];

    }


    productos.push(producto);

}


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


        /* =============================================
           TARJETA
        ============================================= */

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add("producto");


        /* =============================================
           WHATSAPP
        ============================================= */

        const enlaceWhatsApp =
            crearEnlaceWhatsApp(producto);


        /* =============================================
           HTML TARJETA
        ============================================= */

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
   MOSTRAR / OCULTAR SUBFILTROS
===================================================== */

function actualizarSubfiltros(categoria) {


    /*
       SI ES RAMOS
    */

    if (categoria === "ramos") {

        subfiltrosRamos.classList.add("visible");

        subfiltrosRamos.setAttribute(
            "aria-hidden",
            "false"
        );


        /*
           Al entrar en Ramos,
           seleccionamos Todos los ramos.
        */

        subfiltros.forEach((boton) => {

            boton.classList.remove("activo");

        });


        const todosLosRamos =
            document.querySelector(
                '.subfiltro[data-estacion="todos"]'
            );


        todosLosRamos.classList.add("activo");


        return;
    }


    /*
       SI NO ES RAMOS
    */

    subfiltrosRamos.classList.remove("visible");

    subfiltrosRamos.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
       Quitamos el estado activo
       de todos los subfiltros.
    */

    subfiltros.forEach((boton) => {

        boton.classList.remove("activo");

    });


    /*
       Volvemos a dejar "Todos los ramos"
       preparado para la próxima vez.
    */

    const todosLosRamos =
        document.querySelector(
            '.subfiltro[data-estacion="todos"]'
        );


    todosLosRamos.classList.add("activo");

}


/* =====================================================
   FILTROS PRINCIPALES
===================================================== */

filtros.forEach((filtro) => {


    filtro.addEventListener(
        "click",
        () => {


            /*
               Quitamos activo
               de todos los filtros.
            */

            filtros.forEach((boton) => {

                boton.classList.remove("activo");

            });


            /*
               Activamos el pulsado.
            */

            filtro.classList.add("activo");


            /*
               Obtenemos categoría.
            */

            const categoria =
                filtro.dataset.categoria;


            /*
               Mostrar / ocultar subfiltros.
            */

            actualizarSubfiltros(categoria);


            /*
               TODOS
            */

            if (categoria === "todos") {

                mostrarProductos(productos);

                return;
            }


            /*
               Filtrado normal.
            */

            const productosFiltrados =
                productos.filter(
                    (producto) =>
                        producto.categoria === categoria
                );


            mostrarProductos(productosFiltrados);

        }
    );

});


/* =====================================================
   SUBFILTROS DE RAMOS
===================================================== */

subfiltros.forEach((subfiltro) => {


    subfiltro.addEventListener(
        "click",
        () => {


            /*
               Quitamos activo
               de los demás subfiltros.
            */

            subfiltros.forEach((boton) => {

                boton.classList.remove("activo");

            });


            /*
               Activamos el seleccionado.
            */

            subfiltro.classList.add("activo");


            /*
               Obtenemos estación.
            */

            const estacion =
                subfiltro.dataset.estacion;


            /*
               TODOS LOS RAMOS
            */

            if (estacion === "todos") {

                const todosLosRamos =
                    productos.filter(
                        (producto) =>
                            producto.categoria === "ramos"
                    );


                mostrarProductos(todosLosRamos);

                return;
            }


            /*
               RAMOS DE UNA ESTACIÓN
            */

            const ramosFiltrados =
                productos.filter(
                    (producto) =>
                        producto.categoria === "ramos" &&
                        producto.estacion === estacion
                );


            mostrarProductos(ramosFiltrados);

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


        /*
           Abrir / cerrar.
        */

        const abierto =
            menuDesplegable.classList.toggle(
                "abierto"
            );


        /*
           Actualizar accesibilidad.
        */

        botonMenu.setAttribute(
            "aria-expanded",
            abierto
        );


        /*
           Cambiar icono.
        */

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