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

    menuBtn.addEventListener("click", () => {

        const abierto =
            menuDesplegable.classList.toggle(
                "abierto"
            );

        menuBtn.setAttribute(
            "aria-expanded",
            abierto
        );

    });


    const enlaces =
        menuDesplegable.querySelectorAll("a");


    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            menuDesplegable.classList.remove(
                "abierto"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            menuDesplegable.classList.remove(
                "abierto"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* =====================================================
   SCROLL SUAVE
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(enlace => {

    enlace.addEventListener(
        "click",
        function (evento) {

            const destino =
                this.getAttribute("href");

            if (
                !destino ||
                destino === "#"
            ) {
                return;
            }

            const elemento =
                document.querySelector(
                    destino
                );

            if (!elemento) {
                return;
            }

            evento.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementos =
    document.querySelectorAll(
        ".story-content, " +
        ".story-image, " +
        ".value-card, " +
        ".visual-content, " +
        ".lourdes-content, " +
        ".lourdes-decoration, " +
        ".final-cta-content"
    );


elementos.forEach(elemento => {

    elemento.classList.add(
        "animacion-scroll"
    );

});


const observador =
    new IntersectionObserver(
        (entradas, observer) => {

            entradas.forEach(entrada => {

                if (
                    entrada.isIntersecting
                ) {

                    entrada.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entrada.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementos.forEach(elemento => {

    observador.observe(elemento);

});


/* =====================================================
   ESTILOS DE ANIMACIÓN
===================================================== */

const estilos =
    document.createElement("style");


estilos.textContent = `

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
    estilos
);


/* =====================================================
   PARALLAX MUY SUTIL DEL HERO
===================================================== */

const heroImage =
    document.querySelector(
        ".about-hero-image"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            !heroImage ||
            window.innerWidth <= 768
        ) {
            return;
        }

        const scroll =
            window.scrollY;

        if (scroll < 700) {

            heroImage.style.transform =
                `scale(1.01) translateY(${scroll * 0.05}px)`;

        }

    }
);

/* =====================================================
   ANIMACIÓN ORGÁNICA — USTEDES / NOSOTROS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const valuesHeader = document.querySelector(".values-header");

    if (!valuesHeader) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    valuesHeader.classList.add("visible");

                } else {

                    valuesHeader.classList.remove("visible");

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    observer.observe(valuesHeader);

});