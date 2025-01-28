import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-final',
    templateUrl: './final.component.html'
  })
  export class FinalComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
      document.body.style.backgroundImage = "url('/bg-02.png')";
      const this_aux = this; 
      // let navElement = document.getElementById("navBar");
      // navElement.classList.remove("nav-img-banorte-preferente");
      // navElement.classList.add("nav-img-banorte");
      // $('.modal').removeClass('show');
      // setTimeout(() => $('#_modal_please_wait').modal('hide'), 500);
      // $('#_modal_please_wait').modal('hide');
      setTimeout( function() {
        this_aux.router.navigate(['/login']);
      } 
      , 3000);
      
    }
  }  