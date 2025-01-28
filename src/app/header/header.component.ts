import { Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const this_aux = this;
    
     setTimeout(function() {  
         setInterval(function() { 
           this_aux.muestraHora(); 
         }, 1000);
     }, 1000);

    /** 
     * if (localStorage.getItem("okCerrarSesion") === "true") {
      document.getElementById("btnCerrarSesion").style.display === "none";
      
      setTimeout(() => {
        
        const this_aux:any = this;
        this_aux.router.navigate(['/login']);
    
      }, 5000);
      }
    */
    
  }

  prueba(){

  }

//   showModificaCr() {
//     $( ".cdk-visually-hidden" ).css( "margin-top", "0%" );
//     $( ".cdk-overlay-container" ).css( "margin-top", "0%" );
//     $('#modificaCrModal').modal('show');
//     $('#inputCr').val(localStorage.getItem("terminal"));
//   }
  
  muestraMapa() {
//     let urlMapa = localStorage.getItem("urlMapaCorresponsal");
//     let terminal = localStorage.getItem("terminal");
//     if(terminal.length === 4){
//       let urlMapaCr = urlMapa + "/CR" + terminal + ".png";
//       let encUrlMapaCr = encodeURI(urlMapaCr);
//       document.getElementById("frameMapa").setAttribute("src", encUrlMapaCr);
//       $('#mapaModal').modal('show');
//     }
}
   muestraHora() {
     const this_aux = this;
     let d = new Date();
     let h = this_aux.addZero(d.getHours());
     let m = this_aux.addZero(d.getMinutes());
     let horaElement:any = document.querySelector('#hora');
 
     if ( (h >= 7) && (h < 12) ) {
      horaElement.innerHTML = h + ":" + m + " am";

    } else {
      horaElement.innerHTML = h + ":" + m + " pm";
    }

   }

   addZero(i:any) {
     if (i < 10) {
       i = "0" + i;
     }
     return i;
   }

//   consultaUbicacionCR() {
//     $('#_modal_please_wait').modal('show');
//     const this_aux = this;
//     let usuarioAgent = navigator.userAgent;
//     let patron = /@/g;
//     usuarioAgent = usuarioAgent.replace(patron, '');
//     let crSucursal = localStorage.getItem("terminal");

//     const formParameters = {
//         terminal: usuarioAgent,
//         cr: crSucursal,
//         tabla:  "0671"
//     };
//     let resourceRequest = new WLResourceRequest(
//         'adapters/AdapterBanorteSucursApps/resource/consultaUbicacionCR',
//         WLResourceRequest.POST);
//     resourceRequest.setTimeout(10000);
//     resourceRequest.sendFormParameters(formParameters).then(
//         function(response) {
//           let responseJson = response.responseJSON;
//             if (responseJson.Id == "1") {
//               if(responseJson.urlMapaUno !== null && responseJson.urlMapaDos !== null){
//                 localStorage.setItem("latitudCr", responseJson.NumLatitud);
//                 localStorage.setItem("longitudCr", responseJson.NumLongitud);
//                 let UrlMapaCorresponsal = responseJson.urlMapaUno + responseJson.NumLatitud + ',' + responseJson.NumLongitud + responseJson.urlMapaDos;
//                 localStorage.removeItem("UrlMapaCorresponsal");
//                 localStorage.setItem("UrlMapaCorresponsal", UrlMapaCorresponsal);
//                 this_aux.muestraMapa();                //Se cambia por el mapa interactivo descomentando la linea de abajo y borrando esta linea
//                 //windowMapApi(UrlMapaCorresponsal);   //Se descomenta para mostrar la ventana de electron con el mapa interactivo
//                 //this_aux.windowMapApi(UrlMapaCorresponsal);
//               }
//               else{
//                 this_aux.muestraMapa();
//               } 
//             } else {
//                 WLAuthorizationManager.logout('banorteSecurityCheckSa');
//                 localStorage.setItem("latitudCr", "NOK");
//                 console.log("Responde con error consultaUbicacionCR");
//                 this_aux.muestraMapa();
//                 //$('#errorModalUbicacionCR').modal('show');
//             }
//             setTimeout(() => $('#_modal_please_wait').modal('hide'), 500);
//         },
//         function(error) {
//           setTimeout(() => $('#_modal_please_wait').modal('hide'), 500);
//             WLAuthorizationManager.logout('banorteSecurityCheckSa');
//             localStorage.setItem("latitudCr", "NOK");
//             console.log("Responde con error consultaUbicacionCR");
//             this_aux.muestraMapa();
//             //$('#errorModalUbicacionCR').modal('show');
//         });
// }


// iniciarBusquedaCR() {
//   const this_aux = this;
//     let securityCheckName = 'banorteSecurityCheckSa';
//     let userLoginChallengeHandler = WL.Client
//         .createSecurityCheckChallengeHandler(securityCheckName);
//     let usr_ca = 'sucursApps';
//     let tarjet = 'adm-sucusWeb';

//     WLAuthorizationManager.login(securityCheckName, {
//         'usr_ca': usr_ca,
//         'tarjet': tarjet
//     }).then(
//         function() {
//             setTimeout(function() {
//               this_aux.consultaUbicacionCR();
//             }, 500);

//         },
//         function(error) {
//             WLAuthorizationManager.logout('banorteSecurityCheckSa');
//             this_aux.muestraMapa();
//             //$('#errorModalUbicacionCR').modal('show');
//         });
// }

// ayudaClienteLogin(){
//   $('#ayudaClienteLogin').modal('show');
// }

// ayudaClienteConsultaEstadosCuentaUno(){
//   $('#ayudaClienteConsultarEstadosCuentaUno').modal('show');
// }

// ayudaClienteConsultarEstadosCuentaDos(){
//   $('#ayudaClienteConsultarEstadosCuentaDos').modal('show');
// }

// ayudaClienteCobroRemesas(){
//   $('#ayudaClienteCobroRemesas').modal('show');
//   setTimeout(() => $('#flechasayudaClienteCobroRemesas').modal('show'), 200);
//   setTimeout(() => $('div').removeClass('modal-backdrop'), 300);
// }
// cerrarayudaClienteCobroRemesas(){
//   $('#ayudaClienteCobroRemesas').modal('hide');
//   setTimeout(() => $('#flechasayudaClienteCobroRemesas').modal('hide'), 100);
// }

// ayudaClientePagoTarjetaCredito(){
//   $('#ayudaClientePagoTarjetaCredito').modal('show');
//   setTimeout(() => $('#flechasayudaClientePagoTarjetaCredito').modal('show'), 200);
//   setTimeout(() => $('div').removeClass('modal-backdrop'), 300);
// }
// cerrarayudaClientePagoTarjetaCredito(){
//   $('#ayudaClientePagoTarjetaCredito').modal('hide');
//   setTimeout(() => $('#flechasayudaClientePagoTarjetaCredito').modal('hide'), 100);
// }


}
