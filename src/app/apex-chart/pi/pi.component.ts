import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts, { exec } from 'apexcharts';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.scss']
})
export class PiComponent implements OnInit {
  companyDetails: any = { name : '', marketShare : Math.ceil(Math.random()*100)};
  options: object = {
    chart: {
      name: "Market Share",
      type: 'donut',
      height: 330
    },
    series: [44, 55, 13, 33, 22],
    labels: ['Apple', 'Google', 'MicroSoft', 'Amazon','Alibaba'],
    plotOptions: {
      pie: {
        size: 150,
        expandOnClick: true,
        offsetY: 0,
        offsetX: 20,
        datalables: {
          minAngleToShowLabel: 12
        },
        donut: {
          size: '45%',
          background: 'white',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            }
          }
        }
      }
    }
  }
  chart: any;

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    this.chart = new ApexCharts(document.querySelector('#chart'), this.options);
    this.chart.render();
  }
   
 randomise(){
    let randomArr = this.chart.w.globals.series.map(() => {
    return Math.floor(Math.random() * (100)) + 1
    })
    this.chart.updateSeries(randomArr);
 }

 removeData() {    
   let arr = this.chart.w.globals.series;
     if(arr.length>1){
      arr.pop()
     }else{
       alert('You can not remove all values')
     }   
    this.chart.updateSeries(arr);
  }

  addData(){
      let seriesArr = this.chart.w.globals.series;
      let seriesLables = this.chart.w.globals.labels;

      seriesArr.push(Math.ceil(Math.random()*1000));
      seriesLables.push(`Company${Math.ceil(Math.random()*1000)}`);
      this.chart.updateOptions({
         series : seriesArr,
         lables : seriesLables
      })
  }

}
