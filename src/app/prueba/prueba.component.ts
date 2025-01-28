import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { Router } from "@angular/router";

@Component({
    selector: 'app-prubea',
    templateUrl: './prueba.component.html',
    styleUrl:'./prueba.component.css',
    imports: [HeaderComponent]
  })
  export class PruebaComponent implements OnInit {
    irMenuTDC() {
        this.router.navigate(['/menuTDC']);
    }

    NumCuenta: string='';
    Email: string ='';
    Celular: string ='';

    saldoDispoinible: string ='';
    SaldoActual: string ='';
    NumeroTarjeta: string ='';
    fechaMesActualFin: any;
    dia: any;
    mes: any;
    anio: any;
    hora: any;
numCuenta_show: any;
EmailCliente: any;


    ngOnInit(): void {


        const this_aux = this;
      this_aux.hora = (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()).toString();
      this_aux.dia = new Date().getUTCDate();
      this_aux.mes = (new Date().getUTCMonth() + 1);
      this_aux.anio = new Date().getFullYear();

      if (this_aux.mes < 10) {
        this_aux.mes = "0" + this_aux.mes;
      }
      if (this_aux.dia < 10) {
        this_aux.dia = "0" + this_aux.dia;
      }
      this_aux.fechaMesActualFin = (this_aux.dia + "/" + this_aux.mes + "/" + this_aux.anio).toString();

    }

    constructor(private router: Router) {
    
        
        // setTimeout(() => $('#_modal_please_wait').modal('hide'), 3000);
    
    }
    
}