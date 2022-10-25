import { Component, Input, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';

@Component({
  selector: 'app-ingridient',
  templateUrl: './ingridient.component.html',
  styleUrls: ['./ingridient.component.css'],
})
export class IngridientComponent implements OnInit {
  // ingrident?: Ingridient;
  @Input() ingrident!: Ingridient;
  constructor() {}

  ngOnInit(): void {}
}
