var USR;
var KEY;
var AMBIENTES = ["", ""];
var text;
var cn;
const alphaDat = ['%','#','C','D','E','F',
                  'N','S','A','6','2','K',
                  'M','4','O','P','Q','R',
                  '&','T','U','/','=','X',
                  '?','W','A','B','Y','I','G'
                  ];

$(document).ready(function () {
    $('#modal_please_wait').modal('show');

    if (localStorage.getItem("Ambientes")) {
        AMBIENTES = localStorage.getItem("Ambientes").split(",");
        // console.log(localStorage.getItem("Ambientes"))

        getContextRoot();

    } else if (localStorage.getItem("Ambientes") == "") {
        // console.log("no hay mas contextos")
        $.getJSON('assets/js/cfg.json', function (datos) {
            sourcePilot = datos.c3p0;
            yrced = decry();
            var ambientes = JSON.parse(yrced);
            var uno = ambientes.PRIMERA;
            var dos = cambiar(ambientes.SEGUNDA);
            AMBIENTES[0] = "/"+uno;
            AMBIENTES[1] = "/"+dos;
        });

        getContextRoot();
    } else {
        
        $.getJSON('assets/js/cfg.json', function (datos) {
            sourcePilot = datos.c3p0;
            yrced = decry();
            var ambientes = JSON.parse(yrced);
            var uno = ambientes.PRIMERA;
            var dos = cambiar(ambientes.SEGUNDA);
            AMBIENTES[0] = "/"+uno;
            AMBIENTES[1] = "/"+dos;  
        });

        getContextRoot();
    }
});


function getContextRoot() {

    setTimeout(function () {

        var wlInitOptions = {
            mfpContextRoot: AMBIENTES[0],
            // mfpContextRoot: '/mfp',
            applicationId: 'com.banorte.sucursapps',
        };

        if (localStorage.getItem("AmbienteOK") !== null) {
            wlInitOptions.mfpContextRoot = localStorage.getItem("AmbienteOK");
        }

        WL.Client.init(wlInitOptions).then(function () {
            console.info("VERSION: 3.2.6 piloto 25/06/2024");

            if (localStorage.getItem("AmbienteOK") === null) {
                var usuarioAgent = navigator.userAgent;
                var patron = /@/g;
                usuarioAgent = usuarioAgent.replace(patron, '');

                var formParameters = {
                    terminal: usuarioAgent
                };
                var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteSucursApps2/resource/checkServerMejoras', WLResourceRequest.POST);
                resourceRequest.setTimeout(1000);
                resourceRequest.sendFormParameters(formParameters).then(
                    function (response) {
                        // console.log(response);
                        // borra datos TDD en localstorage
                        this.text = response.responseText;
                        var responseJson = response.responseJSON;
                        localStorage.setItem("TimeOutIni", responseJson.TimeOut);
                        localStorage.setItem("TimeOut", responseJson.TimeOut);
                        localStorage.setItem("AmbienteOK", wlInitOptions.mfpContextRoot);
                        localStorage.setItem("terminal", responseJson.CR);
                        localStorage.setItem("botonBxi", responseJson.botonBxi);
                        localStorage.setItem("tiempoVistaSaldo", responseJson.tiempoVistaSaldo);
                        localStorage.setItem("botonMtoBeneficiario", responseJson.botonMtoBeneficiario);
                        localStorage.setItem("botonBanorteMovil", responseJson.botonBanorteMovil);
                        localStorage.setItem("botonBanorteMovilTdc", responseJson.botonBanorteMovilTdc);
                        localStorage.setItem("showBeneficiarioTarjeta", responseJson.showBeneficiarioTarjeta);
                        localStorage.setItem("listaURLPdf", responseJson.repoUrlInfoReg);
                        localStorage.setItem("botonLimitesTdc", responseJson.botonParametrosTdc);
                        localStorage.setItem("urlMapaCorresponsal", responseJson.urlMapaCorresponsal);
                        localStorage.setItem("switchOrdenPagoDispersa", responseJson.switchOrdenPagoDispersa);
                        localStorage.setItem("Carrusel", JSON.stringify(responseJson.Carrusel));
                        console.log("Index: " + JSON.stringify(responseJson.Carrusel));
                        $('#modal_please_wait').modal('hide');
                    },
                    function (error) {
                        // console.log(error);
                        AMBIENTES.shift();
                        localStorage.setItem("Ambientes", AMBIENTES);
                        WL.Client.reloadApp();
                    });
            }
        }, function (error) {
            // console.log(error);
        });

    }, 1000)
}

function decry() {
    let datPilot;
    let shift = Number(10);
    shift = (alphaDat.length - shift) %  alphaDat.length;
    datPilot = [... sourcePilot ].map(char => encry(char, shift)).join('');
    datPilot = datPilot.replace(/\'/g,'"');
    console.log(datPilot);
    return datPilot;
}
    
function encry(char, shift) {
    let include = alphaDat.includes(char);
    if (include){ 
    let position = alphaDat.indexOf(char);
    let newPosition = (position+shift) % alphaDat.length;
    return alphaDat[newPosition];
    }else  return char;
}  

function cambiar (cadena){

        let resultado = '';
    
        for(let i = 0; i < cadena.length; i++){
            var support = cadena.length - 3 ;
            if(i >= support){
                var letter = cadena[i].toLowerCase();
                resultado = resultado + letter;
            }else{
                var letter = cadena[i];
                resultado = resultado + letter;
            } 
        }
    
        return resultado;
}