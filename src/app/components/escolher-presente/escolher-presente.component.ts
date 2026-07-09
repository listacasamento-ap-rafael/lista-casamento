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
  loading = false;

  presentes: presente[] = [];
  pendingReservations = new Set<number>();
  confirmado = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.recebePresentes();
  }

  recebePresentes(): void {
    this.loading = true;
    this.confirmado = false;
    this.http
      .get<presente[]>(
        'https://lista-casamento-api.listacasamento-ap-rafael.workers.dev'
      ).subscribe({
      next: (resultado: presente[]) => {
        console.log(resultado);
        this.presentes = resultado;
        this.loading = false;
      },
      error: (erro: any) => {
        console.log(erro);
        this.presentes = erro;
        this.loading = false;
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

    this.loading = true;

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
    )
      .subscribe({

        next: () => {

          const gift = this.presentes.find(
            item => item.id === giftId
          );

          if (gift) {
            gift.reserved++;
          }

          this.loading = false;
          this.confirmado = true;
          this.closeModal();

        },

        error: (erro) => {

          console.error(erro);

          this.pendingReservations.delete(giftId);
          this.loading = false;
          this.confirmado = false;

        }

      });

  }

  protected navegaParaHome() {
    this.router.navigate(['/home']).then();
  }

}
