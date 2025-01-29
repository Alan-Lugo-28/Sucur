import { Routes } from '@angular/router';
import { LoginComponent } from '/home/champy/Escritorio/sucur/src/app/login/login.component';
import { FinalComponent } from './final/final.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BotonesComponent } from './botones/botones.component';
import { CompraTiempoAireComponent } from './tdd/compra-tiempo-aire/compra-tiempo-aire.component';

export const routes: Routes = [
    { path: 'https://sucur.onrender.com/login', component: LoginComponent },
    { path: 'final', component: FinalComponent },
    {path: 'prueba', component: PruebaComponent},
    {path: 'botones', component: BotonesComponent},
    {path: 'compra', component: CompraTiempoAireComponent},
    { path: '**', component: LoginComponent }
];
