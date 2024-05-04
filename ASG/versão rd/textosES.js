// Arquivo script.js
document.addEventListener("DOMContentLoaded", function () {
    var novoTexto = `
    
    <div>


    <div id="rd-html-lu7855gv" class="bricks--component bricks--component-html rd-html">
      <!doctype html>
      <html lang="en">

      <head>
        <meta charset="utf-8">
        <meta name="viewort" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
        <title>Copa América - ABSOLUT Sport</title>
        <link rel="stylesheet"
          href="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/03/bootstrap-asb.css">
        <link rel="stylesheet"
          href="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/03/style.css">
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

        <style>
          body {
            background: linear-gradient(180deg, rgb(6, 2, 48) 0%, rgb(0, 0, 0) 100%);
          }


          .divv {
            border-style: dashed;
            border-color: aquamarine;
          }

          .accordion {
            --bs-accordion-bg: #00000000;
            --bs-accordion-btn-color: #fff;
            --bs-accordion-color: #fff;
            --bs-accordion-active-bg: #ffffff1f;
            --bs-accordion-active-color: #fff;
          }

          .ka-btn,
          a {
            text-decoration: unset;
            padding: 15px;
            padding-left: 25px;
            padding-right: 25px;
            background-color: #155f97;
            color: #fff;
            border-radius: 12px;
            box-sizing: border-box;
            filter: drop-shadow(rgba(21, 95, 151, 0.2) 0px 0px 30px);
            line-height: 120%;
            font-size: 0.875rem;
            font-weight: 600;
          }

          .ka-h2 {
            animation: fadeInUp 1ms ease-in-out;
            animation-timeline: view();
            animation-range: cover 0% cover 30%;
          }

          .ka-h1 {
            animation: fadeInUp 1ms ease-in-out;
            animation-timeline: view();
            animation-range: cover 0% cover 30%;
          }

          .ka-anim {
            animation: fadeInUp 1ms ease-in-out;
            animation-timeline: view();
            animation-range: cover 0% cover 30%;
          }

          .tagservico {
            color: #ff1120;
          }


          .ka-h {

            font-size: 43px;
            font-weight: 800;
            line-height: 120%;
            text-align: center;
            animation: fadeInUp 1ms ease-in-out;
            animation-timeline: view();
            animation-range: cover 0% cover 30%;
          }

          .ka-arrow {
            animation: shakeY 6s ease-in-out infinite;
          }

          @keyframes sideanim {
            from {
              opacity: 0;
              translate: 100vw 0;
            }

            to {
              opacity: 1;
              translate: 0 0;
            }

          }

          @keyframes bandeiras {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-100%);
            }
          }

          .bandeirasanim {
            animation: bandeiras 30s linear infinite;
          }

          .bandeirasflag {
            -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)
          }

          @keyframes progressbar {

            0% {
              width: 0vw;
            }

            100% {
              width: 100vw;
            }

          }

          .glass {
            background-color: #000d4698;
            backdrop-filter: blur(10px);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

          }

          .bar {
            height: 1vh;
            padding-bottom: 1vh;
            background-color: #fff;
            animation: progressbar;
            animation-range: cover 19% cover 86%;
            animation-timeline: view();
            z-index: 10000;
          }
        </style>

      </head>

      <body>

        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DH2W6F5" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <div class="bar sticky-top">
        </div>

        <div class="container-fluid sticky-top glass">
          <div class="container py-3">
            <div class="row">
              <div
                class="col-12 col-md-9 col-lg-9 py-2 d-flex justify-content-center justify-content-md-start">
                <img
                  src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/logo-copa-america.png"
                  alt="ABSOLUT Sport" class="img-fluid" style="max-height: 90px;">
              </div>

              <div class="col py-3 d-flex justify-content-center justify-content-md-end align-items-center">
                <a class="btn btn-primary fw-bold flex-shrink-0" href="#preform" role="button">Registro</a>
              </div>

              <div
                class="col d-flex justify-content-center flex-column align-items-md-end align-items-center">
                <ul class="navbar-nav  mb-2 mb-lg-0 text-white justify-content-center">
                  <li class="nav-item dropdown d-flex flex-column align-items-center ">
                    <a class="nav-link dropdown-toggle strong text-white" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <img
                        src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/png/spain.png"
                        alt="" class="img-fluid" style="max-height: 25px;">  ES ($ USD)</a>
                    <ul class="dropdown-menu col-sm-4 col-md-4">
                      <li><a class="dropdown-item" href="https://absolut-sport.com/copaamerica/pt"><span
                            class="strong">
                            <img
                              src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/png/brazil.png"
                              alt="" class="img-fluid" style="max-height: 30px;">  PT (R$ BRL)</span></a></li>
                      <li><a class="dropdown-item" href="https://absolut-sport.com/copaamerica"><span
                            class="strong">
                            <img
                              src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/png/united-states-of-america.png"
                              alt="" class="img-fluid" style="max-height: 30px;">  EN ($ USD)</span></a></li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>



        <img
          src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/bgnovo-jogadores.png"
          alt="" style="opacity: .2; position: absolute; z-index: -5; width: 100%;"
          class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex d-xxl-flex">

        <img
          src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/bgnovo-jogadores-mobile.png"
          alt="" style="opacity: .2; position: absolute; z-index: -5; width: 100%;"
          class="d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none">

        <div class="container flex-grow-0 d-flex justify-content-center pt-5">
          <h3
            class=" text-center text-white animate__fadeInUp animate__animated animate__delay-2s animate__slow">
            Official
            Fan Travel Package Partner</h3>
        </div>




        <div class="container text-center text-white d-flex justify-content-center overflow-hidden">

          <div class="row">
            <div
              class="d-flex flex-column justify-content-center col-12 col-sm-12 col-lg-4 order-3 order-lg-0 order-sm-2">
              <h1 class="text-center text-sm-center text-md-center text-lg-start text-white fs-1 fw-bold">
                Compra tu paquete ahora<br class="d-flex d-lg-none d-sm-none d-md-flex d-xl-flex d-xxl-flex">
                <span style="color: #ff1120;">CONMEBOL Copa América 2024™ </span> en Estados Unidos</p>
              </h1>
              <a class="btn btn-primary my-4 fw-bold btn-lg" href="#preform" role="button">Registro</a>
            </div>
            <div class="col-12 col-lg-4 col-sm-12 order-1 order-lg-1 position-relative">
              <img
                src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/taca-copa-america2.png"
                alt="" id="ca-cup" class="img-fluid animate__animated animate__fadeInUp animate__slow"
                style="max-height: 60vh; ">
              <img
                src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/Particle-front-sudamericana.gif"
                alt=""
                class="position-absolute translate-middle top-50 start-50 animate__animated animate__fadeInUp animate__slow"
                style="max-width: 90vh; margin-top: 9vh;">
              <img
                src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/Particle-back-sudamericana.gif"
                alt=""
                class="position-absolute translate-middle top-50 start-50 animate__animated animate__fadeInUp animate__slow"
                style="max-width: 90vh; margin-top: 9vh; z-index: -2;">
            </div>
            <div class="d-none d-lg-flex d-sm-none col col-sm-12 col-xs-12 col-lg-4 order-2"
              style="opacity: 0;">
              <img
                src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/taca-copa-america2.png"
                alt="" id="ca-cup" class="img-fluid animate__animated animate__fadeInUp animate__slow"
                style="max-height: 60vh; ">
            </div>

          </div>

        </div>


        <div class="container bandeirasflag d-flex" id="preform" style="overflow: hidden;">
          <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/bandeiras01.png"
            alt="" class="img-fluid bandeirasanim px-1">
          <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/bandeiras01.png"
            alt="" class="img-fluid bandeirasanim px-1">
          <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/bandeiras01.png"
            alt="" class="img-fluid bandeirasanim px-1">
        </div>

        <!-- form -->
        <div class="py-5">
          <div class="container py-5 rounded" id="form">
            <div class="row d-flex justify-content-center">
              <div id="formrd"
                class="col-12 col-lg-4 rounded order-2 order-lg-2 d-flex flex-grow-0 p-0 m-0 justify-content-center align-items-center ">
                <div role="main" id="copa-america-es-0a6b3b7b7a435a73394b"></div>
                <script type="text/javascript"
                  src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
                <script
                  type="text/javascript"> new RDStationForms('copa-america-es-0a6b3b7b7a435a73394b', 'UA-205113243-1').createForm();</script>
              </div>
              <div
                class="rounded col-12 col-lg-6 d-flex align-items-center py-3 order-lg-1 order-1 d-flex flex-column justify-content-center">
                <h2 class="fw-bold text-white text-center text-lg-start">

                  Tu primer paso para disfrutar de una experiencia única es activar tu registro. ¡De esta
                  manera
                  recibirás todas las novedades sobre los paquetes de primera mano!

                </h2>
                <p class="fw-medium fs-4 text-white text-center text-lg-start py-4">
                  Ofrecemos paquetes completos para tomar la gran decisión en un momentoinolvidable, con
                  servicios
                  bajo demanda. Pronto tendrás acceso a todas estas experiencias premium.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- form -->






        <div class=" d-flex flex-column align-items-center justify-content-center container py-5">
          <p class="tagservico fs-5 fw-bold ka-anim">
            Paquetes con entradas oficiales
          </p>

          <p class="fs-1 text-white fw-bold text-center text-center ka-anim">
            Disfruta cada momento de la CONMEBOL Copa América 2024™ con total seguridad y confiabilidad.

          </p>
          <p
            class="fs-6 text-white fw-medium text-center ka-anim col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            ¡Puede estar seguro de que con nosotros tendrá la garantía de comprar boletos legítimos para
            aprovecharlos
            al máximo! Elige tu asiento entre nuestras categorías con una vista privilegiada y siente la
            emoción de los
            estadios más icónicos de Estados Unidos.

          </p>

          <a class="btn btn-primary my-4 fw-bold btn-lg" href="#preform" role="button">Registro</a>
        </div>


        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 py-5 order-1 order-md-0"
              style="background-color: rgb(247, 247, 247);">
              <div class="container col-12 col-lg-8">
                <p class="tagservico fw-bold ka-anim">
                  Alojamiento
                </p>
                <h1 class="fw-bold py-2 ka-anim" style="color: #000d46;">
                  Las mejores opciones de hoteles seleccionadas especialmente para ti
                </h1>
                <p class="pb-2 fw-medium ka-anim">
                  Con la Agencia Oficial podrás garantizar una estancia en los mejores hoteles de Estados
                  Unidos.
                  Elige la opción que mejor se adapte a tu viaje y disfruta de todo lo que las ciudades
                  anfitrionas tienen
                  para ofrecerte.
                </p>
                <a class="btn btn-primary my-4 fw-bold btn-lg ka-anim" href="#preform"
                  role="button">Registro</a>

              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6  p-0 m-0 order-0 order-md-1"
              style="background-image: url(https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/MIA_916_original.jpg); background-size: cover; background-position: center; min-height: 300px;">
            </div>
          </div>
        </div>




        <div class="container d-flex justify-content-center align-items-center py-5">
          <div class="row col-8 align-items-start">
            <div
              class="ka-anim col-12 col-sm-12 col-md- col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-center align-items-center">
              <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/ft02.png"
                alt="" class="img-fluid">
              <h3 class="text-white py-3">Seguridad</h3>
              <p class="fw-medium text-center text-white">
                Disfruta de tu experiencia sabiendo que estás comprando con una agencia oficial.
              </p>
            </div>
            <div
              class="ka-anim col-12 col-sm-12 col-md- col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-center align-items-center">
              <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/ft01.png"
                alt="" class="img-fluid">
              <h3 class="text-white py-3">
                Comodidad
              </h3>
              <p class="fw-medium text-center text-white">
                Tenga la mejor estructura disponible para su comodidad.

              </p>
            </div>
            <div
              class="ka-anim col-12 col-sm-12 col-md- col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column justify-content-center align-items-center">
              <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/ft03.png"
                alt="" class="img-fluid">
              <h3 class="text-white py-3">Exclusividad</h3>
              <p class="fw-medium text-center text-white">Disfruta de servicios solo para quienes son socios
                oficiales
                de CONMEBOL.</p>
            </div>
          </div>
        </div>


        <div class="container pt-5">
          <h1 class="fw-bold text-white">
            Preguntas frecuentes:
          </h1>
        </div>

        <div class="container py-5">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#Pergunta1" aria-expanded="true" aria-controls="Pergunta1">
                  ¿Cómo recibo mis entradas para los partidos de la Copa América?
              </h2>
              <div id="Pergunta1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>Todas las entradas para la CONMEBOL COPA AMÉRICA 2024</strong>se entregarán como
                  entradas digitales. Los boletos digitales se enviarán a una aplicación dedicada cuando se
                  acerque el día del juego.
                  <br><br>

                  Todos los fanáticos recibirán instrucciones por correo electrónico cuando se envíen sus
                  boletos
                  digitales. Tenga en cuenta que la distribución de entradas se realiza de forma paulatina.
                  Esto
                  significa que no todos los billetes se envían al mismo tiempo. Además, el orden de
                  distribución
                  no se basa en el momento de la compra.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Si reservo dos o más entradas, ¿se garantizarán juntas o una al lado de la otra en el
                  estadio?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Si reservas dos entradas, te garantizamos que estarán juntas en el estadio. Sin embargo, si
                  su
                  compra incluye más de dos boletos, existe la posibilidad de que algunos asientos sean
                  diferentes.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta3" aria-expanded="false" aria-controls="pergunta3">
                  ¿Ofrecen vuelos al evento?
                </button>
              </h2>
              <div id="pergunta3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  No ofrecemos vuelos para la compra de paquetes en línea.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta4" aria-expanded="false" aria-controls="pergunta4">
                  ¿Qué ofrecemos en nuestros paquetes completos?
                </button>
              </h2>
              <div id="pergunta4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Ofrecemos alojamiento, entradas y servicios de hospitalidad.
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--FAQ-->

        <footer class="container-fluid bg-black pt-5 mt-5 mb-0 ">
          <div class="container py-3">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 container">
              <img src="https://libertadores.absolut-sport.com.br/wp-content/uploads/2024/Images/Asset-2.png"
                class="img-fluid" alt="">
            </div>
          </div>
          <div
            class="container d-flex flex-grow-1 text-center justify-content-center align-items-center py-4 text-white">
            <p>
              © ABSOLUT Sport. Todos os direitos reservados.
            </p>
          </div>

        </footer>










        <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous">
          </script>

      </body>

      </html>
    </div>

  </div>
  
  `;
    document.getElementById("rd-column-lu782jw0").innerHTML = novoTexto;
});


document.addEventListener("DOMContentLoaded", function () {
  var conteudoHTML = `
  <div role="main" id="copa-america-es-0a6b3b7b7a435a73394b"></div>
  `;

  document.getElementById("formrd").innerHTML = conteudoHTML;

  // Função para carregar dinamicamente o script e criar o formulário
  function carregarScriptEForm() {
      var script = document.createElement('script');
      script.onload = function () {
        new RDStationForms('copa-america-es-0a6b3b7b7a435a73394b', 'UA-205113243-1').createForm();
      };
      script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js?v=4";
      document.body.appendChild(script);
  }

  carregarScriptEForm();
});

document.addEventListener("DOMContentLoaded", function () {
  var conteudoHTML = `
  <div role="main" id="copa-america-es-0a6b3b7b7a435a73394b"></div>
  `;

  document.getElementById("formrd").innerHTML = conteudoHTML;

  // Função para carregar dinamicamente o script do Bootstrap
  function carregarBootstrap() {
      var script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
      script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
      script.crossOrigin = "anonymous";
      script.onload = function () {
          // Código para executar após o carregamento do Bootstrap, se necessário
          console.log("Bootstrap carregado com sucesso!");
      };
      document.body.appendChild(script);
  }

  // Chamar a função para carregar o Bootstrap
  carregarBootstrap();
});



function reloadOnce() {
  // Verifica se a página já foi recarregada
  if (sessionStorage.getItem('hasReloaded') !== 'true') {
    // Define que a página foi recarregada
    sessionStorage.setItem('hasReloaded', 'true');
    // Recarrega a página
    location.reload(true);
  }
}

// Chama a função quando a página é carregada
window.onload = reloadOnce;

// Acessa o elemento <option> específico
var optionElement = document.querySelector("#rd-select_field-WMKPab-nLzZ1eUJt42dHLA > option:nth-child(1)");
// Define o valor da <option> para "Select"
optionElement.value = "Select";