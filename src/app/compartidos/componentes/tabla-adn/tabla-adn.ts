import { Component, Input } from '@angular/core';
import { Adn } from '@core/modelos/Adn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-adn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-adn.html',
  styleUrl: './tabla-adn.css',
})
export class TablaAdn {

  @Input() listadoAdn: Adn[] = [];

  ngOnChanges() {
  console.log('Child received:', this.listadoAdn);
  }


}
