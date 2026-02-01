// services/adn.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adn } from '@core/modelos/Adn';
import { Stats } from '@core/modelos/Stats';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AdnServicio {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerListadoAdn(): Observable<Adn[]> {
    return this.http.get<Adn[]>(this.apiUrl + '/list');
  }

  obtenerStatsAdn(): Observable<Stats> {
    return this.http.get<Stats>(this.apiUrl + '/stats');
  }

  verificarAdn(dna: string[]): Observable<any> {
    return this.http.post(this.apiUrl + '/mutation', { "adnSecuencia":dna });
  }
}