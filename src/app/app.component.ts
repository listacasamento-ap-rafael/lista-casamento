import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Presentes - Casamento Ana Paula e Rafael';

  constructor(private titleService: Title,) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
