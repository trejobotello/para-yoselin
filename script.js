/* ==========================================================
   PARA YOSELIN ❤️
   JAVASCRIPT PRINCIPAL
   ========================================================== */


/* ==========================================================
   FECHA DE INICIO
   ========================================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");


/* ==========================================================
   PANTALLA DE BIENVENIDA
   ========================================================== */

const bienvenida =
    document.getElementById("bienvenida");

const abrirPagina =
    document.getElementById("abrirPagina");


if (abrirPagina && bienvenida) {

    abrirPagina.addEventListener("click", function () {

        bienvenida.classList.add("ocultar");

        reproducirMusica();

        lanzarGrupoCorazones(20);

    });

}


/* ==========================================================
   CONTADOR
   ========================================================== */

function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora - fechaInicio;


    if (diferencia < 0) {

        diferencia = 0;

    }


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


    const elementoDias =
        document.getElementById("dias");

    const elementoHoras =
        document.getElementById("horas");

    const elementoMinutos =
        document.getElementById("minutos");

    const elementoSegundos =
        document.getElementById("segundos");


    if (elementoDias) {

        elementoDias.textContent =
            dias;

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas).padStart(2, "0");

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos).padStart(2, "0");

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos).padStart(2, "0");

    }

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* ==========================================================
   PRIMERA SORPRESA
   ========================================================== */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const mensajeSorpresa =
    document.getElementById("mensajeSorpresa");


if (botonSorpresa && mensajeSorpresa) {

    botonSorpresa.addEventListener(
        "click",
        function () {

            const abierto =
                mensajeSorpresa.classList.toggle(
                    "mostrar"
                );


            if (abierto) {

                botonSorpresa.textContent =
                    "❤️ Te amo, Yoselin";

                lanzarGrupoCorazones(15);

            } else {

                botonSorpresa.textContent =
                    "💝 Tengo algo para ti";

            }

        }
    );

}


/* ==========================================================
   RAZÓN SECRETA
   ========================================================== */

const botonRazonSecreta =
    document.getElementById(
        "botonRazonSecreta"
    );

const razonSecreta =
    document.getElementById(
        "razonSecreta"
    );


if (
    botonRazonSecreta &&
    razonSecreta
) {

    botonRazonSecreta.addEventListener(
        "click",
        function () {

            const abierta =
                razonSecreta.classList.toggle(
                    "mostrar"
                );


            if (abierta) {

                botonRazonSecreta.textContent =
                    "❤️ Siempre serás especial";

                lanzarGrupoCorazones(18);


                setTimeout(
                    function () {

                        razonSecreta.scrollIntoView({

                            behavior: "smooth",

                            block: "center"

                        });

                    },
                    250
                );

            } else {

                botonRazonSecreta.textContent =
                    "💝 Descubre una razón más";

            }

        }
    );

}


/* ==========================================================
   MÚSICA
   ========================================================== */

const musicaFondo =
    document.getElementById(
        "musicaFondo"
    );

const botonMusica =
    document.getElementById(
        "botonMusica"
    );


if (musicaFondo) {

    musicaFondo.volume = 0.5;

}


/* ==========================================================
   ACTUALIZAR BOTÓN DE MÚSICA
   ========================================================== */

function actualizarBotonMusica() {

    if (
        !musicaFondo ||
        !botonMusica
    ) {

        return;

    }


    if (musicaFondo.paused) {

        botonMusica.textContent =
            "🎵 Reproducir música";

    } else {

        botonMusica.textContent =
            "🔊 Pausar música";

    }

}


/* ==========================================================
   REPRODUCIR MÚSICA
   ========================================================== */

function reproducirMusica() {

    if (!musicaFondo) {

        return;

    }


    musicaFondo
        .play()

        .then(
            function () {

                actualizarBotonMusica();

            }
        )

        .catch(
            function () {

                actualizarBotonMusica();

            }
        );

}


/* ==========================================================
   BOTÓN DE MÚSICA
   ========================================================== */

if (
    botonMusica &&
    musicaFondo
) {

    botonMusica.addEventListener(
        "click",
        function () {

            if (musicaFondo.paused) {

                reproducirMusica();

            } else {

                musicaFondo.pause();

                actualizarBotonMusica();

            }

        }
    );

}


/* ==========================================================
   CORAZONES FLOTANTES
   ========================================================== */

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.className =
        "corazon-flotante";


    const corazones = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"

    ];


    corazon.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        Math.random() * 20 +
        15 +
        "px";


    corazon.style.animationDuration =
        Math.random() * 3 +
        5 +
        "s";


    document.body.appendChild(
        corazon
    );


    setTimeout(
        function () {

            corazon.remove();

        },
        9000
    );

}


/* ==========================================================
   CORAZONES AUTOMÁTICOS
   ========================================================== */

setInterval(
    crearCorazon,
    1100
);


/* ==========================================================
   LANZAR VARIOS CORAZONES
   ========================================================== */

function lanzarGrupoCorazones(cantidad) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(
            function () {

                crearCorazon();

            },
            i * 90
        );

    }

}


/* ==========================================================
   NUEVA GALERÍA
   4 RECUERDOS, UNA HISTORIA ❤️
   ========================================================== */

const fotos =
    document.querySelectorAll(
        ".foto img"
    );


const modalFoto =
    document.getElementById(
        "modalFoto"
    );


const imagenGrande =
    document.getElementById(
        "imagenGrande"
    );


const cerrarFoto =
    document.getElementById(
        "cerrarFoto"
    );


const tituloRecuerdo =
    document.getElementById(
        "tituloRecuerdo"
    );


const textoRecuerdo =
    document.getElementById(
        "textoRecuerdo"
    );


/* ==========================================================
   ABRIR RECUERDO
   ========================================================== */

function abrirRecuerdo(foto) {

    if (
        !modalFoto ||
        !imagenGrande
    ) {

        return;

    }


    /* ------------------------------
       COLOCAR LA FOTOGRAFÍA
       ------------------------------ */

    imagenGrande.src =
        foto.src;


    imagenGrande.alt =
        foto.alt || "Nuestro recuerdo";


    /* ------------------------------
       LEER DATA-TITULO
       ------------------------------ */

    const titulo =
        foto.dataset.titulo ||
        "Nuestro recuerdo ❤️";


    /* ------------------------------
       LEER DATA-MENSAJE
       ------------------------------ */

    const mensaje =
        foto.dataset.mensaje ||
        "Un momento especial de nuestra historia.";


    /* ------------------------------
       COLOCAR EL TÍTULO
       ------------------------------ */

    if (tituloRecuerdo) {

        tituloRecuerdo.textContent =
            titulo;

    }


    /* ------------------------------
       COLOCAR EL MENSAJE
       ------------------------------ */

    if (textoRecuerdo) {

        textoRecuerdo.textContent =
            mensaje;

    }


    /* ------------------------------
       MOSTRAR MODAL
       ------------------------------ */

    modalFoto.classList.add(
        "mostrar"
    );


    /* ------------------------------
       BLOQUEAR SCROLL
       ------------------------------ */

    document.body.style.overflow =
        "hidden";


    /* ------------------------------
       CORAZONES
       ------------------------------ */

    lanzarGrupoCorazones(8);

}


/* ==========================================================
   CLIC EN CADA FOTOGRAFÍA
   ========================================================== */

fotos.forEach(
    function (foto) {

        foto.addEventListener(
            "click",
            function () {

                abrirRecuerdo(foto);

            }
        );

    }
);


/* ==========================================================
   HACER CLIC EN TODA LA TARJETA
   ========================================================== */

const tarjetasRecuerdo =
    document.querySelectorAll(
        ".recuerdo"
    );


tarjetasRecuerdo.forEach(
    function (tarjeta) {

        tarjeta.style.cursor =
            "pointer";


        tarjeta.addEventListener(
            "click",
            function (evento) {

                /*
                Si se hizo clic directamente
                sobre la imagen, el evento
                anterior ya la abrió.
                */

                if (
                    evento.target.tagName ===
                    "IMG"
                ) {

                    return;

                }


                const foto =
                    tarjeta.querySelector(
                        "img"
                    );


                if (foto) {

                    abrirRecuerdo(foto);

                }

            }
        );

    }
);


/* ==========================================================
   CERRAR MODAL
   ========================================================== */

function cerrarModalFoto() {

    if (!modalFoto) {

        return;

    }


    modalFoto.classList.remove(
        "mostrar"
    );


    document.body.style.overflow =
        "";


    /*
    Esperamos a que termine
    la animación antes de limpiar
    la fotografía.
    */

    setTimeout(
        function () {

            if (
                !modalFoto.classList.contains(
                    "mostrar"
                )
            ) {

                imagenGrande.src =
                    "";

            }

        },
        450
    );

}


/* ==========================================================
   CERRAR CON X
   ========================================================== */

if (cerrarFoto) {

    cerrarFoto.addEventListener(
        "click",
        function (evento) {

            evento.stopPropagation();

            cerrarModalFoto();

        }
    );

}


/* ==========================================================
   CERRAR TOCANDO FUERA
   ========================================================== */

if (modalFoto) {

    modalFoto.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target ===
                modalFoto
            ) {

                cerrarModalFoto();

            }

        }
    );

}


/* ==========================================================
   CERRAR CON ESC
   ========================================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape" &&
            modalFoto &&
            modalFoto.classList.contains(
                "mostrar"
            )
        ) {

            cerrarModalFoto();

        }

    }
);


/* ==========================================================
   SORPRESA FINAL
   ========================================================== */

const botonFinal =
    document.getElementById(
        "botonFinal"
    );


const mensajeFinal =
    document.getElementById(
        "mensajeFinal"
    );


if (
    botonFinal &&
    mensajeFinal
) {

    botonFinal.addEventListener(
        "click",
        function () {

            const abierto =
                mensajeFinal.classList.contains(
                    "mostrar"
                );


            if (!abierto) {

                mensajeFinal.classList.add(
                    "mostrar"
                );


                botonFinal.textContent =
                    "❤️ Siempre contigo";


                lanzarCorazonesFinales();


                setTimeout(
                    function () {

                        mensajeFinal.scrollIntoView({

                            behavior: "smooth",

                            block: "center"

                        });

                    },
                    250
                );

            }

        }
    );

}


/* ==========================================================
   CORAZONES DE LA SORPRESA FINAL
   ========================================================== */

function lanzarCorazonesFinales() {

    lanzarGrupoCorazones(35);

}


/* ==========================================================
   EFECTO AL TOCAR LAS RAZONES
   ========================================================== */

const tarjetasRazones =
    document.querySelectorAll(
        ".razon-card"
    );


tarjetasRazones.forEach(
    function (tarjeta) {

        tarjeta.addEventListener(
            "click",
            function () {

                tarjeta.animate(

                    [

                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.04)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }

                    ],

                    {

                        duration: 450,

                        easing: "ease"

                    }

                );

            }
        );

    }
);


/* ==========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================== */

const elementosAnimados =
    document.querySelectorAll(

        ".carta, " +

        ".historia-titulo, " +

        ".momento-contenido, " +

        ".contador-contenido, " +

        ".razones-contenido, " +

        ".razon-card, " +

        ".titulo-fotos, " +

        ".recuerdo, " +

        ".mensaje-recuerdos, " +

        ".sorpresa-contenido"

    );


/* ==========================================================
   PREPARAR ELEMENTOS
   ========================================================== */

elementosAnimados.forEach(
    function (elemento) {

        elemento.style.opacity =
            "0";


        elemento.style.transform =
            "translateY(35px)";


        elemento.style.transition =
            "opacity 0.8s ease, " +
            "transform 0.8s ease";

    }
);


/* ==========================================================
   INTERSECTION OBSERVER
   ========================================================== */

if (
    "IntersectionObserver" in window
) {

    const observador =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.style.opacity =
                                "1";


                            entrada.target.style.transform =
                                "translateY(0)";


                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {

                threshold: 0.12

            }

        );


    elementosAnimados.forEach(
        function (elemento) {

            observador.observe(
                elemento
            );

        }
    );

} else {

    elementosAnimados.forEach(
        function (elemento) {

            elemento.style.opacity =
                "1";


            elemento.style.transform =
                "translateY(0)";

        }
    );

}


/* ==========================================================
   INICIAR BOTÓN DE MÚSICA
   ========================================================== */

actualizarBotonMusica();
