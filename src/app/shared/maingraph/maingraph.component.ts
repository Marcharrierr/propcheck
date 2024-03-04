import { Component } from '@angular/core';

@Component({
  selector: 'app-maingraph',
  templateUrl: './maingraph.component.html',
  styleUrls: ['./maingraph.component.css']
})
export class MaingraphComponent {
  data: any;
  options: any;
  total = 30;
  deuda = 20;
  titulo = "Porcentaje global de deuda"
  deudaPorcentaje = Math.round((this.deuda / this.total) * 100);
  constructor() {


    this.data = {
      datasets: [
        {
          data: [this.total, this.deuda],
          backgroundColor: [
            '#8A96AE',
            '#FF0000',
          ]
        }
      ]
    };

    this.options = {
      responsive: true,
      cutout: '85%',
    };
  }
}