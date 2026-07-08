import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-confirm',
  templateUrl: './admin-confirm.component.html',
  styleUrls: ['./admin-confirm.component.scss']
})
export class AdminConfirmComponent implements OnInit {
  password = '';
  authenticated = false;

  constructor(private resService: ReservationService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    // this.resService.getReservations().subscribe(r => this.reservations = r || []);
  }

  login(): void {
    if (this.password === 'SENHA_ADMIN_LOCAL') {
      this.authenticated = true;
    }
  }

  confirm(item: any): void {
    const photoLink = prompt('Link da foto de confirmação (Drive)') || '';
    this.resService.confirmReservation(item['ID do presente'], 'Casal', photoLink)
      .subscribe(() => this.load());
  }

  protected navegaParaHome() {
    this.router.navigate(['/home']).then();
  }

}
