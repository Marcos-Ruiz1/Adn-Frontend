import { Component, OnInit, inject} from '@angular/core';
import {TablaAdn} from '@components/tabla-adn/tabla-adn';
import {Adn} from '@core/modelos/Adn';
import {AdnServicio} from '@core/servicios/AdnServicio';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-listados-vista',
  standalone: true,
  imports: [TablaAdn],
  templateUrl: './listados-vista.html',
  styleUrl: './listados-vista.css',
})
export class ListadosVista  {

  ListadoAdn: Adn[] = [];

  private adnServicio = inject(AdnServicio);

  // 2. Convert the Observable directly into a Signal.
  // This automatically handles the subscription and unsubscription.
  // 'listadoAdn' will be 'undefined' while loading.
  listadoAdn = toSignal(this.adnServicio.obtenerListadoAdn());

  constructor() {
    // No logic needed in constructor or ngOnInit for basic data fetching anymore!
  }

}
