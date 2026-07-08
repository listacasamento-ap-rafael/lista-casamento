import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  protected navegaPaginaAdmin() {
    this.router.navigate(['/admin']).then();
  }

  protected navegaPaginaListaDePresentes() {
    this.router.navigate(['/escolher-presente']).then();
  }
}
