import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})


export class ChartsComponent {
  title = 'angular-charts'
  highcharts = Highcharts;

  lineChart=new Chart({
    chart: {
      type: 'line'
    },
      title: {
        text: 'Patients'
      },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients Admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]
  });
  chart: any;

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
   
  doubleChart = new Chart({
    chart : {
      type: 'double'
   },
   title : {
      text: 'Source: WorldClimate.com'   
   },   
   subtitle : {
      text: 'Rainforest'
   },
   
   xAxis : {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
   },
   yAxis : [
      { // Primary yAxis
         labels: {
            format: '{value}\xB0C',
            
         },
         title: {
            text: 'Temperature',
        
         },
         opposite: true
      }, 
      { // Secondary yAxis
         title: {
            text: 'Rainfall',
            
         },
         labels: {
            format: '{value} mm',
           
         }
      },
      { // Tertiary yAxis
         gridLineWidth: 0,
         title: {
            text: 'Sea-Level Pressure',
            
         },
         labels: {
            format: '{value} mb',
         },
         opposite:true  
      }
   ],
   tooltip: {
      shared: true
   },
   legend: {
      enabled:false
   },
   series : [
      {
         name: 'Rainfall',
         type: 'spline',
         yAxis: 1,
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                 216.4, 194.1, 95.6, 54.4],
         tooltip: {
            valueSuffix: ' mm'
         }
      }, 
      {
         name: 'Sea-Level Pressure',
         type: 'spline',
         yAxis: 2,
         data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2,
                  1013.1, 1016.9, 1018.2, 1016.7],
         marker: {
            enabled: false
         },
         dashStyle: 'ShortDot',
         tooltip: {
            valueSuffix: ' mb'
         }
      },
      {
         name: 'Temperature',
         type: 'spline',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
         tooltip: {
            valueSuffix: '\xB0C'
         }
      }
   ]
}
  )}
 
