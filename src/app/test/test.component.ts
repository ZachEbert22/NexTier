import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsComponent } from '../charts/charts.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
},
)



export class TestComponent implements OnInit{
  data:any = [];
  title = 'angular-charts'
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  @Input() item = '';


  async ngOnInit(): Promise<void> {
    try{
        
        let chartData = await fetch(
        'https://demo-live-data.highcharts.com/aapl-c.json'
        ).then(Response => Response.json());
        if (chartData)this.data = chartData;
           
    } catch(enabled){
        console.log(enabled);
    }

  }
    // getData() {
    //     throw new Error('Method not implemented.');
    // }
chartOptions: Highcharts.Options = {
    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'Test Graphs'
    },
    chart: {
        type: 'line'
    },
    series: [
        {
            name: 'AAPL',
            type: 'line',
            data: this.data,
            tooltip: {
                valueDecimals: 2
            }
            
        } as any
    ]

}
}
