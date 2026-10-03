/* ==========================================================
   FECHA DE INICIO ❤️
========================================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");


/* ==========================================================
   ELEMENTOS PRINCIPALES
========================================================== */

const bienvenida = document.getElementById("bienvenida");
const abrirPagina = document.getElementById("abrirPagina");

const musicaFondo = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("botonMusica");


/* ==========================================================
   ABRIR LA PÁGINA
========================================================== */

if (abrirPagina) {

    abrirPagina.addEventListener("click", () => {

        if (bienvenida) {
            bienvenida.classList.add("ocultar");
        }


        /* Intentar reproducir la música */

        if (musicaFondo) {

            musicaFondo.volume = 0.5;

            const promesa =
                musicaFondo.play();

            if (promesa !== undefined) {

                promesa
                    .then(() => {

                        actualizarBotonMusica();

                    })
                    .catch(() => {

                        actualizarBotonMusica();

                    });

            }

        }


        /* Corazones de bienvenida */

        lanzarGrupoCorazones(20);

    });

}


/* ==========================================================
   CONTADOR
========================================================== */

const diasElemento =
    document.getElementById("dias");

const horasElemento =
    document.getElementById("horas");

const minutosElemento =
    document.getElementById("minutos");

const segundosElemento =
    document.getElementById("segundos");


function agregarCero(numero) {

    return numero < 10
        ? `0${numero}`
        : numero;

}


function actualizarContador() {

    const ahora =
        new Date();

    let diferencia =
        ahora - fechaInicio;


    /*
        Si por algún motivo la fecha actual
        fuera anterior a la fecha inicial,
        evitamos números negativos.
    */

    if (diferencia < 0) {
        diferencia = 0;
    }


    const segundo =
        1000;

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
            (diferencia % dia) / hora
        );


    const minutos =
        Math.floor(
            (diferencia % hora) / minuto
        );


    const segundos =
        Math.floor(
            (diferencia % minuto) / segundo
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
   PRIMERA SORPRESA 💝
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

            /*
                Evitamos volver a abrir
                la misma sorpresa varias veces.
            */

            if (
                mensajeSorpresa.classList
                    .contains("mostrar")
            ) {

                return;

            }


            mensajeSorpresa.classList
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

            }, 350);

        }
    );

}


/* ==========================================================
   RAZÓN SECRETA ❤️
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

            if (
                razonSecreta.classList
                    .contains("mostrar")
            ) {

                return;

            }


            razonSecreta.classList
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

            }, 350);

        }
    );

}


/* ==========================================================
   MÚSICA 🎵
========================================================== */

if (musicaFondo) {

    musicaFondo.volume = 0.5;

}


function actualizarBotonMusica() {

    if (
        !botonMusica ||
        !musicaFondo
    ) {

        return;

    }


    if (musicaFondo.paused) {

        botonMusica.textContent =
            "🎵 Reproducir música";

    } else {

        botonMusica.textContent =
            "⏸️ Pausar música";

    }

}


if (
    botonMusica &&
    musicaFondo
) {

    botonMusica.addEventListener(
        "click",
        () => {

            if (musicaFondo.paused) {

                musicaFondo
                    .play()
                    .then(() => {

                        actualizarBotonMusica();

                    })
                    .catch(() => {

                        actualizarBotonMusica();

                    });

            } else {

                musicaFondo.pause();

                actualizarBotonMusica();

            }

        }
    );


    musicaFondo.addEventListener(
        "play",
        actualizarBotonMusica
    );


    musicaFondo.addEventListener(
        "pause",
        actualizarBotonMusica
    );

}


/* ==========================================================
   CORAZONES FLOTANTES ❤️
========================================================== */

const tiposCorazon = [
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


    const indice =
        Math.floor(
            Math.random() *
            tiposCorazon.length
        );


    corazon.textContent =
        tiposCorazon[indice];


    /*
        Posición horizontal aleatoria.
    */

    corazon.style.left =
        `${Math.random() * 100}vw`;


    /*
        Tamaño aleatorio.
    */

    const tamano =
        14 +
        Math.random() * 20;


    corazon.style.fontSize =
        `${tamano}px`;


    /*
        Duración aleatoria para que
        no todos suban igual.
    */

    const duracion =
        5 +
        Math.random() * 4;


    corazon.style.animationDuration =
        `${duracion}s`;


    /*
        Transparencia ligeramente distinta.
    */

    corazon.style.opacity =
        0.55 +
        Math.random() * 0.35;


    document.body.appendChild(
        corazon
    );


    /*
        El corazón se elimina después
        de terminar su recorrido.
    */

    setTimeout(() => {

        corazon.remove();

    }, 9000);

}


/* ==========================================================
   GRUPO DE CORAZONES
========================================================== */

function lanzarGrupoCorazones(cantidad = 12) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(() => {

            crearCorazon();

        }, i * 90);

    }

}


/*
    Corazones suaves de fondo.
*/

setInterval(() => {

    crearCorazon();

}, 1100);


/* ==========================================================
   GALERÍA DE RECUERDOS 📸
========================================================== */

const fotosRecuerdos =
    document.querySelectorAll(
        ".foto img"
    );

const tarjetasRecuerdo =
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


    if (tituloRecuerdo) {

        tituloRecuerdo.textContent =
            foto.dataset.titulo ||
            "Nuestro recuerdo ❤️";

    }


    if (textoRecuerdo) {

        textoRecuerdo.textContent =
            foto.dataset.mensaje ||
            "Un momento especial de nuestra historia.";

    }


    modalFoto.classList.add(
        "mostrar"
    );


    document.body.style.overflow =
        "hidden";


    lanzarGrupoCorazones(8);

}


/* ==========================================================
   CLICK DIRECTO EN LAS FOTOGRAFÍAS
========================================================== */

fotosRecuerdos.forEach(
    (foto) => {

        foto.addEventListener(
            "click",
            (evento) => {

                evento.stopPropagation();

                abrirRecuerdo(foto);

            }
        );

    }
);


/* ==========================================================
   CLICK EN TODA LA TARJETA DEL RECUERDO
========================================================== */

tarjetasRecuerdo.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "click",
            (evento) => {

                /*
                    Si el usuario ya tocó
                    directamente la imagen,
                    no repetimos el evento.
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


                abrirRecuerdo(foto);

            }
        );

    }
);


/* ==========================================================
   CERRAR MODAL
========================================================== */

function cerrarModalRecuerdo() {

    if (!modalFoto) {
        return;
    }


    modalFoto.classList.remove(
        "mostrar"
    );


    document.body.style.overflow =
        "";


    /*
        Esperamos a que desaparezca
        antes de quitar la imagen.
    */

    setTimeout(() => {

        if (imagenGrande) {

            imagenGrande.src = "";

        }

    }, 450);

}


if (cerrarFoto) {

    cerrarFoto.addEventListener(
        "click",
        cerrarModalRecuerdo
    );

}


/*
    Cerrar tocando el fondo oscuro.
*/

if (modalFoto) {

    modalFoto.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                modalFoto
            ) {

                cerrarModalRecuerdo();

            }

        }
    );

}


/*
    Cerrar con ESC en computadora.
*/

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            modalFoto &&
            modalFoto.classList
                .contains("mostrar")
        ) {

            cerrarModalRecuerdo();

        }

    }
);


/* ==========================================================
   UNA PREGUNTA PARA TI 💌
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


let preguntaRespondida =
    false;


function mostrarRespuestaPregunta(
    botonElegido
) {

    if (!respuestaPregunta) {
        return;
    }


    if (preguntaRespondida) {
        return;
    }


    preguntaRespondida =
        true;


    respuestaPregunta.classList
        .add("mostrar");


    if (botonElegido) {

        botonElegido.textContent =
            "❤️ Sí, quiero";

    }


    if (respuestaSi) {

        respuestaSi.classList
            .add("respondido");

    }


    if (respuestaClaro) {

        respuestaClaro.classList
            .add("respondido");

    }


    /*
        Celebración de corazones.
    */

    lanzarGrupoCorazones(30);


    setTimeout(() => {

        respuestaPregunta
            .scrollIntoView({

                behavior: "smooth",
                block: "center"

            });

    }, 400);

}


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
   COSAS QUE QUIERO VIVIR CONTIGO ✨
========================================================== */

const tarjetasFuturo =
    document.querySelectorAll(
        ".futuro-card"
    );


tarjetasFuturo.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "click",
            () => {

                /*
                    Pequeño efecto al tocar
                    una de las tarjetas.
                */

                tarjeta.style.transform =
                    "scale(0.97)";


                /*
                    Aparecen algunos corazones.
                */

                lanzarGrupoCorazones(5);


                setTimeout(() => {

                    /*
                        Quitamos el estilo en línea
                        para que vuelva a funcionar
                        correctamente el hover.
                    */

                    tarjeta.style.transform =
                        "";

                }, 180);

            }
        );

    }
);


/* ==========================================================
   SORPRESA FINAL ❤️
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

            if (sorpresaFinalAbierta) {
                return;
            }


            sorpresaFinalAbierta =
                true;


            mensajeFinal.classList.add(
                "mostrar"
            );


            botonFinal.textContent =
                "❤️ Siempre contigo";


            lanzarGrupoCorazones(35);


            setTimeout(() => {

                mensajeFinal
                    .scrollIntoView({

                        behavior: "smooth",
                        block: "center"

                    });

            }, 400);

        }
    );

}


/* ==========================================================
   PEQUEÑA INTERACCIÓN EN LAS TARJETAS DE RAZONES
========================================================== */

const tarjetasRazones =
    document.querySelectorAll(
        ".razon-card"
    );


tarjetasRazones.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "click",
            () => {

                tarjeta.style.transform =
                    "scale(0.97)";


                lanzarGrupoCorazones(3);


                setTimeout(() => {

                    tarjeta.style.transform =
                        "";

                }, 170);

            }
        );

    }
);


/* ==========================================================
   ANIMACIONES AL HACER SCROLL
========================================================== */

/*
    Seleccionamos las partes principales
    de la página.

    También están incluidas las tarjetas
    de "Cosas que quiero vivir contigo".
*/

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
        .futuro-contenido,
        .futuro-card,
        .futuro-final,
        .sorpresa-contenido
        `
    );


/*
    Solo utilizamos IntersectionObserver
    si el navegador lo admite.
*/

if (
    "IntersectionObserver"
    in window
) {

    /*
        Preparamos inicialmente
        los elementos.
    */

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

    /*
        Navegadores antiguos:
        simplemente mostramos todo.
    */

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
   BOTÓN DE MÚSICA AL CARGAR
========================================================== */

actualizarBotonMusica();


/* ==========================================================
   MENSAJE PARA COMPROBAR QUE TODO CARGÓ
========================================================== */

console.log(
    "Página para Yoselin cargada correctamente ❤️"
);
