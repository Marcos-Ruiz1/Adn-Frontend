import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Stats} from '@core/modelos/Stats';
import {AdnServicio} from '@core/servicios/AdnServicio';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-stats-vista',
  imports: [CommonModule],
  templateUrl: './stats-vista.html',
  styleUrl: './stats-vista.css',
})
export class StatsVista {

  stats!:Stats;

  private adnServicio = inject(AdnServicio);

  // 2. Convert the Observable directly into a Signal.
  // This automatically handles the subscription and unsubscription.
  statsSignal = toSignal(this.adnServicio.obtenerStatsAdn());

  constructor() {
    // No logic needed in constructor or ngOnInit for basic data fetching anymore!
  }

}
