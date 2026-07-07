import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-admin-confirm',
  templateUrl: './admin-confirm.component.html',
  styleUrls: ['./admin-confirm.component.scss']
})
export class AdminConfirmComponent implements OnInit {
  reservations: any[] = [];
  password = '';
  authenticated = false;

  constructor(private resService: ReservationService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.resService.getReservations().subscribe(r => this.reservations = r || []);
  }

  login(): void {
    // simples verificação local; o Apps Script também valida token no POST
    if (this.password === 'SENHA_ADMIN_LOCAL') this.authenticated = true;
  }

  confirm(item: any): void {
    const photoLink = prompt('Link da foto de confirmação (Drive)') || '';
    this.resService.confirmReservation(item['ID do presente'], 'Casal', photoLink)
      .subscribe(() => this.load());
  }
}
