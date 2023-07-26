import { Component } from '@angular/core';
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
  todo = ['Chicago', 'Los Angeles', 'Phoenix', 'Philadelphia'];

  done = ['Houston', 'National', 'New York City'];

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
        name: this.done[0],
        type: 'spline',
       // yAxis: 1,
        data: [3.44, 3.391, 3.392, 2.208, 2.057, 2.458, 2.671, 2.338,
                2.636, 2.420, 3.413, 3.445],

        tooltip: {
           valueSuffix: ' $'
        },
        dashStyle: 'ShortDot',
     }, 
     {
        name: this.done[1],
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
        name: this.done[2],
        type: 'spline',
        data: [3.75, 3.68, 3.67, 2.596, 2.82, 2.85, 3.27, 3.23, 3.49, 3.26, 4.58, 4.37],
        tooltip: {
           valueSuffix: ' $'
        }
     } as any
    ]
  });


}
