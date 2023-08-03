import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgFor} from '@angular/common'
import { CdkDrag, CdkDragHandle, CdkDragDrop, CdkDropList, CdkDropListGroup,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatExpansionModule} from '@angular/material/expansion';

imports: [
  CdkDropListGroup,
  CdkDropList,
  NgFor,
  CdkDrag
]


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

  possible = ['Chicago', 'Los Angeles', 'Phoenix', 'Philadelphia'];

  selected = ['Houston', 'National', 'New York City'];
currentItem: any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  formsChart=new Chart({
    chart: {
      type: 'line',
      zooming: {
        mouseWheel: true
      }
      
    },
      title: {
        text: 'Precipitation'
      },
      subtitle : {
        text: 'Annually by City'
     },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true,
      title: {
        text: 'Months',
    
     },
     zoomEnabled: true,
   },
   yAxis : {
   
   title: {
      text: 'Inches Per Month',
  
   },
   zoomEnabled: true,
   labels: {
    format: '{value} "',
    
 },
   opposite: false
   },
   tooltip: {
    shared: true
 },
 legend: {
      enabled:true
   },
   
    series: [
      {
        name: "National",
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
        name: "Houston",
        type: 'spline',
        //yAxis: 2,
        data: [3.76, 2.97, 3.47, 3.95, 5.01, 6.00, 3.77, 4.84, 4.71, 5.46, 3.87, 4.03],
        marker: {
           enabled: false
        },
        dashStyle: 'ShortDot',
        tooltip: {
           valueSuffix: ' $'
        }
     },
     {
        name: "New York City",
        type: 'spline',
        data: [2.53, 6.87, 4.61, 1.39, 4.15, 4.40, 3.20, 1.76, 2.81, 6.48, 2.03, 5.02],
        tooltip: {
           valueSuffix: ' $'
        },
        marker: {
          enabled: false
        },
     },
     {
      name: "Chicago",
      type: 'spline',
      data: [2, 2, 2.4, 3.7, 4.5, 4.1, 3.7, 4.3, 3.1, 3.3, 2.4, 2.2],
      tooltip: {
         valueSuffix: ' $'
        },
        marker: {
          enabled: false
        },
      },
      {
        name: "Los Angeles",
        type: 'spline',
        data: [3.5, 3.8, 2.3, .9, .4, .1, .1, .1, .2, .5, 1.1, 2.6],
        tooltip: {
          valueSuffix: ' $'
        },
        marker: {
          enabled: false
        },
      }, 
      {
        name: "Phoenix",
        type: 'spline',
        data: [.83, .77, 1.07, .25, .16, .09, .99, .94, .75, .79, .73, .92],
        tooltip: {
          valueSuffix: ' $'
        },
        marker: {
          enabled: false
        },
      },
      {
        name: "Philadelphia",
        type: 'spline',
        data: [3.7, 3, 4.4, 3.8, 3.5, 4.2, 4.9, 5, 4.2, 4.3, 3.3, 4.5],
        tooltip: {
          valueSuffix: ' $'
        },
        marker: {
          enabled: false
        },
      } as any
    ]
  });

  chartData = [
      {
        name: "National",
        data: [3.44, 3.391, 3.392, 2.208, 2.057, 2.458, 2.671, 2.338,
                2.636, 2.420, 3.413, 3.445],
    }, 
    {
        name: "Houston",

        data: [3.76, 2.97, 3.47, 3.95, 5.01, 6.00, 3.77, 4.84, 4.71, 5.46, 3.87, 4.03],
    },
    {
        name: "New York City",
        type: 'spline',
        data: [2.53, 6.87, 4.61, 1.39, 4.15, 4.40, 3.20, 1.76, 2.81, 6.48, 2.03, 5.02],
    },
    {
      name: "Chicago",
      data: [2, 2, 2.4, 3.7, 4.5, 4.1, 3.7, 4.3, 3.1, 3.3, 2.4, 2.2],
      },
      {
        name: "Los Angeles",
        data: [3.5, 3.8, 2.3, .9, .4, .1, .1, .1, .2, .5, 1.1, 2.6],
      }, 
      {
        name: "Phoenix",
        data: [.83, .77, 1.07, .25, .16, .09, .99, .94, .75, .79, .73, .92],
      },
      {
        name: "Philadelphia",
        data: [3.7, 3, 4.4, 3.8, 3.5, 4.2, 4.9, 5, 4.2, 4.3, 3.3, 4.5],
      } as any
  ]

  filteredData = this.chartData.filter(rec => this.selected.includes(rec.name));
}
