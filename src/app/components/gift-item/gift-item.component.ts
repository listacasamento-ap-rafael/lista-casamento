import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gift-item',
  templateUrl: './gift-item.component.html',
  styleUrls: ['./gift-item.component.scss']
})
export class GiftItemComponent {
  @Input() gift: any = {};
  @Input() status = '';

  getPrefillUrl() {
    const base = environment.googleFormBase;
    const e = environment.formEntryIds;
    const params = new URLSearchParams();
    params.set('usp', 'pp_url');
    params.set(e.giftId, this.gift.id);
    // deixar nome e contato em branco para o convidado preencher
    return `${base}?${params.toString()}`;
  }
}
