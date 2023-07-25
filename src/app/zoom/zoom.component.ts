import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatExpansionModule} from '@angular/material/expansion';
import HC_exporting from 'highcharts/modules/exporting';
import HC_map from "highcharts/modules/map"
import HC_stock from 'highcharts/modules/stock';
import HC_accessibility from 'highcharts/modules/accessibility'; 


import HC_stockTools from 'highcharts/modules/stock-tools'; HC_stockTools(Highcharts);
//HC_map(Highcharts);
HC_stock(Highcharts);
HC_exporting(Highcharts);
//HC_accessibility(Highcharts);

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})


export class ZoomComponent {
  title = 'angular-charts'
  highcharts = Highcharts;
  panelOpenState = false;
  lineChart=new Chart({
    chart: {
      type: 'line',
      zooming: {
        type: 'xy'
        
      }
      
    },
      title: {
        text: 'Flow Rate'
        
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
     min: 0,
     labels: {
      format: '{value} PM',
   },
   },
   yAxis : {
   
   title: {
      text: 'Barrels/Minute',
  
   },
   zoomEnabled: true,
     min: 0,
   labels: {
    format: '{value} bpm',
    
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
        data: [69, 92, 100, 110, 130, 95, 97, 6, 120, 110, 85, 89],
        dashStyle: 'ShortDot',
        tooltip: {
          valueSuffix: ' bpm'
       },
       labels: {
        format: '{value} PM',
     },
      } as any
    ]
  });


  lineChart2=new Chart({
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


  lineChart3=new Chart({
    chart: {
      type: 'line',
      zooming: {
        mouseWheel: true
      }
      
    },
      title: {
        text: 'Concentration'
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
      text: 'Pounds Per Gallon',
  
   },
   zoomEnabled: true,
   labels: {
    format: '{value} lbs/gal',
    
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
        name: 'Weight',
        data: [11.9, 12.4, 12.1, 12.9, 13.1, 13.0, 11.8, 12.5, 12.4, 12.6, 12.7, 12.8],
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
}

Highcharts.setOptions({
  title: {
    style: {
      color: 'Green'
      
    }
  },
  chart: {
    
    zooming: {
      type: 'xy'
    },
  }
})


const chartOptions = {
  mapNavigation: {
    enableMouseWheelZoom: true
  },
  zooming: {
    mouseWheel: true
  },
  
}