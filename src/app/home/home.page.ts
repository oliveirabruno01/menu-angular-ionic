import { Component } from '@angular/core';
import { DataService, CategoriaObject } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getCategoriasList(): CategoriaObject[] {
    return this.data.getCategoriasList();
  }

}
