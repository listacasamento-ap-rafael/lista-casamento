import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {
  gifts: any[] = [];
  reservations: any[] = [];

  constructor(private http: HttpClient, private resService: ReservationService) {}

  ngOnInit() {
    this.loadGifts();
    this.loadReservations();
  }

  loadGifts() {
    this.http.get<any[]>('/assets/gifts.json').subscribe(g => this.gifts = g);
  }

  loadReservations() {
    this.resService.getReservations().subscribe(r => this.reservations = r || []);
  }

  getStatus(giftId: string) {
    const found = this.reservations.find(x => x['ID do presente'] === giftId);
    if (!found) return 'available';
    if (found['Status'] && found['Status'].toLowerCase() === 'confirmed') return 'confirmed';
    return 'reserved';
  }
}
