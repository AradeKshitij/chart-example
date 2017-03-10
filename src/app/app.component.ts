import { Component, OnInit } from '@angular/core';
import { ChartTypes } from './chart-types.enum';

declare var Chart: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: any;
  labels: string[];
  type:any = ChartTypes.BAR_CHART
  
  constructor() {

  }

  ngOnInit() {
    let othis = this;
    this.init(function () {
      othis.getCanvas();
    }.bind(this));
  }

  init(callback) {
    callback();
  }

  getCanvas() {
    const CANVAS = document.getElementById('myCanvas');
    console.log(CANVAS);
    this.data = {
      labels: [],
      datasets: [
        {
          label: "Successful requests",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#006699",
          borderColor: "#006699",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#006699",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "#006699",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 95, 65, 59, 80, 81, 56, 55, 95, 65, 59, 80, 81, 56, 55, 95],
          spanGaps: false,
        },
        {
          label: "Failed requests",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#fb6206",
          borderColor: "red",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "red",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "red",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [2, 14, 3, 46, 34, 15, 6, 65, 59, 80, 41, 56, 23, 26, 65, 34, 80, 81, 11, 55, 21],
          spanGaps: false,
        }
      ]
    };

    for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
      this.data.labels.push('Workflow ' + i);
    }

    let lineChart = new Chart(CANVAS, {
      type: 'bar',
      data: this.data
    });
  }
}
