import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcan.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
    countdown('countdown', 'Jun 27, 2023 09:15:00', 'Feliz Cumpleaños!!!');
    scrollTopButton('.scroll-top-btn');
    responsiveMedia('youtube', '(min-width: 768px)', `<a href='https://www.youtube.com/watch?v=V8GrDDzCvYk'>Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/V8GrDDzCvYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmaps', '(min-width: 768px)', `<a href='https://goo.gl/maps/M2oiDF8tewSgTfjk6'>Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406082157!2d2.29229261588788!3d48.85837360866145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses-419!2suy!4v1665685357029!5m2!1ses-419!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '#player');
    slider();
    scrollSpy();
});

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
networkStatus();