import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexChart from 'apexcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  options = {
    chart: {
      type: 'line',
      height: 350,
    },
    series: [{
      name: 'sale',
      data: [30, 140, 45, 250, 9, 91, 125]
    }],
    stroke: {
      curve: 'smooth',
      dashArray: 3
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  chart:any;

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    this.chart = new ApexChart(document.querySelector('#chart'), this.options);
    this.chart.render();
  }

  updateData(){
    this.options.series[0].data.map(() => Math.floor(Math.random()*(100))+1);
    this.chart.updateSeries([{    
        name: 'sale',
        data: this.options.series[0].data
    }]); 
  }

}
