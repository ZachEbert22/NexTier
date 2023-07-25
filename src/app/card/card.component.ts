import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
  
})


export class CardComponent {
  title = 'angular-charts'
  highcharts = Highcharts;
  panelOpenState = false;
  
  lineChart=new Chart({
    chart: {
      type: 'line',
      zooming: {
        mouseWheel: true
      }
      
    },
      title: {
        text: 'Pressure History'
      },
      subtitle : {
        text: 'Last 12 Hours'
     },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
              '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'],
      crosshair: true,
      title: {
        text: 'Time (EST)',
    
     },
     zoomEnabled: true,
     labels: {
      format: '{value} PM',
   },
   },
   yAxis : {
   
   title: {
      text: 'Discharge',
  
   },
   zoomEnabled: true,
   labels: {
    format: '{value} psi',
    
 },
   opposite: false
   },
   tooltip: {
    shared: true
 },
 legend: {
      enabled:false
   },
   
    series: [
      {
        name: 'Discharge',
        data: [9000, 9200, 100, 100, 300, 9500, 9700, 9600, 200, 100, 8500, 8900],
        dashStyle: 'ShortDot',
        tooltip: {
          valueSuffix: 'psi'
       },
       labels: {
        format: '{value} PM',
     },
      } as any
    ]
  });

  line2Chart=new Chart({
    chart: {
      type: 'line2',
      zooming: {
        mouseWheel: true
      }
      
    },
      title: {
        text: 'Pressure History'
      },
      subtitle : {
        text: 'Last 12 Hours'
     },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
              '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'],
      crosshair: true,
      title: {
        text: 'Time (EST)',
    
     },
     zoomEnabled: true,
     labels: {
      format: '{value} PM',
   },
   },
   yAxis : {
   
   title: {
      text: 'Discharge',
  
   },
   zoomEnabled: true,
   labels: {
    format: '{value} psi',
    
 },
   opposite: false
   },
   tooltip: {
    shared: true
 },
 legend: {
      enabled:false
   },
   
    series: [
      {
        name: 'Discharge',
        data: [9000, 9200, 100, 100, 300, 9500, 9700, 9600, 200, 100, 8500, 8900],
        dashStyle: 'ShortDot',
        tooltip: {
          valueSuffix: 'psi'
       },
       labels: {
        format: '{value} PM',
     },
      } as any
    ]
  });

  line3Chart=new Chart({
    chart: {
      type: 'line3',
      zooming: {
        mouseWheel: true
      }
      
    },
      title: {
        text: 'Pressure History'
      },
      subtitle : {
        text: 'Last 12 Hours'
     },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
              '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'],
      crosshair: true,
      title: {
        text: 'Time (EST)',
    
     },
     zoomEnabled: true,
     labels: {
      format: '{value} PM',
   },
   },
   yAxis : {
   
   title: {
      text: 'Discharge',
  
   },
   zoomEnabled: true,
   labels: {
    format: '{value} psi',
    
 },
   opposite: false
   },
   tooltip: {
    shared: true
 },
 legend: {
      enabled:false
   },
   
    series: [
      {
        name: 'Discharge',
        data: [9000, 9200, 100, 100, 300, 9500, 9700, 9600, 200, 100, 8500, 8900],
        dashStyle: 'ShortDot',
        tooltip: {
          valueSuffix: 'psi'
       },
       labels: {
        format: '{value} PM',
     },
      } as any
    ]
  });
  //chart: any;




  pieChart=new Chart({
    chart: {
      type: 'pie'
    },
      title: {
        text: 'Pressure History'
      },
      subtitle : {
        text: 'Last 12 Hours'
     },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
              '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'],
      crosshair: true,
      title: {
        text: 'Time (EST)',
    
     },
     
     labels: {
      format: '{value} PM',
   },
   },
   yAxis : {
   
   title: {
      text: 'Discharge',
  
   },
   labels: {
    format: '{value} psi',
    
 },
   opposite: false
   },
   tooltip: {
    shared: true
 },
 legend: {
      enabled:false
   },
   
    series: [
      {
        name: 'Discharge',
        data: [9000, 9200, 100, 100, 300, 9500, 9700, 9600, 200, 100, 8500, 8900],
        dashStyle: 'ShortDot',
        tooltip: {
          valueSuffix: 'psi'
       },
       labels: {
        format: '{value} PM',
     },
      } as any
    ]
  });
  chart: any;


  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}

