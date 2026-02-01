import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-vista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-vista.html',
  styleUrl: './home-vista.css'
})
export class HomeVista {
  constructor() {}
}