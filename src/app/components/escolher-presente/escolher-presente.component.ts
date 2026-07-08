import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface presente {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reserved: number;
  total: number;
}

@Component({
  selector: 'escolher-presente',
  templateUrl: './escolher-presente.component.html',
  styleUrls: ['./escolher-presente.component.scss']
})
export class EscolherPresenteComponent implements OnInit {

  search = '';
  selectedGift?: presente;
  showModal = false;
  showOnlyAvailable = false;

  presentes: presente[] = [];
  pendingReservations = new Set<number>();

  constructor(private http: HttpClient, private router: Router) {
    this.recebePresentes();
  }

  ngOnInit(): void {
    // this.pendingReservations.clear();
  }

  recebePresentes(): void {
    this.http
      .get<presente[]>(
        'https://lista-casamento-api.listacasamento-ap-rafael.workers.dev'
      ).subscribe({
      next: (resultado: any) => {
        console.log(resultado);
        this.presentes = resultado;
      },
      error: (erro: any) => {
        console.log(erro);
        this.presentes = erro;
      },
    })
  }

  get filteredGifts() {
    return this.presentes.filter(gift => {
      const matchesSearch =
        gift.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      const isAvailable =
        !this.showOnlyAvailable ||
        gift.reserved < gift.total;
      return matchesSearch && isAvailable;

    });
  }


  presentear(gift: presente) {
    this.selectedGift = gift;
    this.showModal = true;
  }


  closeModal() {
    this.showModal = false;
    this.selectedGift = undefined;
  }


  confirmGift() {
    if (!this.selectedGift) {
      return;
    }

    const giftId = this.selectedGift.id;
    this.pendingReservations.add(giftId);

    this.http.post(
      "https://lista-casamento-api.listacasamento-ap-rafael.workers.dev",
      {
        id: giftId
      }
    ).subscribe({
      next: (resultado: any) => {
        console.log(resultado);
        this.selectedGift!.reserved++;
        this.closeModal();
      },
      error: (erro: any) => {
        console.log(erro);
        this.selectedGift!.reserved++;
        this.closeModal();
      },
    })

  }

  protected navegaParaHome() {
    this.router.navigate(['/home']).then();
  }

}
