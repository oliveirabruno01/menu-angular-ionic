import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../services/produto.service';

@Component({
  selector: 'app-promocional',
  templateUrl: './promocional.component.html',
  styleUrls: ['./promocional.component.scss'],
})
export class PromocionalComponent implements OnInit {
  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
