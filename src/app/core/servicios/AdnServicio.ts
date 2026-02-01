// services/adn.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adn } from '@core/modelos/Adn';

@Injectable({
  providedIn: 'root',
})
export class AdnServicio {

  private apiUrl = "TESTEST"

  constructor(private http: HttpClient) {}

}