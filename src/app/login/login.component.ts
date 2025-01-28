import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import $ from 'jquery';
import { HeaderComponent } from "../header/header.component";



@Component({
    selector: 'app-home',
    templateUrl: './login.component.html',
    imports:[HeaderComponent]
  })
  export class LoginComponent implements OnInit {
    
    mostrar: boolean = false;
    tarjeta: string | undefined;
    postResp: any;
    contenido: any;
  
    datosLegacy = "";
    respuestaTrjeta = "";
    banorteMovilLite = false;
    banorteMovilLiteAux = false;
    btnActivoBML = true;
    btnAuxiliarCont = 1;
    btnActivoAlertas = true;
    btnActivoLimites = false;

    AlertasActivas = false;
    menuTarifasYCom = false;
    menuTasasyFondos = false;
    menuInfoCondusef = false;
    menuInfoBanxico = false;
    menuLeyTransparencia = false;
    menuAvisos = false;

    ArrayAlertasCliente: any;

    data: any;

    imagenes1: any;
    imagenes2: any;
    json: any;
    json1: any;
    json2: any;
    json3: any;
    json4: any;
    json5: any;

    mostrar2: Boolean = true;
    mostrar3: Boolean = true;
    mostrar4: Boolean = true;
    mostrar5: Boolean = true;
    mostrar6: Boolean = true;
    mostrar7: Boolean = true;

    constructor(
      // private _http: Http,
      private router: Router,
      // private _service: SesionTDDService,
      // private serviceTdd: ResponseWS, 
      private sanitizer: DomSanitizer, 
      // private service: SesionBxiService

    ){

    }

    ngOnInit(): void {
      document.body.style.backgroundImage = "url('/bg-01.png')";
    }
}