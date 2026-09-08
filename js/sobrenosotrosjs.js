/* =====================================================
   FLORS I PASSIÓ
   SOBRE NOSOTROS
===================================================== */


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const menuDesplegable =
    document.getElementById("menuDesplegable");


if (menuBtn && menuDesplegable) {

    const enlacesMenu =
        menuDesplegable.querySelectorAll("a");


    function cerrarMenu() {

        menuDesplegable.classList.remove(
            "abierto"
        );

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    menuBtn.addEventListener(
        "click",
        () => {

            const abierto =
                menuDesplegable.classList.toggle(
                    "abierto"
                );

            menuBtn.setAttribute(
                "aria-expanded",
                String(abierto)
            );

        }
    );


    enlacesMenu.forEach(
        enlace => {

            enlace.addEventListener(
                "click",
                cerrarMenu
            );

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 768) {
                cerrarMenu();
            }

        },
        {
            passive: true
        }
    );

}


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementosAnimados =
    document.querySelectorAll(
        ".story-content, " +
        ".story-image, " +
        ".value-card, " +
        ".visual-content, " +
        ".lourdes-content, " +
        ".lourdes-decoration, " +
        ".final-cta-content"
    );


elementosAnimados.forEach(
    elemento => {

        elemento.classList.add(
            "animacion-scroll"
        );

    }
);


const observadorScroll =
    new IntersectionObserver(
        (entradas, observer) => {

            entradas.forEach(
                entrada => {

                    if (!entrada.isIntersecting) {
                        return;
                    }


                    entrada.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entrada.target
                    );

                }
            );

        },
        {
            threshold: 0.12
        }
    );


elementosAnimados.forEach(
    elemento => {

        observadorScroll.observe(
            elemento
        );

    }
);


/* =====================================================
   ESTILOS DE ANIMACIÓN
===================================================== */

const estilosAnimacion =
    document.createElement("style");


estilosAnimacion.textContent = `

    .animacion-scroll {

        opacity: 0;

        transform:
            translateY(22px);

        transition:
            opacity .7s ease,
            transform .7s ease;

    }


    .animacion-scroll.visible {

        opacity: 1;

        transform:
            translateY(0);

    }


    .value-card:nth-child(2) {
        transition-delay: .08s;
    }


    .value-card:nth-child(3) {
        transition-delay: .16s;
    }


    .value-card:nth-child(4) {
        transition-delay: .24s;
    }

`;


document.head.appendChild(
    estilosAnimacion
);


/* =====================================================
   PARALLAX SUTIL DEL HERO
===================================================== */

const heroImage =
    document.querySelector(
        ".about-hero-image"
    );


if (heroImage) {

    let parallaxPendiente = false;


    function actualizarParallax() {

        const scroll =
            window.scrollY;


        if (scroll < 700) {

            heroImage.style.transform =
                `scale(1.01) translateY(${scroll * 0.05}px)`;

        } else {

            heroImage.style.transform =
                "scale(1.01)";

        }


        parallaxPendiente = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (parallaxPendiente) {
                return;
            }


            parallaxPendiente = true;


            requestAnimationFrame(
                actualizarParallax
            );

        },
        {
            passive: true
        }
    );

}


/* =====================================================
   ANIMACIÓN DEL ENCABEZADO DE VALORES
===================================================== */

const valuesHeader =
    document.querySelector(
        ".values-header"
    );


if (valuesHeader) {

    const observadorValores =
        new IntersectionObserver(
            entradas => {

                entradas.forEach(
                    entrada => {

                        valuesHeader.classList.toggle(
                            "visible",
                            entrada.isIntersecting
                        );

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    observadorValores.observe(
        valuesHeader
    );

}


/* =====================================================
   NAVBAR STICKY
===================================================== */

const navbar =
    document.querySelector("nav");


if (navbar) {

    function actualizarNavbar() {

        navbar.classList.toggle(
            "navbar-scroll",
            window.scrollY > 0
        );

    }


    window.addEventListener(
        "scroll",
        actualizarNavbar,
        {
            passive: true
        }
    );


    actualizarNavbar();

}