import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
