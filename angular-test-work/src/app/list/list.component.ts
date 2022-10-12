import { Component, OnInit } from '@angular/core';
import { Line } from '../models/line';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listaLineas: Line[] = [
    new Line("Palcos","#","rgb(5, 164, 164)"),
    new Line("VIP","★","rgb(5, 164, 23)"),
    new Line("Vendido","V","rgb(164, 23, 5)"),
    new Line("Palco Individual","I","rgb(164, 151, 5)"),
    new Line("General Segundo Piso","G2","rgb(92, 5, 164)"),
    new Line("En proceso de compra","P","rgb(78, 77, 79)")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
