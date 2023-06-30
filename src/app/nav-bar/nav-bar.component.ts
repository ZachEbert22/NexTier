import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

imports: [
  HighchartsChartModule,
]
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor() {
  }

  ngOnInit(): void{}
}
