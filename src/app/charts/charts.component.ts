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
        text: 'Gas Prices Per Year'
      },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['2012', '2013', '2014', '2015', '2016', '2017',
              '2018', '2019', '2020', '2021', '2022', '2023'],
      crosshair: true
   },
   yAxis : [
      { // Tertiary yAxis
         gridLineWidth: 0,
         title: {
            text: 'Dollars',
        
         },
         labels: {
            format: '{value} $',
         },
         opposite:true  
      }
   ],
   tooltip: {
      shared: true
   },
   legend: {
      enabled:true
   },
   series : [
      {
         name: 'National',
         type: 'spline',
        // yAxis: 1,
         data: [3.44, 3.391, 3.392, 2.208, 2.057, 2.458, 2.671, 2.338,
                 2.636, 2.420, 3.413, 3.445],

         tooltip: {
            valueSuffix: ' $'
         },
         marker: {
            enabled: false
         },
         dashStyle: 'ShortDot',
      }, 
      {
         name: 'Texas',
         type: 'spline',
         //yAxis: 2,
         data: [3.12, 3.17, 3.13, 2.00, 1.75, 2.156, 2.28, 1.88,
                  2.27, 1.89, 2.89, 2.841],
         marker: {
            enabled: false
         },
         dashStyle: 'ShortDot',
         tooltip: {
            valueSuffix: ' $'
         }
      },
      {
         name: 'California',
         type: 'spline',
         data: [3.75, 3.68, 3.67, 2.596, 2.82, 2.85, 3.27, 3.23, 3.49, 3.26, 4.58, 4.37],
         tooltip: {
            valueSuffix: ' $'
         },
         marker: {
            enabled: false
         },
      }
   ]
  });


  outlierChart=new Chart({
   chart: {
     type: 'outlier'
   },
     title: {
       text: 'Temperature In July'
     },
   credits: {
     enabled: false
   },
   xAxis : {
     categories: ['13th', '14th', '15th', '16th', '17th', '18th',
             '19th', '20th', '21st', '22nd', '23rd', '24th'],
     crosshair: true
  },
  yAxis : [
     { // Tertiary yAxis
        gridLineWidth: 0,
        
        labels: {
           format: '{value} \xB0F',
        },
        opposite:true , 
        title: {
         text: 'Temperature',
     
      },
     }
  ],
  tooltip: {
     shared: true
  },
  legend: {
     enabled:true
  },
  series : [
     {
        name: 'Houston',
        type: 'spline',
       // yAxis: 1,
        data: [98.9, 98.6, 98.9, 100, 100.4, 98.6, 100.4, 98.6,
                99.0, 100.4, 98.6, 96.8],

        tooltip: {
           valueSuffix: ' \xB0F'
        },
        dashStyle: 'ShortDot',
     }, 
     {
        name: 'Seattle',
        type: 'spline',
        //yAxis: 2,
        data: [81, 84, 86, 81, 75, 79, 84, 82,
                 77, 79, 82, 67],
        
        dashStyle: 'ShortDot',
        tooltip: {
           valueSuffix: '\xB0F'
        }
     },
     {
        name: 'Buffalo',
        type: 'spline',
        data: [77, 82, 86, 77, 81, 79, 81, 84, 77, 79, 81, 79],
        tooltip: {
           valueSuffix: '\xB0F'
        }
     }
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
      text: 'World Climate'   
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
  )

}
 
