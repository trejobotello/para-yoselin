/* ==========================================================
   PARA YOSELIN ❤️
   SCRIPT.JS COMPLETO
   ========================================================== */


/* ==========================================================
   FECHA DE INICIO
   ========================================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");


/* ==========================================================
   ELEMENTOS PRINCIPALES
   ========================================================== */

const bienvenida = document.getElementById("bienvenida");
const abrirPagina = document.getElementById("abrirPagina");

const musica = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("botonMusica");


/* ==========================================================
   PANTALLA DE BIENVENIDA
   ========================================================== */

if (abrirPagina && bienvenida) {

    abrirPagina.addEventListener("click", () => {

        bienvenida.classList.add("ocultar");

        reproducirMusica();

        lanzarGrupoCorazones(20);

    });

}


/* ==========================================================
   CONTADOR
   ========================================================== */

const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");


function agregarCero(numero) {

    return numero < 10
        ? "0" + numero
        : numero;

}


function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora.getTime() -
        fechaInicio.getTime();


    if (diferencia < 0) {

        diferencia = 0;

    }


    const segundo = 1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferencia / dia
        );


    const horas =
        Math.floor(
            (diferencia % dia) /
            hora
        );


    const minutos =
        Math.floor(
            (diferencia % hora) /
            minuto
        );


    const segundos =
        Math.floor(
            (diferencia % minuto) /
            segundo
        );


    if (diasElemento) {

        diasElemento.textContent =
            dias;

    }


    if (horasElemento) {

        horasElemento.textContent =
            agregarCero(horas);

    }


    if (minutosElemento) {

        minutosElemento.textContent =
            agregarCero(minutos);

    }


    if (segundosElemento) {

        segundosElemento.textContent =
            agregarCero(segundos);

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
    document.getElementById(
        "botonSorpresa"
    );

const mensajeSorpresa =
    document.getElementById(
        "mensajeSorpresa"
    );


if (
    botonSorpresa &&
    mensajeSorpresa
) {

    botonSorpresa.addEventListener(
        "click",
        () => {

            const estaVisible =
                mensajeSorpresa.classList
                    .contains("mostrar");


            if (!estaVisible) {

                mensajeSorpresa
                    .classList
                    .add("mostrar");


                botonSorpresa.textContent =
                    "❤️ Te amo, Yoselin";


                lanzarGrupoCorazones(15);


                setTimeout(() => {

                    mensajeSorpresa
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                }, 250);

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
        () => {

            const estaVisible =
                razonSecreta.classList
                    .contains("mostrar");


            if (!estaVisible) {

                razonSecreta
                    .classList
                    .add("mostrar");


                botonRazonSecreta.textContent =
                    "❤️ Siempre serás especial";


                lanzarGrupoCorazones(18);


                setTimeout(() => {

                    razonSecreta
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                }, 250);

            }

        }
    );

}


/* ==========================================================
   MÚSICA
   ========================================================== */

if (musica) {

    musica.volume = 0.5;

}


function reproducirMusica() {

    if (!musica) {

        return;

    }


    const promesa =
        musica.play();


    if (
        promesa !== undefined
    ) {

        promesa
            .then(() => {

                actualizarBotonMusica();

            })
            .catch(() => {

                actualizarBotonMusica();

            });

    }

}


function pausarMusica() {

    if (!musica) {

        return;

    }


    musica.pause();

    actualizarBotonMusica();

}


function actualizarBotonMusica() {

    if (
        !musica ||
        !botonMusica
    ) {

        return;

    }


    if (musica.paused) {

        botonMusica.textContent =
            "🎵 Reproducir música";

    } else {

        botonMusica.textContent =
            "🔊 Pausar música";

    }

}


if (
    botonMusica &&
    musica
) {

    botonMusica.addEventListener(
        "click",
        () => {

            if (musica.paused) {

                reproducirMusica();

            } else {

                pausarMusica();

            }

        }
    );


    musica.addEventListener(
        "play",
        actualizarBotonMusica
    );


    musica.addEventListener(
        "pause",
        actualizarBotonMusica
    );

}


/* ==========================================================
   CORAZONES FLOTANTES
   ========================================================== */

const emojisCorazones = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💞"
];


function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.classList.add(
        "corazon-flotante"
    );


    const emoji =
        emojisCorazones[
            Math.floor(
                Math.random() *
                emojisCorazones.length
            )
        ];


    corazon.textContent =
        emoji;


    corazon.style.left =
        Math.random() * 100 +
        "vw";


    corazon.style.fontSize =
        (
            15 +
            Math.random() * 18
        ) +
        "px";


    corazon.style.animationDuration =
        (
            5 +
            Math.random() * 4
        ) +
        "s";


    corazon.style.opacity =
        (
            0.45 +
            Math.random() * 0.45
        );


    document.body.appendChild(
        corazon
    );


    setTimeout(() => {

        corazon.remove();

    }, 9000);

}


/* CORAZONES SUAVES DE FONDO */

setInterval(() => {

    crearCorazon();

}, 1100);


/* ==========================================================
   GRUPO DE CORAZONES
   ========================================================== */

function lanzarGrupoCorazones(
    cantidad = 15
) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(() => {

            crearCorazon();

        }, i * 80);

    }

}


/* ==========================================================
   GALERÍA DE RECUERDOS
   ========================================================== */

const fotos =
    document.querySelectorAll(
        ".foto img"
    );

const recuerdos =
    document.querySelectorAll(
        ".recuerdo"
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
        !foto ||
        !modalFoto ||
        !imagenGrande
    ) {

        return;

    }


    imagenGrande.src =
        foto.src;


    imagenGrande.alt =
        foto.alt ||
        "Recuerdo ampliado";


    const titulo =
        foto.dataset.titulo ||
        "Nuestro recuerdo ❤️";


    const mensaje =
        foto.dataset.mensaje ||
        "Un momento especial de nuestra historia.";


    if (tituloRecuerdo) {

        tituloRecuerdo.textContent =
            titulo;

    }


    if (textoRecuerdo) {

        textoRecuerdo.textContent =
            mensaje;

    }


    modalFoto
        .classList
        .add("mostrar");


    document.body.style.overflow =
        "hidden";


    lanzarGrupoCorazones(8);

}


/* ==========================================================
   CLIC DIRECTO EN LAS FOTOS
   ========================================================== */

fotos.forEach((foto) => {

    foto.addEventListener(
        "click",
        (evento) => {

            evento.stopPropagation();

            abrirRecuerdo(foto);

        }
    );

});


/* ==========================================================
   CLIC EN TODA LA TARJETA
   ========================================================== */

recuerdos.forEach(
    (recuerdo) => {

        recuerdo.addEventListener(
            "click",
            (evento) => {

                if (
                    evento.target.tagName ===
                    "IMG"
                ) {

                    return;

                }


                const foto =
                    recuerdo.querySelector(
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


    modalFoto
        .classList
        .remove("mostrar");


    document.body.style.overflow =
        "";


    setTimeout(() => {

        if (imagenGrande) {

            imagenGrande.src =
                "";

        }

    }, 450);

}


if (cerrarFoto) {

    cerrarFoto.addEventListener(
        "click",
        cerrarModalFoto
    );

}


/* CERRAR TOCANDO EL FONDO */

if (modalFoto) {

    modalFoto.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                modalFoto
            ) {

                cerrarModalFoto();

            }

        }
    );

}


/* CERRAR CON ESC */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            modalFoto &&
            modalFoto.classList
                .contains("mostrar")
        ) {

            cerrarModalFoto();

        }

    }
);


/* ==========================================================
   NUEVA SECCIÓN ❤️
   UNA PREGUNTA PARA TI
   ========================================================== */

const respuestaSi =
    document.getElementById(
        "respuestaSi"
    );

const respuestaClaro =
    document.getElementById(
        "respuestaClaro"
    );

const respuestaPregunta =
    document.getElementById(
        "respuestaPregunta"
    );


/* CONTROL PARA QUE LA ANIMACIÓN
   PRINCIPAL SE EJECUTE UNA SOLA VEZ */

let preguntaRespondida =
    false;


/* ==========================================================
   MOSTRAR RESPUESTA
   ========================================================== */

function mostrarRespuestaPregunta(
    botonElegido
) {

    if (!respuestaPregunta) {

        return;

    }


    /* EVITAMOS REPETIR LA ANIMACIÓN */

    if (preguntaRespondida) {

        return;

    }


    preguntaRespondida =
        true;


    /* MOSTRAMOS EL MENSAJE */

    respuestaPregunta
        .classList
        .add("mostrar");


    /* CAMBIAMOS EL BOTÓN ELEGIDO */

    if (botonElegido) {

        botonElegido.textContent =
            "❤️ Sí, quiero";

    }


    /* DESACTIVAMOS AMBOS BOTONES */

    if (respuestaSi) {

        respuestaSi
            .classList
            .add("respondido");

    }


    if (respuestaClaro) {

        respuestaClaro
            .classList
            .add("respondido");

    }


    /* PEQUEÑA CELEBRACIÓN */

    lanzarGrupoCorazones(30);


    /* LLEVAMOS SUAVEMENTE
       AL MENSAJE */

    setTimeout(() => {

        respuestaPregunta
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }, 400);

}


/* ==========================================================
   BOTÓN "SÍ ❤️"
   ========================================================== */

if (respuestaSi) {

    respuestaSi.addEventListener(
        "click",
        () => {

            mostrarRespuestaPregunta(
                respuestaSi
            );

        }
    );

}


/* ==========================================================
   BOTÓN "CLARO QUE SÍ 💕"
   ========================================================== */

if (respuestaClaro) {

    respuestaClaro.addEventListener(
        "click",
        () => {

            mostrarRespuestaPregunta(
                respuestaClaro
            );

        }
    );

}


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


let sorpresaFinalAbierta =
    false;


if (
    botonFinal &&
    mensajeFinal
) {

    botonFinal.addEventListener(
        "click",
        () => {

            if (
                sorpresaFinalAbierta
            ) {

                return;

            }


            sorpresaFinalAbierta =
                true;


            mensajeFinal
                .classList
                .add("mostrar");


            botonFinal.textContent =
                "❤️ Siempre contigo";


            lanzarGrupoCorazones(35);


            setTimeout(() => {

                mensajeFinal
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }, 350);

        }
    );

}


/* ==========================================================
   EFECTO EN LAS TARJETAS DE RAZONES
   ========================================================== */

const tarjetasRazon =
    document.querySelectorAll(
        ".razon-card"
    );


tarjetasRazon.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "click",
            () => {

                tarjeta.style.transform =
                    "scale(0.97)";


                setTimeout(() => {

                    tarjeta.style.transform =
                        "";

                }, 180);

            }
        );

    }
);


/* ==========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================== */

const elementosAnimados =
    document.querySelectorAll(
        `
        .carta,
        .historia-titulo,
        .momento-contenido,
        .contador-contenido,
        .razones-contenido,
        .razon-card,
        .titulo-fotos,
        .recuerdo,
        .mensaje-recuerdos,
        .pregunta-contenido,
        .pregunta-tarjeta,
        .sorpresa-contenido
        `
    );


/* PREPARAMOS LOS ELEMENTOS */

elementosAnimados.forEach(
    (elemento) => {

        elemento.style.opacity =
            "0";

        elemento.style.transform =
            "translateY(35px)";

        elemento.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    }
);


/* ==========================================================
   OBSERVADOR
   ========================================================== */

if (
    "IntersectionObserver"
    in window
) {

    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target
                                .style
                                .opacity =
                                "1";


                            entrada.target
                                .style
                                .transform =
                                "translateY(0)";


                            observador
                                .unobserve(
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
        (elemento) => {

            observador.observe(
                elemento
            );

        }
    );

} else {


    /* RESPALDO PARA NAVEGADORES
       SIN INTERSECTION OBSERVER */

    elementosAnimados.forEach(
        (elemento) => {

            elemento.style.opacity =
                "1";

            elemento.style.transform =
                "translateY(0)";

        }
    );

}


/* ==========================================================
   ESTADO INICIAL DEL BOTÓN DE MÚSICA
   ========================================================== */

actualizarBotonMusica();


/* ==========================================================
   FIN ❤️
   ========================================================== */

console.log(
    "❤️ Página para Yoselin cargada correctamente."
);
