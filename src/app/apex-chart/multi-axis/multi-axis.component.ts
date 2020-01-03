import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-multi-axis',
  templateUrl: './multi-axis.component.html',
  styleUrls: ['./multi-axis.component.scss']
})
export class MultiAxisComponent implements OnInit {
  exponentialExpansion: any[] = [];
  xAxisCategory: any[] = [];
  options : object = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0","#ff4","#3f8"],
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Series B",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      },
      {
        name: "Series C",
        data: [12,1.2,40,100,120,32,0.1]
      },
      {
        name: "Exponent Nature",
        data: this.exponentialExpansion
      }
    ],
    stroke: {
      curve: 'smooth',
      width: [4, 4, 5, 7]
    },
    markers: {
      size: 2
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: this.xAxisCategory
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF6"
        },
        labels: {
          style: {
            color: "#000"
          }
        },
        title: {
          text: "Series A"
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
          color: "#000"
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            color: "#247BA0"
          }
        },
        title: {
          text: "Series B"
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: true
      }
    },
    legend: {
      horizontalAlign: "right",
      offsetX: 40
    }
  };

  constructor() { }

  ngOnInit() {
    this.showChart();
    this.exponent();
    this.xAxis();
    console.log(this.exponentialExpansion)
  }

  showChart() {
    let chart = new ApexCharts(document.querySelector('#chart'), this.options);
    chart.render();
  }

  exponent(){
       for(let i=0;i<20;i++){
           let e = Math.round(2.71**i);
           this.exponentialExpansion.push(e);
       }
  }

  xAxis(){
        for(let i=0;i<50;i++){
           let xValue = i;
           this.xAxisCategory.push(xValue);
        }
  }

}
