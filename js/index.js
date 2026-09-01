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
    descripcion: "Una composición espectacular de 50 rosas rojas que transmite elegancia, intensidad y romanticismo.",
    imagen: "buquesR/ChatGPT Image 24 ago 2026, 23_58_14.png",
    categoria: "buquesR",
    precio: 199
},

{
    id: "producto-16",
    nombre: "Bouquet Rubí Imperial",
    descripcion: "Un impresionante bouquet de 90 rosas rojas cuidadosamente seleccionado para ocasiones realmente especiales.",
    imagen: "buquesR/53983f73-8293-4655-a271-99ff14534300.png",
    categoria: "buquesR",
    precio: 259
},

{
    id: "producto-17",
    nombre: "Bouquet Alba Imperial",
    descripcion: "Una composición delicada y sofisticada de 50 rosas blancas, pensada para transmitir pureza y elegancia.",
    imagen: "buquesR/11855efe-da6f-4e31-a50d-f7ab4841e69a.png",
    categoria: "buquesR",
    precio: 225
},

{
    id: "producto-18",
    nombre: "Cesto 200 rosas Premium",
    imagen: "ramosN/38126b48-f17d-40d8-8507-2897803935a8.png",
    categoria: "buquesR",
    precio: 735
},

{
    id: "producto-19",
    nombre: "Bouquet 12 rosas (sin jarrón)",
    imagen: "fotos/08876dc9-ab13-4490-a69f-6555a63da051.png",
    categoria: "buquesR",
    precio: 48
},

    {
        id: "producto-99",
        nombre: "Jarrón 9 rosas",
        imagen: "fotos/2a9b0743-43e4-440f-9ced-a00de0ae5d50.png",
        categoria: "buquesR",
        precio: 55
    },

    {
    id: "producto-20",
    nombre: "Dúo Mon Amour",
    descripcion: "Un romántico dúo floral (20 rosas rojas + osito peluche), ideal para expresar un sentimiento especial.",
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
        precio: 59
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
    },


    {
        id: "producto-100",
        nombre: "Gypsophila Clásico",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/3e3adbcb-d1e4-4747-ac72-25f8db55e2f7.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },

    {
        id: "producto-101",
        nombre: "Jardín romántico",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/bb816823-90ad-4ccd-929a-9bc3b26ce99d.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },

    {
        id: "producto-102",
        nombre: "Lavanda & Marfil",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/279d60e3-ffa5-470b-8302-6da12aa13433.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },
    {
        id: "producto-103",
        nombre: "Ramo Fiore",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/a0da5288-30d8-4a32-8d40-e0068e4d7925.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-104",
        nombre: "Ramo Moonlight",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/9a0a89eb-a5ab-43b5-a4fd-6365ea3c9bcd.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-105",
        nombre: "Ramo Elegance",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/b39c5f51-114f-4a89-9f15-cf40fcb9310e.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-106",
        nombre: "Ramo Golden",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/a897c90b-e71c-4146-8ee3-79cbcbbe7296.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-107",
        nombre: "Ramo Coral",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/2b397db0-c054-4cd7-b6ed-0084af2b87c7.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-108",
        nombre: "Ramo Encanto Tropical",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/00d9b147-f144-40fe-9baf-78686aa9142e.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-109",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/14df2481-2947-466d-b764-119f5d0b52ea.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-110",
        nombre: "Ramo nube de Marfil",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/6a5d1844-a6a8-4cca-959e-d2330fd30a42.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-111",
        nombre: "Ramo Rosa Bohemia",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/1c47f80a-d20c-4472-8bff-253e012ce3ee.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-112",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/a66d42ab-3001-407c-837c-71006bfb1cb3.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,
    {
        id: "producto-113",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/65cd7840-7ee9-4be5-98a8-5d41af263697.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-114",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/a9f78603-8e3a-4c8b-a937-832ba1a27e6e.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-115",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/261350b7-c086-4c7a-9cd3-9aaf07ee679a.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-116",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/ffadf31f-03af-4dd7-b168-07bfc54ac670.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-117",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/97085e30-42cb-4de2-ac55-4637332baa43.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-118",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/ff05864d-3bd5-4a79-9d71-c20d9d2469d3.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-119",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/a0705a1e-8b18-44e8-b253-621ff03cc706.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-120",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/02db3d27-5dc2-4d68-b17c-d9501d9508ac.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-121",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/777aafbf-d479-4ff5-aaee-df603bb35343.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    }
    ,{
        id: "producto-122",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/bad47e57-6efb-4b53-b196-f4a6c696b682.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
    },{
        id: "producto-123",
        nombre: "Centro Blue Moon",
        descripcion: "Descripción del producto 47.",
        imagen: "ramosN/3d9c3d90-2882-4e8a-be09-b7920fbf07c3.png",
        categoria: "ramosN",
        mensaje: "Precio a consultar"
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
   VISOR DE IMÁGENES DEL CATÁLOGO
===================================================== */

const visorImagen = document.createElement("div");

visorImagen.className = "visor-imagen";

visorImagen.innerHTML = `
    <button class="visor-cerrar" aria-label="Cerrar imagen">
        &times;
    </button>

    <img class="visor-img" src="" alt="">
`;

document.body.appendChild(visorImagen);


/* ESTILOS DEL VISOR */

const estilosVisor = document.createElement("style");

estilosVisor.textContent = `
    .visor-imagen {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.88);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        box-sizing: border-box;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.25s ease, visibility 0.25s ease;
        z-index: 99999;
    }

    .visor-imagen.activo {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .visor-img {
        display: block;
        max-width: 92vw;
        max-height: 90vh;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.45);
        transform: scale(0.92);
        transition: transform 0.25s ease;
    }

    .visor-imagen.activo .visor-img {
        transform: scale(1);
    }

    .visor-cerrar {
        position: absolute;
        top: 20px;
        right: 25px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        color: white;
        font-size: 32px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease;
        z-index: 2;
    }

    .visor-cerrar:hover {
        background: rgba(255, 255, 255, 0.28);
    }

    .producto-imagen img {
        cursor: zoom-in;
    }

    @media (max-width: 768px) {
        .visor-imagen {
            padding: 15px;
        }

        .visor-img {
            max-width: 95vw;
            max-height: 85vh;
        }

        .visor-cerrar {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 28px;
        }
    }
`;

document.head.appendChild(estilosVisor);


/* ELEMENTOS DEL VISOR */

const imagenVisor =
    visorImagen.querySelector(".visor-img");

const botonCerrarVisor =
    visorImagen.querySelector(".visor-cerrar");


/* ABRIR IMAGEN */

function abrirImagen(imagen) {

    imagenVisor.src = imagen.src;
    imagenVisor.alt = imagen.alt;

    visorImagen.classList.add("activo");

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}


/* CERRAR IMAGEN */

function cerrarImagen() {

    visorImagen.classList.remove("activo");

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

}


/* CLICK EN CERRAR */

botonCerrarVisor.addEventListener(
    "click",
    cerrarImagen
);


/* CLICK EN EL FONDO */

visorImagen.addEventListener(
    "click",
    (evento) => {

        if (evento.target === visorImagen) {
            cerrarImagen();
        }

    }
);


/* ESC PARA CERRAR */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            visorImagen.classList.contains("activo")
        ) {
            cerrarImagen();
        }

    }
);

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

                ${producto.categoria === "buquesR" && producto.descripcion ? `
    <p class="producto-descripcion">
        ${producto.descripcion}
    </p>
` : ""}

                <div class="producto-precio">

                    <span class="${producto.mensaje ? "texto-consultar" : ""}">
                        ${producto.mensaje || producto.precio + " €"}
                    </span>

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
        /* Hacer clic en la imagen para ampliarla */

const imagenProducto =
    tarjeta.querySelector(".producto-imagen img");

if (imagenProducto) {

    imagenProducto.addEventListener(
        "click",
        () => {
            abrirImagen(imagenProducto);
        }
    );

}

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