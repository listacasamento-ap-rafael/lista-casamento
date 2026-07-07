import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private api = environment.appsScriptUrl;

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    // GET retorna todas as reservas (Apps Script doGet)
    return this.http.get<any[]>(this.api);
  }

  confirmReservation(id: string, confirmedBy: string, photoLink: string) {
    const body = {
      token: environment.adminToken,
      action: 'confirm',
      id,
      confirmedBy,
      photoLink
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.api, body, { headers });
  }
}
