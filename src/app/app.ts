import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from "./compartidos/componentes/navbar/navbar";
//import {AdnHomeVista} from "./vistas/adn-home-vista/adn-home-vista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
