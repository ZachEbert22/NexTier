import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChildComponent } from './chart-child.component';

describe('ChartChildComponent', () => {
  let component: ChartChildComponent;
  let fixture: ComponentFixture<ChartChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartChildComponent]
    });
    fixture = TestBed.createComponent(ChartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
