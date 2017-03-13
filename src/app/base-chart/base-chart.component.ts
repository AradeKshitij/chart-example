import { Component, OnInit, Input } from '@angular/core';
import { ChartTypes } from '../chart-types.enum';


@Component({
  selector: 'base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css']
})
export class BaseChartComponent implements OnInit {

  @Input() chartType;
  @Input() dataSet;
  @Input() chartOptions;

  constructor() { }

  ngOnInit() {
    if(this.chartType == ChartTypes.BAR_CHART) {
      console.log('Show bar');
    } else if(this.chartType == ChartTypes.LINE_CHART) {
      console.log('Show line');
    }
  }

}
